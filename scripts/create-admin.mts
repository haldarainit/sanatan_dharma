/* Creates or updates a staff login.
 *
 *   npm run admin:create -- someone@example.org "Their Name" super_admin
 *
 * The password is generated and printed once. There is no password reset
 * flow yet, so re-running this for an existing email sets a new one.
 */
import { MongoClient } from 'mongodb'
import bcrypt from 'bcryptjs'
import { randomBytes } from 'node:crypto'
import { loadEnv } from './load-env.mts'

loadEnv()

const ROLES = ['super_admin', 'finance', 'membership', 'support', 'vigilance', 'viewer']

const [emailArg, nameArg, roleArg] = process.argv.slice(2)
const email = (emailArg || '').trim().toLowerCase()
const name = (nameArg || '').trim()
const role = (roleArg || 'super_admin').trim()

if (!email || !name) {
  console.error('usage: npm run admin:create -- <email> "<name>" [role]')
  console.error('roles: ' + ROLES.join(', '))
  process.exit(1)
}
if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
  console.error(`"${email}" is not an email address`)
  process.exit(1)
}
if (!ROLES.includes(role)) {
  console.error(`unknown role "${role}" — one of: ${ROLES.join(', ')}`)
  process.exit(1)
}
if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is not set in .env or .env.local')
  process.exit(1)
}

/* Readable but strong: 24 random base64url characters. Printed once. */
const password = randomBytes(18).toString('base64url')
const passwordHash = await bcrypt.hash(password, 12)

const client = new MongoClient(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 8000 })

try {
  await client.connect()
  const users = client.db(process.env.MONGODB_DB || 'sanatan').collection('adminUsers')

  const existing = await users.findOne({ email })
  await users.updateOne(
    { email },
    {
      $set: { email, name, role, passwordHash, active: true },
      $setOnInsert: { createdAt: new Date() },
    },
    { upsert: true }
  )

  console.log(`\n  ${existing ? 'Updated' : 'Created'} ${email}  (${role})`)
  console.log('\n  password:  ' + password)
  console.log('\n  Shown once — save it now, then sign in at /admin/login')
  console.log('  Change it by re-running this command.\n')
} catch (err) {
  console.error('failed:', (err as Error).message.split('\n')[0])
  process.exitCode = 1
} finally {
  await client.close()
}
