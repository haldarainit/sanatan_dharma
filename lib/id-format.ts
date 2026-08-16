/* The pure half of lib/ids.ts: formatting, parsing and the financial-year
   rule. Kept free of database and alias imports so it can be run and tested
   directly with `node --experimental-strip-types`. */

export type IdKind = 'receipt' | 'member' | 'ticket' | 'appointment'

/**
 * The Indian financial year a date falls in: April 2026 – March 2027 → 2026.
 *
 * Evaluated in IST no matter where the server runs. A donation made at 00:30
 * on 1 April in Mumbai is still 31 March in UTC, and would be filed under the
 * previous financial year if the server's own clock were used — wrong on a
 * document the client's auditor reads.
 */
export function financialYear(d: Date = new Date()): number {
  const ist = new Date(d.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
  return ist.getMonth() >= 3 ? ist.getFullYear() : ist.getFullYear() - 1
}

export const pad = (n: number, width: number) => String(n).padStart(width, '0')

export const receiptNo = (fy: number, seq: number) => `SDMKF/${fy}/${pad(seq, 6)}`
export const memberNo = (code: string, seq: number) => `SDMKF-${code}-${pad(seq, 6)}`
export const appointmentNo = (fy: number, seq: number) => `SDMKF/APT/${fy}/${pad(seq, 5)}`

/** Always 8 digits, so it matches the client's printed `#19469352`. */
export const ticketNo = (seq: number) => String(10_000_000 + seq)

const SHAPES: [IdKind, RegExp][] = [
  ['appointment', /^SDMKF\/APT\/\d{4}\/\d{5}$/],
  ['receipt', /^SDMKF\/\d{4}\/\d{6}$/],
  ['member', /^SDMKF-[A-Z]{2}-\d{6}$/],
  ['ticket', /^\d{8}$/],
]

/** Tolerate what people actually paste: stray spaces, lower case. */
export function normaliseId(raw: string): string {
  return raw.trim().toUpperCase().replace(/\s+/g, '')
}

/**
 * Which series a typed string belongs to, or null.
 * Lets the verification page take one input box rather than making the
 * visitor classify their own document first.
 */
export function identify(raw: string): IdKind | null {
  const value = normaliseId(raw)
  for (const [kind, re] of SHAPES) if (re.test(value)) return kind
  return null
}
