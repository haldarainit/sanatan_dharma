import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { apiError } from '@/lib/api'
import { collections } from '@/lib/db/collections'
import { rateLimit } from '@/lib/rate-limit'
import { razorpayEnabled, verifyCheckoutSignature } from '@/lib/razorpay'

/* What the browser reports back when Checkout closes successfully.
 *
 * This endpoint exists so the donor gets an immediate, honest answer on
 * screen -- not so the system can decide money arrived. Whoever controls the
 * browser controls this request, so the most it is ever allowed to do is move
 * a payment to `attempted` and hand back the tracking number.
 *
 * The donation itself stays `pending` until the webhook says otherwise, and
 * the receipt is issued later still, by a named admin from the dashboard.
 * That ordering is the whole point: it is what stops a forged callback from
 * producing an 80G receipt for money nobody sent.
 */

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const schema = z.object({
  orderId: z.string().trim().min(1),
  paymentId: z.string().trim().min(1),
  signature: z.string().trim().min(1),
})

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  if (!razorpayEnabled()) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const parsed = schema.safeParse(await req.json().catch(() => null))
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  const { orderId, paymentId, signature } = parsed.data

  try {
    /* Signature checking is cheap, but this is an unauthenticated endpoint
       that names real order ids -- rate limit it anyway. */
    const limit = await rateLimit(`pay-verify:ip:${ip}`, 30, 10 * 60)
    if (!limit.ok) {
      return NextResponse.json({ error: 'Too many attempts. Please wait a few minutes.' }, { status: 429 })
    }

    if (!verifyCheckoutSignature({ orderId, paymentId, signature })) {
      console.warn(`[razorpay] rejected a checkout callback with a bad signature for ${orderId}`)
      return NextResponse.json({ error: 'Could not verify this payment' }, { status: 400 })
    }

    const payments = await collections.payments()
    const payment = await payments.findOne({ 'razorpay.orderId': orderId })
    if (!payment) {
      return NextResponse.json({ error: 'Payment not found' }, { status: 404 })
    }

    /* The webhook may well have landed first. If it has, this must not undo
       it -- hence the status guard rather than a blind $set. */
    await payments.updateOne(
      { _id: payment._id, status: { $in: ['created', 'attempted'] } },
      {
        $set: {
          status: 'attempted',
          'razorpay.paymentId': paymentId,
          'razorpay.signature': signature,
          updatedAt: new Date(),
        },
      }
    )

    /* Give the donor their tracking number so the on-screen confirmation is a
       real one they can quote to the office. */
    let reference = ''
    if (payment.purposeRef.type === 'donation') {
      const donations = await collections.donations()
      const donation = await donations.findOne({ _id: payment.purposeRef.id })
      reference = donation?.trackingNo ?? ''
    } else {
      const members = await collections.members()
      const member = await members.findOne({ _id: payment.purposeRef.id })
      reference = member?.applicationNo ?? ''
    }

    return NextResponse.json({
      ok: true,
      reference,
      /* deliberately not "paid" -- confirmation is the webhook's job */
      status: 'processing',
    })
  } catch (err) {
    return apiError(err, 'Could not confirm the payment')
  }
}
