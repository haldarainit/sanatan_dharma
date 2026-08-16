'use client'

import { usePathname } from 'next/navigation'

/* The public header and footer do not belong on the admin panel.

   Done as a client wrapper rather than by moving 40 routes into a (site)
   route group, and rather than reading headers() in the root layout — the
   latter would make every page dynamic and silently un-ISR the whole
   marketing site. */
export default function PublicChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname?.startsWith('/admin')) return null
  return <>{children}</>
}
