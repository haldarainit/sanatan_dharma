import { createHmac } from 'node:crypto'
import { required } from '@/lib/env'

/* Spam defence without a third party.

   Turnstile and reCAPTCHA were deliberately skipped: the client wants no
   external services, and these three checks stop the volume a small NGO site
   actually attracts — scripted form-fillers, not a targeted attacker. If it
   is ever seriously targeted, Turnstile drops in behind this same function.

   The arithmetic captcha already on the site is not counted as a defence: it
   is validated in the browser only, so anyone posting directly skips it.
   That is precisely what these checks catch instead. */

export type SpamVerdict = { ok: true } | { ok: false; reason: string }

const MIN_SECONDS = 3
const MAX_HOURS = 12

export function checkHoneypot(value: string | undefined): SpamVerdict {
  /* A field hidden from people and left in the markup for scripts. Anything
     in it means the submission was not typed by a human. */
  return value ? { ok: false, reason: 'honeypot' } : { ok: true }
}

export function checkTiming(startedAt: number | undefined): SpamVerdict {
  /* No stamp at all is allowed: a visitor with JavaScript partly blocked
     should still be able to report a complaint. The stamp is corroboration,
     not a gate. */
  if (!startedAt) return { ok: true }

  const elapsed = (Date.now() - startedAt) / 1000
  if (elapsed < 0) return { ok: false, reason: 'timestamp in the future' }
  if (elapsed < MIN_SECONDS) return { ok: false, reason: 'submitted too fast' }
  if (elapsed > MAX_HOURS * 3600) return { ok: false, reason: 'form left open too long' }
  return { ok: true }
}

/**
 * All the cheap checks, in one call.
 *
 * Returns the same shape whatever fails, and the caller answers the visitor
 * identically either way — a bot that is told *why* it was rejected is a bot
 * that can be adjusted.
 */
export function checkSpam(input: {
  website?: string
  startedAt?: number
}): SpamVerdict {
  const honeypot = checkHoneypot(input.website)
  if (!honeypot.ok) return honeypot
  return checkTiming(input.startedAt)
}

/* ---- signing the values the browser sends back ---- */

/**
 * A short token proving the server issued this form, so `startedAt` cannot
 * simply be forged to a plausible value.
 */
export function signFormToken(issuedAt = Date.now()): string {
  const mac = createHmac('sha256', required('SESSION_SECRET'))
    .update(String(issuedAt))
    .digest('base64url')
    .slice(0, 16)
  return `${issuedAt}.${mac}`
}

export function verifyFormToken(token: string | undefined): number | undefined {
  if (!token) return undefined
  const [issuedAt, mac] = token.split('.')
  if (!issuedAt || !mac) return undefined
  const expected = createHmac('sha256', required('SESSION_SECRET'))
    .update(issuedAt)
    .digest('base64url')
    .slice(0, 16)
  return mac === expected ? Number(issuedAt) : undefined
}
