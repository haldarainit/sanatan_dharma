import { redirect } from 'next/navigation'
import { currentAdmin } from '@/lib/auth/admin'
import Shell from '../_components/Shell'
import { EmptyState, SectionHeading } from '../_components/ui'

export const dynamic = 'force-dynamic'

export default async function MembersPage() {
  const ctx = await currentAdmin()
  if (!ctx) redirect('/admin/login')

  return (
    <Shell name={ctx.user.name} role={ctx.user.role}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Members" />
        <EmptyState
          title="Not connected yet"
          body="Membership applications and approved members. Approving one allocates its permanent member number and issues the ID card."
        />
      </div>
    </Shell>
  )
}
