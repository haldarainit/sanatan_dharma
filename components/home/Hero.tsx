'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { HERO_SLIDES, type HeroSlide } from '@/lib/hero'

const TYPE_MS = 28
const SLIDE_MS = 6000

/* Types out line 1, then line 2, then fades the CTA in -- the same rhythm the
   old injected script used. Honours prefers-reduced-motion by skipping
   straight to the finished text. */
function useTypedSlide(index: number) {
  const slide = HERO_SLIDES[index]
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [ctaIn, setCtaIn] = useState(false)

  useEffect(() => {
    const full1 = slide.line1 || ''
    const full2 = slide.line2 || ''

    if (slide.noOverlay) {
      setLine1('')
      setLine2('')
      setCtaIn(false)
      return
    }

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      setLine1(full1)
      setLine2(full2)
      setCtaIn(true)
      return
    }

    setLine1('')
    setLine2('')
    setCtaIn(false)

    let i = 0
    let t2: ReturnType<typeof setInterval> | null = null
    let ctaTimer: ReturnType<typeof setTimeout> | null = null

    const t1 = setInterval(() => {
      if (i <= full1.length) {
        setLine1(full1.slice(0, i) + (i < full1.length ? '|' : ''))
        i++
        return
      }
      clearInterval(t1)
      setLine1(full1)

      let j = 0
      t2 = setInterval(() => {
        if (j <= full2.length) {
          setLine2(full2.slice(0, j) + (j < full2.length ? '|' : ''))
          j++
          return
        }
        if (t2) clearInterval(t2)
        setLine2(full2)
        ctaTimer = setTimeout(() => setCtaIn(true), 150)
      }, TYPE_MS)
    }, TYPE_MS)

    return () => {
      clearInterval(t1)
      if (t2) clearInterval(t2)
      if (ctaTimer) clearTimeout(ctaTimer)
    }
  }, [index, slide])

  return { line1, line2, ctaIn }
}

export default function Hero({ slides = HERO_SLIDES }: { slides?: HeroSlide[] }) {
  const [index, setIndex] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)
  const { line1, line2, ctaIn } = useTypedSlide(index)
  const slide = slides[index]

  function restart() {
    if (timer.current) clearInterval(timer.current)
    timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS)
  }

  useEffect(() => {
    restart()
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [])

  return (
    <section className="relative w-full bg-[#FFFDF9]">
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-none bg-black shadow-xl sm:aspect-[16/7] lg:aspect-[16/5] xl:aspect-[18/5]">
        {/* keyed so each slide re-runs the slide-in transition */}
        <div key={index} className="absolute inset-0 h-full w-full animate-slideIn">
          <picture>
            {slide.imgMobile && <source media="(max-width: 639px)" srcSet={slide.imgMobile} />}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.img}
              alt={slide.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
          {!slide.noOverlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
          )}
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-6 text-left sm:px-12 lg:px-16">
          <div className="max-w-xl lg:max-w-3xl">
            <p
              className="deva min-h-[1.5em] text-base font-medium tracking-wide text-white/95 sm:text-lg md:text-2xl lg:text-3xl"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}
            >
              {line1}
            </p>
            <h2
              className="deva mt-3 min-h-[1.2em] text-4xl font-bold leading-tight tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl"
              style={{ textShadow: '0 3px 18px rgba(0,0,0,0.75)' }}
            >
              {line2}
            </h2>
            <div
              className="mt-5 flex min-h-[44px] justify-start sm:mt-7"
              style={{
                opacity: ctaIn ? 1 : 0,
                transform: ctaIn ? 'translateY(0)' : 'translateY(12px)',
                transition: 'all 0.4s ease',
              }}
            >
              {slide.cta && (
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center justify-center font-bold text-sm text-white h-11 px-6 rounded-full bg-[#FF9933] border border-orange-200/50 shadow-lg hover:bg-[#E6821B] transition-all cursor-pointer sd-btn sd-btn--join-mission"
                >
                  {slide.cta.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.img}
            type="button"
            aria-label={`Slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => {
              setIndex(i)
              restart()
            }}
            className={
              'h-2 rounded-full transition-all duration-300 cursor-pointer ' +
              (i === index ? 'w-6 bg-[#FF6F00]' : 'w-2 bg-gray-300 hover:bg-gray-400')
            }
          />
        ))}
      </div>
    </section>
  )
}
