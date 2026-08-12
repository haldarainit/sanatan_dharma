'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { NAV } from '@/lib/nav'
import { ChevronDown, Globe, Menu, X } from './icons'

const LINK_CLS =
  'group relative inline-flex items-center px-2 xl:px-2.5 py-2 text-[11px] font-semibold ' +
  'tracking-[0.04em] uppercase text-[#0D1B2A] hover:text-[#FF6F00] transition-colors whitespace-nowrap'

function Underline() {
  return (
    <span className="pointer-events-none absolute left-2 right-2 -bottom-0.5 h-px bg-[#FF6F00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  )
}

export default function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null)
  const [drawer, setDrawer] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  /* click-away and Escape close the desktop dropdown */
  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(null)
        setDrawer(false)
      }
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  /* the drawer owns the scroll while it is up */
  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawer])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white shadow-md transition-all">
      <div className="mx-auto flex h-[82px] sm:h-[90px] md:h-[96px] max-w-screen-2xl items-center justify-between pl-0 pr-2 sm:pr-6 lg:pr-10 py-1">
        <Link href="/" className="flex items-center shrink-0 group py-1 min-w-0 logo-shift">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/logo.jpeg"
            alt="Sanatan Dharm Manav Kalyan Foundation"
            className="h-14 xs:h-15 sm:h-18 md:h-[74px] lg:h-[78px] w-auto max-w-[220px] xs:max-w-[280px] sm:max-w-none object-contain mix-blend-multiply transition-transform group-hover:scale-[1.02]"
          />
        </Link>

        <nav
          ref={navRef}
          className="hidden lg:flex items-center ml-4 xl:ml-6 flex-1 min-w-0 justify-center"
        >
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() => setOpen(open === item.label ? null : item.label)}
                  aria-expanded={open === item.label}
                  aria-haspopup="true"
                  className={LINK_CLS + ' gap-0.5 outline-none cursor-pointer'}
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    className={
                      'h-3 w-3 transition-transform duration-200 text-[#0D1B2A]/70 ' +
                      (open === item.label ? 'rotate-180 text-[#FF6F00]' : '')
                    }
                  />
                  <Underline />
                </button>

                {open === item.label && (
                  <div className="absolute top-full right-0 min-w-[220px] rounded-2xl border border-slate-100 bg-white p-2.5 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.12)] z-[1000]">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(null)}
                        className="block rounded-lg px-3.5 py-2.5 text-[13.5px] font-medium text-[#0D1B2A] transition hover:bg-orange-50 hover:font-semibold hover:text-[#FF6F00]"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href!} className={LINK_CLS}>
                <span>{item.label}</span>
                <Underline />
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <div className="relative hidden sm:block">
            <button
              type="button"
              aria-label="Select Language"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0D1B2A]/85 hover:text-[#FF6F00] transition-colors cursor-pointer outline-none whitespace-nowrap bg-transparent border-0 px-1.5 py-2"
            >
              <Globe className="h-3.5 w-3.5 text-[#FF6F00]" />
              <span>Sanskrit (संस्कृत)</span>
              <ChevronDown className="h-3 w-3 transition-transform duration-200" />
            </button>
          </div>

          <Link
            href="/donate"
            className="inline-flex items-center justify-center font-bold text-[12px] xs:text-xs text-white h-8 sm:h-9 px-3 xs:px-4 rounded-full whitespace-nowrap border border-orange-200/50 shadow-md transition-all cursor-pointer shrink-0 sd-btn sd-btn--donate-now"
          >
            <span>Donate Now</span>
          </Link>

          <button
            type="button"
            onClick={() => setDrawer(true)}
            aria-label="Open Menu"
            aria-expanded={drawer}
            className="lg:hidden p-2 -mr-1 rounded-md text-[#0D1B2A] hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {drawer && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setDrawer(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-[360px] overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <span className="text-sm font-bold text-[#0D1B2A]">Menu</span>
              <button
                type="button"
                onClick={() => setDrawer(false)}
                aria-label="Close Menu"
                className="rounded-md p-2 text-[#0D1B2A] hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="px-3 py-3">
              {NAV.map((item) =>
                item.children ? (
                  <div key={item.label} className="py-1">
                    <p className="px-3 pb-1 pt-3 text-[10.5px] font-bold uppercase tracking-[0.08em] text-slate-400">
                      {item.label}
                    </p>
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setDrawer(false)}
                        className="block rounded-lg px-3 py-2.5 text-[13.5px] font-medium text-[#0D1B2A] hover:bg-orange-50 hover:text-[#FF6F00]"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    onClick={() => setDrawer(false)}
                    className="block rounded-lg px-3 py-2.5 text-[13.5px] font-semibold text-[#0D1B2A] hover:bg-orange-50 hover:text-[#FF6F00]"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/donate"
                onClick={() => setDrawer(false)}
                className="mt-4 flex items-center justify-center rounded-full px-4 py-3 text-sm font-bold text-white sd-btn sd-btn--donate-now"
              >
                Donate Now
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
