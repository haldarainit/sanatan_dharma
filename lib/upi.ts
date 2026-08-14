/* The UPI id used to be written out eight times -- inside two QR image URLs,
   two "upi://pay" links and the text beside them. Editing one and missing the
   others would have sent donations to the wrong account, so every form is
   derived from a single value here.

   The id itself is editable in the Studio under Site settings. */

export const DEFAULT_UPI_ID = '9768000666-4@okbizaxis'
export const DEFAULT_UPI_NAME = 'Sanatan Dharm Manav Kalyan Foundation'

export type Upi = { id: string; name: string }

export const DEFAULT_UPI: Upi = { id: DEFAULT_UPI_ID, name: DEFAULT_UPI_NAME }

/** the deep link a phone opens in its UPI app */
export function upiLink(upi: Upi = DEFAULT_UPI, amount = 501) {
  const q = new URLSearchParams({
    pa: upi.id,
    pn: upi.name,
    am: String(amount),
    cu: 'INR',
  })
  return `upi://pay?${q.toString()}`
}

/** the scannable code for that same link */
export function upiQr(upi: Upi = DEFAULT_UPI, amount = 501, size = 320) {
  const data = encodeURIComponent(upiLink(upi, amount))
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${data}`
}
