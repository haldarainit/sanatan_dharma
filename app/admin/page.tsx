import { redirect } from 'next/navigation'
import { currentAdmin } from '@/lib/auth/admin'
import { collections } from '@/lib/db/collections'
import Shell from './_components/Shell'
import { Alert } from './_components/icons'
import { Card, EmptyState, SectionHeading, StatTile, inr } from './_components/ui'

export const dynamic = 'force-dynamic'

async function loadStats() {
  const [tickets, members, donations, payments, documents] = await Promise.all([
    collections.tickets(),
    collections.members(),
    collections.donations(),
    collections.payments(),
    collections.documents(),
  ])

  const monthStart = new Date()
  monthStart.setDate(1)
  monthStart.setHours(0, 0, 0, 0)

  const [
    awaitingPayments, pendingMembers, openTickets,
    activeMembers, paidDonations, issuedDocs, monthAgg,
  ] = await Promise.all([
    payments.countDocuments({ status: 'reported' }),
    members.countDocuments({ status: { $in: ['under_review', 'payment_review'] } }),
    tickets.countDocuments({ status: { $nin: ['Closed', 'Resolved', 'Rejected'] } }),
    members.countDocuments({ status: 'active' }),
    donations.countDocuments({ status: 'paid' }),
    documents.countDocuments({ status: 'issued' }),
    donations
      .aggregate<{ total: number }>([
        { $match: { status: 'paid', createdAt: { $gte: monthStart } } },
        { $group: { _id: null, total: { $sum: '$amount' } } },
      ])
      .toArray(),
  ])

  return {
    awaitingPayments, pendingMembers, openTickets,
    activeMembers, paidDonations, issuedDocs,
    monthPaise: monthAgg[0]?.total ?? 0,
  }
}

export default async function AdminDashboard() {
  /* Middleware verified the cookie's signature on the Edge, where it cannot
     reach the database. This is where a revoked session or a disabled
     account is caught. */
  const ctx = await currentAdmin()
  if (!ctx) redirect('/admin/login')

  const s = await loadStats()
  const needsAttention = s.awaitingPayments + s.pendingMembers + s.openTickets
  const nothingYet = needsAttention + s.paidDonations + s.activeMembers === 0

  return (
    <Shell name={ctx.user.name} role={ctx.user.role}>
      <div className="mx-auto max-w-6xl">
        {needsAttention > 0 && (
          <Card className="mb-5 flex items-start gap-3 border-orange-200 bg-orange-50/60 p-4">
            <Alert className="mt-0.5 h-5 w-5 shrink-0 text-[#c44800]" />
            <div>
              <p className="text-sm font-semibold text-slate-900">
                {needsAttention} {needsAttention === 1 ? 'item needs' : 'items need'} your attention
              </p>
              <p className="mt-0.5 text-xs text-slate-600">
                Payments awaiting verification hold up a donor&apos;s receipt, so clear those first.
              </p>
            </div>
          </Card>
        )}

        <SectionHeading title="Needs action" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <StatTile
            label="Payments to verify"
            value={s.awaitingPayments}
            hint="no receipt is issued until you approve"
            tone="action"
            href="/admin/donations"
          />
          <StatTile
            label="Membership queue"
            value={s.pendingMembers}
            hint="applications awaiting review"
            tone="action"
            href="/admin/members"
          />
          <StatTile
            label="Open requests"
            value={s.openTickets}
            hint="enquiries, help and complaints"
            tone="action"
            href="/admin/tickets"
          />
        </div>

        <div className="mt-7">
          <SectionHeading title="This month" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <StatTile label="Received" value={inr(s.monthPaise)} hint="verified donations" />
            <StatTile label="Donations" value={s.paidDonations} hint="all time" />
            <StatTile label="Active members" value={s.activeMembers} />
            <StatTile
              label="Documents issued"
              value={s.issuedDocs}
              hint="receipts and ID cards"
              href="/admin/documents"
            />
          </div>
        </div>

        {nothingYet && (
          <div className="mt-7">
            <EmptyState
              title="Nothing has come in yet"
              body="The database is connected and every number above is live. Records will start appearing here as the site's forms are connected — donations, membership applications, enquiries and complaints."
            />
          </div>
        )}
      </div>
    </Shell>
  )
}
