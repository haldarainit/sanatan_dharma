'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const AUTO_MS = 4000
const GAP_PX = 24

function cardsPerPage(width: number) {
  if (width < 640) return 1
  if (width < 768) return 2
  return 3
}

/* Slides the volunteer track by whole cards.
   The markup repeats the five cards three times so the track always has
   something to show on the right; `positions` is therefore the number of
   distinct cards (and dots), not the number of DOM children. The old script
   used children.length instead, which made most of the dots unreachable. */
export function useVolunteerCarousel(positions: number) {
  const [index, setIndex] = useState(0)
  const [perPage, setPerPage] = useState(3)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const measure = () => setPerPage(cardsPerPage(window.innerWidth))
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const maxIndex = Math.max(0, positions - 1)

  const advance = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1))
  }, [maxIndex])

  const go = useCallback(
    (next: number) => {
      setIndex(next < 0 ? maxIndex : next > maxIndex ? 0 : next)
      if (timer.current) clearInterval(timer.current)
      timer.current = setInterval(advance, AUTO_MS)
    },
    [maxIndex, advance]
  )

  useEffect(() => {
    timer.current = setInterval(advance, AUTO_MS)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [advance])

  const step =
    perPage === 1
      ? `100% + ${GAP_PX}px`
      : perPage === 2
        ? `50% + ${GAP_PX / 2}px`
        : `33.3333% + ${GAP_PX / 3}px`

  return {
    index,
    maxIndex,
    go,
    transform: `translateX(calc(-${index} * (${step})))`,
  }
}
