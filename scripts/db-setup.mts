/* Creates the collections and their indexes.

   Idempotent: run it as often as you like, including on every deploy. It
   reports what it created versus what was already there.

   Run:  npm run db:setup */
import fs from 'node:fs'
import { MongoClient } from 'mongodb'
import { ensureIndexes } from '../lib/db/indexes.ts'

for (const line of fs.readFileSync('.env.local', 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
}

const uri = process.env.MONGODB_URI
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local')
  process.exit(1)
}

const client = new MongoClient(uri, { serverSelectionTimeoutMS: 8000 })

try {
  await client.connect()
  const db = client.db(process.env.MONGODB_DB || 'sanatan')
  console.log(`database: ${db.databaseName}\n`)

  const results = await ensureIndexes(db)

  console.log('  collection        created  total')
  for (const r of results) {
    console.log(
      `  ${r.collection.padEnd(18)}${String(r.created).padStart(4)}${String(r.existing).padStart(7)}`
    )
  }

  const created = results.reduce((n, r) => n + r.created, 0)
  console.log(
    `\n${results.length} collections, ${created} index${created === 1 ? '' : 'es'} created` +
      (created === 0 ? ' (everything was already in place)' : '')
  )
} catch (err) {
  console.error('failed:', (err as Error).message.split('\n')[0])
  process.exitCode = 1
} finally {
  await client.close()
}
