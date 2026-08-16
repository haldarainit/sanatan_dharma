import { getDb } from '@/lib/db/client'
import { nextSeq } from '@/lib/db/counters'
import { stateCode } from '@/lib/membership'
import {
  appointmentNo, financialYear, memberNo, receiptNo, ticketNo,
} from '@/lib/id-format'

/* Every public number the foundation issues.

   This replaces seven incompatible schemes that were scattered across the
   site, all built with Math.random(), none persisted and none unique. A
   6-digit random member number collides at roughly 1,200 members per state;
   a receipt number that can repeat is worse than useless to an auditor.

   The shapes are the ones the client has already printed on their receipt,
   ID card and support-ticket designs, so the artwork stays correct.

   The two halves this file joins are deliberately kept separate and
   testable on their own: lib/id-format.ts (formatting and parsing) and
   lib/db/counters.ts (atomic allocation). */

/**
 * `SDMKF/2026/000125` — donation receipts and 80G certificates.
 * Numbered per financial year and gapless, because a gap in a receipt series
 * is the first thing an auditor asks about.
 */
export async function nextReceiptNo(when = new Date()): Promise<string> {
  const fy = financialYear(when)
  return receiptNo(fy, await nextSeq(await getDb(), `receipt:${fy}`))
}

/**
 * `SDMKF-MH-000125` — members, numbered per state.
 * Allocated at activation, never at application: an abandoned form must not
 * burn a member number, and a member number is never reissued.
 */
export async function nextMemberNo(state: string): Promise<string> {
  const code = stateCode(state)
  return memberNo(code, await nextSeq(await getDb(), `member:${code}`))
}

/**
 * `19469352` — one 8-digit series shared by every kind of ticket, plus
 * membership applications and donation tracking.
 *
 * A single global series means a visitor can type any number the site ever
 * gave them into one box and be found, without first having to remember what
 * kind of thing it was.
 */
export async function nextTicketNo(): Promise<string> {
  return ticketNo(await nextSeq(await getDb(), 'ticket'))
}

/** `SDMKF/APT/2026/00012` — appointment letters. */
export async function nextAppointmentNo(when = new Date()): Promise<string> {
  const fy = financialYear(when)
  return appointmentNo(fy, await nextSeq(await getDb(), `appointment:${fy}`))
}

export { financialYear, identify, normaliseId, type IdKind } from '@/lib/id-format'
export { stateCode }
