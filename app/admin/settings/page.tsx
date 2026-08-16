import { redirect } from 'next/navigation'
import { currentAdmin } from '@/lib/auth/admin'
import Shell from '../_components/Shell'
import { EmptyState, SectionHeading } from '../_components/ui'

export const dynamic = 'force-dynamic'

export default async function SettingsPage() {
  const ctx = await currentAdmin()
  if (!ctx) redirect('/admin/login')

  return (
    <Shell name={ctx.user.name} role={ctx.user.role}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Settings" />
        <EmptyState
          title="Not connected yet"
          body="Organisation details printed on receipts, staff accounts and their roles, and the email templates that go out."
        />
      </div>
    </Shell>
  )
}
