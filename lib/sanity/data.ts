import type { Image } from 'sanity'
import { imageUrl } from './image'
import { safeFetch } from './content'
import {
  donationTiersQuery, faqQuery, heroSlidesQuery, membershipQuery, missionsQuery,
  peopleQuery, siteSettingsQuery, statusRowsQuery,
} from './queries'

import { HERO_SLIDES, type HeroSlide } from '@/lib/hero'
import { FUTURE_MISSIONS, type Mission } from '@/lib/missions'
import { PEOPLE, type Person } from '@/lib/people'
import { DEFAULT_UPI, type Upi } from '@/lib/upi'
import { CATEGORIES, type Category } from '@/lib/membership'
import { TIERS, type Tier } from '@/lib/donation'
import { CONTACT } from '@/lib/nav'
import {
  COMPLAINT_STATUS, NEED_HELP_FAQ, NEED_HELP_STATUS,
  type FaqItem, type StatusRow,
} from '@/lib/portal-content'

/* Each getter returns the same shape the components already consume, so a
   component does not need to know whether the content came from Sanity or
   from the file it shipped with. */

type Doc = Record<string, unknown>
const pick = <T,>(v: T | null | undefined, fallback: T): T =>
  v === null || v === undefined || v === '' ? fallback : v

export async function getHeroSlides(): Promise<HeroSlide[]> {
  const rows = await safeFetch<Doc[]>(heroSlidesQuery, {}, [])
  if (!rows.length) return HERO_SLIDES
  return rows.map((r, i) => {
    const base = HERO_SLIDES[i] ?? HERO_SLIDES[0]
    return {
      img: imageUrl(r.image as Image, 1920) || (r.currentSrc as string) || base.img,
      imgMobile: imageUrl(r.imageMobile as Image, 900) || (r.currentSrc ? undefined : base.imgMobile),
      alt: pick(r.alt as string, base.alt),
      line1: pick(r.line1 as string, base.line1),
      line2: pick(r.line2 as string, base.line2),
      cta:
        r.ctaLabel && r.ctaHref
          ? { label: r.ctaLabel as string, href: r.ctaHref as string }
          : base.cta,
      noOverlay: (r.noOverlay as boolean) ?? base.noOverlay,
    }
  })
}

export async function getMissions(): Promise<Mission[]> {
  const rows = await safeFetch<Doc[]>(missionsQuery, {}, [])
  if (!rows.length) return FUTURE_MISSIONS
  return rows.map((r, i) => {
    const base = FUTURE_MISSIONS[i] ?? FUTURE_MISSIONS[0]
    return {
      title: pick(r.title as string, base.title),
      tagline: pick(r.tagline as string, base.tagline),
      note: pick(r.note as string, base.note),
      paras: (r.paras as string[])?.length ? (r.paras as string[]) : base.paras,
      image: imageUrl(r.image as Image, 1200) || (r.currentSrc as string) || base.image,
      href: pick(r.href as string, base.href),
    }
  })
}

export async function getPeople(): Promise<Person[]> {
  const rows = await safeFetch<Doc[]>(peopleQuery, {}, [])
  if (!rows.length) return PEOPLE
  return rows.map((r, i) => {
    const base = PEOPLE[i] ?? PEOPLE[0]
    return {
      category: pick(r.category as string, base.category),
      name: pick(r.title as string, base.name),
      title: pick(r.title as string, base.title),
      role: pick(r.role as string, base.role),
      img: imageUrl(r.image as Image, 700) || (r.currentSrc as string) || base.img,
    }
  })
}

export async function getMembershipCategories(): Promise<Category[]> {
  const rows = await safeFetch<Doc[]>(membershipQuery, {}, [])
  if (!rows.length) return CATEGORIES
  return rows.map((r, i) => {
    const base = CATEGORIES.find((c) => c.id === r.slug) ?? CATEGORIES[i] ?? CATEGORIES[0]
    const fees = (r.fees as Category['fees'])?.length ? (r.fees as Category['fees']) : base.fees
    return {
      ...base,
      cardTitle: pick(r.cardTitle as string, base.cardTitle),
      cardText: pick(r.cardText as string, base.cardText),
      img: imageUrl(r.image as Image, 900) || (r.currentSrc as string) || base.img,
      formTitle: pick(r.formTitle as string, base.formTitle),
      headingEn: pick(r.headingEn as string, base.headingEn),
      headingHi: pick(r.headingHi as string, base.headingHi),
      notice: pick(r.notice as string, base.notice),
      aboutTitle: pick(r.aboutTitle as string, base.aboutTitle),
      about: (r.about as string[])?.length ? (r.about as string[]) : base.about,
      objectives: (r.objectives as string[])?.length
        ? (r.objectives as string[])
        : base.objectives,
      roles: (r.roles as string[])?.length ? (r.roles as string[]) : base.roles,
      sankalpTitle: pick(r.sankalpTitle as string, base.sankalpTitle),
      sankalpTagline: pick(r.sankalpTagline as string, base.sankalpTagline),
      sankalpText: pick(r.sankalpText as string, base.sankalpText),
      interests: (r.interests as string[])?.length ? (r.interests as string[]) : base.interests,
      skills: (r.skills as string[])?.length ? (r.skills as string[]) : base.skills,
      declaration: pick(r.declaration as string, base.declaration),
      levelNote: pick(r.levelNote as string, base.levelNote),
      idCardNote: pick(r.idCardNote as string, base.idCardNote),
      pledge: (r.pledge as boolean) ?? base.pledge,
      autoUpdateNote: (r.autoUpdateNote as boolean) ?? base.autoUpdateNote,
      fees,
    }
  })
}

export async function getDonationTiers(): Promise<Tier[]> {
  const rows = await safeFetch<Doc[]>(donationTiersQuery, {}, [])
  if (!rows.length) return TIERS
  return rows.map((r) => ({
    amount: r.amount as number,
    hi: (r.hi as string) || '',
    tag: (r.tag as string) || undefined,
  }))
}

export async function getFaq(page: string, fallback: FaqItem[] = NEED_HELP_FAQ): Promise<FaqItem[]> {
  const rows = await safeFetch<FaqItem[]>(faqQuery, { page }, [])
  return rows.length ? rows : fallback
}

export async function getStatusRows(table: 'need-help' | 'complaint'): Promise<StatusRow[]> {
  const fallback = table === 'need-help' ? NEED_HELP_STATUS : COMPLAINT_STATUS
  const rows = await safeFetch<StatusRow[]>(statusRowsQuery, { table }, [])
  return rows.length ? rows : fallback
}

export type SiteSettings = {
  siteName: string
  logo: string
  donateLabel: string
  helplines: string[]
  emails: string[]
  whatsapp: string
  footerAbout?: string
  cin?: string
  upi: Upi
  social: { network: string; url: string }[]
}

const SETTINGS_FALLBACK: SiteSettings = {
  siteName: 'Sanatan Dharm Manav Kalyan Foundation',
  logo: '/img/logo.jpeg',
  donateLabel: 'Donate Now',
  helplines: CONTACT.helplines,
  emails: CONTACT.emails,
  whatsapp: CONTACT.whatsapp,
  upi: DEFAULT_UPI,
  social: [],
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const r = await safeFetch<Doc | null>(siteSettingsQuery, {}, null)
  if (!r) return SETTINGS_FALLBACK
  return {
    siteName: pick(r.siteName as string, SETTINGS_FALLBACK.siteName),
    logo: imageUrl(r.logo as Image, 400) || SETTINGS_FALLBACK.logo,
    donateLabel: pick(r.donateLabel as string, SETTINGS_FALLBACK.donateLabel),
    helplines: (r.helplines as string[])?.length ? (r.helplines as string[]) : SETTINGS_FALLBACK.helplines,
    emails: (r.emails as string[])?.length ? (r.emails as string[]) : SETTINGS_FALLBACK.emails,
    whatsapp: pick(r.whatsapp as string, SETTINGS_FALLBACK.whatsapp),
    footerAbout: r.footerAbout as string,
    cin: r.cin as string,
    upi: {
      id: pick(r.upiId as string, DEFAULT_UPI.id),
      name: pick(r.upiName as string, DEFAULT_UPI.name),
    },
    social: (r.social as SiteSettings['social']) || [],
  }
}
