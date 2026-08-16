import { redirect } from 'next/navigation'
import { currentAdmin } from '@/lib/auth/admin'
import Shell from '../_components/Shell'
import { EmptyState, SectionHeading } from '../_components/ui'

export const dynamic = 'force-dynamic'

export default async function DonationsPage() {
  const ctx = await currentAdmin()
  if (!ctx) redirect('/admin/login')

  return (
    <Shell name={ctx.user.name} role={ctx.user.role}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Donations" />
        <EmptyState
          title="Not connected yet"
          body="Every donation, online or offline, with the payment behind it. Verify a bank transfer or cheque here and the 80G receipt is generated and emailed automatically — and never before."
        />
      </div>
    </Shell>
  )
}
