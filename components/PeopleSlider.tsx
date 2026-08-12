'use client'

import { useMemo, useState } from 'react'
import { PEOPLE, PEOPLE_FILTERS } from '@/lib/people'

/* Continuous marquee of the inspiration figures.
   Everyone here is a peer, so there is no ranking: the row scrolls at a
   constant speed and no card is given a fixed first or last position.
   The list is rendered twice and the track translated by exactly half its
   width, which loops seamlessly without cloning nodes at runtime. */
export default function PeopleSlider() {
  const [filter, setFilter] = useState('all')
  const [paused, setPaused] = useState(false)

  const shown = useMemo(
    () => (filter === 'all' ? PEOPLE : PEOPLE.filter((p) => p.category === filter)),
    [filter]
  )

  /* pace the loop by how much content there is, so a short list does not race */
  const duration = Math.max(18, shown.length * 6)

  return (
    <div className="sd-ppl" data-count={shown.length}>
      <div className="sd-ppl__filters">
        {PEOPLE_FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={'sd-ppl__filter' + (filter === f.id ? ' is-on' : '')}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        className="sd-ppl__viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div
          className="sd-ppl__track"
          style={{
            animationDuration: `${duration}s`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {/* rendered twice; the keyframe shifts by -50% so the seam is invisible */}
          {[0, 1].map((copy) =>
            shown.map((p) => (
              <article
                className="sd-ppl__item bg-white rounded-2xl border border-saffron-100 shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                key={`${copy}-${p.img}`}
                aria-hidden={copy === 1}
              >
                <div className="relative aspect-[4/4.5] bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden shrink-0 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col gap-1.5">
                  <h3 className="deva text-[15px] font-bold leading-snug text-[#0D1B2A]">
                    {p.title}
                  </h3>
                  {p.role && (
                    <p className="deva text-[12.5px] leading-relaxed text-slate-600">{p.role}</p>
                  )}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
