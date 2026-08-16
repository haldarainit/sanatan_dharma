/* Opening Razorpay Checkout from the browser.
 *
 * One launcher for every place the site takes money -- donations and
 * membership fees -- because the sequence has three steps that are easy to
 * get subtly wrong, and getting them wrong in only one of two copies is
 * worse than not having them at all.
 *
 * The sequence:
 *   1. ask our server for an order. The server decides the amount; the
 *      browser only says what was chosen. Otherwise a donor opens dev tools
 *      and buys a National membership for a rupee.
 *   2. open Checkout with the order id.
 *   3. report the result back to our server, which checks the signature.
 *
 * Step 3 is a courtesy to the donor, not proof of anything. The money is
 * confirmed by the webhook, server to server, and the receipt is issued by
 * an admin after that. Nothing here may claim a payment succeeded.
 */

const SCRIPT_SRC = 'https://checkout.razorpay.com/v1/checkout.js'

type RazorpayConstructor = new (options: Record<string, unknown>) => {
  open: () => void
  on: (event: string, handler: (payload: unknown) => void) => void
}

declare global {
  interface Window {
    Razorpay?: RazorpayConstructor
  }
}

let scriptPromise: Promise<void> | null = null

/** Load checkout.js once, no matter how many components ask for it. */
function loadScript(): Promise<void> {
  if (typeof window === 'undefined') return Promise.reject(new Error('not a browser'))
  if (window.Razorpay) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`)
    const el = existing ?? document.createElement('script')
    el.src = SCRIPT_SRC
    el.async = true
    el.addEventListener('load', () => resolve())
    el.addEventListener('error', () => {
      /* let a later attempt retry rather than caching the failure forever --
         this is usually a flaky network or a blocker extension */
      scriptPromise = null
      reject(new Error('Could not load the payment window. Please check your connection and try again.'))
    })
    if (!existing) document.body.appendChild(el)
  })
  return scriptPromise
}

/** Thrown when the gateway is switched off, so the UI can point at the QR instead. */
export class GatewayOffError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'GatewayOffError'
  }
}

export type CheckoutResult =
  | { outcome: 'processing'; reference: string }
  | { outcome: 'dismissed' }

type DonationInput = {
  purpose: 'donation'
  name: string
  mobile: string
  email?: string
  amount: number
  frequency?: string
  cause?: string
  message?: string
  claim80g?: boolean
  pan?: string
  city?: string
  state?: string
  anonymous?: boolean
}

type MembershipInput = {
  purpose: 'membership'
  name: string
  mobile: string
  email?: string
  memberId: string
}

export type CheckoutInput = (DonationInput | MembershipInput) & {
  /** set when the form was rendered, for the timing anti-spam check */
  startedAt?: number
}

async function readError(res: Response, fallback: string): Promise<never> {
  const body = await res.json().catch(() => null)
  const message = body?.error || fallback
  if (body?.code === 'gateway_off') throw new GatewayOffError(message)
  throw new Error(message)
}

/**
 * Run the whole payment, start to finish.
 *
 * Resolves with `processing` and a tracking number once Checkout reports
 * success and our server has verified the signature -- deliberately not
 * "paid", because at this point nobody has confirmed the money moved.
 * Resolves with `dismissed` if the donor closes the window.
 */
export async function startCheckout(input: CheckoutInput): Promise<CheckoutResult> {
  const orderRes = await fetch('/api/payments/razorpay/order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })
  if (!orderRes.ok) {
    await readError(orderRes, 'Could not start the payment. Please try again.')
  }
  const order = (await orderRes.json()) as {
    orderId: string
    amount: number
    keyId?: string
    reference: string
    prefill: { name: string; contact: string; email: string }
  }

  if (!order.keyId) {
    /* The server has the secret half but the browser was never given the
       public key id. Checkout cannot open without it, and a blank window
       would look like a crash. */
    throw new GatewayOffError(
      'Online payment is not fully configured. Please use the UPI or bank options above.'
    )
  }

  await loadScript()
  const Razorpay = window.Razorpay
  if (!Razorpay) throw new Error('Could not open the payment window. Please try again.')

  return new Promise<CheckoutResult>((resolve, reject) => {
    let settled = false

    const rzp = new Razorpay({
      key: order.keyId,
      order_id: order.orderId,
      amount: order.amount,
      currency: 'INR',
      name: 'Sanatan Dharm Manav Kalyan Foundation',
      description:
        input.purpose === 'donation' ? 'Donation / दान' : 'Membership fee / सदस्यता शुल्क',
      /* Checkout renders inside an iframe on api.razorpay.com, so a relative
         path resolves against their origin and is refused by CORS. It needs
         an absolute URL to our own host. */
      image: new URL('/img/logo.jpeg', window.location.origin).href,
      prefill: {
        name: order.prefill?.name ?? input.name,
        contact: order.prefill?.contact ?? input.mobile,
        email: order.prefill?.email ?? input.email ?? '',
      },
      notes: { reference: order.reference },
      theme: { color: '#FF6F00' },
      modal: {
        ondismiss: () => {
          if (settled) return
          settled = true
          resolve({ outcome: 'dismissed' })
        },
      },
      handler: async (response: unknown) => {
        if (settled) return
        settled = true
        const r = response as {
          razorpay_order_id: string
          razorpay_payment_id: string
          razorpay_signature: string
        }
        try {
          const res = await fetch('/api/payments/razorpay/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              orderId: r.razorpay_order_id,
              paymentId: r.razorpay_payment_id,
              signature: r.razorpay_signature,
            }),
          })
          if (!res.ok) await readError(res, 'Payment taken, but confirmation failed.')
          const body = (await res.json()) as { reference?: string }
          resolve({ outcome: 'processing', reference: body.reference || order.reference })
        } catch (err) {
          /* The money may well have left the donor's account. Never imply it
             did not -- surface the tracking number so the office can trace it. */
          reject(
            new Error(
              `${(err as Error).message} Your reference is ${order.reference} — please keep it and contact us if the receipt does not arrive.`
            )
          )
        }
      },
    })

    rzp.on('payment.failed', (payload: unknown) => {
      if (settled) return
      settled = true
      const description =
        (payload as { error?: { description?: string } })?.error?.description ??
        'The payment did not go through.'
      reject(new Error(description))
    })

    rzp.open()
  })
}
