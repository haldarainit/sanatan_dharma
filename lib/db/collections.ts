import type { Collection, Document, ObjectId } from 'mongodb'
import { getDb } from './client'

/* The shape of every record the foundation keeps.

   Two rules run through all of it:

   1. Money is stored as an integer number of paise. A float cannot hold
      ₹5,001.50 exactly, and a receipt that disagrees with the bank by a paisa
      is a receipt the auditor stops trusting.
   2. Personal data is written here and nowhere else. Sanity holds the words
      on the pages; this holds the people. */

export type Paise = number

/* ---------- shared ---------- */

export type Counter = { _id: string; seq: number }

/** A mobile number, kept twice: hashed for lookup, plain for contacting. */
export type Contact = {
  name: string
  /** lowercased and space-collapsed, so admin search works */
  searchName: string
  mobile: string
  /** HMAC(mobile, PII_PEPPER) — lets us find a person without a searchable plaintext index */
  mobileHash: string
  whatsapp?: string
  email?: string
}

export type Consent = {
  declaration?: boolean
  pledge?: boolean
  terms?: boolean
  contactOk?: boolean
  at: Date
  ip?: string
  ua?: string
}

export type StatusEvent = {
  status: string
  at: Date
  byAdminId?: ObjectId
  note?: string
}

/* ---------- tickets: every "get in touch" on the site ---------- */

/* One collection rather than seven. They differ only in payload; they share a
   lifecycle, a tracking number, attachments, assignment and an SLA. One
   collection means one admin queue and — the reason that matters to a
   visitor — one box where any number the site ever gave them can be looked
   up, without having to remember which kind of thing it was. */
export type TicketKind =
  | 'inquiry'
  | 'help'
  | 'complaint'
  | 'callback'
  | 'csr_partner'
  | 'seva_partner'
  | 'fundraiser'
  | 'report_fake_id'

export type Ticket = {
  _id?: ObjectId
  ticketNo: string
  kind: TicketKind
  contact: Contact
  subject?: string
  category?: string
  priority?: 'normal' | 'high' | 'urgent'
  details?: string
  /** the fields unique to this kind, validated by its own schema at the API edge */
  payload: Document
  attachments: ObjectId[]
  status: string
  statusHistory: StatusEvent[]
  /** what the person is allowed to see when they track it */
  publicUpdates: { at: Date; text: string }[]
  internalNotes: { at: Date; byAdminId: ObjectId; text: string }[]
  assignedToAdminId?: ObjectId
  sla?: { dueAt: Date; breachedAt?: Date }
  linkedMemberId?: ObjectId
  linkedDonationId?: ObjectId
  consent: Consent
  createdAt: Date
  updatedAt: Date
}

/* ---------- members ---------- */

export type MemberStatus =
  | 'pending_payment'
  | 'payment_review'
  | 'under_review'
  | 'active'
  | 'rejected'
  | 'expired'
  | 'suspended'

export type Member = {
  _id?: ObjectId
  /** allocated at submission — an application always has a number to quote */
  applicationNo: string
  /** allocated only at activation, so an abandoned form never burns one */
  memberNo?: string
  categoryId: string
  level: 'Local' | 'District' | 'State' | 'National'
  /** the fee row's label — this is what prints on the ID card */
  designation: string
  gender: 'male' | 'female'
  fullName: string
  searchName: string
  fatherOrHusbandName: string
  dob?: string
  contact: Contact
  address: {
    line1: string
    post: string
    city: string
    district: string
    state: string
    stateCode: string
    pincode: string
  }
  interests: string[]
  interestOther?: string
  availability: string[]
  skills: string[]
  skillOther?: string
  reason?: string
  /* The ID card back prints a blood group and an emergency number that no
     form on the site collected — both are added to the membership form. */
  idCard: {
    wanted: boolean
    bloodGroup?: string
    emergencyName?: string
    emergencyMobile?: string
  }
  files: { photoId?: ObjectId; idProofId?: ObjectId }
  /** frozen at submission, so a later price change cannot alter a paid application */
  feeSnapshot: { level: string; label: string; base: Paise; withId: Paise; amount: Paise }
  paymentId?: ObjectId
  status: MemberStatus
  statusHistory: StatusEvent[]
  validFrom?: Date
  validTo?: Date
  referrerMemberNo?: string
  consent: Consent
  createdAt: Date
  updatedAt: Date
}

/* ---------- money ---------- */

export type PaymentKind =
  | 'razorpay'
  | 'upi_manual'
  | 'bank_transfer'
  | 'cheque'
  | 'dd'
  | 'cash'
  | 'in_kind'

export type PaymentStatus =
  | 'created'
  | 'attempted'
  | 'captured'
  | 'reported'
  | 'verified'
  | 'rejected'
  | 'failed'

export type Payment = {
  _id?: ObjectId
  kind: PaymentKind
  status: PaymentStatus
  amount: Paise
  currency: 'INR'
  purposeRef: { type: 'donation' | 'membership'; id: ObjectId }
  razorpay?: {
    orderId?: string
    paymentId?: string
    signature?: string
    method?: string
    capturedAt?: Date
  }
  manual?: {
    utr?: string
    paidOn?: Date
    bankName?: string
    chequeNo?: string
    clearedOn?: Date
    screenshotId?: ObjectId
    reportedName?: string
    reportedMobile?: string
  }
  inKind?: { description: string; estimatedValue?: Paise; deliveryStatus?: string }
  /** who approved it, for anything not confirmed by a gateway webhook */
  verifiedByAdminId?: ObjectId
  verifiedAt?: Date
  rejectionReason?: string
  receiptDocumentId?: ObjectId
  createdAt: Date
  updatedAt: Date
}

export type Donation = {
  _id?: ObjectId
  trackingNo: string
  donor: Contact & {
    city?: string
    state?: string
    address?: string
    /** encrypted at rest; panLast4 is kept clear so routine admin work never decrypts */
    panEncrypted?: string
    panLast4?: string
  }
  amount: Paise
  frequency: string
  purpose: string
  message?: string
  claim80g: boolean
  anonymous: boolean
  campaignId?: ObjectId
  paymentId?: ObjectId
  receiptDocumentId?: ObjectId
  eightyGDocumentId?: ObjectId
  status: 'pending' | 'paid' | 'failed' | 'refunded'
  consent: Consent
  createdAt: Date
  updatedAt: Date
}

/* ---------- issued artefacts ---------- */

export type DocType =
  | 'donation_receipt'
  | '80g_certificate'
  | 'id_card'
  | 'membership_certificate'
  | 'appointment_letter'
  | 'goods_receipt'

/* One collection for everything the foundation issues, so the public
   verifier is a single query rather than a five-way switch — and so a
   document can be revoked without touching the record it describes. */
export type IssuedDocument = {
  _id?: ObjectId
  docType: DocType
  number: string
  subject: { type: 'member' | 'donation' | 'payment'; id: ObjectId }
  /** every value that was printed, frozen — the record may change, the paper may not */
  snapshot: Document
  fileKey?: string
  fileSha256?: string
  bytes?: number
  status: 'issued' | 'revoked' | 'superseded'
  revokedAt?: Date
  revokedReason?: string
  supersededByDocumentId?: ObjectId
  issuedAt: Date
  issuedByAdminId?: ObjectId
  validFrom?: Date
  validTo?: Date
  emailedTo: { address: string; at: Date }[]
}

/* ---------- supporting ---------- */

export type StoredFile = {
  _id?: ObjectId
  key: string
  provider: 'cloudinary'
  mime: string
  bytes: number
  sha256: string
  kind: 'photo' | 'id_proof' | 'payment_proof' | 'complaint_proof' | 'document'
  /** ID proofs are never publicly reachable — served only via short-lived signed URLs */
  private: boolean
  linkedTo?: { type: string; id: ObjectId }
  createdAt: Date
}

export type AdminRole =
  | 'super_admin'
  | 'finance'
  | 'membership'
  | 'support'
  | 'vigilance'
  | 'viewer'

export type AdminUser = {
  _id?: ObjectId
  email: string
  name: string
  passwordHash: string
  role: AdminRole
  active: boolean
  lastLoginAt?: Date
  createdAt: Date
}

export type Session = {
  /** SHA-256 of the session id, so a leaked database dump cannot be replayed */
  _id: string
  kind: 'admin' | 'member'
  subjectId: ObjectId
  expiresAt: Date
  revokedAt?: Date
  ip?: string
  ua?: string
  createdAt: Date
}

export type Otp = {
  _id?: ObjectId
  channel: 'email' | 'sms'
  target: string
  codeHash: string
  purpose: string
  attempts: number
  expiresAt: Date
  consumedAt?: Date
  createdAt: Date
}

/** Written before the send is attempted, so a crashed function loses nothing. */
export type OutboundEmail = {
  _id?: ObjectId
  to: string
  template: string
  payload: Document
  attachments: ObjectId[]
  status: 'queued' | 'sent' | 'failed' | 'dead'
  providerId?: string
  attempts: number
  nextAttemptAt?: Date
  lastError?: string
  createdAt: Date
  sentAt?: Date
}

/** `_id` is the provider's event id, so a replayed webhook is a duplicate-key error. */
export type WebhookEvent = {
  _id: string
  provider: 'razorpay' | 'resend'
  receivedAt: Date
  processedAt?: Date
  payload: Document
}

export type AuditLog = {
  _id?: ObjectId
  actor: { type: 'admin' | 'system' | 'public'; id?: ObjectId; email?: string }
  action: string
  targetType: string
  targetId?: ObjectId | string
  before?: Document
  after?: Document
  ip?: string
  ua?: string
  at: Date
}

export type RateLimit = {
  _id: string
  hits: number
  expiresAt: Date
}

export type Subscriber = {
  _id?: ObjectId
  email?: string
  mobile?: string
  channels: ('email' | 'whatsapp')[]
  source: string
  confirmed: boolean
  confirmToken?: string
  unsubToken: string
  createdAt: Date
}

/* ---------- accessors ---------- */

async function col<T extends Document>(name: string): Promise<Collection<T>> {
  const db = await getDb()
  return db.collection<T>(name)
}

export const collections = {
  counters: () => col<Counter>('counters'),
  tickets: () => col<Ticket>('tickets'),
  members: () => col<Member>('members'),
  donations: () => col<Donation>('donations'),
  payments: () => col<Payment>('payments'),
  documents: () => col<IssuedDocument>('documents'),
  files: () => col<StoredFile>('files'),
  adminUsers: () => col<AdminUser>('adminUsers'),
  sessions: () => col<Session>('sessions'),
  otps: () => col<Otp>('otps'),
  emailOutbox: () => col<OutboundEmail>('emailOutbox'),
  webhookEvents: () => col<WebhookEvent>('webhookEvents'),
  auditLogs: () => col<AuditLog>('auditLogs'),
  rateLimits: () => col<RateLimit>('rateLimits'),
  subscribers: () => col<Subscriber>('subscribers'),
}
