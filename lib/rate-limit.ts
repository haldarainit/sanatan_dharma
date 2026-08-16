import { collections } from '@/lib/db/collections'

/* Rate limiting on MongoDB rather than Redis.

   A second datastore would mean a second account, a second set of
   credentials and a second thing to explain at handover, to solve a
   throughput problem this site does not have. The TTL index on
   rateLimits.expiresAt does the expiry, so there is no cleanup job.

   The window is fixed rather than sliding: a caller gets N attempts per
   window, and the window resets when it expires. Coarser than a sliding
   window at the boundary, and entirely adequate for stopping form spam and
   password guessing. */

export type RateLimitResult = {
  ok: boolean
  remaining: number
  resetAt: Date
}

/**
 * Count one attempt against a key.
 *
 * @param key      what is being limited, e.g. `login:ip:1.2.3.4`
 * @param limit    attempts allowed per window
 * @param windowSeconds  how long the window lasts
 */
export async function rateLimit(
  key: string,
  limit: number,
  windowSeconds: number
): Promise<RateLimitResult> {
  const now = Date.now()
  const rows = await collections.rateLimits()

  /* One atomic round trip: increment if the window is live, otherwise start a
     new one. Two concurrent requests cannot both see "0 hits" and both pass. */
  const doc = await rows.findOneAndUpdate(
    { _id: key, expiresAt: { $gt: new Date(now) } },
    { $inc: { hits: 1 } },
    { returnDocument: 'after' }
  )

  if (doc) {
    return {
      ok: doc.hits <= limit,
      remaining: Math.max(0, limit - doc.hits),
      resetAt: doc.expiresAt,
    }
  }

  /* No live window: replace whatever expired row is there with a fresh one. */
  const expiresAt = new Date(now + windowSeconds * 1000)
  await rows.updateOne(
    { _id: key },
    { $set: { hits: 1, expiresAt } },
    { upsert: true }
  )
  return { ok: true, remaining: limit - 1, resetAt: expiresAt }
}

/** Read the count without spending an attempt. */
export async function peekRateLimit(key: string): Promise<number> {
  const rows = await collections.rateLimits()
  const doc = await rows.findOne({ _id: key, expiresAt: { $gt: new Date() } })
  return doc?.hits ?? 0
}
