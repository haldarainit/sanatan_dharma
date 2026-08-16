import { NextResponse, type NextRequest } from 'next/server'
import { collections } from '@/lib/db/collections'
import { fetchPayment, verifyWebhookSignature } from '@/lib/razorpay'
import { configured, env } from '@/lib/env'

/* The only place in this system that may mark money as received.
 *
 * Not the browser's success callback — whoever controls the browser controls
 * that, and a forged one would have the foundation issuing an 80G receipt for
 * a payment that never happened.
 *
 * Three properties matter here and each is easy to get wrong:
 *
 *   1. The signature is computed over the RAW body. Parsing the JSON first
 *      and re-serialising it changes whitespace and key order, and then every
 *      legitimate delivery fails its own check.
 *   2. Delivery is at-least-once. Razorpay retries on any non-2xx and
 *      sometimes on a slow 2xx, so the same event will arrive twice.
 *      Idempotency comes from a unique _id on webhookEvents: the second
 *      insert fails, and that failure is the success path.
 *   3. Reply quickly. Slow handlers get retried, which multiplies the work.
 */

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  if (!configured.razorpay()) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  /* Without the shared secret nothing can be verified, and an unverifiable
     delivery must never be acted on. Refuse plainly rather than throwing —
     a blank 500 here looks like a bug in the handler, and Razorpay would
     retry it for hours. */
  if (!env.RAZORPAY_WEBHOOK_SECRET) {
    console.error('[razorpay] RAZORPAY_WEBHOOK_SECRET is not set — deliveries cannot be verified')
    return NextResponse.json(
      { error: 'Webhook verification is not configured', code: 'not_configured' },
      { status: 503 }
    )
  }

  /* must be read as text, before anything parses it */
  const raw = await req.text()
  const signature = req.headers.get('x-razorpay-signature') ?? ''

  if (!signature || !verifyWebhookSignature(raw, signature)) {
    /* Deliberately terse. An attacker probing the endpoint learns nothing
       about why their forgery was rejected. */
    console.warn('[razorpay] rejected a delivery with a bad signature')
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  let event: {
    event?: string
    payload?: { payment?: { entity?: Record<string, unknown> } }
  }
  try {
    event = JSON.parse(raw)
  } catch {
    return NextResponse.json({ error: 'Malformed body' }, { status: 400 })
  }

  /* Razorpay's own id for this delivery; falls back to a composite so an
     older account without the header still gets idempotency. */
  const eventId =
    req.headers.get('x-razorpay-event-id') ||
    `${event.event}:${(event.payload?.payment?.entity as { id?: string })?.id ?? raw.length}`

  const events = await collections.webhookEvents()
  try {
    await events.insertOne({
      _id: eventId,
      provider: 'razorpay',
      receivedAt: new Date(),
      payload: event as Record<string, unknown>,
    })
  } catch (err) {
    /* duplicate key: already handled. This is the idempotency guarantee
       working, not an error to report. */
    if ((err as { code?: number }).code === 11000) {
      return NextResponse.json({ ok: true, duplicate: true })
    }
    throw err
  }

  try {
    await handle(event)
    await events.updateOne({ _id: eventId }, { $set: { processedAt: new Date() } })
  } catch (err) {
    /* Leave processedAt unset so it is visible as unfinished, but still answer
       200: Razorpay would otherwise retry, and the duplicate check above would
       then skip the work entirely. Failures are found by querying for events
       with no processedAt. */
    console.error('[razorpay] handling failed for ' + eventId + ': ' + (err as Error).message)
  }

  return NextResponse.json({ ok: true })
}

async function handle(event: {
  event?: string
  payload?: { payment?: { entity?: Record<string, unknown> } }
}) {
  const entity = event.payload?.payment?.entity as
    | { id?: string; order_id?: string; amount?: number; method?: string; status?: string }
    | undefined
  if (!entity?.id) return

  const payments = await collections.payments()
  const payment = await payments.findOne({ 'razorpay.orderId': entity.order_id })
  if (!payment) {
    console.warn(`[razorpay] no payment record for order ${entity.order_id}`)
    return
  }

  if (event.event === 'payment.failed') {
    await payments.updateOne(
      { _id: payment._id },
      { $set: { status: 'failed', 'razorpay.paymentId': entity.id, updatedAt: new Date() } }
    )
    if (payment.purposeRef.type === 'donation') {
      const donations = await collections.donations()
      await donations.updateOne(
        { _id: payment.purposeRef.id },
        { $set: { status: 'failed', updatedAt: new Date() } }
      )
    }
    return
  }

  if (event.event !== 'payment.captured') return

  /* Trust the API, not the delivered body. A webhook body is signed, but
     re-reading the payment is one call and removes any doubt about what was
     actually captured. */
  const authoritative = await fetchPayment(entity.id)

  if (authoritative.amount !== payment.amount) {
    /* Never silently accept a different amount: a receipt must state what was
       actually paid, and a mismatch means something is wrong upstream. */
    console.error(
      `[razorpay] amount mismatch on ${entity.id}: expected ${payment.amount}, got ${authoritative.amount}`
    )
    await payments.updateOne(
      { _id: payment._id },
      {
        $set: {
          status: 'attempted',
          'razorpay.paymentId': entity.id,
          rejectionReason: `amount mismatch: expected ${payment.amount}, received ${authoritative.amount}`,
          updatedAt: new Date(),
        },
      }
    )
    return
  }

  await payments.updateOne(
    { _id: payment._id },
    {
      $set: {
        status: 'captured',
        'razorpay.paymentId': authoritative.id,
        'razorpay.method': authoritative.method,
        'razorpay.capturedAt': new Date(),
        updatedAt: new Date(),
      },
    }
  )

  /* The money is confirmed. The record is marked paid — and that is all.
     The receipt is still issued by hand from the dashboard, by a named admin,
     because that is what the foundation asked for. */
  if (payment.purposeRef.type === 'donation') {
    const donations = await collections.donations()
    await donations.updateOne(
      { _id: payment.purposeRef.id },
      { $set: { status: 'paid', updatedAt: new Date() } }
    )
  } else {
    const members = await collections.members()
    await members.updateOne(
      { _id: payment.purposeRef.id },
      {
        $set: { status: 'under_review', updatedAt: new Date() },
        $push: {
          statusHistory: {
            status: 'under_review',
            at: new Date(),
            note: 'Fee received via Razorpay — awaiting approval',
          },
        },
      }
    )
  }
}
