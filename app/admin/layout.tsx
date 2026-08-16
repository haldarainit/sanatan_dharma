import type { Metadata } from 'next'

/* Everything under /admin is per-request: it shows live counts and is behind
   a session. Without this the root layout's revalidate = 60 would apply and
   one admin could be served another's cached page. */
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Admin — Sanatan Dharm Manav Kalyan Foundation',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-slate-50 text-slate-900">{children}</div>
}
