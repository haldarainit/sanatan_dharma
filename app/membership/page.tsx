import { getPageContent, img, t } from '@/lib/sanity/content'
import type { Metadata } from 'next'
import Link from 'next/link'
import MembershipWizard from '@/components/MembershipWizard'
import { getMembershipCategories } from '@/lib/sanity/data'

export const metadata: Metadata = {
  title: 'Join The Mission — Membership Ecosystem',
  description:
    'सनातन सेवा अभियान से जुड़ें — Sanatan Dharm Manav Kalyan Foundation के सेवा, सुरक्षा, संस्कार एवं मानव कल्याण अभियानों का हिस्सा बनें।',
}

export default async function MembershipPage() {
  const { text, images } = await getPageContent("/membership")
  const categories = await getMembershipCategories()

  return (
    <>
      {/* same hero treatment as the other inner pages, with the brief's wording */}
      <section className="relative overflow-hidden bg-gradient-to-br from-saffron-50 via-cream to-saffron-100/60 font-sans">
        <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-saffron-200/40 blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-maroon-500/10 blur-3xl"></div>
        <div className="container-x relative py-12 sm:py-16">
          <nav className="flex items-center gap-1.5 text-xs font-semibold text-ink/50 mb-4">
            <Link className="hover:text-saffron-700 transition-colors" href="/">
              {t(text, 'k1', "Home")}
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
            <span className="text-[#e35300]">{t(text, 'k2', "Join The Mission")}</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
            Join The <span className="text-[#e35300]">Mission</span>
          </h1>
          <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">
            {t(text, 'k3', "सनातन सेवा अभियान से जुड़ें")}
          </p>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-400 mb-3">
            {t(text, 'k4', "Membership Ecosystem")}
          </p>
          <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700 deva">
            {t(text, 'k5', "सनातन धर्म मानव कल्याण फाउंडेशन के साथ जुड़कर आप सेवा, सुरक्षा, संस्कार, धर्म एवं मानव")}
            {t(text, 'k6', "कल्याण के विभिन्न अभियानों का हिस्सा बन सकते हैं।")}
          </p>
          <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700 deva mt-2">
            {t(text, 'k7', "अपनी रुचि, योग्यता, स्थान और उपलब्ध समय के अनुसार सही Category चुनें और आगे की प्रक्रिया")}
            {t(text, 'k8', "पूरी करें।")}
          </p>
        </div>
      </section>

      <section className="container-x my-10 md:my-14 sd-gap">
        <MembershipWizard categories={categories} />
      </section>
    </>
  )
}
