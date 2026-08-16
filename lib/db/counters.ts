import type { Db } from 'mongodb'

/* The sequence allocator behind every number the foundation issues.

   No internal imports, so it can be exercised directly against a real
   database by the test script — the guarantee it provides (two callers never
   get the same number) is only meaningful if it has actually been run
   concurrently. */

export type CounterKey = string

/**
 * The next number in a series.
 *
 * `$inc` on a single document is atomic in MongoDB, so concurrent callers are
 * always handed distinct, consecutive values — the property `Math.random()`
 * never had, and the reason a receipt series can be trusted by an auditor.
 */
export async function nextSeq(db: Db, key: CounterKey, attempt = 0): Promise<number> {
  try {
    const doc = await db
      .collection<{ _id: string; seq: number }>('counters')
      .findOneAndUpdate(
        { _id: key },
        { $inc: { seq: 1 } },
        { upsert: true, returnDocument: 'after' }
      )
    if (!doc) throw new Error(`counter "${key}" returned no document`)
    return doc.seq
  } catch (err) {
    /* Two callers racing to create a counter that does not exist yet: both
       upserts attempt the insert and one loses with a duplicate key. This is
       documented MongoDB behaviour on upsert, not a rare theoretical race —
       it happens on the very first request of a new financial year. The row
       exists by the time we retry, so the retry takes the ordinary $inc
       path. */
    if ((err as { code?: number }).code === 11000 && attempt === 0) {
      return nextSeq(db, key, 1)
    }
    throw err
  }
}

/** Read a counter without consuming a number. */
export async function peekSeq(db: Db, key: CounterKey): Promise<number> {
  const doc = await db.collection<{ _id: string; seq: number }>('counters').findOne({ _id: key })
  return doc?.seq ?? 0
}
