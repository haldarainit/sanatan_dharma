import { z } from 'zod'
import { isValidMobile, normaliseMobile } from './mobile'

/* What the server will accept from the public forms.

   The browser already validates with checkRequired() in
   components/portals/fields.tsx, and that stays — it is what gives someone a
   useful message next to the field they got wrong. But it runs in the
   browser, so it is a courtesy, not a control: anyone can POST straight to
   the endpoint. These schemas are the actual boundary. */

/* Stored as ten bare digits however it was typed. The normaliser and its
   tests live in ./mobile — a leading 0 is how a great many people write
   their number, and rejecting it reads to them as "the site is broken". */
const mobile = z
  .string()
  .refine(isValidMobile, 'Enter a valid 10-digit mobile number')
  .transform(normaliseMobile)

const email = z.string().trim().toLowerCase().email('Enter a valid email address')

const name = z
  .string()
  .trim()
  .min(2, 'Enter your name')
  .max(120, 'That name is too long')

/* Free text that ends up in an admin's inbox and, for complaints, possibly in
   front of a lawyer. Bounded so a single submission cannot fill the database. */
const longText = (max: number, label: string) =>
  z.string().trim().min(5, `Please write a little more in ${label}`).max(max)

/* Present on every public submission. The honeypot must stay empty and the
   form must not have been completed impossibly fast — see lib/anti-spam.ts. */
const envelope = {
  /* The honeypot is NOT rejected here. A validation error naming the field
     tells a bot the field is a trap; lib/anti-spam.ts drops the submission
     silently instead, and the caller sees an ordinary success. */
  website: z.string().optional(),
  startedAt: z.coerce.number().optional(),
}

export const helpSchema = z.object({
  kind: z.literal('help'),
  name,
  mobile,
  email: email.optional().or(z.literal('')),
  declaration: z.literal(true, { message: 'Please accept the declaration' }),
  ...envelope,
})

export const inquirySchema = z.object({
  kind: z.literal('inquiry'),
  name,
  mobile,
  email,
  purpose: z.string().trim().min(1, 'Choose a purpose'),
  message: longText(4000, 'your message'),
  terms: z.literal(true, { message: 'Please accept the terms' }),
  consent: z.literal(true, { message: 'Please agree to be contacted' }),
  ...envelope,
})

export const complaintSchema = z.object({
  kind: z.literal('complaint'),
  name,
  mobile,
  email: email.optional().or(z.literal('')),
  category: z.string().trim().min(1, 'Choose a category'),
  priority: z.string().trim().min(1, 'Choose a priority'),
  subject: z.string().trim().min(3, 'Enter a subject').max(200),
  detail: longText(8000, 'the details'),
  proofFileId: z.string().trim().optional(),
  truth: z.literal(true, { message: 'Please confirm the information is true' }),
  terms: z.literal(true, { message: 'Please accept the terms' }),
  ...envelope,
})

/* The remaining kinds reuse the same envelope; their own fields land in
   `payload` and are added as each dead form is rebuilt. */
export const partnerSchema = z.object({
  kind: z.enum(['csr_partner', 'seva_partner', 'fundraiser', 'callback', 'report_fake_id']),
  name,
  mobile,
  email: email.optional().or(z.literal('')),
  subject: z.string().trim().max(200).optional(),
  detail: z.string().trim().max(8000).optional(),
  payload: z.record(z.string(), z.unknown()).optional(),
  ...envelope,
})

export const ticketSchema = z.discriminatedUnion('kind', [
  helpSchema,
  inquirySchema,
  complaintSchema,
  partnerSchema,
])

export type TicketInput = z.infer<typeof ticketSchema>

/** Turn Zod's issues into `{ field: message }`, which is what the forms render. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {}
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? 'form')
    if (!out[key]) out[key] = issue.message
  }
  return out
}

/* The status a ticket starts in, and what may follow, per kind. Taken from
   the tables already published on the site in lib/portal-content.ts — they
   have been shown to visitors all along with nothing writing them. */
export const STATUS_FLOW: Record<string, string[]> = {
  help: [
    'Submitted', 'Under Review', 'Verification in Progress', 'Approved',
    'Assistance in Process', 'Completed', 'Closed', 'Rejected',
  ],
  complaint: [
    'Submitted', 'Under Review', 'Verification in Progress', 'Action Initiated',
    'Resolved', 'Closed', 'Rejected',
  ],
  default: ['Submitted', 'Under Review', 'Resolved', 'Closed', 'Rejected'],
}

export const flowFor = (kind: string) => STATUS_FLOW[kind] ?? STATUS_FLOW.default

/** How long each kind should take, in hours — drives the SLA flag in admin. */
export const SLA_HOURS: Record<string, number> = {
  complaint: 24,
  help: 48,
  inquiry: 48,
  callback: 24,
  report_fake_id: 24,
  csr_partner: 72,
  seva_partner: 72,
  fundraiser: 72,
}
