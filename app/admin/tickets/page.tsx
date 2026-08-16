import { redirect } from 'next/navigation'
import { currentAdmin } from '@/lib/auth/admin'
import Shell from '../_components/Shell'
import { EmptyState, SectionHeading } from '../_components/ui'

export const dynamic = 'force-dynamic'

export default async function RequestsPage() {
  const ctx = await currentAdmin()
  if (!ctx) redirect('/admin/login')

  return (
    <Shell name={ctx.user.name} role={ctx.user.role}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Requests" />
        <EmptyState
          title="Not connected yet"
          body="One inbox for every enquiry, help request, complaint and partnership approach the site receives, each with its own tracking number."
        />
      </div>
    </Shell>
  )
}
