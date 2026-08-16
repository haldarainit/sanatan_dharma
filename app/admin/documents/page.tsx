import { redirect } from 'next/navigation'
import { currentAdmin } from '@/lib/auth/admin'
import Shell from '../_components/Shell'
import { EmptyState, SectionHeading } from '../_components/ui'

export const dynamic = 'force-dynamic'

export default async function DocumentsPage() {
  const ctx = await currentAdmin()
  if (!ctx) redirect('/admin/login')

  return (
    <Shell name={ctx.user.name} role={ctx.user.role}>
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Documents" />
        <EmptyState
          title="Not connected yet"
          body="Every receipt, ID card and certificate the foundation has issued, searchable by number, with the ability to reissue or revoke one."
        />
      </div>
    </Shell>
  )
}
