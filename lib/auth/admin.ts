import { createHash, randomBytes } from 'node:crypto'
import { cookies } from 'next/headers'
import { ObjectId } from 'mongodb'
import bcrypt from 'bcryptjs'
import { collections, type AdminRole, type AdminUser } from '@/lib/db/collections'
import { COOKIE_NAME, sessionTtlSeconds, signSession, verifySession } from './session'

/* Node-only half of admin auth: password hashing, session records and the
   guard used inside route handlers. Kept apart from session.ts because
   middleware runs on the Edge runtime, where bcrypt and the Mongo driver do
   not exist. */

const ROUNDS = 12

export const hashPassword = (plain: string) => bcrypt.hash(plain, ROUNDS)
export const checkPassword = (plain: string, hash: string) => bcrypt.compare(plain, hash)

/* The session id is stored hashed. A leaked database dump then contains no
   cookie anyone can replay -- the same reason passwords are not stored
   either. */
const hashSid = (sid: string) => createHash('sha256').update(sid).digest('hex')

export async function createAdminSession(user: AdminUser, ip?: string, ua?: string) {
  const sid = randomBytes(24).toString('base64url')
  const sessions = await collections.sessions()

  await sessions.insertOne({
    _id: hashSid(sid),
    kind: 'admin',
    subjectId: user._id!,
    expiresAt: new Date(Date.now() + sessionTtlSeconds('admin') * 1000),
    ip,
    ua,
    createdAt: new Date(),
  })

  return signSession({ sub: String(user._id), kind: 'admin', role: user.role, sid })
}

export async function revokeSession(sid: string) {
  const sessions = await collections.sessions()
  await sessions.deleteOne({ _id: hashSid(sid) })
}

export type AdminContext = { user: AdminUser; sid: string }

/**
 * The signed-in admin, or null.
 *
 * Middleware has already checked the signature, but it could not check
 * whether the session was revoked or the account disabled — Edge cannot reach
 * the database. So that is checked here, on every request that matters.
 */
export async function currentAdmin(): Promise<AdminContext | null> {
  const token = (await cookies()).get(COOKIE_NAME)?.value
  if (!token) return null

  const claims = await verifySession(token)
  if (!claims || claims.kind !== 'admin') return null

  const sessions = await collections.sessions()
  const session = await sessions.findOne({ _id: hashSid(claims.sid) })
  if (!session || session.revokedAt) return null

  const users = await collections.adminUsers()
  const user = await users.findOne({ _id: new ObjectId(claims.sub) })
  if (!user || !user.active) return null

  return { user, sid: claims.sid }
}

/** Throws unless a signed-in admin holds one of the given roles. */
export async function requireAdmin(roles?: AdminRole[]): Promise<AdminContext> {
  const ctx = await currentAdmin()
  if (!ctx) throw new AuthError('Not signed in', 401)
  if (roles && !roles.includes(ctx.user.role) && ctx.user.role !== 'super_admin') {
    throw new AuthError('Not allowed', 403)
  }
  return ctx
}

export class AuthError extends Error {
  constructor(
    message: string,
    public status: number
  ) {
    super(message)
  }
}
