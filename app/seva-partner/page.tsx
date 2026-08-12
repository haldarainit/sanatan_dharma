import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default function SevaPartnerPage() {
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
          <span className="text-[#e35300]">Become a Seva Partner</span>
        </nav>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          Become a Seva{' '}
          <span className="text-[#e35300]">Partner</span>
        </h1>
        <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">सेवा सहभागिता एवं पार्टनर नेटवर्क • Community Seva Alliance</p>
        <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700">
          निःस्वार्थ सेवा, गौ रक्षा, अन्नदान एवं सामाजिक उत्थान के लिए हमारे राष्ट्रव्यापी सेवा नेटवर्क से जुड़ें।
        </p>
      </div>
    </section>
    <section className="container-x my-8 sm:my-12">
      <div
        className="rounded-3xl bg-gradient-to-br from-[#E65100] via-[#FF6F00] to-[#FF5500] p-6 sm:p-10 text-white shadow-xl mb-10 border border-orange-300/40 relative overflow-hidden"
      >
        <div className="relative z-10 space-y-4 max-w-4xl">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md"
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
              className="lucide lucide-handshake h-4 w-4"
            >
              <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
              <path
                d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
              ></path>
              <path d="m21 3 1 11h-2"></path>
              <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
              <path d="M3 4h8"></path>
            </svg>
            <span>Seva Partner Network</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">सेवा ही परम धर्म — समाज परिवर्तन में हमारे सहभागी बनें</h2>
          <p className="text-sm sm:text-base text-orange-100 leading-relaxed">
            सनातन धर्म मानव कल्याण फाउंडेशन स्थानीय संस्थाओं, गौशालाओं, धार्मिक व सामाजिक ट्रस्टों, युवा मंडलों एवं समर्पित सेवा भावी व्यक्तियों का{' '}
            <strong>Seva Partner Network</strong>
            {' '}में हार्दिक स्वागत करता है।
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#FF6F00] font-bold text-xs sm:text-sm shadow-md hover:bg-orange-50 transition-all cursor-pointer sd-btn sd-btn--join-mission"
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
                className="lucide lucide-send h-4 w-4"
              >
                <path
                  d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
                ></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
              <span>Register as Seva Partner</span>
            </button>
            <a
              href="#seva-partner-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/30 transition-all cursor-pointer sd-btn sd-btn--send-message"
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
                className="lucide lucide-phone-call h-4 w-4 text-amber-200"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
                <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                <path d="M14.05 6A5 5 0 0 1 18 10"></path>
              </svg>
              <span>Request Collaboration Call</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mb-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-[#FF6F00] uppercase tracking-widest">Synergy &amp; Empowerment</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1B2A] mt-1">BENEFITS OF SEVA PARTNERSHIP / सेवा सहभागिता के लाभ</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:border-[#FF6F00] hover:shadow-md transition-all"
          >
            <div className="p-3 rounded-xl bg-[#FFF4E6] text-[#FF6F00] inline-block mb-4">
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
                className="lucide lucide-users h-6 w-6"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0D1B2A] mb-2">Volunteering Network</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Access to thousands of dedicated Sanatani volunteers for local and national impact projects.
            </p>
          </div>
          <div
            className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:border-[#FF6F00] hover:shadow-md transition-all"
          >
            <div className="p-3 rounded-xl bg-[#FFF4E6] text-[#FF6F00] inline-block mb-4">
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
                className="lucide lucide-building h-6 w-6"
              >
                <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                <path d="M9 22v-4h6v4"></path>
                <path d="M8 6h.01"></path>
                <path d="M16 6h.01"></path>
                <path d="M12 6h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
              </svg>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0D1B2A] mb-2">Institutional Support</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Operational guidance, legal compliance aid, and resource coordination from central foundation.
            </p>
          </div>
          <div
            className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:border-[#FF6F00] hover:shadow-md transition-all"
          >
            <div className="p-3 rounded-xl bg-[#FFF4E6] text-[#FF6F00] inline-block mb-4">
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
                className="lucide lucide-award h-6 w-6"
              >
                <path
                  d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
                ></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0D1B2A] mb-2">National Recognition</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Joint branding, official appreciation certificates, and showcase on foundation portals.
            </p>
          </div>
          <div
            className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:border-[#FF6F00] hover:shadow-md transition-all"
          >
            <div className="p-3 rounded-xl bg-[#FFF4E6] text-[#FF6F00] inline-block mb-4">
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
                className="lucide lucide-clock h-6 w-6"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0D1B2A] mb-2">24/7 Co-ordination</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dedicated project managers and ground coordinators to ensure seamless seva execution.
            </p>
          </div>
        </div>
      </div>
      <div
        id="seva-partner-form"
        className="rounded-3xl bg-slate-50/90 border border-slate-200 p-6 sm:p-8 md:p-10 shadow-xl relative"
      >
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div
            className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3.5 py-1 text-xs font-bold mb-2"
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
              className="lucide lucide-heart h-3.5 w-3.5 text-emerald-600"
            >
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
              ></path>
            </svg>
            <span>Seva Partner Registration Form</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1B2A]">Seva Partnership Interest Form / सेवा पार्टनर पंजीयन</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            कृपया अपनी संस्था या समूह की जानकारी भरें, हमारी सेवा टीम आपसे शीघ्र संपर्क करेगी।
          </p>
        </div>
        <form className="space-y-6">
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-xs font-bold text-[#FF6F00] uppercase tracking-wider">Basic Details / बुनियादी विवरण</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Contact Person Name *</label>
                <input
                  type="text"
                  required
                  placeholder="आपका पूरा नाम"
                  className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm focus:border-[#FF6F00] outline-none"
                  defaultValue=""
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Organization / Trust / Group Name (Optional)</label>
                <input
                  type="text"
                  placeholder="संस्था, ट्रस्ट या समूह का नाम"
                  className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm focus:border-[#FF6F00] outline-none"
                  defaultValue=""
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-xs font-bold text-slate-800">Mobile Number *</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10 अंकों का मोबाइल नंबर"
                    className="flex-1 h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm focus:border-[#FF6F00] outline-none"
                    defaultValue=""
                  />
                  <button
                    type="button"
                    className="px-3.5 h-11 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer bg-[#FF6F00] text-white hover:bg-[#e06200] shadow-sm sd-btn sd-btn--submit"
                  >Send OTP</button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">Email ID (Optional)</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm focus:border-[#FF6F00] outline-none"
                  defaultValue=""
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">City &amp; State *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Varanasi, UP"
                  className="w-full h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm focus:border-[#FF6F00] outline-none"
                  defaultValue=""
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-xs font-bold text-[#FF6F00] uppercase tracking-wider">Seva Domains / सेवा क्षेत्र * (Multiple Selection)</h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              <label
                className="flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-[#FF6F00] focus:ring-[#FF6F00]"
                />
                <span>Gau Seva &amp; Animal Welfare (गौ सेवा व पशु कल्याण)</span>
              </label>
              <label
                className="flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-[#FF6F00] focus:ring-[#FF6F00]"
                />
                <span>Food &amp; Ration Relief / Annadaan (अन्नदान व भोजन वितरण)</span>
              </label>
              <label
                className="flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-[#FF6F00] focus:ring-[#FF6F00]"
                />
                <span>Healthcare &amp; Medical Camps (स्वास्थ्य शिविर)</span>
              </label>
              <label
                className="flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-[#FF6F00] focus:ring-[#FF6F00]"
                />
                <span>Education &amp; Skill Training (शिक्षा व कौशल विकास)</span>
              </label>
              <label
                className="flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-[#FF6F00] focus:ring-[#FF6F00]"
                />
                <span>Cultural Preservation &amp; Temples (सांस्कृतिक व धार्मिक कार्य)</span>
              </label>
              <label
                className="flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-[#FF6F00] focus:ring-[#FF6F00]"
                />
                <span>Disaster &amp; Emergency Relief (आपदा प्रबंधन व राहत कार्य)</span>
              </label>
              <label
                className="flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-[#FF6F00] focus:ring-[#FF6F00]"
                />
                <span>Youth &amp; Women Empowerment (युवा व महिला सशक्तिकरण)</span>
              </label>
              <label
                className="flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer text-xs font-semibold transition-all bg-slate-50 border-slate-200 text-slate-700 hover:bg-white"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-[#FF6F00] focus:ring-[#FF6F00]"
                />
                <span>Other Seva Initiatives (अन्य सेवा कार्य)</span>
              </label>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
            <h3 className="text-xs font-bold text-[#FF6F00] uppercase tracking-wider">Proposed Seva Scope &amp; Message / सेवा प्रस्ताव</h3>
            <textarea
              rows={4}
              required
              placeholder="आपकी संस्था द्वारा वर्तमान में किए जा रहे सेवा कार्य एवं हमारे साथ संभावित सहयोग का विवरण लिखें..."
              className="w-full rounded-xl border border-slate-300 bg-white p-4 text-sm focus:border-[#FF6F00] outline-none"
            ></textarea>
          </div>
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs space-y-4">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">DECLARATION &amp; CONSENT</h4>
            <div className="space-y-2.5">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#FF6F00] focus:ring-[#FF6F00]"
                />
                <span className="text-xs text-slate-700 font-semibold leading-normal">
                  I agree to be contacted by the foundation regarding Seva Partnership activities. *
                </span>
              </label>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-[#FF6F00] focus:ring-[#FF6F00]"
                />
                <span className="text-xs text-slate-700 font-semibold leading-normal">I confirm that all details provided above are true and correct. *</span>
              </label>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer sd-btn sd-btn--submit"
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
                  className="lucide lucide-send h-4 w-4"
                >
                  <path
                    d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
                  ></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
                <span>Submit Seva Partnership Application</span>
              </button>
            </div>
          </div>
        </form>
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
