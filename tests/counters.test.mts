/* Run: npm run test:db   (needs MONGODB_URI in .env.local)

   The point of this file is the concurrency case. A sequence allocator that
   works when called one at a time is easy; the reason we replaced
   Math.random() is that two donations arriving in the same second must never
   be handed the same receipt number. So this fires the allocator in parallel
   and asserts the results are unique, consecutive and gapless.

   It uses throwaway counter keys and deletes them afterwards, so the real
   receipt and member series still start at 1. */
import fs from 'node:fs'
import { MongoClient } from 'mongodb'
import { nextSeq, peekSeq } from '../lib/db/counters.ts'
import { receiptNo, memberNo, ticketNo } from '../lib/id-format.ts'

for (const line of fs.readFileSync('.env.local', 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
}

let pass = 0
let fail = 0
const ok = (name: string, condition: boolean, detail = '') => {
  condition ? pass++ : fail++
  console.log(`  ${condition ? 'ok  ' : 'FAIL'} ${name}${condition || !detail ? '' : `\n         ${detail}`}`)
}

const client = new MongoClient(process.env.MONGODB_URI!, { serverSelectionTimeoutMS: 8000 })
const TEST_KEYS = ['test:sequential', 'test:concurrent', 'test:fresh']

try {
  await client.connect()
  const db = client.db(process.env.MONGODB_DB || 'sanatan')
  await db.collection('counters').deleteMany({ _id: { $in: TEST_KEYS } as never })

  console.log('sequential allocation:')
  const a = await nextSeq(db, 'test:sequential')
  const b = await nextSeq(db, 'test:sequential')
  const c = await nextSeq(db, 'test:sequential')
  ok('starts at 1', a === 1, `got ${a}`)
  ok('increments  ', b === 2 && c === 3, `got ${b}, ${c}`)
  ok('peek does not consume', (await peekSeq(db, 'test:sequential')) === 3)

  console.log('\nconcurrent allocation — the case Math.random() failed:')
  const N = 50
  const got = await Promise.all(
    Array.from({ length: N }, () => nextSeq(db, 'test:concurrent'))
  )
  const unique = new Set(got)
  ok(`${N} parallel calls, all distinct`, unique.size === N, `${N - unique.size} duplicates`)
  const sorted = [...got].sort((x, y) => x - y)
  ok('no gaps in the series', sorted.every((v, i) => v === i + 1), `got ${sorted.slice(0, 8).join(',')}…`)
  ok('starts at 1, ends at N', sorted[0] === 1 && sorted[N - 1] === N)

  console.log('\nfirst-ever call on a brand new counter (the upsert race):')
  const fresh = await Promise.all(
    Array.from({ length: 10 }, () => nextSeq(db, 'test:fresh'))
  )
  ok('10 parallel on a missing counter', new Set(fresh).size === 10, `${10 - new Set(fresh).size} duplicates`)

  console.log('\nformatted output matches the client artwork:')
  ok('receipt', receiptNo(2026, 125) === 'SDMKF/2026/000125', receiptNo(2026, 125))
  ok('member ', memberNo('MH', 125) === 'SDMKF-MH-000125', memberNo('MH', 125))
  ok('ticket ', ticketNo(9469352) === '19469352', ticketNo(9469352))

  console.log('\nreal series are untouched:')
  for (const key of ['ticket', 'receipt:2026', 'member:MH']) {
    const v = await peekSeq(db, key)
    ok(`${key.padEnd(13)} still at ${v}`, v === 0, `expected 0, got ${v}`)
  }
} catch (err) {
  console.error('\nERROR:', (err as Error).message.split('\n')[0])
  fail++
} finally {
  try {
    const db = client.db(process.env.MONGODB_DB || 'sanatan')
    await db.collection('counters').deleteMany({ _id: { $in: TEST_KEYS } as never })
  } catch {
    /* connection already gone */
  }
  await client.close()
}

console.log(`\n${pass} passed, ${fail} failed`)
process.exit(fail ? 1 : 0)
