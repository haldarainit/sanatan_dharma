import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default function PortalAnnouncementsPage() {
  return (
    <>
    <section
      className="relative overflow-hidden bg-gradient-to-br from-saffron-50 via-cream to-saffron-100/60 font-sans"
    >
      <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-saffron-200/40 blur-3xl"></div>
      <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-maroon-500/10 blur-3xl"></div>
      <div className="container-x relative py-12 sm:py-16">
        <nav className="flex items-center gap-1.5 text-xs font-semibold text-ink/50 mb-4">
          <Link className="hover:text-saffron-700 transition-colors" href="/">Home</Link>
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
          <span className="text-[#e35300]">Portal Announcements &amp; Circulars</span>
        </nav>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          Portal Announcements &amp;{' '}
          <span className="text-[#e35300]">Circulars</span>
        </h1>
        <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">🚩 Official Directives &amp; Foundation Bulletins</p>
        <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700">
          Stay updated with official notices, disaster relief directives, volunteer circulars, and transparent financial audit statements.
        </p>
      </div>
    </section>
    <section className="container-x my-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-3xl border border-saffron-200/90 bg-white p-6 shadow-md"
        >
          <div className="relative w-full md:w-80">
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
              className="lucide lucide-search absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-saffron-500"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              placeholder="Search notices or ref IDs..."
              className="w-full rounded-xl border border-slate-200 pl-10 pr-4 py-2 text-sm focus:border-saffron-500 focus:ring-2 focus:ring-saffron-200 outline-none"
              defaultValue=""
            />
          </div>
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto">
            <button
              type="button"
              className="rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all whitespace-nowrap bg-saffron-600 text-white shadow-sm"
            >All</button>
            <button
              type="button"
              className="rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all whitespace-nowrap bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Urgent Directives</button>
            <button
              type="button"
              className="rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all whitespace-nowrap bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Event Alerts</button>
            <button
              type="button"
              className="rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all whitespace-nowrap bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Annual Reports</button>
            <button
              type="button"
              className="rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all whitespace-nowrap bg-saffron-50/80 text-saffron-900 border border-saffron-200/60 hover:bg-saffron-100"
            >Volunteer Notices</button>
          </div>
        </div>
        <div className="space-y-4">
          <div
            className="group relative rounded-3xl border p-6 sm:p-7 transition-all duration-200 bg-white hover:shadow-lg border-saffron-400/80 ring-1 ring-saffron-300/50"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span
                  className="rounded-full px-3 py-0.5 text-xs font-bold bg-rose-100 text-rose-800 border border-rose-300"
                >Urgent Directives</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600">
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
                    className="lucide lucide-circle-alert h-3.5 w-3.5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" x2="12" y1="8" y2="12"></line>
                    <line x1="12" x2="12.01" y1="16" y2="16"></line>
                  </svg>
                  {' '}High Priority Directive
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
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
                    className="lucide lucide-calendar h-3.5 w-3.5 text-saffron-500"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  {' '}28 July 2026
                </span>
                <span>•</span>
                <span className="font-mono text-slate-400">ANN-2026-09</span>
              </div>
            </div>
            <h3
              className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-saffron-700 transition-colors mb-2"
            >Urgent Monsoon Flood Relief Operational Directives for Sena Cadre</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              All district coordinators and volunteer teams in coastal and riverbank zones are instructed to activate emergency command stations for immediate food &amp; medical kit distribution.
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-semibold">
                Issued by:{' '}
                <strong className="text-slate-700">Central Disaster Response Cell</strong>
              </span>
              <button
                type="button"
                className="rounded-xl bg-saffron-50 border border-saffron-200 px-4 py-2 text-xs font-bold text-saffron-800 hover:bg-saffron-600 hover:text-white transition-all flex items-center gap-1.5 sd-btn sd-btn--view-details"
              >
                <span>Read Full Directive</span>
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
              </button>
            </div>
          </div>
          <div
            className="group relative rounded-3xl border p-6 sm:p-7 transition-all duration-200 bg-white hover:shadow-lg border-slate-200/90"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full px-3 py-0.5 text-xs font-bold bg-saffron-100 text-saffron-800">Event Alerts</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
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
                    className="lucide lucide-calendar h-3.5 w-3.5 text-saffron-500"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  {' '}15 July 2026
                </span>
                <span>•</span>
                <span className="font-mono text-slate-400">ANN-2026-08</span>
              </div>
            </div>
            <h3
              className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-saffron-700 transition-colors mb-2"
            >
              Annual Sanatan Samskriti &amp; Gau Seva Sammelan 2026 Registration Open
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Join over 5,000 delegates, scholars, and volunteers at our annual flagship conference in New Delhi. Registration links and delegate passes are now active on portal.
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-semibold">
                Issued by:{' '}
                <strong className="text-slate-700">Cultural &amp; Event Planning Board</strong>
              </span>
              <button
                type="button"
                className="rounded-xl bg-saffron-50 border border-saffron-200 px-4 py-2 text-xs font-bold text-saffron-800 hover:bg-saffron-600 hover:text-white transition-all flex items-center gap-1.5 sd-btn sd-btn--view-details"
              >
                <span>Read Full Directive</span>
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
              </button>
            </div>
          </div>
          <div
            className="group relative rounded-3xl border p-6 sm:p-7 transition-all duration-200 bg-white hover:shadow-lg border-slate-200/90"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full px-3 py-0.5 text-xs font-bold bg-saffron-100 text-saffron-800">Annual Reports</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
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
                    className="lucide lucide-calendar h-3.5 w-3.5 text-saffron-500"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  {' '}30 June 2026
                </span>
                <span>•</span>
                <span className="font-mono text-slate-400">ANN-2026-07</span>
              </div>
            </div>
            <h3
              className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-saffron-700 transition-colors mb-2"
            >
              Quarterly Audit Report &amp; Transparent Financial Utilization Statement Q1 2026
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              In accordance with our 100% financial transparency promise, the detailed income, expenditure, and project-wise audit report for Q1 2026 has been published.
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-semibold">
                Issued by:{' '}
                <strong className="text-slate-700">Finance &amp; Compliance Board</strong>
              </span>
              <button
                type="button"
                className="rounded-xl bg-saffron-50 border border-saffron-200 px-4 py-2 text-xs font-bold text-saffron-800 hover:bg-saffron-600 hover:text-white transition-all flex items-center gap-1.5 sd-btn sd-btn--view-details"
              >
                <span>Read Full Directive</span>
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
              </button>
            </div>
          </div>
          <div
            className="group relative rounded-3xl border p-6 sm:p-7 transition-all duration-200 bg-white hover:shadow-lg border-slate-200/90"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="rounded-full px-3 py-0.5 text-xs font-bold bg-saffron-100 text-saffron-800">Volunteer Notices</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1">
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
                    className="lucide lucide-calendar h-3.5 w-3.5 text-saffron-500"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  {' '}10 June 2026
                </span>
                <span>•</span>
                <span className="font-mono text-slate-400">ANN-2026-06</span>
              </div>
            </div>
            <h3
              className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-saffron-700 transition-colors mb-2"
            >Update on Digital Volunteer Verification &amp; ID Renewal Drive</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              All registered general members and Sena volunteers are requested to update their profile details and re-verify mobile OTP for QR code ID card renewal.
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-semibold">
                Issued by:{' '}
                <strong className="text-slate-700">Volunteer Administration Cell</strong>
              </span>
              <button
                type="button"
                className="rounded-xl bg-saffron-50 border border-saffron-200 px-4 py-2 text-xs font-bold text-saffron-800 hover:bg-saffron-600 hover:text-white transition-all flex items-center gap-1.5 sd-btn sd-btn--view-details"
              >
                <span>Read Full Directive</span>
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
              </button>
            </div>
          </div>
        </div>
        <div
          className="rounded-3xl bg-gradient-to-r from-[#0D1B2A] via-[#1E3A5F] to-[#0D1B2A] p-6 sm:p-8 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div
              className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-saffron-500 text-white shadow-lg"
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
                className="lucide lucide-bell-ring h-6 w-6"
              >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
                <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Subscribe to WhatsApp Circulars</h4>
              <p className="text-xs text-slate-300">
                Get urgent volunteer directives &amp; emergency alerts directly on your phone.
              </p>
            </div>
          </div>
          <form className="flex gap-2 w-full sm:w-auto">
            <input
              type="tel"
              placeholder="+91 Mobile Number"
              className="w-full sm:w-48 rounded-xl bg-white/10 border border-white/20 px-3.5 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-saffron-400"
              defaultValue=""
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-saffron-500 px-4 py-2 text-xs font-bold text-white hover:bg-saffron-600 transition-colors flex items-center gap-1 sd-btn sd-btn--join-mission"
            >Subscribe</button>
          </form>
        </div>
      </div>
    </section>
    <section className="container-x my-12 sd-gap">
      <div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-saffron-600 via-saffron-500 to-maroon-600 px-6 py-14 text-center text-white shadow-xl sm:px-12"
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>
        <p className="deva eyebrow text-saffron-100">आपका सहयोग किसी के जीवन में नई उम्मीद ला सकता है</p>
        <h2 className="deva mt-3 font-display text-3xl font-bold sm:text-4xl">सेवा, सहयोग एवं सहभागिता के माध्यम से जुड़ें</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90">
          Be part of positive change. Your contribution brings hope, support and dignity to lives across India.
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
            Donate Now
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
            Join the Mission
          </Link>
        </div>
      </div>
    </section>
    </>
  )
}
