import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default function LegalDocumentsPage() {
  return (
    <>
    <div
      className="bg-[#FAF9F5] min-h-screen text-slate-800 font-sans selection:bg-saffron-500 selection:text-white"
    >
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
            <span className="text-[#e35300]">Legal &amp; Governance Portal</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
            Legal &amp; Governance{' '}
            <span className="text-[#e35300]">Portal</span>
          </h1>
          <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">📜 पारदर्शिता, वैधानिक पंजीकरण एवं ऑडिट रिपोर्ट</p>
          <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700">
            सनातन धर्म मानव कल्याण फाउंडेशन की वैधानिक प्रामाणिकता, 12A &amp; 80G पंजीकरण, वार्षिक सी.ए. ऑडिट रिपोर्ट एवं नीतियां।
          </p>
        </div>
      </section>
      <div
        className="sticky top-[64px] z-30 bg-white/90 backdrop-blur-md border-b border-saffron-200/80 shadow-xs hidden sm:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className="flex items-center justify-between overflow-x-auto py-3 gap-4 text-xs font-bold text-slate-700 no-scrollbar"
          >
            <a
              href="#trust"
              className="hover:text-saffron-600 flex items-center gap-1.5 whitespace-nowrap transition-colors"
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
                className="lucide lucide-shield-check h-4 w-4 text-saffron-500"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                ></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              {' '}Trust &amp; Transparency
            </a>
            <a
              href="#certificates"
              className="hover:text-saffron-600 flex items-center gap-1.5 whitespace-nowrap transition-colors"
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
                className="lucide lucide-award h-4 w-4 text-saffron-500"
              >
                <path
                  d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                ></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
              {' '}Certificates (9)
            </a>
            <a
              href="#verification"
              className="hover:text-saffron-600 flex items-center gap-1.5 whitespace-nowrap transition-colors"
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
                className="lucide lucide-badge-check h-4 w-4 text-saffron-500"
              >
                <path
                  d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                ></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              {' '}Verification Services
            </a>
            <a
              href="#financials"
              className="hover:text-saffron-600 flex items-center gap-1.5 whitespace-nowrap transition-colors"
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
                className="lucide lucide-scale h-4 w-4 text-saffron-500"
              >
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="M7 21h10"></path>
                <path d="M12 3v18"></path>
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
              </svg>
              {' '}Financial Reports
            </a>
            <a
              href="#activities"
              className="hover:text-saffron-600 flex items-center gap-1.5 whitespace-nowrap transition-colors"
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
                className="lucide lucide-file-check2 h-4 w-4 text-saffron-500"
              >
                <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="m3 15 2 2 4-4"></path>
              </svg>
              {' '}Activity Reports
            </a>
            <a
              href="#policies"
              className="hover:text-saffron-600 flex items-center gap-1.5 whitespace-nowrap transition-colors"
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
                className="lucide lucide-file-text h-4 w-4 text-saffron-500"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M10 9H8"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
              </svg>
              {' '}Policies &amp; Compliance
            </a>
          </nav>
        </div>
      </div>
      <section id="trust" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto sd-gap">
        <div
          className="bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-slate-900 text-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-saffron-500/30 relative overflow-hidden"
        >
          <div
            className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-saffron-500/10 blur-3xl pointer-events-none"
          ></div>
          <div
            className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"
          ></div>
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/20 text-saffron-300 border border-saffron-500/40 text-xs font-bold uppercase tracking-wider"
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
                  className="lucide lucide-shield-check h-3.5 w-3.5 text-saffron-400"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  ></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                TRUST &amp; TRANSPARENCY · पारदर्शिता एवं विश्वास
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                विश्वास हमारी सबसे{' '}
                <span className="text-saffron-400">बड़ी पूंजी है।</span>
              </h2>
              <p className="deva text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                सनातन धर्म मानव कल्याण फाउंडेशन पारदर्शिता, जवाबदेही, नैतिक कार्यप्रणाली एवं उत्तरदायित्व के सिद्धांतों पर कार्य करने के लिए प्रतिबद्ध है। हमारा प्रयास है कि संस्था की गतिविधियों, वित्तीय उपयोग एवं प्रमुख दस्तावेजों से संबंधित आवश्यक जानकारी समय-समय पर सार्वजनिक रूप से उपलब्ध कराई जाए।
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                <span
                  className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10"
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
                    className="lucide lucide-circle-check h-4 w-4 text-emerald-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  {' '}Section 8 Registered NGO
                </span>
                <span
                  className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10"
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
                    className="lucide lucide-circle-check h-4 w-4 text-emerald-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  {' '}12A &amp; 80G Approved
                </span>
                <span
                  className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10"
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
                    className="lucide lucide-circle-check h-4 w-4 text-emerald-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  {' '}MCA CSR-1 Certified
                </span>
                <span
                  className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10"
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
                    className="lucide lucide-circle-check h-4 w-4 text-emerald-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  {' '}NITI Aayog Listed
                </span>
              </div>
            </div>
            <div
              className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center space-y-4"
            >
              <div
                className="h-16 w-16 mx-auto rounded-2xl bg-saffron-500/20 text-saffron-400 grid place-items-center border border-saffron-500/40"
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
                  className="lucide lucide-building2 h-8 w-8 text-saffron-400"
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
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block">Corporate Identification</span>
                <span className="font-mono text-sm font-bold text-white block mt-0.5">U88900MR2026NPL47439</span>
              </div>
              <div className="pt-3 border-t border-white/10 text-xs text-slate-300 space-y-1">
                <p>
                  <strong>पंजीकरण संस्था:</strong>
                  {' '}कॉर्पोरेट कार्य मंत्रालय (MCA)
                </p>
                <p>
                  <strong>स्थापना वर्ष:</strong>
                  {' '}2024 · नई दिल्ली
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="certificates"
        className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 sd-gap"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-2 border border-saffron-200"
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
                className="lucide lucide-award h-3.5 w-3.5 text-saffron-600"
              >
                <path
                  d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                ></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
              REGISTRATIONS &amp; CERTIFICATES · पंजीकरण एवं प्रमाणपत्र
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-900">
              हमारी संस्था के{' '}
              <span className="text-saffron-600">वैधानिक प्रमाणपत्र</span>
            </h2>
            <p className="deva text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              हमारी संस्था विभिन्न वैधानिक एवं नियामकीय पंजीकरणों के अंतर्गत कार्यरत है। सभी प्रमाणपत्र नीचे कार्ड ग्रिड में उपलब्ध हैं।
            </p>
          </div>
          <div className="relative w-full md:w-64 shrink-0">
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
              className="lucide lucide-search absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              type="text"
              placeholder="Search Certificate..."
              className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-saffron-500 focus:ring-2 focus:ring-saffron-100 outline-none bg-white"
              defaultValue=""
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          <div
            className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-saffron-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-saffron-50 text-saffron-700 border border-saffron-100"
                >PDF</span>
              </div>
              <div
                className="h-16 w-full bg-gradient-to-br from-saffron-50/80 to-amber-50/50 rounded-xl border border-saffron-100 flex items-center justify-center p-2 group-hover:scale-102 transition-transform"
              >
                <div className="flex items-center gap-2 text-saffron-700">
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
                    className="lucide lucide-file-text h-8 w-8 text-saffron-600"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                  <span className="text-xs font-mono font-bold">PDF DOC</span>
                </div>
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-sm text-slate-900 group-hover:text-saffron-600 transition-colors leading-snug"
                >Certificate of Incorporation &amp; Section 8 Licence</h3>
                <p className="deva text-xs font-semibold text-saffron-700 mt-0.5">निगमन एवं धारा 8 लाइसेंस प्रमाणपत्र</p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">Ministry of Corporate Affairs (MCA), Govt. of India</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-saffron-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer group-hover:shadow-md sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5 text-saffron-400 group-hover:text-white"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Certificate
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-saffron-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-saffron-50 text-saffron-700 border border-saffron-100"
                >IMAGE</span>
              </div>
              <div
                className="h-16 w-full bg-gradient-to-br from-saffron-50/80 to-amber-50/50 rounded-xl border border-saffron-100 flex items-center justify-center p-2 group-hover:scale-102 transition-transform"
              >
                <img
                  src="/certificates/pan_card.jpeg"
                  alt="PAN Card Registration"
                  className="h-full object-contain max-w-full rounded"
                />
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-sm text-slate-900 group-hover:text-saffron-600 transition-colors leading-snug"
                >PAN Card Registration</h3>
                <p className="deva text-xs font-semibold text-saffron-700 mt-0.5">स्थायी खाता संख्या (PAN)</p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">Income Tax Department, Government of India</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-saffron-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer group-hover:shadow-md sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5 text-saffron-400 group-hover:text-white"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Certificate
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-saffron-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-saffron-50 text-saffron-700 border border-saffron-100"
                >IMAGE</span>
              </div>
              <div
                className="h-16 w-full bg-gradient-to-br from-saffron-50/80 to-amber-50/50 rounded-xl border border-saffron-100 flex items-center justify-center p-2 group-hover:scale-102 transition-transform"
              >
                <img
                  src="/certificates/sanatan_dharma_kalyan_foundation.jpeg"
                  alt="NGO Darpan Registration"
                  className="h-full object-contain max-w-full rounded"
                />
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-sm text-slate-900 group-hover:text-saffron-600 transition-colors leading-snug"
                >NGO Darpan Registration</h3>
                <p className="deva text-xs font-semibold text-saffron-700 mt-0.5">नीति आयोग एनजीओ दर्पण पंजीकरण</p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">NITI Aayog Portal Unique Identifier</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-saffron-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer group-hover:shadow-md sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5 text-saffron-400 group-hover:text-white"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Certificate
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-saffron-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-saffron-50 text-saffron-700 border border-saffron-100"
                >PDF</span>
              </div>
              <div
                className="h-16 w-full bg-gradient-to-br from-saffron-50/80 to-amber-50/50 rounded-xl border border-saffron-100 flex items-center justify-center p-2 group-hover:scale-102 transition-transform"
              >
                <div className="flex items-center gap-2 text-saffron-700">
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
                    className="lucide lucide-file-text h-8 w-8 text-saffron-600"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                  <span className="text-xs font-mono font-bold">PDF DOC</span>
                </div>
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-sm text-slate-900 group-hover:text-saffron-600 transition-colors leading-snug"
                >CSR Registration (Form CSR-1)</h3>
                <p className="deva text-xs font-semibold text-saffron-700 mt-0.5">सीएसआर पंजीकरण प्रमाणपत्र</p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">MCA Certification for Corporate Social Responsibility</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-saffron-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer group-hover:shadow-md sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5 text-saffron-400 group-hover:text-white"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Certificate
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-saffron-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-saffron-50 text-saffron-700 border border-saffron-100"
                >PDF</span>
              </div>
              <div
                className="h-16 w-full bg-gradient-to-br from-saffron-50/80 to-amber-50/50 rounded-xl border border-saffron-100 flex items-center justify-center p-2 group-hover:scale-102 transition-transform"
              >
                <div className="flex items-center gap-2 text-saffron-700">
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
                    className="lucide lucide-file-text h-8 w-8 text-saffron-600"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                  <span className="text-xs font-mono font-bold">PDF DOC</span>
                </div>
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-sm text-slate-900 group-hover:text-saffron-600 transition-colors leading-snug"
                >12A Approval Certificate</h3>
                <p className="deva text-xs font-semibold text-saffron-700 mt-0.5">12A आयकर छूट स्वीकृति</p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">Income Tax Exemption for Non-Profit Organization</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-saffron-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer group-hover:shadow-md sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5 text-saffron-400 group-hover:text-white"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Certificate
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-saffron-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-saffron-50 text-saffron-700 border border-saffron-100"
                >PDF</span>
              </div>
              <div
                className="h-16 w-full bg-gradient-to-br from-saffron-50/80 to-amber-50/50 rounded-xl border border-saffron-100 flex items-center justify-center p-2 group-hover:scale-102 transition-transform"
              >
                <div className="flex items-center gap-2 text-saffron-700">
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
                    className="lucide lucide-file-text h-8 w-8 text-saffron-600"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                  <span className="text-xs font-mono font-bold">PDF DOC</span>
                </div>
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-sm text-slate-900 group-hover:text-saffron-600 transition-colors leading-snug"
                >80G Tax Deduction Certificate</h3>
                <p className="deva text-xs font-semibold text-saffron-700 mt-0.5">80G दान कर छूट प्रमाणपत्र</p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">50% Tax Deduction Benefit for Donors</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-saffron-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer group-hover:shadow-md sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5 text-saffron-400 group-hover:text-white"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Certificate
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-saffron-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-saffron-50 text-saffron-700 border border-saffron-100"
                >IMAGE</span>
              </div>
              <div
                className="h-16 w-full bg-gradient-to-br from-saffron-50/80 to-amber-50/50 rounded-xl border border-saffron-100 flex items-center justify-center p-2 group-hover:scale-102 transition-transform"
              >
                <img
                  src="/certificates/9001_2015_certificate.jpeg"
                  alt="ISO 9001:2015 Certification"
                  className="h-full object-contain max-w-full rounded"
                />
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-sm text-slate-900 group-hover:text-saffron-600 transition-colors leading-snug"
                >ISO 9001:2015 Certification</h3>
                <p className="deva text-xs font-semibold text-saffron-700 mt-0.5">ISO 9001:2015 गुणवत्ता प्रमाणपत्र</p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">Quality Management Systems Standard Certificate</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-saffron-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer group-hover:shadow-md sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5 text-saffron-400 group-hover:text-white"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Certificate
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-saffron-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-saffron-50 text-saffron-700 border border-saffron-100"
                >IMAGE</span>
              </div>
              <div
                className="h-16 w-full bg-gradient-to-br from-saffron-50/80 to-amber-50/50 rounded-xl border border-saffron-100 flex items-center justify-center p-2 group-hover:scale-102 transition-transform"
              >
                <img
                  src="/certificates/msme_certifciate.jpeg"
                  alt="MSME Certificate"
                  className="h-full object-contain max-w-full rounded"
                />
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-sm text-slate-900 group-hover:text-saffron-600 transition-colors leading-snug"
                >MSME Certificate</h3>
                <p className="deva text-xs font-semibold text-saffron-700 mt-0.5">एमएसएमई प्रमाणपत्र</p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">Ministry of Micro, Small and Medium Enterprises</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-saffron-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer group-hover:shadow-md sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5 text-saffron-400 group-hover:text-white"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Certificate
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-xl hover:border-saffron-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-saffron-50 text-saffron-700 border border-saffron-100"
                >IMAGE</span>
              </div>
              <div
                className="h-16 w-full bg-gradient-to-br from-saffron-50/80 to-amber-50/50 rounded-xl border border-saffron-100 flex items-center justify-center p-2 group-hover:scale-102 transition-transform"
              >
                <img
                  src="/certificates/udyam_registraion_certificate.jpeg"
                  alt="Udyam Registration Certificate"
                  className="h-full object-contain max-w-full rounded"
                />
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-sm text-slate-900 group-hover:text-saffron-600 transition-colors leading-snug"
                >Udyam Registration Certificate</h3>
                <p className="deva text-xs font-semibold text-saffron-700 mt-0.5">उद्यम पंजीकरण प्रमाणपत्र</p>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">Govt of India Udyam Registration Portal</p>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100">
              <button
                type="button"
                className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-saffron-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs cursor-pointer group-hover:shadow-md sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5 text-saffron-400 group-hover:text-white"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Certificate
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="verification"
        className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 sd-gap"
      >
        <div
          className="bg-gradient-to-br from-amber-50/60 via-saffron-50/40 to-white rounded-3xl p-6 sm:p-10 border border-saffron-200/80 shadow-md"
        >
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider border border-saffron-200"
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
                className="lucide lucide-badge-check h-3.5 w-3.5 text-saffron-600"
              >
                <path
                  d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                ></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              VERIFICATION SERVICES · सत्यापन सेवाएँ
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-900">
              सुरक्षित डिजिटल{' '}
              <span className="text-saffron-600">सत्यापन पोर्टल</span>
            </h2>
            <p className="deva text-xs sm:text-sm text-slate-700 leading-relaxed">
              Website पर उपलब्ध सभी संस्थागत प्रमाणपत्र, सदस्य आईडी, स्वयंसेवक पहचान पत्र एवं सतर्कता अधिकारी कार्डों का सत्यापन नीचे दिए गए सुरक्षित पोर्टल के माध्यम से किया जाता है।
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div
              className="bg-white rounded-2xl p-5 border border-saffron-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className="h-10 w-10 rounded-xl bg-saffron-100 text-saffron-700 grid place-items-center font-bold"
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
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider text-saffron-700 bg-saffron-50 px-2 py-0.5 rounded-full border border-saffron-100"
                  >Instant Search</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900">Certificate Verification</h3>
                  <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">प्रमाणपत्र सत्यापन</p>
                  <p className="deva text-xs text-slate-600 mt-2 leading-relaxed">
                    संस्था द्वारा जारी किए गए सभी वैधानिक एवं CSR सेवा प्रमाणपत्रों की प्रामाणिकता जांचें।
                  </p>
                </div>
              </div>
              <Link
                className="w-full py-2.5 px-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs sd-btn sd-btn--submit"
                href="/verification?id=SDMKF-PAT-1002"
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
                  className="lucide lucide-search h-3.5 w-3.5"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                Verify Online Now
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-5 border border-saffron-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className="h-10 w-10 rounded-xl bg-saffron-100 text-saffron-700 grid place-items-center font-bold"
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
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider text-saffron-700 bg-saffron-50 px-2 py-0.5 rounded-full border border-saffron-100"
                  >Member Search</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900">Member Verification</h3>
                  <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">सदस्यता पहचान सत्यापन</p>
                  <p className="deva text-xs text-slate-600 mt-2 leading-relaxed">
                    संस्था के पंजीकृत आजीवन सदस्यों, पदाधिकारियों एवं संयोजकों के विवरण का सत्यापन।
                  </p>
                </div>
              </div>
              <Link
                className="w-full py-2.5 px-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs sd-btn sd-btn--submit"
                href="/verification?id=SDMKF-MEM-2041"
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
                  className="lucide lucide-search h-3.5 w-3.5"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                Verify Online Now
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-5 border border-saffron-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className="h-10 w-10 rounded-xl bg-saffron-100 text-saffron-700 grid place-items-center font-bold"
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
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider text-saffron-700 bg-saffron-50 px-2 py-0.5 rounded-full border border-saffron-100"
                  >Live Identity</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900">Volunteer ID Verification</h3>
                  <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">स्वयंसेवक पहचान सत्यापन</p>
                  <p className="deva text-xs text-slate-600 mt-2 leading-relaxed">
                    क्षेत्रीय अभियानों में कार्यरत स्वयंसेवकों एवं सनातन सेना सदस्यों के डिजिटल बैज का सत्यापन।
                  </p>
                </div>
              </div>
              <Link
                className="w-full py-2.5 px-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs sd-btn sd-btn--submit"
                href="/verification?id=SDMKF-VOL-8942"
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
                  className="lucide lucide-search h-3.5 w-3.5"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                Verify Online Now
              </Link>
            </div>
            <div
              className="bg-white rounded-2xl p-5 border border-saffron-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className="h-10 w-10 rounded-xl bg-saffron-100 text-saffron-700 grid place-items-center font-bold"
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
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider text-saffron-700 bg-saffron-50 px-2 py-0.5 rounded-full border border-saffron-100"
                  >Vigilance Cell</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-slate-900">Vigilance ID Verification</h3>
                  <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">सतर्कता एवं सतर्क अधिकारी सत्यापन</p>
                  <p className="deva text-xs text-slate-600 mt-2 leading-relaxed">
                    संस्था के सतर्कता प्रकोष्ठ एवं प्राधिकृत जांच अधिकारियों की प्रामाणिकता की तत्काल जांच।
                  </p>
                </div>
              </div>
              <Link
                className="w-full py-2.5 px-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs sd-btn sd-btn--submit"
                href="/verification?id=SDMKF-VIG-4011"
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
                  className="lucide lucide-search h-3.5 w-3.5"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                Verify Online Now
              </Link>
            </div>
          </div>
          <div
            className="mt-8 pt-4 border-t border-saffron-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 text-center sm:text-left"
          >
            <div className="flex items-center gap-2">
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
                className="lucide lucide-lock h-4 w-4 text-saffron-600 shrink-0"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>
                <strong>सुरक्षा सूचना:</strong>
                {' '}सभी Verification सुरक्षित Portal (Encryption Protocol) के माध्यम से किए जाएंगे।
              </span>
            </div>
            <Link
              className="font-bold text-saffron-700 hover:underline flex items-center gap-1 shrink-0"
              href="/verification"
            >
              Open Master Verification Portal{' '}
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
                className="lucide lucide-chevron-right h-4 w-4"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="financials"
        className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 sd-gap"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-2 border border-saffron-200"
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
                className="lucide lucide-scale h-3.5 w-3.5 text-saffron-600"
              >
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="M7 21h10"></path>
                <path d="M12 3v18"></path>
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
              </svg>
              FINANCIAL TRANSPARENCY · वित्तीय पारदर्शिता
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-900">
              ऑडिट रिपोर्ट एवं{' '}
              <span className="text-saffron-600">वित्तीय विवरण</span>
            </h2>
            <p className="deva text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              संस्था समय-समय पर सी.ए. प्रमाणित वार्षिक वित्तीय रिपोर्ट, आय-व्यय खाता, बैलेंस शीट एवं फंड उपयोग सारांश सार्वजनिक रूप से उपलब्ध कराने का प्रयास करती है।
            </p>
          </div>
          <div
            className="flex items-center gap-1.5 bg-slate-200/80 p-1 rounded-xl self-start md:self-auto overflow-x-auto max-w-full"
          >
            <span className="text-xs font-bold text-slate-600 px-2 flex items-center gap-1">
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
                className="lucide lucide-filter h-3.5 w-3.5"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
              </svg>
              {' '}Year:
            </span>
            <button
              className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap bg-saffron-600 text-white shadow-xs"
            >All</button>
            <button
              className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap text-slate-700 hover:bg-slate-300/60"
            >2025–26</button>
            <button
              className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap text-slate-700 hover:bg-slate-300/60"
            >2024–25</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                >Audit Report</span>
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">FY 2025–26</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Annual Audit Report 2025–26</h3>
              <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">वार्षिक सी.ए. ऑडिट रिपोर्ट 2025–26</p>
              <p className="deva text-xs text-slate-600 mt-2 leading-relaxed">
                संस्था का सी.ए. द्वारा सत्यापित पूर्ण लेखा परीक्षा प्रतिवेद, बैलेंस शीट एवं आय-व्यय खाता।
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Financial Summary
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                >Annual Financial Report</span>
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">FY 2025–26</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Annual Financial Report 2025–26</h3>
              <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">वार्षिक वित्तीय विवरण 2025–26</p>
              <p className="deva text-xs text-slate-600 mt-2 leading-relaxed">
                संपूर्ण वित्त वर्ष में प्राप्त कुल अनुदान, दान एवं विभिन्न सामाजिक सेवा प्रकल्पों में व्यय विवरण।
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Financial Summary
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                >Income &amp; Expenditure Statement</span>
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">FY 2025–26</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Income &amp; Expenditure Statement 2025–26</h3>
              <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">आय एवं व्यय विवरण 2025–26</p>
              <p className="deva text-xs text-slate-600 mt-2 leading-relaxed">
                मद-वार आय (दान, सीएसआर, अनुदान) एवं व्यय (अन्न सेवा, चिकित्सा, शिक्षा, गौ सेवा) का लेखा-जोखा।
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Financial Summary
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                >Balance Sheet</span>
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">FY 2025–26</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Balance Sheet 2025–26</h3>
              <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">बैलेंस शीट 2025–26</p>
              <p className="deva text-xs text-slate-600 mt-2 leading-relaxed">
                संस्था की परिसंपत्तियों (Assets), देनदारियों (Liabilities) एवं आरक्षित कोष का सत्यापित स्थिति पत्रक।
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Financial Summary
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                >Fund Utilization Summary</span>
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">FY 2025–26</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Fund Utilization Summary 2025–26</h3>
              <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">फंड उपयोग सारांश 2025–26</p>
              <p className="deva text-xs text-slate-600 mt-2 leading-relaxed">
                दानदाताओं द्वारा प्रदान की गई प्रत्येक धनराशि के शत-प्रतिशत पारदर्शी उपयोग का परियोजना-वार विश्लेषण।
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Financial Summary
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                >Audit Report</span>
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">FY 2024–25</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Annual Audit Report 2024–25</h3>
              <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">वार्षिक सी.ए. ऑडिट रिपोर्ट 2024–25</p>
              <p className="deva text-xs text-slate-600 mt-2 leading-relaxed">
                वित्तीय वर्ष 2024–25 का ऑडिट रिपोर्ट — आयकर विभाग एवं एमसीए पोर्टल पर दाखिल।
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Financial Summary
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100"
                >Income &amp; Expenditure Statement</span>
                <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">FY 2024–25</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Income &amp; Expenditure Statement 2024–25</h3>
              <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">आय एवं व्यय विवरण 2024–25</p>
              <p className="deva text-xs text-slate-600 mt-2 leading-relaxed">पूर्व वित्त वर्ष की स्वीकृत आय एवं व्यय विवरणी।</p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Financial Summary
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="activities"
        className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 sd-gap"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider mb-2 border border-saffron-200"
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
                className="lucide lucide-file-check2 h-3.5 w-3.5 text-saffron-600"
              >
                <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="m3 15 2 2 4-4"></path>
              </svg>
              ACTIVITY REPORTS · गतिविधि रिपोर्ट
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-900">
              सेवा अभियानों की{' '}
              <span className="text-saffron-600">वार्षिक एवं मासिक रिपोर्ट</span>
            </h2>
            <p className="deva text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              हमारे प्रमुख सेवा अभियानों (अन्न सेवा, चिकित्सा शिविर, शिक्षा, गौ सेवा, महिला स्वावलंबन) की विस्तृत आख्या, आंकड़े, तस्वीरें एवं वीडियो रिपोर्ट उपलब्ध हैं।
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <select
              className="px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-saffron-500 cursor-pointer"
            >
              <option defaultValue="All" selected>All Years (सभी वर्ष)</option>
              <option defaultValue="2026">Year 2026</option>
              <option defaultValue="2025">Year 2025</option>
              <option defaultValue="2024">Year 2024</option>
            </select>
            <select
              className="px-3 py-1.5 rounded-xl text-xs font-bold border border-slate-300 bg-white text-slate-800 focus:outline-none focus:border-saffron-500 cursor-pointer"
            >
              <option defaultValue="All" selected>All Categories (सभी अभियान)</option>
              <option defaultValue="Ann Seva">Ann Seva (अन्न सेवा)</option>
              <option defaultValue="Medical Camps">Medical Camps (चिकित्सा)</option>
              <option defaultValue="Education Support">Education Support (शिक्षा)</option>
              <option defaultValue="Women Support">Women Support (महिला स्वावलंबन)</option>
              <option defaultValue="Disaster Relief">Disaster Relief (आपदा राहत)</option>
              <option defaultValue="Plantation Drives">Plantation Drives (पर्यावरण)</option>
              <option defaultValue="Gau Seva">Gau Seva (गौ सेवा)</option>
              <option defaultValue="Awareness Campaigns">Awareness (संस्कृति जागरण)</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200"
                >Ann Seva</span>
                <span className="text-xs text-slate-500 font-semibold">जून 2026</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Maha Ann Seva Campaign 2026</h3>
              <p className="deva text-xs font-semibold text-saffron-700">महा अन्न सेवा अभियान रिपोर्ट 2026</p>
              <p className="deva text-xs text-slate-600 leading-relaxed">
                तीर्थ क्षेत्रों एवं निर्धन बस्तियों में 50,000+ जरूरतमंदों को निःशुल्क पौष्टिक भोजन वितरण की व्यापक रिपोर्ट।
              </p>
              <div className="pt-2 flex items-center gap-3 text-[11px] font-bold text-slate-700">
                <span
                  className="bg-saffron-50 text-saffron-800 px-2.5 py-1 rounded-lg border border-saffron-100"
                >🎯 लाभार्थी: 50,000+ व्यक्ति</span>
                <span className="text-slate-500">📷 24 Photos</span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {' '}View Report Summary &amp; Photos
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200"
                >Medical Camps</span>
                <span className="text-xs text-slate-500 font-semibold">मई 2026</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Free Rural Health &amp; Eye Camp</h3>
              <p className="deva text-xs font-semibold text-saffron-700">निःशुल्क ग्रामीण स्वास्थ्य एवं नेत्र जांच शिविर</p>
              <p className="deva text-xs text-slate-600 leading-relaxed">
                दूरस्थ ग्रामीण अंचलों में विशेषज्ञ डॉक्टरों द्वारा निःशुल्क स्वास्थ्य जांच, औषधि वितरण एवं मोतियाबिंद ऑपरेशन।
              </p>
              <div className="pt-2 flex items-center gap-3 text-[11px] font-bold text-slate-700">
                <span
                  className="bg-saffron-50 text-saffron-800 px-2.5 py-1 rounded-lg border border-saffron-100"
                >🎯 लाभार्थी: 12,500+ ग्रामीण</span>
                <span className="text-slate-500">📷 18 Photos</span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {' '}View Report Summary &amp; Photos
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200"
                >Education Support</span>
                <span className="text-xs text-slate-500 font-semibold">अप्रैल 2026</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Shiksha Seva &amp; Scholarship Drive</h3>
              <p className="deva text-xs font-semibold text-saffron-700">शिक्षा सेवा एवं छात्रवृत्ति वितरण 2026</p>
              <p className="deva text-xs text-slate-600 leading-relaxed">
                प्रतिभावान निर्धन विद्यार्थियों को पाठ्य सामग्री, गणवेश एवं वार्षिक छात्रवृत्ति सहायता प्रदान करने की विस्तृत आख्या।
              </p>
              <div className="pt-2 flex items-center gap-3 text-[11px] font-bold text-slate-700">
                <span
                  className="bg-saffron-50 text-saffron-800 px-2.5 py-1 rounded-lg border border-saffron-100"
                >🎯 लाभार्थी: 3,200+ छात्र</span>
                <span className="text-slate-500">📷 15 Photos</span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {' '}View Report Summary &amp; Photos
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200"
                >Women Support</span>
                <span className="text-xs text-slate-500 font-semibold">दिसंबर 2025</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Nari Swavalamban Skill Program</h3>
              <p className="deva text-xs font-semibold text-saffron-700">नारी स्वावलंबन एवं सिलाई केंद्र रिपोर्ट</p>
              <p className="deva text-xs text-slate-600 leading-relaxed">
                महिलाओं को सिलाई, कढ़ाई एवं हस्तशिल्प का निःशुल्क प्रशिक्षण तथा सिलाई मशीन वितरण की प्रभाव रिपोर्ट।
              </p>
              <div className="pt-2 flex items-center gap-3 text-[11px] font-bold text-slate-700">
                <span
                  className="bg-saffron-50 text-saffron-800 px-2.5 py-1 rounded-lg border border-saffron-100"
                >🎯 लाभार्थी: 1,800+ महिलाएं</span>
                <span className="text-slate-500">📷 20 Photos</span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {' '}View Report Summary &amp; Photos
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200"
                >Plantation Drives</span>
                <span className="text-xs text-slate-500 font-semibold">अगस्त 2025</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Vriksharopan Pavitra Van Drive</h3>
              <p className="deva text-xs font-semibold text-saffron-700">वृक्षारोपण एवं पवित्र वन अभियान 2025</p>
              <p className="deva text-xs text-slate-600 leading-relaxed">
                पर्यावरण संरक्षण हेतु 25,000 औषधीय एवं छायादार फलदार पौधों का रोपण तथा उनके संरक्षण की जिम्मेदारी रिपोर्ट।
              </p>
              <div className="pt-2 flex items-center gap-3 text-[11px] font-bold text-slate-700">
                <span
                  className="bg-saffron-50 text-saffron-800 px-2.5 py-1 rounded-lg border border-saffron-100"
                >🎯 लाभार्थी: 25,000+ पौधे</span>
                <span className="text-slate-500">📷 30 Photos</span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {' '}View Report Summary &amp; Photos
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200"
                >Gau Seva</span>
                <span className="text-xs text-slate-500 font-semibold">नवंबर 2025</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Gau Seva &amp; Shelter Support Project</h3>
              <p className="deva text-xs font-semibold text-saffron-700">गौ सेवा एवं संवर्धन परियोजना रिपोर्ट</p>
              <p className="deva text-xs text-slate-600 leading-relaxed">
                निराश्रित गौवंश हेतु हरा चारा, गुड़, औषधि सेवा तथा गौशाला निर्माण सहायता गतिविधियों का ब्योरा।
              </p>
              <div className="pt-2 flex items-center gap-3 text-[11px] font-bold text-slate-700">
                <span
                  className="bg-saffron-50 text-saffron-800 px-2.5 py-1 rounded-lg border border-saffron-100"
                >🎯 लाभार्थी: 5,000+ गौवंश</span>
                <span className="text-slate-500">📷 22 Photos</span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {' '}View Report Summary &amp; Photos
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200"
                >Disaster Relief</span>
                <span className="text-xs text-slate-500 font-semibold">सितंबर 2024</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Flood Relief Operations 2024</h3>
              <p className="deva text-xs font-semibold text-saffron-700">आपदा राहत एवं पुनर्वास सेवा 2024</p>
              <p className="deva text-xs text-slate-600 leading-relaxed">
                बाढ़ प्रभावित क्षेत्रों में सूखा राशन पैकेट, तिरपाल, पेयजल एवं दवाइयों के तत्काल वितरण की विस्तृत रिपोर्ट।
              </p>
              <div className="pt-2 flex items-center gap-3 text-[11px] font-bold text-slate-700">
                <span
                  className="bg-saffron-50 text-saffron-800 px-2.5 py-1 rounded-lg border border-saffron-100"
                >🎯 लाभार्थी: 40,000+ प्रभावित</span>
                <span className="text-slate-500">📷 35 Photos</span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {' '}View Report Summary &amp; Photos
              </button>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span
                  className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200"
                >Awareness Campaigns</span>
                <span className="text-xs text-slate-500 font-semibold">अक्टूबर 2024</span>
              </div>
              <h3 className="font-serif font-bold text-base text-slate-900 leading-snug">Sanatan Culture &amp; Ethics Awareness</h3>
              <p className="deva text-xs font-semibold text-saffron-700">सनातन संस्कृति एवं नैतिक जागरण अभियान</p>
              <p className="deva text-xs text-slate-600 leading-relaxed">
                युवाओं में नैतिक मूल्यों, सांस्कृतिक धरोहर एवं सामाजिक समरसता संवर्धन हेतु आयोजित सम्मेलनों की रिपोर्ट।
              </p>
              <div className="pt-2 flex items-center gap-3 text-[11px] font-bold text-slate-700">
                <span
                  className="bg-saffron-50 text-saffron-800 px-2.5 py-1 rounded-lg border border-saffron-100"
                >🎯 लाभार्थी: 1,00,000+ श्रोता</span>
                <span className="text-slate-500">📷 16 Photos</span>
              </div>
            </div>
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center">
              <button
                type="button"
                className="w-full py-2.5 px-3.5 rounded-xl bg-saffron-600 hover:bg-saffron-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs sd-btn sd-btn--view-details"
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
                  className="lucide lucide-eye h-3.5 w-3.5"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {' '}View Report Summary &amp; Photos
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="policies"
        className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80 sd-gap"
      >
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider border border-saffron-200"
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
              className="lucide lucide-file-text h-3.5 w-3.5 text-saffron-600"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            POLICIES &amp; COMPLIANCE · नीतियाँ एवं अनुपालन
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-slate-900">
            संस्थागत नीति एवं{' '}
            <span className="text-saffron-600">अनुपालन दिशानिर्देश</span>
          </h2>
          <p className="deva text-xs sm:text-sm text-slate-600">
            संस्था के दानकर्ताओं, सदस्यों एवं जनसामान्य के अधिकारों तथा डेटा सुरक्षा हेतु निर्धारित नीतियां।
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg hover:border-saffron-400 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div
                  className="h-10 w-10 rounded-xl bg-saffron-100 text-saffron-700 grid place-items-center font-bold group-hover:bg-saffron-600 group-hover:text-white transition-colors"
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
                    className="lucide lucide-file-text h-5 w-5"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">अद्यतन: 01 जनवरी 2026</span>
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-base text-slate-900 group-hover:text-saffron-600 transition-colors"
                >Privacy Policy</h3>
                <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">गोपनीयता नीति</p>
                <p className="deva text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                  सनातन धर्म मानव कल्याण फाउंडेशन आपके व्यक्तिगत डेटा, भुगतान संबंधी जानकारी एवं गोपनीयता की सुरक्षा के लिए पूर्णतः वचनबद्ध है।
                </p>
              </div>
            </div>
            <div
              className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-saffron-600 group-hover:text-saffron-700"
            >
              <span>Read Full Policy</span>
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
                className="lucide lucide-chevron-right h-4 w-4 transform group-hover:translate-x-1 transition-transform"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg hover:border-saffron-400 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div
                  className="h-10 w-10 rounded-xl bg-saffron-100 text-saffron-700 grid place-items-center font-bold group-hover:bg-saffron-600 group-hover:text-white transition-colors"
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
                    className="lucide lucide-file-text h-5 w-5"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">अद्यतन: 01 जनवरी 2026</span>
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-base text-slate-900 group-hover:text-saffron-600 transition-colors"
                >Terms &amp; Conditions</h3>
                <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">नियम एवं शर्तें</p>
                <p className="deva text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                  हमारी वेबसाइट, पोर्टल एवं सेवाओं का उपयोग करने हेतु नियम, शर्तें एवं वैधानिक अनुपालन दिशानिर्देश।
                </p>
              </div>
            </div>
            <div
              className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-saffron-600 group-hover:text-saffron-700"
            >
              <span>Read Full Policy</span>
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
                className="lucide lucide-chevron-right h-4 w-4 transform group-hover:translate-x-1 transition-transform"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg hover:border-saffron-400 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div
                  className="h-10 w-10 rounded-xl bg-saffron-100 text-saffron-700 grid place-items-center font-bold group-hover:bg-saffron-600 group-hover:text-white transition-colors"
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
                    className="lucide lucide-file-text h-5 w-5"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">अद्यतन: 01 जनवरी 2026</span>
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-base text-slate-900 group-hover:text-saffron-600 transition-colors"
                >Refund &amp; Cancellation Policy</h3>
                <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">रिफंड एवं निरस्तीकरण नीति</p>
                <p className="deva text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                  दान निरस्तीकरण एवं तकनीकी त्रुटिवश हुए दोहरे भुगतानों के रिफंड से संबंधित स्पष्ट दिशानिर्देश।
                </p>
              </div>
            </div>
            <div
              className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-saffron-600 group-hover:text-saffron-700"
            >
              <span>Read Full Policy</span>
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
                className="lucide lucide-chevron-right h-4 w-4 transform group-hover:translate-x-1 transition-transform"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg hover:border-saffron-400 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div
                  className="h-10 w-10 rounded-xl bg-saffron-100 text-saffron-700 grid place-items-center font-bold group-hover:bg-saffron-600 group-hover:text-white transition-colors"
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
                    className="lucide lucide-file-text h-5 w-5"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">अद्यतन: 01 जनवरी 2026</span>
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-base text-slate-900 group-hover:text-saffron-600 transition-colors"
                >Donation Policy</h3>
                <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">दान एवं निधि उपयोग नीति</p>
                <p className="deva text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                  दान स्वीकार्यता, 80G आयकर छूट तथा प्राप्त निधियों के शत-प्रतिशत नैतिक उपयोग के सिद्धांत।
                </p>
              </div>
            </div>
            <div
              className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-saffron-600 group-hover:text-saffron-700"
            >
              <span>Read Full Policy</span>
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
                className="lucide lucide-chevron-right h-4 w-4 transform group-hover:translate-x-1 transition-transform"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg hover:border-saffron-400 transition-all cursor-pointer flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div
                  className="h-10 w-10 rounded-xl bg-saffron-100 text-saffron-700 grid place-items-center font-bold group-hover:bg-saffron-600 group-hover:text-white transition-colors"
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
                    className="lucide lucide-file-text h-5 w-5"
                  >
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                    <path d="M10 9H8"></path>
                    <path d="M16 13H8"></path>
                    <path d="M16 17H8"></path>
                  </svg>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">अद्यतन: 01 जनवरी 2026</span>
              </div>
              <div>
                <h3
                  className="font-serif font-bold text-base text-slate-900 group-hover:text-saffron-600 transition-colors"
                >Grievance Redressal Policy</h3>
                <p className="deva text-xs font-semibold text-saffron-600 mt-0.5">शिकायत निवारण नीति</p>
                <p className="deva text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
                  जनसामान्य, दानदाताओं एवं स्वयंसेवकों की शिकायतों के समयबद्ध एवं निष्पक्ष निवारण की व्यवस्था।
                </p>
              </div>
            </div>
            <div
              className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-saffron-600 group-hover:text-saffron-700"
            >
              <span>Read Full Policy</span>
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
                className="lucide lucide-chevron-right h-4 w-4 transform group-hover:translate-x-1 transition-transform"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto sd-gap">
        <div
          className="bg-amber-50 border-2 border-amber-300/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start gap-5 shadow-sm"
        >
          <div
            className="h-12 w-12 rounded-2xl bg-amber-500 text-white grid place-items-center shrink-0 shadow-md"
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
              className="lucide lucide-circle-alert h-6 w-6"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-slate-900 text-base sm:text-lg">DISCLAIMER &amp; NOTICE · अस्वीकरण सूचना</span>
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-200 text-amber-900"
              >Official Notice</span>
            </div>
            <p className="deva text-xs sm:text-sm text-amber-950 leading-relaxed font-normal">
              हमारी संस्था पारदर्शिता एवं उत्तरदायित्व के सिद्धांतों का पालन करने के लिए प्रतिबद्ध है। उपलब्ध कराई गई जानकारी समय-समय पर अद्यतन की जा सकती है। कुछ दस्तावेज़ सुरक्षा, गोपनीयता अथवा सत्यापन प्रक्रिया के अंतर्गत Login / OTP Verification के पश्चात ही उपलब्ध कराए जा सकते हैं।
            </p>
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
      <section className="container-x my-12 sd-gap">
        <div className="card overflow-hidden p-0">
          <div className="grid gap-0 md:grid-cols-2">
            <div
              className="bg-gradient-to-br from-saffron-500 via-saffron-600 to-saffron-700 p-8 text-white sm:p-10"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider"
              >Newsletter</div>
              <h3 className="deva mt-4 font-display text-2xl font-bold sm:text-3xl">सेवा, संस्कार और समाज से जुड़े रहें</h3>
              <p className="deva mt-3 text-sm text-white/85">
                सनातन पर्व, सेवा अभियान, विशेष कार्यक्रमों एवं महत्वपूर्ण अपडेट्स की जानकारी प्राप्त करने के लिए Subscribe करें।
              </p>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <form className="space-y-4">
                <div>
                  <label className="field-label">Email Address</label>
                  <div className="relative">
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
                      className="lucide lucide-mail pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-saffron-400"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="field pl-10"
                      defaultValue=""
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center font-semibold text-white rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.10)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97] whitespace-nowrap select-none h-[52px] px-7 text-[15px] gap-2 w-full sd-btn sd-btn--join-mission"
                  style={{ backgroundColor: "#16A34A", '--btn-hover': "#00872e" }}
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
                      className="lucide lucide-send"
                    >
                      <path
                        d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
                      ></path>
                      <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                  </span>
                  Subscribe Now
                </button>
                <p className="text-center text-xs text-ink/50">We respect your privacy. Unsubscribe anytime.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
