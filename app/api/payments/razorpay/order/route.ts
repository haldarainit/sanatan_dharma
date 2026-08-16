import { createHmac } from 'node:crypto'
import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { ObjectId } from 'mongodb'
import { apiError } from '@/lib/api'
import { checkSpam } from '@/lib/anti-spam'
import { collections, type Donation, type Payment } from '@/lib/db/collections'
import { env, required } from '@/lib/env'
import { nextTicketNo } from '@/lib/ids'
import { createOrder, razorpayEnabled } from '@/lib/razorpay'
import { rateLimit } from '@/lib/rate-limit'
import { isValidMobile, normaliseMobile } from '@/lib/validation/mobile'

/* Starts a payment: records what is being paid for, then asks Razorpay for an
   order id the browser can open Checkout with.

   The amount is decided here, from our own tier list and fee tables. The
   browser sends what the visitor picked; the server looks up what that
   actually costs. Otherwise a donor can open dev tools and buy a National
   membership for ₹1. */

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const hashMobile = (mobile: string) =>
  createHmac('sha256', required('PII_PEPPER')).update(mobile).digest('hex')

const base = {
  name: z.string().trim().min(2).max(120),
  mobile: z.string().refine(isValidMobile, 'Enter a valid 10-digit mobile number'),
  email: z.string().trim().toLowerCase().email().optional().or(z.literal('')),
  website: z.string().optional(),
  startedAt: z.coerce.number().optional(),
}

const schema = z.discriminatedUnion('purpose', [
  z.object({
    purpose: z.literal('donation'),
    ...base,
    /* what the visitor chose; the server still decides what it costs */
    amount: z.coerce.number().int().positive(),
    frequency: z.string().trim().default('One Time'),
    cause: z.string().trim().max(200).optional(),
    message: z.string().trim().max(2000).optional(),
    claim80g: z.boolean().default(false),
    pan: z.string().trim().max(10).optional(),
    city: z.string().trim().max(80).optional(),
    state: z.string().trim().max(80).optional(),
    anonymous: z.boolean().default(false),
  }),
  z.object({
    purpose: z.literal('membership'),
    ...base,
    memberId: z.string().trim().min(1),
  }),
])

/** ₹ amounts the site actually offers. A custom amount is allowed but bounded. */
function donationPaise(rupees: number): number {
  const MIN = 1
  const MAX = 10_00_000
  if (rupees < MIN || rupees > MAX) {
    throw new Error(`Donation must be between ₹${MIN} and ₹${MAX.toLocaleString('en-IN')}`)
  }
  return Math.round(rupees) * 100
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  if (!razorpayEnabled()) {
    /* The gateway ships switched off. The UPI QR on the donate page costs the
       foundation nothing, where Razorpay takes a percentage of every rupee,
       so this is a deliberate default rather than an oversight. */
    return NextResponse.json(
      { error: 'Online card payment is not enabled. Please use the UPI or bank options.', code: 'gateway_off' },
      { status: 503 }
    )
  }

  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please check the details and try again', fields: parsed.error.issues.map((i) => i.path.join('.')) },
      { status: 400 }
    )
  }
  const input = parsed.data

  try {
    const limit = await rateLimit(`pay:ip:${ip}`, 10, 10 * 60)
    if (!limit.ok) {
      return NextResponse.json({ error: 'Too many attempts. Please wait a few minutes.' }, { status: 429 })
    }
    if (!checkSpam(input).ok) {
      return NextResponse.json({ error: 'Could not start the payment' }, { status: 400 })
    }

    const now = new Date()
    const mobile = normaliseMobile(input.mobile)
    const payments = await collections.payments()

    /* ---------- membership fee ---------- */
    if (input.purpose === 'membership') {
      const members = await collections.members()
      const member = await members.findOne({ _id: new ObjectId(input.memberId) })
      if (!member) {
        return NextResponse.json({ error: 'Application not found' }, { status: 404 })
      }
      if (member.status !== 'pending_payment') {
        return NextResponse.json({ error: 'This application is not awaiting payment' }, { status: 409 })
      }

      /* the fee frozen when they applied, not whatever the browser says now */
      const amountPaise = member.feeSnapshot.amount

      const payment: Payment = {
        kind: 'razorpay',
        status: 'created',
        amount: amountPaise,
        currency: 'INR',
        purposeRef: { type: 'membership', id: member._id! },
        createdAt: now,
        updatedAt: now,
      }
      const { insertedId } = await payments.insertOne(payment)

      const order = await createOrder({
        amountPaise,
        receipt: member.applicationNo,
        notes: { kind: 'membership', paymentId: String(insertedId), applicationNo: member.applicationNo },
      })
      await payments.updateOne(
        { _id: insertedId },
        { $set: { 'razorpay.orderId': order.id, updatedAt: new Date() } }
      )
      await members.updateOne({ _id: member._id }, { $set: { paymentId: insertedId, updatedAt: new Date() } })

      return NextResponse.json({
        ok: true,
        orderId: order.id,
        amount: amountPaise,
        keyId: env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        reference: member.applicationNo,
        prefill: { name: member.fullName, contact: member.contact.mobile, email: member.contact.email ?? '' },
      })
    }

    /* ---------- donation ---------- */
    const amountPaise = donationPaise(input.amount)
    const trackingNo = await nextTicketNo()

    const donation: Donation = {
      trackingNo,
      donor: {
        name: input.name,
        searchName: input.name.toLowerCase().replace(/\s+/g, ' '),
        mobile,
        mobileHash: hashMobile(mobile),
        email: input.email || undefined,
        city: input.city,
        state: input.state,
        panLast4: input.pan ? input.pan.slice(-4).toUpperCase() : undefined,
      },
      amount: amountPaise,
      /* Monthly and the rest are recorded as the donor's stated intent. This
         charge is a single one — auto-debit is a separate Razorpay product
         and is not wired yet, so nothing here may imply a standing mandate. */
      frequency: input.frequency,
      purpose: input.cause || 'General',
      message: input.message,
      claim80g: input.claim80g,
      anonymous: input.anonymous,
      status: 'pending',
      consent: { at: now, ip, ua: req.headers.get('user-agent') ?? undefined },
      createdAt: now,
      updatedAt: now,
    }
    const donations = await collections.donations()
    const { insertedId: donationId } = await donations.insertOne(donation)

    const payment: Payment = {
      kind: 'razorpay',
      status: 'created',
      amount: amountPaise,
      currency: 'INR',
      purposeRef: { type: 'donation', id: donationId },
      createdAt: now,
      updatedAt: now,
    }
    const { insertedId: paymentId } = await payments.insertOne(payment)

    const order = await createOrder({
      amountPaise,
      receipt: trackingNo,
      notes: { kind: 'donation', paymentId: String(paymentId), trackingNo },
    })

    await payments.updateOne(
      { _id: paymentId },
      { $set: { 'razorpay.orderId': order.id, updatedAt: new Date() } }
    )
    await donations.updateOne({ _id: donationId }, { $set: { paymentId, updatedAt: new Date() } })

    return NextResponse.json({
      ok: true,
      orderId: order.id,
      amount: amountPaise,
      keyId: env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      reference: trackingNo,
      prefill: { name: input.name, contact: mobile, email: input.email ?? '' },
    })
  } catch (err) {
    return apiError(err, 'Could not start the payment. Please try again.')
  }
}
