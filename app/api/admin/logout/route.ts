import { NextResponse } from 'next/server'
import { currentAdmin, revokeSession } from '@/lib/auth/admin'
import { COOKIE_NAME } from '@/lib/auth/session'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST() {
  /* Delete the session row as well as the cookie, so a copy of the cookie
     taken beforehand is dead too. */
  const ctx = await currentAdmin()
  if (ctx) await revokeSession(ctx.sid)

  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE_NAME, '', { path: '/', maxAge: 0 })
  return res
}
