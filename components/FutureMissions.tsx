'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FUTURE_MISSIONS, type Mission } from '@/lib/missions'

const SLIDE_MS = 6000

const TAB_ON =
  'bg-gradient-to-b from-orange-500 to-orange-600 text-white border-orange-600 shadow-lg shadow-orange-500/30 scale-[1.02]'
const TAB_OFF =
  'bg-gradient-to-b from-white to-slate-50 text-slate-800 border-slate-200 hover:border-orange-300 hover:text-orange-600 shadow-sm'

export default function FutureMissions({ missions = FUTURE_MISSIONS }: { missions?: Mission[] }) {
  const [index, setIndex] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const descRef = useRef<HTMLDivElement>(null)

  /* Auto-advance runs continuously. Picking a tab does not stop it, it just
     restarts the clock so the chosen slide gets a full turn. */
  const restart = useCallback(() => {
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % missions.length),
      SLIDE_MS
    )
  }, [])

  useEffect(() => {
    restart()
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [restart])

  /* long descriptions scroll; each new slide starts from the top */
  useEffect(() => {
    if (descRef.current) descRef.current.scrollTop = 0
  }, [index])

  const active = missions[index]

  return (
    <>
      <div
        className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-10"
        role="tablist"
        aria-label="Upcoming service missions"
      >
        {missions.map((m, i) => (
          <button
            key={m.href}
            type="button"
            role="tab"
            aria-selected={i === index}
            onClick={() => {
              setIndex(i)
              restart()
            }}
            className={`fm-tab-btn deva px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer ${
              i === index ? TAB_ON : TAB_OFF
            }`}
          >
            {m.title}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 max-w-5xl mx-auto">
        {/* image column — the track slides horizontally */}
        <div className="w-full lg:w-[440px] shrink-0 h-[300px] sm:h-[420px] lg:h-auto rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white relative">
          <div className="fm-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {missions.map((m) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img key={m.image} className="fm-slide" src={m.image} alt={m.title} />
            ))}
          </div>
        </div>

        {/* text column */}
        <div className="w-full lg:flex-1 bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-slate-100 flex flex-col lg:h-[560px]">
          <div className="shrink-0 fm-anim" key={index}>
            <h3 className="deva text-xl sm:text-2xl font-bold text-slate-900 mb-1 relative after:content-[''] after:block after:w-10 after:h-1 after:bg-orange-600 after:mt-2 after:rounded-full">
              {active.title}
            </h3>
            {active.note && (
              <p className="deva text-slate-500 font-semibold text-[11px] sm:text-xs mt-3">
                {active.note}
              </p>
            )}
            <p className="deva text-[#e35300] font-semibold text-xs tracking-widest uppercase mb-1 mt-3">
              {active.tagline}
            </p>
          </div>

          <div
            ref={descRef}
            className="flex-1 min-h-0 lg:overflow-y-auto my-4 pr-0 lg:pr-2 space-y-3"
          >
            {active.paras.map((p, i) => (
              <p
                key={i}
                className="deva text-slate-600 text-sm sm:text-[15px] leading-relaxed text-justify"
              >
                {p}
              </p>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 shrink-0">
            <Link
              href={active.href}
              className="w-full flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-sm sm:text-base py-3 px-6 rounded-full shadow-md shadow-blue-600/20 transition-all sd-btn sd-btn--view-details"
            >
              Read More ›
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
