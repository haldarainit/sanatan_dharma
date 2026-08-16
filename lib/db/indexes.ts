import type { Db, IndexSpecification, CreateIndexesOptions } from 'mongodb'

/* Index definitions, applied by `npm run db:setup`.

   Declared in one place rather than scattered through the code, because in a
   serverless app there is no startup hook where "ensure this index exists"
   reliably runs. createIndex is idempotent, so re-running is safe and cheap.

   Three of these do real work beyond speed:
     - the unique ones are the last line of defence for numbers that must
       never repeat, even if the application logic is wrong
     - the TTL ones are how sessions, OTPs and rate-limit counters expire
       without a cleanup job
     - the sparse ones allow the many documents that legitimately have no
       memberNo or no receipt yet */

type Spec = [IndexSpecification, CreateIndexesOptions?]

const INDEXES: Record<string, Spec[]> = {
  tickets: [
    [{ ticketNo: 1 }, { unique: true }],
    [{ 'contact.mobileHash': 1, createdAt: -1 }],
    [{ kind: 1, status: 1, createdAt: -1 }],
    [{ assignedToAdminId: 1, status: 1 }],
    [{ status: 1, 'sla.dueAt': 1 }],
    [{ 'contact.searchName': 1 }],
  ],

  members: [
    [{ applicationNo: 1 }, { unique: true }],
    /* sparse: most rows are applications that have no member number yet */
    [{ memberNo: 1 }, { unique: true, sparse: true }],
    [{ 'contact.mobileHash': 1 }],
    [{ status: 1, createdAt: -1 }],
    [{ 'address.stateCode': 1, status: 1 }],
    [{ searchName: 1 }],
    /* drives the renewal reminder cron */
    [{ validTo: 1, status: 1 }],
  ],

  donations: [
    [{ trackingNo: 1 }, { unique: true }],
    [{ 'donor.mobileHash': 1, createdAt: -1 }],
    [{ status: 1, createdAt: -1 }],
    [{ createdAt: -1 }],
    [{ paymentId: 1 }],
  ],

  payments: [
    [{ 'razorpay.orderId': 1 }, { unique: true, sparse: true }],
    [{ 'razorpay.paymentId': 1 }, { unique: true, sparse: true }],
    /* not unique: a UTR can legitimately be re-reported after a rejection.
       Indexed so the verification queue can flag a repeat before an admin
       wastes time on it — the commonest offline-donation mistake. */
    [{ 'manual.utr': 1 }, { sparse: true }],
    [{ status: 1, kind: 1, createdAt: -1 }],
    [{ 'purposeRef.id': 1 }],
  ],

  documents: [
    [{ docType: 1, number: 1 }, { unique: true }],
    [{ number: 1 }],
    [{ 'subject.id': 1, docType: 1 }],
    [{ status: 1, issuedAt: -1 }],
  ],

  files: [
    [{ key: 1 }, { unique: true }],
    [{ sha256: 1 }],
    [{ createdAt: 1 }],
  ],

  adminUsers: [[{ email: 1 }, { unique: true }]],

  /* TTL: Mongo removes the row once expiresAt passes, so a logged-out or
     stale session cannot be replayed and no cleanup job is needed. */
  sessions: [
    [{ expiresAt: 1 }, { expireAfterSeconds: 0 }],
    [{ subjectId: 1, kind: 1 }],
  ],

  otps: [
    [{ expiresAt: 1 }, { expireAfterSeconds: 0 }],
    [{ target: 1, purpose: 1, createdAt: -1 }],
  ],

  emailOutbox: [
    [{ status: 1, nextAttemptAt: 1 }],
    [{ to: 1, createdAt: -1 }],
    [{ providerId: 1 }, { sparse: true }],
  ],

  /* _id is the provider's own event id, so a duplicate delivery fails to
     insert — that is the idempotency guarantee, not an error to fix. */
  webhookEvents: [[{ receivedAt: -1 }]],

  auditLogs: [
    [{ at: -1 }],
    [{ targetType: 1, targetId: 1 }],
    [{ 'actor.id': 1, at: -1 }],
  ],

  rateLimits: [[{ expiresAt: 1 }, { expireAfterSeconds: 0 }]],

  subscribers: [
    [{ email: 1 }, { unique: true, sparse: true }],
    [{ mobile: 1 }, { unique: true, sparse: true }],
    [{ unsubToken: 1 }, { unique: true }],
  ],

  counters: [],
}

export type SetupResult = { collection: string; created: number; existing: number }

/* Takes the Db rather than reaching for the shared client, so this file has
   no internal imports and the setup script can run it directly under Node's
   TypeScript stripping without a bundler resolving path aliases. */
export async function ensureIndexes(database: Db): Promise<SetupResult[]> {
  const existingNames = new Set(
    (await database.listCollections().toArray()).map((c) => c.name)
  )
  const results: SetupResult[] = []

  for (const [name, specs] of Object.entries(INDEXES)) {
    if (!existingNames.has(name)) await database.createCollection(name)

    const before = new Set(
      (await database.collection(name).indexes()).map((i) => i.name)
    )
    for (const [keys, options] of specs) {
      await database.collection(name).createIndex(keys, options ?? {})
    }
    const after = await database.collection(name).indexes()

    results.push({
      collection: name,
      created: after.filter((i) => !before.has(i.name)).length,
      existing: after.length,
    })
  }

  return results
}
