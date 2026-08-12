import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default function CsrPartnerPage() {
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
          <span className="text-[#e35300]">CSR Contact &amp; Partnership</span>
        </nav>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          CSR Contact &amp;{' '}
          <span className="text-[#e35300]">Partnership</span>
        </h1>
        <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">CSR संपर्क एवं सहभागिता • Corporate Social Responsibility</p>
        <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700">
          साथ मिलकर समाज में सकारात्मक परिवर्तन लाएँ — Empowering communities through transparent, impactful CSR initiatives.
        </p>
      </div>
    </section>
    <section className="container-x my-8 sm:my-12">
      <div
        className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#0D1B2A] to-slate-800 p-6 sm:p-10 text-white shadow-xl mb-10 border border-slate-700/60 relative overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-[#FF6F00]/10 rounded-full blur-3xl pointer-events-none"
        ></div>
        <div className="relative z-10 space-y-4 max-w-4xl">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6F00]/20 border border-[#FF6F00]/40 text-[#FF6F00] text-xs font-bold uppercase tracking-wider"
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
              className="lucide lucide-building2 h-4 w-4"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
              <path d="M10 6h4"></path>
              <path d="M10 10h4"></path>
              <path d="M10 14h4"></path>
              <path d="M10 18h4"></path>
            </svg>
            <span>Sanatan CSR Hub</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">साथ मिलकर समाज में सकारात्मक परिवर्तन लाएँ</h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            सनातन धर्म मानव कल्याण फाउंडेशन विभिन्न सामाजिक, शैक्षिक, स्वास्थ्य, महिला सशक्तिकरण, पर्यावरण, गौ सेवा एवं सांस्कृतिक परियोजनाओं के लिए{' '}
            <strong>Corporate Social Responsibility (CSR)</strong>
            {' '}सहयोग का स्वागत करता है।
          </p>
          <p
            className="text-xs sm:text-sm text-amber-200/90 leading-relaxed border-l-2 border-[#FF6F00] pl-4 py-1"
          >
            यदि आपकी संस्था CSR Partnership, Project Sponsorship, Employee Volunteering, Cause Marketing या Long-Term Social Impact Initiatives में रुचि रखती है, तो कृपया नीचे दी गई जानकारी साझा करें।
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF6F00] text-white font-bold text-xs sm:text-sm shadow-md hover:bg-[#e06200] transition-all cursor-pointer sd-btn sd-btn--download"
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
                className="lucide lucide-download h-4 w-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" x2="12" y1="15" y2="3"></line>
              </svg>
              <span>Download CSR Profile</span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-sm transition-all cursor-pointer sd-btn sd-btn--send-message"
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
                className="lucide lucide-phone-call h-4 w-4 text-[#FF6F00]"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
                <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                <path d="M14.05 6A5 5 0 0 1 18 10"></path>
              </svg>
              <span>Request a Call Back</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-[#FF6F00] uppercase tracking-widest">Institutional Strengths &amp; Trust</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1B2A] mt-1">WHY PARTNER WITH US? / हमारे साथ साझेदारी क्यों करें?</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            पूर्ण पारदर्शिता, वैधानिक अनुपालन एवं समर्पित प्रभाव मूल्यांकन के साथ CSR निष्पादन।
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#FF6F00]/50 hover:shadow-md transition-all flex items-start gap-3.5 group"
          >
            <div
              className="p-2.5 rounded-xl bg-orange-50 text-[#FF6F00] group-hover:bg-[#FF6F00] group-hover:text-white transition-colors shrink-0"
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
                className="lucide lucide-building2 h-5 w-5"
              >
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                <path d="M10 6h4"></path>
                <path d="M10 10h4"></path>
                <path d="M10 14h4"></path>
                <path d="M10 18h4"></path>
              </svg>
            </div>
            <div>
              <h3
                className="text-xs sm:text-sm font-bold text-[#0D1B2A] group-hover:text-[#FF6F00] transition-colors leading-snug"
              >Registered Section 8 Organization</h3>
            </div>
          </div>
          <div
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#FF6F00]/50 hover:shadow-md transition-all flex items-start gap-3.5 group"
          >
            <div
              className="p-2.5 rounded-xl bg-orange-50 text-[#FF6F00] group-hover:bg-[#FF6F00] group-hover:text-white transition-colors shrink-0"
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
            <div>
              <h3
                className="text-xs sm:text-sm font-bold text-[#0D1B2A] group-hover:text-[#FF6F00] transition-colors leading-snug"
              >CSR Registered Organization</h3>
            </div>
          </div>
          <div
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#FF6F00]/50 hover:shadow-md transition-all flex items-start gap-3.5 group"
          >
            <div
              className="p-2.5 rounded-xl bg-orange-50 text-[#FF6F00] group-hover:bg-[#FF6F00] group-hover:text-white transition-colors shrink-0"
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
                className="lucide lucide-file-check h-5 w-5"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="m9 15 2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h3
                className="text-xs sm:text-sm font-bold text-[#0D1B2A] group-hover:text-[#FF6F00] transition-colors leading-snug"
              >12A &amp; 80G Eligible</h3>
            </div>
          </div>
          <div
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#FF6F00]/50 hover:shadow-md transition-all flex items-start gap-3.5 group"
          >
            <div
              className="p-2.5 rounded-xl bg-orange-50 text-[#FF6F00] group-hover:bg-[#FF6F00] group-hover:text-white transition-colors shrink-0"
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
                className="lucide lucide-badge-check h-5 w-5"
              >
                <path
                  d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                ></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h3
                className="text-xs sm:text-sm font-bold text-[#0D1B2A] group-hover:text-[#FF6F00] transition-colors leading-snug"
              >NGO Darpan Registered</h3>
            </div>
          </div>
          <div
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#FF6F00]/50 hover:shadow-md transition-all flex items-start gap-3.5 group"
          >
            <div
              className="p-2.5 rounded-xl bg-orange-50 text-[#FF6F00] group-hover:bg-[#FF6F00] group-hover:text-white transition-colors shrink-0"
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
                className="lucide lucide-chart-column h-5 w-5"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                <path d="M18 17V9"></path>
                <path d="M13 17V5"></path>
                <path d="M8 17v-3"></path>
              </svg>
            </div>
            <div>
              <h3
                className="text-xs sm:text-sm font-bold text-[#0D1B2A] group-hover:text-[#FF6F00] transition-colors leading-snug"
              >Transparent Reporting System</h3>
            </div>
          </div>
          <div
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#FF6F00]/50 hover:shadow-md transition-all flex items-start gap-3.5 group"
          >
            <div
              className="p-2.5 rounded-xl bg-orange-50 text-[#FF6F00] group-hover:bg-[#FF6F00] group-hover:text-white transition-colors shrink-0"
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
                className="lucide lucide-eye h-5 w-5"
              >
                <path
                  d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                ></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <div>
              <h3
                className="text-xs sm:text-sm font-bold text-[#0D1B2A] group-hover:text-[#FF6F00] transition-colors leading-snug"
              >Dedicated Project Monitoring</h3>
            </div>
          </div>
          <div
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#FF6F00]/50 hover:shadow-md transition-all flex items-start gap-3.5 group"
          >
            <div
              className="p-2.5 rounded-xl bg-orange-50 text-[#FF6F00] group-hover:bg-[#FF6F00] group-hover:text-white transition-colors shrink-0"
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
                className="lucide lucide-target h-5 w-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <div>
              <h3
                className="text-xs sm:text-sm font-bold text-[#0D1B2A] group-hover:text-[#FF6F00] transition-colors leading-snug"
              >Impact-Based Implementation</h3>
            </div>
          </div>
          <div
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-[#FF6F00]/50 hover:shadow-md transition-all flex items-start gap-3.5 group"
          >
            <div
              className="p-2.5 rounded-xl bg-orange-50 text-[#FF6F00] group-hover:bg-[#FF6F00] group-hover:text-white transition-colors shrink-0"
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
                className="lucide lucide-clock h-5 w-5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <div>
              <h3
                className="text-xs sm:text-sm font-bold text-[#0D1B2A] group-hover:text-[#FF6F00] transition-colors leading-snug"
              >Regular Activity &amp; Utilization Updates</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <div className="w-full max-w-[1050px] mx-auto py-4 font-sans">
          <div
            className="text-center text-[0.72rem] font-bold text-[#d95300] uppercase tracking-[2px] mb-7"
          >OUR CSR OUTREACH PARTNERS</div>
          <div
            className="sd-partner-logos flex flex-col gap-6 overflow-hidden py-4 bg-white rounded-2xl border border-orange-100/60 p-4 sm:p-6 shadow-sm"
          >
            <div className="group relative flex overflow-hidden w-full">
              <div
                className="absolute left-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"
              ></div>
              <div
                className="absolute right-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"
              ></div>
              <div
                className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8 animate-marquee-left md:group-hover:[animation-play-state:paused]"
              >
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/tata.jpeg"
                    alt="TATA"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/infosys.jpeg"
                    alt="INFOSYS"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/wipro.jpeg"
                    alt="WIPRO"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/reliance.jpeg"
                    alt="RELIANCE"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/icici.jpeg"
                    alt="ICICI BANK"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/indian.jpeg"
                    alt="INDIAN OIL"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8 animate-marquee-left md:group-hover:[animation-play-state:paused]"
              >
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/tata.jpeg"
                    alt="TATA"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/infosys.jpeg"
                    alt="INFOSYS"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/wipro.jpeg"
                    alt="WIPRO"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/reliance.jpeg"
                    alt="RELIANCE"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/icici.jpeg"
                    alt="ICICI BANK"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/indian.jpeg"
                    alt="INDIAN OIL"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="group relative flex overflow-hidden w-full">
              <div
                className="absolute left-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"
              ></div>
              <div
                className="absolute right-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"
              ></div>
              <div
                className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8 animate-marquee-right md:group-hover:[animation-play-state:paused]"
              >
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/hdfc.jpeg"
                    alt="HDFC BANK"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/abg.jpeg"
                    alt="ADITYA BIRLA GROUP"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/lnt.jpeg"
                    alt="L&T"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/mahindra.jpeg"
                    alt="MAHINDRA"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/ntpc.jpeg"
                    alt="NTPC"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8 animate-marquee-right md:group-hover:[animation-play-state:paused]"
              >
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/hdfc.jpeg"
                    alt="HDFC BANK"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/abg.jpeg"
                    alt="ADITYA BIRLA GROUP"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/lnt.jpeg"
                    alt="L&T"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/mahindra.jpeg"
                    alt="MAHINDRA"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src="/img/ntpc.jpeg"
                    alt="NTPC"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="csr-enquiry-form"
        className="rounded-3xl bg-slate-50/90 border border-slate-200 p-6 sm:p-8 md:p-10 shadow-xl relative"
      >
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-purple-100 text-purple-800 px-3.5 py-1 text-xs font-bold mb-2"
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
              className="lucide lucide-briefcase h-3.5 w-3.5 text-purple-700"
            >
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              <rect width="20" height="14" x="2" y="6" rx="2"></rect>
            </svg>
            <span>Official Corporate CSR Enquiry Form</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1B2A]">Corporate CSR Enquiry &amp; Proposal Form</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            चरणबद्ध तरीके से अपनी संस्था एवं CSR प्राथमिकताओं का विवरण दर्ज करें (Step 1 of 4)
          </p>
        </div>
        <div className="space-y-8">
          <div className="mb-8 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs font-bold text-[#0D1B2A] mb-2">
              <span>Application Progress</span>
              <span className="text-[#FF6F00] font-extrabold">25% Completed</span>
            </div>
            <div
              className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200"
            >
              <div
                className="h-full bg-gradient-to-r from-[#FF6F00] via-amber-500 to-[#FF6F00] rounded-full shadow-md"
                style={{ width: "25%" }}
              ></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
              <button
                type="button"
                className="p-3 rounded-2xl border text-center transition-all bg-[#FFF4E6] border-[#FF6F00] text-[#0D1B2A] shadow-sm ring-1 ring-[#FF6F00]"
              >
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <span
                    className="h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#FF6F00] text-white"
                  >1</span>
                  <span className="text-xs font-bold">Section 1</span>
                </div>
                <div className="text-[11px] font-medium truncate">Basic Information</div>
              </button>
              <button
                type="button"
                disabled
                className="p-3 rounded-2xl border text-center transition-all bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed"
              >
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <span
                    className="h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-slate-200 text-slate-600"
                  >2</span>
                  <span className="text-xs font-bold">Section 2</span>
                </div>
                <div className="text-[11px] font-medium truncate">Contact Details</div>
              </button>
              <button
                type="button"
                disabled
                className="p-3 rounded-2xl border text-center transition-all bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed"
              >
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <span
                    className="h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-slate-200 text-slate-600"
                  >3</span>
                  <span className="text-xs font-bold">Section 3</span>
                </div>
                <div className="text-[11px] font-medium truncate">Company Details</div>
              </button>
              <button
                type="button"
                disabled
                className="p-3 rounded-2xl border text-center transition-all bg-slate-50 border-slate-200 text-slate-400 cursor-not-allowed"
              >
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <span
                    className="h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-slate-200 text-slate-600"
                  >4</span>
                  <span className="text-xs font-bold">Section 4</span>
                </div>
                <div className="text-[11px] font-medium truncate">CSR Interest &amp; Submit</div>
              </button>
            </div>
          </div>
          <form>
            <div
              className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-6"
              style={{ opacity: "1" }}
            >
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white text-xs font-bold"
                >1</span>
                <h3 className="text-base font-bold text-[#0D1B2A] uppercase tracking-wider">SECTION 1 – BASIC INFORMATION</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="प्रतिनिधि का नाम"
                    className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm focus:border-[#FF6F00] outline-none"
                    defaultValue=""
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Company / Organization Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="कंपनी या संस्था का नाम"
                    className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm focus:border-[#FF6F00] outline-none"
                    defaultValue=""
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">Designation *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CSR Head / Director / HR"
                    className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm focus:border-[#FF6F00] outline-none"
                    defaultValue=""
                  />
                </div>
              </div>
              <div className="pt-4 flex justify-end border-t border-slate-100">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF6F00] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#e06200] shadow-md transition-all cursor-pointer sd-btn sd-btn--next"
                >
                  <span>Proceed to Section 2</span>
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
                    className="lucide lucide-arrow-right h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-10 space-y-4">
          <div
            className="rounded-2xl bg-amber-50/80 border border-amber-200 p-4 text-xs text-amber-900 flex items-start gap-3"
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
              className="lucide lucide-info h-5 w-5 text-amber-600 shrink-0 mt-0.5"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
            <div>
              <strong className="block font-bold text-amber-950 mb-0.5">IMPORTANT NOTE</strong>
              CSR सहयोग एवं परियोजनाओं का अंतिम स्वरूप दोनों पक्षों की पारस्परिक सहमति, उपलब्ध संसाधनों, वैधानिक आवश्यकताओं एवं संस्था की नीति के अनुसार निर्धारित किया जाएगा।
            </div>
          </div>
          <div
            className="rounded-2xl bg-slate-100/80 border border-slate-200 p-4 text-[11px] text-slate-600 leading-relaxed"
          >
            <strong className="block font-bold text-slate-700 mb-0.5">LOGO DISCLAIMER</strong>
            यहाँ प्रदर्शित सभी कंपनियों के लोगो केवल CSR संपर्क, जागरूकता एवं सहभागिता के प्रतिनिधिक उद्देश्य से उपयोग किए गए हैं। किसी कंपनी का लोगो प्रदर्शित होना आवश्यक रूप से औपचारिक साझेदारी, समर्थन या अनुमोदन को प्रदर्शित नहीं करता।
          </div>
        </div>
      </div>
      <div
        className="mt-12 rounded-3xl bg-gradient-to-r from-[#FF9933] via-[#FF6F00] to-[#E65100] p-6 sm:p-8 text-center text-white shadow-lg space-y-2"
      >
        <div
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-amber-200 mx-auto mb-1"
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
            className="lucide lucide-shield-check h-6 w-6"
          >
            <path
              d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
            ></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </div>
        <h3 className="font-serif text-lg sm:text-2xl font-bold tracking-wide">सेवा • सुरक्षा • संस्कार • धर्म — मानव कल्याण हमारा कर्म</h3>
        <p className="text-sm font-semibold text-amber-100">सनातन धर्म मानव कल्याण फाउंडेशन</p>
        <div
          className="text-xs text-white/90 font-medium tracking-widest pt-1 border-t border-white/20 max-w-xs mx-auto"
        >सेवा ही सनातन • समर्पण ही हमारा धर्म</div>
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
