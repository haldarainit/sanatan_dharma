import { createHmac, timingSafeEqual } from 'node:crypto'
import { configured, required } from '@/lib/env'

/* Razorpay, over plain fetch rather than the SDK.
 *
 * The SDK is a thin wrapper over these same REST calls, and doing the two
 * signature checks by hand keeps the security-critical part visible and
 * testable instead of buried in a dependency.
 *
 * There are two different signatures and they are not interchangeable:
 *
 *   - the CHECKOUT signature, HMAC(order_id|payment_id), which the browser
 *     hands back. It proves the browser saw a real payment, and nothing more.
 *   - the WEBHOOK signature, HMAC(raw request body), which Razorpay sends
 *     server-to-server. This is the only one that may mark money as received.
 *
 * A browser callback can be replayed or forged by whoever controls the
 * browser. Treating it as proof of payment is the classic way a donation site
 * ends up issuing receipts for money that never arrived.
 */

const API = 'https://api.razorpay.com/v1'

export const razorpayEnabled = () => configured.razorpay()

function authHeader() {
  const pair = `${required('RAZORPAY_KEY_ID')}:${required('RAZORPAY_KEY_SECRET')}`
  return 'Basic ' + Buffer.from(pair).toString('base64')
}

async function call<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(API + path, {
    ...init,
    headers: {
      Authorization: authHeader(),
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
    signal: AbortSignal.timeout(20_000),
  })
  const text = await res.text()
  if (!res.ok) {
    let message = text.slice(0, 200)
    try {
      message = JSON.parse(text)?.error?.description ?? message
    } catch {
      /* keep the raw text */
    }
    throw new Error(`Razorpay ${res.status}: ${message}`)
  }
  return JSON.parse(text) as T
}

export type RazorpayOrder = {
  id: string
  amount: number
  currency: string
  receipt?: string
  status: string
}

/**
 * Create an order.
 *
 * `amountPaise` is computed on the server from our own fee tables and tier
 * list. The browser never gets to say what something costs.
 */
export function createOrder(input: {
  amountPaise: number
  receipt: string
  notes?: Record<string, string>
}): Promise<RazorpayOrder> {
  if (!Number.isInteger(input.amountPaise) || input.amountPaise < 100) {
    /* Razorpay's minimum is ₹1, and a non-integer means paise arithmetic has
       gone through a float somewhere upstream. */
    throw new Error('amount must be a whole number of paise, at least 100')
  }
  return call<RazorpayOrder>('/orders', {
    method: 'POST',
    body: JSON.stringify({
      amount: input.amountPaise,
      currency: 'INR',
      receipt: input.receipt.slice(0, 40),
      notes: input.notes ?? {},
    }),
  })
}

export type RazorpayPayment = {
  id: string
  order_id: string
  amount: number
  currency: string
  status: string
  method?: string
  email?: string
  contact?: string
}

/** Fetch a payment straight from Razorpay — the authority, not the browser. */
export const fetchPayment = (paymentId: string) =>
  call<RazorpayPayment>(`/payments/${encodeURIComponent(paymentId)}`)

/* ---------- signatures ---------- */

/** Constant-time compare, so a wrong signature cannot be found byte by byte. */
function safeEqual(a: string, b: string): boolean {
  const x = Buffer.from(a, 'utf8')
  const y = Buffer.from(b, 'utf8')
  if (x.length !== y.length) return false
  return timingSafeEqual(x, y)
}

/**
 * The signature the browser returns from Checkout.
 *
 * Confirms the browser completed a real payment against a real order. It does
 * NOT confirm the money settled, and must never be the thing that issues a
 * receipt — only the webhook may do that.
 */
export function verifyCheckoutSignature(o: {
  orderId: string
  paymentId: string
  signature: string
}): boolean {
  const expected = createHmac('sha256', required('RAZORPAY_KEY_SECRET'))
    .update(`${o.orderId}|${o.paymentId}`)
    .digest('hex')
  return safeEqual(expected, o.signature)
}

/**
 * The signature on a webhook delivery.
 *
 * Computed over the RAW request body. Parsing the JSON first and
 * re-stringifying it changes key order and whitespace and the check then
 * fails for every legitimate delivery — the commonest way this is got wrong.
 */
export function verifyWebhookSignature(rawBody: string, signature: string): boolean {
  const expected = createHmac('sha256', required('RAZORPAY_WEBHOOK_SECRET'))
    .update(rawBody)
    .digest('hex')
  return safeEqual(expected, signature)
}
