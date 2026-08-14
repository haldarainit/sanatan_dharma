import { getPageContent, img, t } from '@/lib/sanity/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default async function PortalLoginPage() {
  const { text, images } = await getPageContent("/portal/login")
  return (
    <>
    <section
      className="relative overflow-hidden bg-gradient-to-br from-saffron-50 via-cream to-saffron-100/60 font-sans"
    >
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-saffron-200/40 blur-3xl"></div>
      <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-maroon-500/10 blur-3xl"></div>
      <div className="container-x relative py-12 sm:py-16">
        <nav className="flex items-center gap-1.5 text-xs font-semibold text-ink/50 mb-4">
          <Link className="hover:text-saffron-700 transition-colors" href="/">{t(text, 'k1', "Home")}</Link>
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
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
          <span className="text-[#e35300]">{t(text, 'k2', "Official Portal Sign In")}</span>
        </nav>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          Official Portal Sign{' '}
          <span className="text-[#e35300]">{t(text, 'k3', "In")}</span>
        </h1>
        <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">{t(text, 'k4', "🚩 सदस्य एवं स्वयंसेवक लॉगिन पोर्टल")}</p>
        <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700">
          {t(text, 'k5', "Sign in to access your digital member ID card, membership certificate, Seva logbook, and directives.")}
        </p>
      </div>
    </section>
    <section className="container-x my-14">
      <div className="mx-auto max-w-xl">
        <div
          className="mb-6 rounded-2xl border border-saffron-200 bg-gradient-to-r from-saffron-50 via-white to-amber-50 p-4 shadow-sm flex items-center justify-between gap-3"
        >
          <div className="flex items-center gap-2.5">
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
              className="lucide lucide-shield-check h-5 w-5 text-saffron-600 shrink-0"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
              ></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            <div>
              <p className="text-xs font-bold text-saffron-900">{t(text, 'k6', "Demo Instant Login")}</p>
              <p className="text-[11px] text-slate-500">{t(text, 'k7', "Test login as Volunteer or Patron")}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-xl bg-saffron-100 border border-saffron-300 px-3 py-1 text-xs font-bold text-saffron-800 hover:bg-saffron-200"
            >Volunteer</button>
            <button
              type="button"
              className="rounded-xl bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-bold text-amber-900 hover:bg-amber-200"
            >Patron</button>
          </div>
        </div>
        <div className="rounded-3xl border border-saffron-200 bg-white p-6 sm:p-10 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Sign In to Your Account</h2>
              <p className="text-xs text-slate-500">{t(text, 'k8', "Enter essential login details")}</p>
            </div>
            <div className="flex rounded-lg bg-slate-100 p-1 text-xs font-bold">
              <button
                type="button"
                className="px-3 py-1.5 rounded-md transition-colors bg-white text-saffron-700 shadow-sm"
              >Mobile OTP</button>
              <button type="button" className="px-3 py-1.5 rounded-md transition-colors text-slate-500">{t(text, 'k9', "Password")}</button>
            </div>
          </div>
          <form className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">{t(text, 'k10', "Registered Mobile Number *")}</label>
              <div className="flex gap-2">
                <div className="relative flex-1">
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
                    className="lucide lucide-phone absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-saffron-500"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                    ></path>
                  </svg>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2.5 text-sm focus:border-saffron-500 outline-none"
                    defaultValue=""
                  />
                </div>
                <button
                  type="button"
                  className="rounded-xl border border-saffron-300 bg-saffron-50 px-4 text-xs font-bold text-saffron-700 hover:bg-saffron-100 disabled:opacity-50 sd-btn sd-btn--submit"
                >Send OTP</button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-amber-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-saffron-500/25 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 sd-btn sd-btn--login-register"
            >
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
                className="lucide lucide-user-check h-4 w-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <polyline points="16 11 18 13 22 9"></polyline>
              </svg>
              <span>{t(text, 'k11', "Sign In to Portal")}</span>
            </button>
          </form>
          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-600 mb-3">{t(text, 'k12', "Don't have an official Sanatan member account yet?")}</p>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-saffron-500 bg-saffron-50 px-6 py-2.5 text-xs font-bold text-saffron-800 hover:bg-saffron-100 transition-colors sd-btn sd-btn--join-mission"
              href="/membership"
            >
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
                className="lucide lucide-user-plus h-4 w-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <line x1="19" x2="19" y1="8" y2="14"></line>
                <line x1="22" x2="16" y1="11" y2="11"></line>
              </svg>
              <span>{t(text, 'k13', "Join Us & Create New Profile (Free Registration)")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section className="container-x my-12 sd-gap">
      <div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-saffron-600 via-saffron-500 to-maroon-600 px-6 py-14 text-center text-white shadow-xl sm:px-12"
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>
        <p className="deva eyebrow text-saffron-100">{t(text, 'k14', "आपका सहयोग किसी के जीवन में नई उम्मीद ला सकता है")}</p>
        <h2 className="deva mt-3 font-display text-3xl font-bold sm:text-4xl">सेवा, सहयोग एवं सहभागिता के माध्यम से जुड़ें</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90">
          {t(text, 'k15', "Be part of positive change. Your contribution brings hope, support and dignity to lives across India.")}
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
            {t(text, 'k16', "Donate Now")}
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
            {t(text, 'k17', "Join the Mission")}
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}
