import { createHmac } from 'node:crypto'
import { NextResponse, type NextRequest } from 'next/server'
import { apiError } from '@/lib/api'
import { checkSpam } from '@/lib/anti-spam'
import { collections, type Ticket, type TicketKind } from '@/lib/db/collections'
import { nextTicketNo } from '@/lib/ids'
import { rateLimit } from '@/lib/rate-limit'
import { fieldErrors, flowFor, SLA_HOURS, ticketSchema } from '@/lib/validation/tickets'
import { sendEmail } from '@/lib/email/send'
import { adminNotification, ticketAcknowledgement } from '@/lib/email/templates'
import { env, required } from '@/lib/env'

/* Every "get in touch" on the site lands here: help requests, enquiries,
   complaints, partnership approaches, callbacks, fake-ID reports.

   One endpoint and one collection because they share a lifecycle and a
   tracking number. The difference between them is the payload, which the
   discriminated union above validates per kind. */

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const clientIp = (req: NextRequest) =>
  req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

/** Lets us find someone by their number without storing a searchable index of them. */
const hashMobile = (mobile: string) =>
  createHmac('sha256', required('PII_PEPPER')).update(mobile).digest('hex')

export async function POST(req: NextRequest) {
  const ip = clientIp(req)

  const body = await req.json().catch(() => null)
  const parsed = ticketSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please check the highlighted fields', fields: fieldErrors(parsed.error) },
      { status: 400 }
    )
  }
  const input = parsed.data

  /* A rejected bot is told exactly what a successful visitor is told, minus
     the record. Explaining the rejection would only help it adapt. */
  const spam = checkSpam(input)

  try {
    const limit = await rateLimit(`ticket:ip:${ip}`, 5, 10 * 60)
    if (!limit.ok) {
      return NextResponse.json(
        { error: 'You have sent several requests already. Please try again in a few minutes.' },
        { status: 429 }
      )
    }

    if (!spam.ok) {
      /* Look successful, store nothing. */
      console.warn(`[spam] ticket rejected from ${ip}: ${spam.reason}`)
      return NextResponse.json({ ok: true, ticketNo: await nextTicketNo() })
    }

    const now = new Date()
    const kind = input.kind as TicketKind
    const flow = flowFor(kind)
    const ticketNo = await nextTicketNo()

    /* Whatever is specific to this kind travels in payload; the shared
       lifecycle fields sit at the top level where the admin queue reads them. */
    const {
      kind: _kind, name, mobile, email,
      website: _hp, startedAt: _ts,
      ...rest
    } = input as Record<string, unknown> & { kind: string; name: string; mobile: string; email?: string }

    const ticket: Ticket = {
      ticketNo,
      kind,
      contact: {
        name,
        searchName: name.toLowerCase().replace(/\s+/g, ' '),
        mobile,
        mobileHash: hashMobile(mobile),
        email: email || undefined,
      },
      subject: (rest.subject as string) || undefined,
      category: (rest.category as string) || undefined,
      priority: (rest.priority as Ticket['priority']) || undefined,
      details: (rest.detail as string) || (rest.message as string) || undefined,
      payload: rest,
      attachments: [],
      status: flow[0],
      statusHistory: [{ status: flow[0], at: now }],
      publicUpdates: [],
      internalNotes: [],
      sla: { dueAt: new Date(now.getTime() + (SLA_HOURS[kind] ?? 48) * 3600 * 1000) },
      consent: {
        declaration: Boolean(rest.declaration),
        terms: Boolean(rest.terms),
        contactOk: Boolean(rest.consent),
        at: now,
        ip,
        ua: req.headers.get('user-agent') ?? undefined,
      },
      createdAt: now,
      updatedAt: now,
    }

    const tickets = await collections.tickets()
    const { insertedId } = await tickets.insertOne(ticket)

    /* Acknowledgement only. It confirms receipt and gives the tracking
       number — it is not a receipt, an approval or a promise of one. Email
       failure must not undo a submission that has already been stored, so
       these are awaited but their result is ignored. */
    const slaHours = SLA_HOURS[kind] ?? 48
    if (ticket.contact.email) {
      const ack = ticketAcknowledgement({
        name, kind, ticketNo, slaHours,
      })
      await sendEmail({
        to: ticket.contact.email,
        subject: ack.subject,
        html: ack.html,
        text: ack.text,
        template: 'ticket_acknowledgement',
        about: { type: 'ticket', id: String(insertedId) },
      })
    }

    if (env.ADMIN_NOTIFY_EMAIL) {
      const note = adminNotification({
        kind, ticketNo, name, mobile,
        summary: ticket.subject || ticket.details,
      })
      await sendEmail({
        to: env.ADMIN_NOTIFY_EMAIL,
        subject: note.subject,
        html: note.html,
        text: note.text,
        template: 'admin_new_ticket',
        about: { type: 'ticket', id: String(insertedId) },
      })
    }

    return NextResponse.json({ ok: true, ticketNo, status: ticket.status })
  } catch (err) {
    return apiError(err, 'Could not submit right now. Please try again.')
  }
}
