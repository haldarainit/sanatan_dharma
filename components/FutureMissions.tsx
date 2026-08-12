'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { FUTURE_MISSIONS } from '@/lib/missions'

const SLIDE_MS = 6000

const TAB_ON =
  'bg-gradient-to-b from-orange-500 to-orange-600 text-white border-orange-600 shadow-lg shadow-orange-500/30 scale-[1.02]'
const TAB_OFF =
  'bg-gradient-to-b from-white to-slate-50 text-slate-800 border-slate-200 hover:border-orange-300 hover:text-orange-600 shadow-sm'

export default function FutureMissions() {
  const [index, setIndex] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const descRef = useRef<HTMLDivElement>(null)

  /* Auto-advance runs continuously. Picking a tab does not stop it, it just
     restarts the clock so the chosen slide gets a full turn. */
  const restart = useCallback(() => {
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % FUTURE_MISSIONS.length),
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

  const active = FUTURE_MISSIONS[index]

  return (
    <>
      <div
        className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5 mb-8 sm:mb-10"
        role="tablist"
        aria-label="Future missions"
      >
        {FUTURE_MISSIONS.map((m, i) => (
          <button
            key={m.href}
            type="button"
            role="tab"
            aria-selected={i === index}
            onClick={() => {
              setIndex(i)
              restart()
            }}
            className={`deva px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer ${
              i === index ? TAB_ON : TAB_OFF
            }`}
          >
            {m.title}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-56 sm:h-72 md:h-auto md:min-h-[420px] overflow-hidden">
            {FUTURE_MISSIONS.map((m, i) => (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                key={m.image}
                src={m.image}
                alt={m.title}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          <div key={index} className="fm-anim flex flex-col p-6 sm:p-8 md:p-10">
            <h3 className="deva text-xl sm:text-2xl md:text-[26px] font-bold text-[#0D1B2A]">
              {active.title}
            </h3>
            <p className="deva mt-1.5 text-sm font-semibold text-[#FF6F00]">{active.tagline}</p>
            {active.note && (
              <p className="deva mt-2 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                {active.note}
              </p>
            )}

            <div ref={descRef} className="mt-4 space-y-3 md:max-h-[240px] md:overflow-y-auto md:pr-2">
              {active.paras.map((p, i) => (
                <p
                  key={i}
                  className="deva text-slate-600 text-sm sm:text-[15px] leading-relaxed text-justify"
                >
                  {p}
                </p>
              ))}
            </div>

            <Link
              href={active.href}
              className="mt-6 inline-flex w-fit items-center justify-center rounded-full px-6 py-3 text-sm font-bold text-white sd-btn sd-btn--details"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
