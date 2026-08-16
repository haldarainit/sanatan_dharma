import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'
import { collections } from '@/lib/db/collections'
import { checkPassword, createAdminSession } from '@/lib/auth/admin'
import { COOKIE_NAME, cookieOptions } from '@/lib/auth/session'
import { rateLimit } from '@/lib/rate-limit'
import { apiError } from '@/lib/api'

/* The root layout sets revalidate = 60, and that value is inherited by route
   handlers underneath it. Without these two lines a login response could be
   served from cache. */
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'

  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Enter an email and password' }, { status: 400 })
  }
  const { email, password } = parsed.data

  try {
    /* Limited per email and per IP: per email so one account cannot be ground
       down, per IP so one attacker cannot spread the attempts across many. */
    const byEmail = await rateLimit(`login:email:${email.toLowerCase()}`, 5, 15 * 60)
    const byIp = await rateLimit(`login:ip:${ip}`, 20, 15 * 60)
    if (!byEmail.ok || !byIp.ok) {
      return NextResponse.json(
        { error: 'Too many attempts. Try again in a few minutes.' },
        { status: 429 }
      )
    }

    const users = await collections.adminUsers()
    const user = await users.findOne({ email: email.toLowerCase() })

    /* Same response and roughly the same work whether the account exists or
       not, so this cannot be used to discover who has an account. */
    const ok = user ? await checkPassword(password, user.passwordHash) : false
    if (!user || !ok || !user.active) {
      return NextResponse.json({ error: 'Wrong email or password' }, { status: 401 })
    }

    const token = await createAdminSession(user, ip, req.headers.get('user-agent') ?? undefined)
    await users.updateOne({ _id: user._id }, { $set: { lastLoginAt: new Date() } })

    const res = NextResponse.json({ ok: true, name: user.name, role: user.role })
    res.cookies.set(COOKIE_NAME, token, cookieOptions('admin'))
    return res
  } catch (err) {
    return apiError(err, 'Could not sign in right now')
  }
}
