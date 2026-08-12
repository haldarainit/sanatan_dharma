import { getPageContent, img, t } from '@/lib/sanity/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default async function PortalProfilePage() {
  const { text, images } = await getPageContent("/portal/profile")
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
          <span className="text-[#e35300]">{t(text, 'k2', "Member Profile &amp; Dashboard")}</span>
        </nav>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          Member Profile &amp;{' '}
          <span className="text-[#e35300]">{t(text, 'k3', "Dashboard")}</span>
        </h1>
        <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">{t(text, 'k4', "🚩 Official Sanatan Member Credentials")}</p>
        <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700">
          {t(text, 'k5', "Access your digital member ID card, official membership certificate, review Seva activity logs, and track your volunteer credentials.")}
        </p>
      </div>
    </section>
    <section className="container-x my-12">
      <div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0D1B2A] via-[#1A2E40] to-[#0D1B2A] p-6 sm:p-8 text-white shadow-xl mb-8"
      >
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-saffron-500/20 blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="relative">
              <div
                className="h-24 w-24 rounded-2xl bg-gradient-to-tr from-saffron-500 to-amber-400 p-1 shadow-lg overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80"
                  alt="Rahul Sharma"
                  className="h-full w-full object-cover rounded-[14px]"
                />
              </div>
              <span
                className="absolute -bottom-1 -right-1 rounded-full bg-emerald-500 p-1 text-white shadow-md"
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
                  className="lucide lucide-circle-check h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </span>
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <h1 className="text-2xl font-bold text-white">Rahul Sharma</h1>
                <span
                  className="rounded-full bg-saffron-500/30 border border-saffron-400/40 px-3 py-0.5 text-xs font-bold text-saffron-300"
                >Sanatani Sena Volunteer</span>
              </div>
              <p className="text-xs text-slate-300 flex items-center justify-center sm:justify-start gap-3">
                <span>
                  ID:{' '}
                  <strong className="text-amber-400 font-mono">{t(text, 'k6', "SDMKF-2026-8942")}</strong>
                </span>
                <span>•</span>
                <span>{t(text, 'k7', "Mumbai Suburban, Maharashtra")}</span>
              </p>
              <p
                className="text-xs font-semibold mt-1 flex items-center justify-center sm:justify-start gap-1"
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
                  className="lucide lucide-shield-check h-3.5 w-3.5 text-emerald-400"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  ></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span className="text-emerald-400">{t(text, 'k8', "Background Verified &amp; Active Member")}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              type="button"
              title="View Digital ID"
              className="flex-1 md:flex-initial rounded-xl px-4 py-2.5 text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-saffron-500 to-amber-500 text-white hover:opacity-95 sd-btn sd-btn--view-details"
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
                className="lucide lucide-qr-code h-4 w-4"
              >
                <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                <path d="M21 21v.01"></path>
                <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                <path d="M3 12h.01"></path>
                <path d="M12 3h.01"></path>
                <path d="M12 16v.01"></path>
                <path d="M16 12h1"></path>
                <path d="M21 12v.01"></path>
                <path d="M12 21v-1"></path>
              </svg>
              {' '}View Digital ID
            </button>
            <button
              type="button"
              title="View Certificate"
              className="flex-1 md:flex-initial rounded-xl px-4 py-2.5 text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:opacity-95"
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
                className="lucide lucide-file-text h-4 w-4"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              {' '}Certificate
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div
            className="rounded-2xl border border-saffron-200/80 bg-gradient-to-br from-saffron-50/80 to-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between text-saffron-600 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{t(text, 'k9', "Seva Logged")}</span>
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
                className="lucide lucide-clock h-5 w-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <p className="text-2xl font-bold text-saffron-900">
              148{' '}
              <span className="text-xs font-semibold text-slate-600">{t(text, 'k10', "Hrs")}</span>
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">{t(text, 'k11', "Verified on-ground hours")}</p>
          </div>
          <div
            className="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/80 to-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between text-amber-600 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{t(text, 'k12', "Campaigns")}</span>
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
                className="lucide lucide-award h-5 w-5"
              >
                <path
                  d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                ></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </div>
            <p className="text-2xl font-bold text-amber-900">
              16{' '}
              <span className="text-xs font-semibold text-slate-600">{t(text, 'k13', "Drives")}</span>
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">{t(text, 'k14', "Relief &amp; Seva drives")}</p>
          </div>
          <div
            className="rounded-2xl border border-rose-200/80 bg-gradient-to-br from-rose-50/80 to-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between text-rose-600 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{t(text, 'k15', "Contributions")}</span>
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
                className="lucide lucide-heart h-5 w-5"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path>
              </svg>
            </div>
            <p className="text-2xl font-bold text-rose-900">{t(text, 'k16', "₹18,500")}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">{t(text, 'k17', "Total donation support")}</p>
          </div>
          <div
            className="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 to-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between text-emerald-600 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{t(text, 'k18', "Verification")}</span>
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
                className="lucide lucide-shield-check h-5 w-5"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                ></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <p className="text-lg font-bold text-emerald-900">{t(text, 'k19', "Level 3 Active")}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">{t(text, 'k20', "Identity &amp; Police verified")}</p>
          </div>
        </div>
        <div
          className="flex rounded-2xl bg-slate-100 p-1.5 mb-8 border border-slate-200/60 overflow-x-auto"
        >
          <button
            type="button"
            className="flex-1 min-w-[120px] rounded-xl py-2.5 text-xs font-bold transition-all whitespace-nowrap bg-white text-saffron-700 shadow-md"
          >Personal Details</button>
          <button
            type="button"
            className="flex-1 min-w-[130px] rounded-xl py-2.5 text-xs font-bold transition-all whitespace-nowrap text-slate-600 hover:text-saffron-600"
          >🪪 Digital ID Card</button>
          <button
            type="button"
            className="flex-1 min-w-[150px] rounded-xl py-2.5 text-xs font-bold transition-all whitespace-nowrap text-slate-600 hover:text-saffron-600"
          >📜 Membership Certificate</button>
          <button
            type="button"
            className="flex-1 min-w-[120px] rounded-xl py-2.5 text-xs font-bold transition-all whitespace-nowrap text-slate-600 hover:text-saffron-600"
          >Seva History Log</button>
          <button
            type="button"
            className="flex-1 min-w-[140px] rounded-xl py-2.5 text-xs font-bold transition-all whitespace-nowrap text-slate-600 hover:text-saffron-600"
          >My Help Requests</button>
          <button
            type="button"
            className="flex-1 min-w-[120px] rounded-xl py-2.5 text-xs font-bold transition-all whitespace-nowrap text-slate-600 hover:text-saffron-600"
          >Account Settings</button>
        </div>
        <div
          className="rounded-3xl border border-saffron-200/90 bg-white p-6 sm:p-8 shadow-md"
          style={{ opacity: "0", transform: "translateY(10px)" }}
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <h3 className="text-lg font-bold text-slate-900">Member Overview &amp; Details</h3>
            <button
              type="button"
              className="text-xs font-bold text-saffron-700 hover:underline flex items-center gap-1"
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
                className="lucide lucide-pen-line h-3.5 w-3.5"
              >
                <path d="M12 20h9"></path>
                <path
                  d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
                ></path>
              </svg>
              {' '}Edit Details
            </button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t(text, 'k21', "Member ID")}</span>
              <p className="text-sm font-bold text-slate-800 font-mono">{t(text, 'k22', "SDMKF-2026-8942")}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t(text, 'k23', "Assigned Track")}</span>
              <p className="text-sm font-semibold text-slate-800">{t(text, 'k24', "SANATANI SENA")}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t(text, 'k25', "Joined Date")}</span>
              <p className="text-sm font-semibold text-slate-800">{t(text, 'k26', "12 Jan 2025")}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t(text, 'k27', "Mobile Number")}</span>
              <p className="text-sm font-semibold text-slate-800">{t(text, 'k28', "+91 98201 44321")}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t(text, 'k29', "Email Address")}</span>
              <p className="text-sm font-semibold text-slate-800">{t(text, 'k30', "rahul.sharma@sanatandharma.org")}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t(text, 'k31', "Blood Group")}</span>
              <p className="text-sm font-semibold text-slate-800">{t(text, 'k32', "O+")}</p>
            </div>
            <div className="space-y-1 sm:col-span-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t(text, 'k33', "Residential Address")}</span>
              <p className="text-sm font-semibold text-slate-800">{t(text, 'k34', "402, Shiv Shanti Heights, Malad West, Mumbai - 400064")}</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t(text, 'k35', "Emergency Helpline Contact")}</span>
              <p className="text-sm font-semibold text-rose-700">{t(text, 'k36', "+91 98201 99887")}</p>
            </div>
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
        <p className="deva eyebrow text-saffron-100">{t(text, 'k37', "आपका सहयोग किसी के जीवन में नई उम्मीद ला सकता है")}</p>
        <h2 className="deva mt-3 font-display text-3xl font-bold sm:text-4xl">सेवा, सहयोग एवं सहभागिता के माध्यम से जुड़ें</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90">
          {t(text, 'k38', "Be part of positive change. Your contribution brings hope, support and dignity to lives across India.")}
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
            {t(text, 'k39', "Donate Now")}
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
            {t(text, 'k40', "Join the Mission")}
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}
