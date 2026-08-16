import { MongoClient, type Db } from 'mongodb'
import { env, required } from '@/lib/env'

/* A serverless function is created and destroyed per request, but the Node
   process behind it is reused. Caching the connection promise on globalThis
   means each warm instance opens one connection instead of one per request --
   without it, Atlas's connection limit is reached under very ordinary load,
   and the free tier's limit is low.

   The promise, not the client, is cached: two concurrent requests on a cold
   instance then await the same connection rather than opening two. */

declare global {
  // eslint-disable-next-line no-var
  var __sdMongo: Promise<MongoClient> | undefined
}

function connect(): Promise<MongoClient> {
  const client = new MongoClient(required('MONGODB_URI'), {
    maxPoolSize: 10,
    /* fail fast rather than hanging a request for 30s when Atlas is asleep
       or the IP allowlist is wrong -- both are common in development */
    serverSelectionTimeoutMS: 8000,
    retryWrites: true,
  })
  return client.connect()
}

export function getClient(): Promise<MongoClient> {
  if (!global.__sdMongo) global.__sdMongo = connect()
  return global.__sdMongo
}

export async function getDb(): Promise<Db> {
  const client = await getClient()
  return client.db(env.MONGODB_DB)
}

/** True if the database is reachable — used by the health check and setup script. */
export async function ping(): Promise<boolean> {
  try {
    const db = await getDb()
    await db.command({ ping: 1 })
    return true
  } catch {
    return false
  }
}
