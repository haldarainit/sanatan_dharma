import { NextResponse, type NextRequest } from 'next/server'
import { env } from '@/lib/env'
import { getDb } from '@/lib/db/client'

/* Answers "what is actually wrong on the server" without anyone having to
   read a deploy log.

   Protected by CRON_SECRET, because the reply names which services are
   configured and how they fail — useful to an operator, and a map to
   anyone else. Never returns a credential, only whether one is present and
   whether the service accepted it. */

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET(req: NextRequest) {
  const secret = env.CRON_SECRET
  const given =
    req.headers.get('x-cron-secret') || req.nextUrl.searchParams.get('key') || ''

  if (!secret || given !== secret) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 })
  }

  const checks: Record<string, { ok: boolean; detail: string }> = {}

  /* --- database: the one that actually stops the panel working --- */
  if (!env.MONGODB_URI) {
    checks.mongodb = { ok: false, detail: 'MONGODB_URI is not set' }
  } else {
    const started = Date.now()
    try {
      const db = await getDb()
      await db.command({ ping: 1 })
      const names = (await db.listCollections().toArray()).length
      checks.mongodb = {
        ok: true,
        detail: `connected in ${Date.now() - started}ms, ${names} collections`,
      }
    } catch (err) {
      const message = (err as Error).message.split('\n')[0]
      /* The commonest cause by far, and one the message does not spell out:
         Atlas rejects the connection when the caller's IP is not allowlisted,
         and Vercel's outbound addresses are dynamic. */
      const looksLikeAllowlist =
        /Server selection timed out|ETIMEDOUT|ECONNREFUSED|no primary|ReplicaSetNoPrimary/i.test(
          message
        )
      checks.mongodb = {
        ok: false,
        detail: looksLikeAllowlist
          ? `${message.slice(0, 90)} — this usually means Atlas is not allowing the connection. ` +
            'Network Access must include 0.0.0.0/0 for a serverless host.'
          : message.slice(0, 140),
      }
    }
  }

  /* --- everything else is only needed by features, not by signing in --- */
  checks.resend = {
    ok: Boolean(env.RESEND_API_KEY),
    detail: env.RESEND_API_KEY ? `sending as ${env.EMAIL_FROM}` : 'RESEND_API_KEY is not set',
  }
  checks.cloudinary = {
    ok: Boolean(env.CLOUDINARY_CLOUD_NAME && env.CLOUDINARY_API_KEY && env.CLOUDINARY_API_SECRET),
    detail: env.CLOUDINARY_CLOUD_NAME ? `cloud "${env.CLOUDINARY_CLOUD_NAME}"` : 'not configured',
  }
  for (const [key, label] of [
    ['SESSION_SECRET', 'sessions'],
    ['DOC_VERIFY_SECRET', 'document QR signing'],
    ['PII_KEY', 'PII encryption'],
    ['PII_PEPPER', 'mobile hashing'],
  ] as [keyof typeof env, string][]) {
    checks[label] = {
      ok: Boolean(env[key]),
      detail: env[key] ? 'set' : `${key} is not set`,
    }
  }
  checks.siteUrl = {
    ok: !env.NEXT_PUBLIC_SITE_URL.includes('localhost'),
    detail: env.NEXT_PUBLIC_SITE_URL.includes('localhost')
      ? `${env.NEXT_PUBLIC_SITE_URL} — receipt QR codes would point at localhost`
      : env.NEXT_PUBLIC_SITE_URL,
  }

  const failed = Object.entries(checks).filter(([, v]) => !v.ok)
  return NextResponse.json(
    { healthy: failed.length === 0, failing: failed.map(([k]) => k), checks },
    { status: failed.length ? 503 : 200 }
  )
}
