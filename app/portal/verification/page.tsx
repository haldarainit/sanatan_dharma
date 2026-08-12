import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default function PortalVerificationPage() {
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
          <span className="text-[#e35300]">Official Verification Center</span>
        </nav>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          Official Verification{' '}
          <span className="text-[#e35300]">Center</span>
        </h1>
        <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">🚩 Authenticate Member Badges &amp; Certificates</p>
        <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700">
          Verify the validity of Volunteer IDs, Seva Certificates, Patron Credentials, and CSR Compliance Records in real-time.
        </p>
      </div>
    </section>
    <section className="container-x my-12">
      <div className="mx-auto max-w-4xl space-y-10">
        <div
          className="rounded-3xl border border-saffron-200/90 bg-gradient-to-b from-saffron-50/50 via-white to-white p-6 sm:p-10 shadow-xl text-center"
        >
          <div
            className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-tr from-saffron-500 to-amber-500 text-white shadow-lg mb-4"
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
              className="lucide lucide-shield-check h-7 w-7"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
              ></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Credential &amp; Badge Verification</h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto mb-6">
            Enter any Member ID, Volunteer Badge Number, or CSR Certificate Code below to check official authentication status.
          </p>
          <form className="max-w-2xl mx-auto">
            <div className="relative flex flex-col sm:flex-row items-center gap-2">
              <div className="relative w-full">
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
                  className="lucide lucide-search absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-saffron-500"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Enter ID e.g. SDMKF-VOL-8942 or CSR-8812-2025"
                  className="w-full rounded-2xl border border-slate-300 pl-12 pr-4 py-3.5 text-sm sm:text-base focus:border-saffron-500 focus:ring-4 focus:ring-saffron-200 outline-none uppercase font-mono shadow-inner transition-all"
                  defaultValue=""
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 rounded-2xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-amber-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-saffron-500/25 hover:opacity-95 transition-all flex items-center justify-center gap-2 sd-btn sd-btn--submit"
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
                  className="lucide lucide-shield-check h-4 w-4"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  ></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                {' '}Verify Now
              </button>
            </div>
          </form>
          <div
            className="mt-6 pt-6 border-t border-saffron-100 flex flex-wrap items-center justify-center gap-2 text-xs"
          >
            <span className="text-slate-500 font-semibold">Test Sample IDs:</span>
            <button
              type="button"
              className="rounded-lg bg-saffron-100 border border-saffron-200 px-2.5 py-1 font-mono font-bold text-saffron-800 hover:bg-saffron-200 transition-colors"
            >SDMKF-VOL-8942</button>
            <button
              type="button"
              className="rounded-lg bg-amber-100 border border-amber-200 px-2.5 py-1 font-mono font-bold text-amber-900 hover:bg-amber-200 transition-colors"
            >SDMKF-PAT-1002</button>
            <button
              type="button"
              className="rounded-lg bg-blue-100 border border-blue-200 px-2.5 py-1 font-mono font-bold text-blue-900 hover:bg-blue-200 transition-colors"
            >CSR-8812-2025</button>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 pt-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
            <div
              className="h-9 w-9 rounded-xl bg-saffron-100 text-saffron-700 grid place-items-center font-bold"
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
                className="lucide lucide-qr-code h-5 w-5"
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
            </div>
            <h4 className="text-sm font-bold text-slate-900">QR Code Encrypted</h4>
            <p className="text-xs text-slate-600">
              Every physical and digital badge carries an encrypted QR hash that points directly to this live portal.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
            <div
              className="h-9 w-9 rounded-xl bg-saffron-100 text-saffron-700 grid place-items-center font-bold"
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
                className="lucide lucide-shield-check h-5 w-5"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                ></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <h4 className="text-sm font-bold text-slate-900">Anti-Fraud Safeguard</h4>
            <p className="text-xs text-slate-600">
              Prevents unauthorized individuals from misrepresenting the foundation during public donation drives.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
            <div
              className="h-9 w-9 rounded-xl bg-saffron-100 text-saffron-700 grid place-items-center font-bold"
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
                className="lucide lucide-triangle-alert h-5 w-5"
              >
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                <path d="M12 9v4"></path>
                <path d="M12 17h.01"></path>
              </svg>
            </div>
            <h4 className="text-sm font-bold text-slate-900">Report Fake ID</h4>
            <p className="text-xs text-slate-600">
              Notice someone collecting unauthorized funds? Report unverified volunteer claims directly to our vigilance unit.
            </p>
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
