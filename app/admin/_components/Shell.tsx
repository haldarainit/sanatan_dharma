'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  Campaigns, Close, Dashboard, Documents, Members, Menu, Rupee, Settings, SignOut, Tickets,
} from './icons'

/* The frame every admin screen sits in.

   Deliberately quiet. This panel issues 80G receipts and identity documents,
   so it should read like a ledger, not a marketing page: white surfaces,
   one accent, no gradients competing with the data. */

const NAV = [
  { href: '/admin', label: 'Dashboard', Icon: Dashboard },
  { href: '/admin/donations', label: 'Donations', Icon: Rupee },
  { href: '/admin/members', label: 'Members', Icon: Members },
  { href: '/admin/tickets', label: 'Requests', Icon: Tickets },
  { href: '/admin/documents', label: 'Documents', Icon: Documents },
  { href: '/admin/campaigns', label: 'Campaigns', Icon: Campaigns },
  { href: '/admin/settings', label: 'Settings', Icon: Settings },
]

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  return (
    <nav className="flex flex-col gap-0.5 px-3">
      {NAV.map(({ href, label, Icon }) => {
        /* /admin must not light up for every child route */
        const active = href === '/admin' ? pathname === href : pathname.startsWith(href)
        return (
          <Link
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={active ? 'page' : undefined}
            className={
              'group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors duration-150 ' +
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c44800] focus-visible:ring-offset-1 ' +
              (active
                ? 'bg-orange-50 font-semibold text-[#c44800]'
                : 'font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900')
            }
          >
            {/* the active marker is a shape, not only a colour */}
            <span
              aria-hidden="true"
              className={
                'absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full transition-colors duration-150 ' +
                (active ? 'bg-[#e35300]' : 'bg-transparent')
              }
            />
            <Icon className="h-[18px] w-[18px] shrink-0" />
            <span>{label}</span>
          </Link>
        )
      })}
    </nav>
  )
}

function Brand() {
  return (
    <Link
      href="/admin"
      className="flex items-center gap-2.5 px-5 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c44800]"
    >
      {/* The logo is a wide banner, so it needs a width cap as well as a
          height or it crowds the name out of the sidebar. alt is empty
          because the text beside it already names the organisation — a
          screen reader should not hear it twice. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/logo.jpeg"
        alt=""
        className="h-8 w-auto max-w-[74px] shrink-0 object-contain mix-blend-multiply"
      />
      <span className="min-w-0">
        <span className="block font-serif text-[14px] font-bold leading-tight text-slate-900">
          Sanatan Dharm
        </span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
          Admin
        </span>
      </span>
    </Link>
  )
}

export default function Shell({
  name,
  role,
  children,
}: {
  name: string
  role: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const firstName = name.trim().split(/\s+/)[0] || name

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ---- sidebar, permanent from lg up ---- */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-slate-200 bg-white lg:flex">
        <Brand />
        <div className="mt-2 flex-1 overflow-y-auto pb-4">
          <NavLinks />
        </div>
        <SignOutButton />
      </aside>

      {/* ---- drawer, below lg ---- */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-slate-900/40"
          />
          <div className="absolute inset-y-0 left-0 flex w-64 flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between pr-2">
              <Brand />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100"
              >
                <Close className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-2 flex-1 overflow-y-auto pb-4">
              <NavLinks onNavigate={() => setOpen(false)} />
            </div>
            <SignOutButton />
          </div>
        </div>
      )}

      {/* ---- content ---- */}
      <div className="lg:pl-60">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3.5 sm:px-6 lg:px-8">
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="-ml-1 rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[15px] font-semibold text-slate-900">
                <span className="deva">नमस्ते</span>, {firstName}
              </p>
              <p className="truncate text-xs text-slate-500">
                {role.replace(/_/g, ' ')} ·{' '}
                {new Date().toLocaleDateString('en-IN', {
                  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
                  timeZone: 'Asia/Kolkata',
                })}
              </p>
            </div>
          </div>
        </header>

        <main className="px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  )
}

function SignOutButton() {
  return (
    <form action="/api/admin/logout" method="post" className="border-t border-slate-100 p-3">
      <button
        type="submit"
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors duration-150 hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c44800]"
      >
        <SignOut className="h-[18px] w-[18px]" />
        Sign out
      </button>
    </form>
  )
}
