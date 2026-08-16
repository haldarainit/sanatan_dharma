import Link from 'next/link'

/* Shared pieces for the admin screens.

   Status colours deliberately exclude green. Confirmed states use blue,
   which reads as settled in financial interfaces and carries none of the
   associations the client raised. Every tone was checked against its own
   tint at 4.5:1 or better. */

export const TONES = {
  /* verified · paid · active · issued */
  confirmed: 'bg-blue-50 text-[#1d4ed8] ring-blue-100',
  /* awaiting verification · under review · queued */
  pending: 'bg-amber-50 text-[#b45309] ring-amber-100',
  /* rejected · failed · revoked */
  failed: 'bg-red-50 text-[#b91c1c] ring-red-100',
  /* closed · expired · archived */
  neutral: 'bg-slate-100 text-slate-600 ring-slate-200',
  /* needs a person to act */
  action: 'bg-orange-50 text-[#c44800] ring-orange-100',
} as const

export type Tone = keyof typeof TONES

export function StatusPill({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  return (
    <span
      className={
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ' +
        TONES[tone]
      }
    >
      {children}
    </span>
  )
}

export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white ${className}`}>{children}</div>
  )
}

export function StatTile({
  label, value, hint, tone = 'neutral', href,
}: {
  label: string
  value: string | number
  hint?: string
  tone?: Tone
  href?: string
}) {
  const body = (
    <div
      className={
        'h-full rounded-xl border border-slate-200 bg-white p-4 transition-all duration-150 ' +
        (href ? 'hover:border-slate-300 hover:shadow-sm' : '')
      }
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-[11px] font-bold uppercase tracking-[0.07em] text-slate-400">{label}</p>
        {/* a shape as well as a colour, so the signal survives a mono print
            and colour-blind vision */}
        {tone === 'action' && Number(value) > 0 && (
          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e35300]" aria-hidden="true" />
        )}
      </div>
      <p className="mt-2 font-serif text-[26px] font-bold leading-none text-slate-900">{value}</p>
      {hint && <p className="mt-1.5 text-xs text-slate-500">{hint}</p>}
    </div>
  )

  return href ? (
    <Link
      href={href}
      className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c44800] focus-visible:ring-offset-2"
    >
      {body}
    </Link>
  ) : (
    body
  )
}

export function SectionHeading({
  title, action,
}: {
  title: string
  action?: React.ReactNode
}) {
  return (
    <div className="mb-3 flex items-end justify-between gap-3">
      <h2 className="font-serif text-lg font-bold text-slate-900">{title}</h2>
      {action}
    </div>
  )
}

export function EmptyState({
  title, body, icon,
}: {
  title: string
  body: string
  icon?: React.ReactNode
}) {
  return (
    <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
      {icon && <div className="mx-auto mb-3 text-slate-300">{icon}</div>}
      <p className="font-serif text-base font-bold text-slate-800">{title}</p>
      <p className="mx-auto mt-1.5 max-w-md text-sm leading-relaxed text-slate-500">{body}</p>
    </div>
  )
}

/** Money is stored in paise; never render a float. */
export const inr = (paise: number) =>
  '₹' + Math.round(paise / 100).toLocaleString('en-IN')

/* A wide table must scroll inside its own box rather than pushing the page
   sideways -- the commonest way an admin panel breaks on a laptop. */
export function TableWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full min-w-[640px] text-left text-sm">{children}</table>
    </div>
  )
}

export const Th = ({ children }: { children: React.ReactNode }) => (
  <th className="whitespace-nowrap border-b border-slate-200 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.06em] text-slate-500">
    {children}
  </th>
)

export const Td = ({ children }: { children: React.ReactNode }) => (
  <td className="whitespace-nowrap border-b border-slate-100 px-4 py-3 text-slate-700">
    {children}
  </td>
)
