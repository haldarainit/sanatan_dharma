import { Resend } from 'resend'
import { collections, type OutboundEmail } from '@/lib/db/collections'
import { configured, env, required } from '@/lib/env'

/* Sending, with a record of every attempt.

   The row is written to emailOutbox *before* delivery is tried. On a
   serverless host the function can be killed mid-flight, and a fire-and-
   forget send would then have no trace: the donor gets nothing, the office
   never learns, and there is nothing to retry. With the row first, a failed
   send is a row marked failed, which the retry cron picks up.

   Nothing here is fatal to the caller. A membership application must not be
   rejected because an acknowledgement email bounced. */

export type Attachment = { filename: string; content: Buffer }

export type SendInput = {
  to: string
  subject: string
  html: string
  text?: string
  template: string
  payload?: Record<string, unknown>
  attachments?: Attachment[]
  /** the record this email is about, so admin can see what was sent */
  about?: { type: string; id: string }
}

export type SendResult = { queued: boolean; sent: boolean; id?: string; error?: string }

const MAX_ATTEMPTS = 6
/* 1m, 5m, 30m, 2h, 12h — long enough to ride out a provider outage */
const BACKOFF_MINUTES = [1, 5, 30, 120, 720]

export function nextAttemptAt(attempts: number): Date {
  const minutes = BACKOFF_MINUTES[Math.min(attempts, BACKOFF_MINUTES.length - 1)]
  return new Date(Date.now() + minutes * 60_000)
}

async function deliver(input: SendInput): Promise<{ id?: string; error?: string }> {
  try {
    const resend = new Resend(required('RESEND_API_KEY'))
    const { data, error } = await resend.emails.send({
      from: env.EMAIL_FROM,
      to: [input.to],
      replyTo: env.EMAIL_REPLY_TO || undefined,
      subject: input.subject,
      html: input.html,
      text: input.text,
      attachments: input.attachments?.map((a) => ({
        filename: a.filename,
        content: a.content,
      })),
    })
    if (error) return { error: error.message || String(error) }
    return { id: data?.id }
  } catch (err) {
    return { error: (err as Error).message }
  }
}

/**
 * Queue and attempt one email.
 *
 * Returns rather than throws: the caller's own work has already succeeded and
 * must not be undone by a mail problem.
 */
export async function sendEmail(input: SendInput): Promise<SendResult> {
  const outbox = await collections.emailOutbox()
  const now = new Date()

  const row: OutboundEmail = {
    to: input.to,
    template: input.template,
    /* the rendered body is stored, not just the inputs: a retry days later
       must send exactly what was composed at the time, and re-rendering it
       from a template that has since changed would send something else */
    payload: {
      subject: input.subject,
      html: input.html,
      text: input.text,
      ...(input.payload ?? {}),
      about: input.about,
    },
    attachments: [],
    status: 'queued',
    attempts: 0,
    createdAt: now,
  }
  const { insertedId } = await outbox.insertOne(row)

  if (!configured.email()) {
    /* No key yet. The row stays queued and the retry cron will deliver it the
       moment one is configured — nothing is silently dropped. */
    await outbox.updateOne(
      { _id: insertedId },
      { $set: { lastError: 'RESEND_API_KEY not set', nextAttemptAt: nextAttemptAt(0) } }
    )
    return { queued: true, sent: false, error: 'email not configured' }
  }

  const result = await deliver(input)

  if (result.error) {
    await outbox.updateOne(
      { _id: insertedId },
      {
        $set: {
          status: 'failed',
          lastError: result.error.slice(0, 300),
          nextAttemptAt: nextAttemptAt(0),
        },
        $inc: { attempts: 1 },
      }
    )
    console.error(`[email] ${input.template} to ${input.to} failed: ${result.error}`)
    return { queued: true, sent: false, error: result.error }
  }

  await outbox.updateOne(
    { _id: insertedId },
    { $set: { status: 'sent', providerId: result.id, sentAt: new Date() }, $inc: { attempts: 1 } }
  )
  return { queued: true, sent: true, id: result.id }
}

/** Called by the retry cron; exported so it can be tested. */
export async function retryQueued(limit = 25): Promise<{ tried: number; sent: number }> {
  const outbox = await collections.emailOutbox()
  const due = await outbox
    .find({
      status: { $in: ['queued', 'failed'] },
      attempts: { $lt: MAX_ATTEMPTS },
      $or: [{ nextAttemptAt: { $lte: new Date() } }, { nextAttemptAt: { $exists: false } }],
    })
    .limit(limit)
    .toArray()

  let sent = 0
  for (const row of due) {
    const payload = row.payload as { subject?: string; html?: string; text?: string }
    if (!payload.html) {
      /* nothing to resend from — mark it rather than retrying forever */
      await outbox.updateOne({ _id: row._id }, { $set: { status: 'dead', lastError: 'no body stored' } })
      continue
    }
    const result = await deliver({
      to: row.to,
      subject: payload.subject ?? '',
      html: payload.html,
      text: payload.text,
      template: row.template,
    })
    if (result.error) {
      const attempts = row.attempts + 1
      await outbox.updateOne(
        { _id: row._id },
        {
          $set: {
            status: attempts >= MAX_ATTEMPTS ? 'dead' : 'failed',
            lastError: result.error.slice(0, 300),
            nextAttemptAt: nextAttemptAt(attempts),
          },
          $inc: { attempts: 1 },
        }
      )
    } else {
      sent++
      await outbox.updateOne(
        { _id: row._id },
        { $set: { status: 'sent', providerId: result.id, sentAt: new Date() }, $inc: { attempts: 1 } }
      )
    }
  }

  return { tried: due.length, sent }
}
