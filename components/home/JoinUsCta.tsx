import { img, t, type ImageMap, type TextMap } from '@/lib/sanity/content'
import Link from 'next/link'

export default function JoinUsCta({ text, images }: { text?: TextMap; images?: ImageMap }) {
  return (
    <section className="container-x my-12 sd-gap">
      <div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-saffron-600 via-saffron-500 to-maroon-600 px-6 py-14 text-center text-white shadow-xl sm:px-12"
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>
        <p className="deva eyebrow text-saffron-100">{t(text, 'join-us-cta-k1', "आपका सहयोग किसी के जीवन में नई उम्मीद ला सकता है")}</p>
        <h2 className="deva mt-3 font-display text-3xl font-bold sm:text-4xl">सेवा, सहयोग एवं सहभागिता के माध्यम से जुड़ें</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90">
          {t(text, 'join-us-cta-k2', "Be part of positive change. Your contribution brings hope, support and dignity to lives across India.")}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            className="inline-flex items-center justify-center font-semibold text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] whitespace-nowrap select-none h-[52px] px-7 text-[15px] gap-2 sd-btn sd-btn--donate-now"
            style={{ backgroundColor: "#FF9933", '--btn-hover': "#e37d17" }}
            href="/donate"
          >
            <span className="shrink-0 [&>svg]:h-5 [&>svg]:w-5">
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
                className="lucide lucide-heart"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path>
              </svg>
            </span>
            {t(text, 'join-us-cta-k3', "Donate Now")}
          </Link>
          <Link
            className="inline-flex items-center justify-center font-semibold text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] whitespace-nowrap select-none h-[52px] px-7 text-[15px] gap-2 sd-btn sd-btn--join-mission"
            style={{ backgroundColor: "#1E3A8A", '--btn-hover': "#021e6e" }}
            href="/membership"
          >
            <span className="shrink-0 [&>svg]:h-5 [&>svg]:w-5">
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
                className="lucide lucide-users"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </span>
            {t(text, 'join-us-cta-k4', "Join the Mission")}
          </Link>
        </div>
      </div>
    </section>
  )
}
