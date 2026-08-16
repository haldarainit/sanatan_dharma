import { z } from 'zod'

/* Environment access for the backend.

   Everything is optional at load time on purpose. The marketing site has
   built and deployed for months without any of these, and it must keep doing
   so while the backend is being filled in -- a schema that throws on import
   would break `next build` the moment this file is committed.

   Instead a missing value fails at the point of use, with a message naming
   the variable and where to get it. Loud, but only for the feature that
   actually needs it. */

const schema = z.object({
  MONGODB_URI: z.string().optional(),
  MONGODB_DB: z.string().default('sanatan'),

  RESEND_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().default('onboarding@resend.dev'),
  EMAIL_REPLY_TO: z.string().optional(),
  ADMIN_NOTIFY_EMAIL: z.string().optional(),

  CLOUDINARY_CLOUD_NAME: z.string().optional(),
  CLOUDINARY_API_KEY: z.string().optional(),
  CLOUDINARY_API_SECRET: z.string().optional(),

  TURNSTILE_SECRET_KEY: z.string().optional(),
  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z.string().optional(),

  SESSION_SECRET: z.string().optional(),
  DOC_VERIFY_SECRET: z.string().optional(),
  /* AES-256 needs exactly 32 bytes, written as 64 hex characters */
  PII_KEY: z.string().regex(/^[0-9a-f]{64}$/i, 'PII_KEY must be 64 hex characters').optional(),
  PII_PEPPER: z.string().optional(),
  CRON_SECRET: z.string().optional(),

  NEXT_PUBLIC_SITE_URL: z.string().default('http://localhost:3000'),

  RAZORPAY_KEY_ID: z.string().optional(),
  RAZORPAY_KEY_SECRET: z.string().optional(),
  RAZORPAY_WEBHOOK_SECRET: z.string().optional(),
})

export type Env = z.infer<typeof schema>

const parsed = schema.safeParse(process.env)

if (!parsed.success) {
  /* Only reachable when a value is present but malformed -- a missing value
     is allowed above. Worth failing hard: a bad PII_KEY silently corrupts
     everything it encrypts. */
  const issues = parsed.error.issues.map((i) => `  ${i.path.join('.')}: ${i.message}`)
  throw new Error('Invalid environment variables:\n' + issues.join('\n'))
}

export const env = parsed.data

/* Where each variable comes from, so the error tells you what to do rather
   than just what is missing. */
const SOURCE: Partial<Record<keyof Env, string>> = {
  MONGODB_URI: 'MongoDB Atlas → Clusters → Connect → Drivers → Node.js',
  RESEND_API_KEY: 'Resend → API keys → Create API Key (Sending access)',
  CLOUDINARY_CLOUD_NAME: 'Cloudinary → gear icon → API Keys',
  CLOUDINARY_API_KEY: 'Cloudinary → gear icon → API Keys',
  CLOUDINARY_API_SECRET: 'Cloudinary → gear icon → API Keys',
  TURNSTILE_SECRET_KEY: 'Cloudflare → Turnstile → your widget → Secret Key',
  SESSION_SECRET: 'generate: node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'base64url\'))"',
  DOC_VERIFY_SECRET: 'generate: node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'base64url\'))"',
  PII_KEY: 'generate: node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'hex\'))"',
  PII_PEPPER: 'generate: node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'base64url\'))"',
  CRON_SECRET: 'generate: node -e "console.log(require(\'crypto\').randomBytes(32).toString(\'base64url\'))"',
  RAZORPAY_KEY_ID: 'Razorpay → Settings → API Keys (test mode is free)',
  RAZORPAY_KEY_SECRET: 'Razorpay → Settings → API Keys (test mode is free)',
  RAZORPAY_WEBHOOK_SECRET: 'Razorpay → Settings → Webhooks → the secret you chose',
}

/** Read a variable that the calling feature cannot work without. */
export function required<K extends keyof Env>(key: K): NonNullable<Env[K]> {
  const value = env[key]
  if (value === undefined || value === '') {
    const where = SOURCE[key]
    throw new Error(
      `${key} is not set in .env.local` + (where ? `\n  Get it from: ${where}` : '')
    )
  }
  return value as NonNullable<Env[K]>
}

/** Whether a feature is configured, for degrading gracefully rather than throwing. */
export const configured = {
  db: () => Boolean(env.MONGODB_URI),
  email: () => Boolean(env.RESEND_API_KEY),
  uploads: () =>
    Boolean(env.CLOUDINARY_CLOUD_NAME && env.CLOUDINARY_API_KEY && env.CLOUDINARY_API_SECRET),
  captcha: () => Boolean(env.TURNSTILE_SECRET_KEY && env.NEXT_PUBLIC_TURNSTILE_SITE_KEY),
  /* Razorpay ships off. The site takes donations over the free UPI path until
     the client decides the gateway's ~2% per transaction is worth paying. */
  razorpay: () => Boolean(env.RAZORPAY_KEY_ID && env.RAZORPAY_KEY_SECRET),
}
