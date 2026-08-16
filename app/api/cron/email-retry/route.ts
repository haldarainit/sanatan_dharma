import { NextResponse, type NextRequest } from 'next/server'
import { apiError } from '@/lib/api'
import { retryQueued } from '@/lib/email/send'
import { env } from '@/lib/env'

/* Drains the email outbox. Called by cron-job.org every five minutes.
 *
 * Vercel's own cron is limited to one run a day on the free plan, which is
 * useless for retrying a failed receipt, so scheduling lives outside and this
 * endpoint is the thing it pokes.
 *
 * Idempotent and safe to call at any time: it only picks up rows that are due,
 * and marks each one before moving on. A missed run costs nothing; the next
 * one catches up.
 */

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

function authorised(req: NextRequest): boolean {
  const secret = env.CRON_SECRET
  if (!secret) return false
  const given =
    req.headers.get('x-cron-secret') ||
    req.headers.get('authorization')?.replace(/^Bearer\s+/i, '') ||
    req.nextUrl.searchParams.get('key') ||
    ''
  return given === secret
}

async function run(req: NextRequest) {
  /* 404 rather than 401: an unauthenticated caller should not learn that
     there is a cron endpoint here at all. */
  if (!authorised(req)) return NextResponse.json({ error: 'Not found' }, { status: 404 })

  try {
    const result = await retryQueued(25)
    return NextResponse.json({ ok: true, ...result, at: new Date().toISOString() })
  } catch (err) {
    return apiError(err, 'Retry run failed')
  }
}

/* cron-job.org sends GET by default; POST is accepted so the schedule can be
   configured either way without anyone having to remember which. */
export const GET = run
export const POST = run
