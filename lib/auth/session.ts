import { SignJWT, jwtVerify } from 'jose'
import { required } from '@/lib/env'

/* Signed session cookies for the two kinds of person who log in.

   Staff sign in with an email and password and get 8 hours. Members will
   sign in with an OTP and get 30 days. They are different enough — different
   credentials, different lifetimes, different tables — that one library's
   idea of "a session" would have to be bent to fit both, so this is a couple
   of small functions instead.

   The token is verified in middleware, which runs on the Edge runtime and
   therefore cannot reach MongoDB. That is why the role travels inside the
   token: middleware can answer "is this a signed-in admin?" without a
   database. Anything finer-grained, and anything that must respect a
   revoked session, is checked again in the route handler. */

export type SessionKind = 'admin' | 'member'

export type SessionClaims = {
  /** the admin user or member id */
  sub: string
  kind: SessionKind
  role?: string
  /** session id, so a single session can be revoked without changing the secret */
  sid: string
}

export const COOKIE_NAME = 'sdmkf_session'

const TTL: Record<SessionKind, number> = {
  admin: 8 * 60 * 60,
  member: 30 * 24 * 60 * 60,
}

function secret(): Uint8Array {
  return new TextEncoder().encode(required('SESSION_SECRET'))
}

export async function signSession(claims: SessionClaims): Promise<string> {
  return new SignJWT({ kind: claims.kind, role: claims.role, sid: claims.sid })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(claims.sub)
    .setIssuedAt()
    .setExpirationTime(`${TTL[claims.kind]}s`)
    .sign(secret())
}

export async function verifySession(token: string): Promise<SessionClaims | null> {
  try {
    const { payload } = await jwtVerify(token, secret(), { algorithms: ['HS256'] })
    if (!payload.sub || !payload.sid || !payload.kind) return null
    return {
      sub: String(payload.sub),
      kind: payload.kind as SessionKind,
      role: payload.role as string | undefined,
      sid: String(payload.sid),
    }
  } catch {
    /* expired, tampered with, or signed by a rotated secret */
    return null
  }
}

export function cookieOptions(kind: SessionKind) {
  return {
    httpOnly: true,
    /* Secure would make the cookie unusable over plain http://localhost */
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: TTL[kind],
  }
}

export const sessionTtlSeconds = (kind: SessionKind) => TTL[kind]
