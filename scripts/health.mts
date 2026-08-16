/* Checks every external service the backend depends on, without sending
   anything or writing anything.

   Run:  npm run health

   Values are never printed — only whether they are present and whether the
   service accepts them. A credential that is set but wrong is the failure
   mode that wastes the most time, so each one is actually exercised. */
import { MongoClient } from 'mongodb'
import { loadEnv } from './load-env.mts'

loadEnv()

type Result = { name: string; ok: boolean; detail: string }
const results: Result[] = []
const add = (name: string, ok: boolean, detail: string) => results.push({ name, ok, detail })

const env = (k: string) => (process.env[k] || '').trim()

/* ---------- MongoDB ---------- */
if (!env('MONGODB_URI')) {
  add('MongoDB', false, 'MONGODB_URI not set')
} else {
  const client = new MongoClient(env('MONGODB_URI'), { serverSelectionTimeoutMS: 8000 })
  try {
    await client.connect()
    const db = client.db(env('MONGODB_DB') || 'sanatan')
    await db.command({ ping: 1 })
    const cols = await db.listCollections().toArray()
    const counters = await db.collection('counters').find({}).toArray()
    add('MongoDB', true, `${cols.length} collections, ${counters.length} counters in use`)
  } catch (e) {
    add('MongoDB', false, (e as Error).message.split('\n')[0].slice(0, 70))
  } finally {
    await client.close().catch(() => {})
  }
}

/* ---------- Resend ---------- */
if (!env('RESEND_API_KEY')) {
  add('Resend', false, 'RESEND_API_KEY not set')
} else {
  try {
    const r = await fetch('https://api.resend.com/domains', {
      headers: { Authorization: `Bearer ${env('RESEND_API_KEY')}` },
      signal: AbortSignal.timeout(15000),
    })
    if (r.status === 401) {
      const body = await r.text()
      /* a send-only key cannot list domains -- that is correct least
         privilege, not a broken key */
      const restricted = body.includes('restricted')
      add('Resend', restricted, restricted ? 'key valid (send-only scope)' : 'key rejected')
    } else if (r.ok) {
      const body = (await r.json()) as { data?: { name: string; status: string }[] }
      const domains = body.data || []
      const verified = domains.filter((d) => d.status === 'verified')
      add(
        'Resend',
        true,
        verified.length
          ? `sending from ${verified.map((d) => d.name).join(', ')}`
          : 'key valid — no verified domain, so delivery is limited to your own address'
      )
    } else {
      add('Resend', false, `HTTP ${r.status}`)
    }
  } catch (e) {
    add('Resend', false, (e as Error).message.slice(0, 60))
  }
}

/* ---------- Cloudinary ---------- */
const cloud = env('CLOUDINARY_CLOUD_NAME')
const ckey = env('CLOUDINARY_API_KEY')
const csec = env('CLOUDINARY_API_SECRET')
if (!cloud || !ckey || !csec) {
  add('Cloudinary', false, 'cloud name, key or secret not set')
} else {
  try {
    const auth = Buffer.from(`${ckey}:${csec}`).toString('base64')
    const r = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/ping`, {
      headers: { Authorization: `Basic ${auth}` },
      signal: AbortSignal.timeout(15000),
    })
    const body = await r.text()
    add('Cloudinary', r.ok, r.ok ? `cloud "${cloud}" reachable` : body.slice(0, 60))
  } catch (e) {
    add('Cloudinary', false, (e as Error).message.slice(0, 60))
  }
}

/* ---------- secrets that need no account ---------- */
for (const [key, label, check] of [
  ['SESSION_SECRET', 'Session secret', (v: string) => v.length >= 32],
  ['DOC_VERIFY_SECRET', 'Document QR secret', (v: string) => v.length >= 32],
  ['PII_KEY', 'PII encryption key', (v: string) => /^[0-9a-f]{64}$/i.test(v)],
  ['PII_PEPPER', 'Mobile hash pepper', (v: string) => v.length >= 32],
  ['CRON_SECRET', 'Cron secret', (v: string) => v.length >= 32],
] as [string, string, (v: string) => boolean][]) {
  const v = env(key)
  add(label, Boolean(v) && check(v), v ? (check(v) ? 'set' : 'set but wrong shape') : 'not set')
}

/* ---------- optional ---------- */
add(
  'Razorpay',
  true,
  env('RAZORPAY_KEY_ID') ? 'configured' : 'not configured — donations run on the free UPI path'
)

/* ---------- report ---------- */
console.log()
for (const r of results) {
  console.log(`  ${r.ok ? 'ok  ' : 'FAIL'}  ${r.name.padEnd(20)} ${r.detail}`)
}
const failed = results.filter((r) => !r.ok)
console.log(`\n${results.length - failed.length}/${results.length} healthy`)
process.exit(failed.length ? 1 : 0)
