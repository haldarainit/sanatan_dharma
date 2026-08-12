import Link from 'next/link'

/* The same hero band the other inner pages use, so the portals sit in the
   site rather than looking like standalone forms. */
export default function PortalHero({
  crumb, title, accent, hi, eyebrow, lead,
}: {
  crumb: string
  title: string
  accent: string
  hi?: string
  eyebrow?: string
  lead?: string
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-saffron-50 via-cream to-saffron-100/60 font-sans">
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-saffron-200/40 blur-3xl"></div>
      <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-maroon-500/10 blur-3xl"></div>
      <div className="container-x relative py-12 sm:py-16">
        <nav className="flex items-center gap-1.5 text-xs font-semibold text-ink/50 mb-4">
          <Link className="hover:text-saffron-700 transition-colors" href="/">
            Home
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
          <span className="text-[#e35300]">{crumb}</span>
        </nav>

        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          {title} <span className="text-[#e35300]">{accent}</span>
        </h1>
        {hi && <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">{hi}</p>}
        {eyebrow && (
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-400 mb-3">
            {eyebrow}
          </p>
        )}
        {lead && (
          <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700 deva">
            {lead}
          </p>
        )}
      </div>
    </section>
  )
}
