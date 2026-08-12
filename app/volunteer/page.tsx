import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default function VolunteerPage() {
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
          <span className="text-[#e35300]">Membership Ecosystem - Join Sanatan Mission</span>
        </nav>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          Membership Ecosystem - Join Sanatan{' '}
          <span className="text-[#e35300]">Mission</span>
        </h1>
        <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">🚩 सनातनी सदस्यता एवं सेवा अभियान</p>
        <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700">
          राष्ट्र, समाज एवं सनातन मूल्यों की रक्षा हेतु समर्पित स्वयंसेवक, सहयोगी सदस्य, विजिलेंस विभाग, सेवा नेटवर्क या संरक्षक सदस्य के रूप में जुड़े।
        </p>
      </div>
    </section>
    <section className="container-x my-10 md:my-14">
      <div className="max-w-4xl mx-auto mb-10">
        <div className="flex items-center justify-between relative">
          <div
            className="absolute top-1/2 left-0 right-0 h-1.5 bg-slate-200 -translate-y-1/2 z-0 rounded-full"
          ></div>
          <div
            className="absolute top-1/2 left-0 h-1.5 bg-saffron-600 -translate-y-1/2 z-0 transition-all duration-500 rounded-full"
            style={{ width: "0%" }}
          ></div>
          <div className="relative z-10 flex flex-col items-center">
            <button
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full font-extrabold flex items-center justify-center transition-all shadow-md text-xs sm:text-sm bg-saffron-600 text-white ring-4 ring-saffron-200 scale-110"
            >1</button>
            <span
              className="mt-2 text-[11px] sm:text-xs font-bold text-center transition-colors text-saffron-900 font-black"
            >1. श्रेणी चयन</span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <button
              disabled
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full font-extrabold flex items-center justify-center transition-all shadow-md text-xs sm:text-sm bg-white text-slate-400 border-2 border-slate-300"
            >2</button>
            <span
              className="mt-2 text-[11px] sm:text-xs font-bold text-center transition-colors text-slate-500"
            >2. श्रेणी विवरण</span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <button
              disabled
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full font-extrabold flex items-center justify-center transition-all shadow-md text-xs sm:text-sm bg-white text-slate-400 border-2 border-slate-300"
            >3</button>
            <span
              className="mt-2 text-[11px] sm:text-xs font-bold text-center transition-colors text-slate-500"
            >3. विवरण फ़ॉर्म</span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <button
              disabled
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full font-extrabold flex items-center justify-center transition-all shadow-md text-xs sm:text-sm bg-white text-slate-400 border-2 border-slate-300"
            >4</button>
            <span
              className="mt-2 text-[11px] sm:text-xs font-bold text-center transition-colors text-slate-500"
            >4. भुगतान विकल्प</span>
          </div>
        </div>
      </div>
      <div className="animate-fadeIn">
        <div className="text-center mb-8">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-saffron-100 text-saffron-900 text-xs font-extrabold uppercase tracking-wider mb-2"
          >Step 1 of 4: Category Selection</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">सदस्यता की 5 श्रेणियाँ (Membership Categories)</h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto mt-2">
            सनातन धर्म मानव कल्याण फाउंडेशन में जुड़ने हेतु अपनी योग्यता एवं रुचि अनुसार नीचे दी गई 5 श्रेणियों में से किसी एक का चयन करें:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div
            className="group relative rounded-3xl overflow-hidden border-2 bg-white flex flex-col justify-between cursor-pointer transition-all duration-300 border-saffron-500 shadow-2xl ring-2 ring-saffron-300 scale-[1.02]"
          >
            <div>
              <div
                className="relative h-[240px] w-full overflow-hidden bg-[#180c06] p-2 flex items-center justify-center"
              >
                <img
                  src="/img/sanatani_sena.jpeg"
                  alt="SANATANI SENA"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"
                ></div>
                <span
                  className="absolute top-3 left-3 bg-saffron-600/90 backdrop-blur-md text-white font-black text-xs px-3 py-1 rounded-full shadow-md z-10"
                >#1 Volunteers &amp; Mission Cadre</span>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-saffron-900">SANATANI SENA</h3>
                  <h4 className="text-sm font-bold text-amber-700">सनातनी सेना</h4>
                  <p className="text-[11px] text-slate-500 font-medium italic mt-0.5">(Dedicated Volunteer Organization / समर्पित स्वयंसेवक संगठन)</p>
                </div>
                <p
                  className="text-xs text-slate-600 leading-relaxed line-clamp-3 bg-saffron-50/50 p-2.5 rounded-xl border border-saffron-100"
                >
                  सनातनी सेना उन समर्पित स्वयंसेवकों का संगठन है जो सेवा, सुरक्षा, संस्कार, जनजागरण एवं सामाजिक सहयोग के माध्यम से राष्ट्र, समाज एवं सनातन मूल्यों के लिए सक्रिय रूप से कार्य करना चाहते हैं।
                </p>
                <div className="pt-1">
                  <span className="text-[11px] font-extrabold uppercase text-slate-500 block mb-1">सहयोग राशि (Fee Structure):</span>
                  <div className="flex flex-wrap gap-1 text-[11px] font-bold">
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">Local: ₹101</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">District: ₹1,001</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">State: ₹5,001</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">National: ₹21,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button
                className="w-full py-3 px-4 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm bg-saffron-600 text-white shadow-md hover:bg-saffron-700 sd-btn sd-btn--join-mission"
              >
                <span>Register Now / चुनें एवं आगे बढ़ें</span>
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
                  className="lucide lucide-arrow-right w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className="group relative rounded-3xl overflow-hidden border-2 bg-white flex flex-col justify-between cursor-pointer transition-all duration-300 border-slate-200 hover:border-saffron-300 hover:shadow-xl"
          >
            <div>
              <div
                className="relative h-[240px] w-full overflow-hidden bg-[#180c06] p-2 flex items-center justify-center"
              >
                <img
                  src="/img/active_member.jpeg"
                  alt="GENERAL MEMBER"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"
                ></div>
                <span
                  className="absolute top-3 left-3 bg-saffron-600/90 backdrop-blur-md text-white font-black text-xs px-3 py-1 rounded-full shadow-md z-10"
                >#2 General &amp; Associate Member</span>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-saffron-900">GENERAL MEMBER</h3>
                  <h4 className="text-sm font-bold text-amber-700">सामान्य सदस्य</h4>
                  <p className="text-[11px] text-slate-500 font-medium italic mt-0.5">(Associate Member &amp; Supporter / सहयोगी सदस्य)</p>
                </div>
                <p
                  className="text-xs text-slate-600 leading-relaxed line-clamp-3 bg-saffron-50/50 p-2.5 rounded-xl border border-saffron-100"
                >
                  General Member के रूप में कोई भी व्यक्ति सनातन सेवा अभियान से जुड़कर सामाजिक, सांस्कृतिक एवं मानव कल्याण गतिविधियों का “सहयोगी सदस्य बन सकता है”
                </p>
                <div className="pt-1">
                  <span className="text-[11px] font-extrabold uppercase text-slate-500 block mb-1">सहयोग राशि (Fee Structure):</span>
                  <div className="flex flex-wrap gap-1 text-[11px] font-bold">
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">Local: ₹101</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">District: ₹1,001</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">State: ₹5,001</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">National: ₹21,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button
                className="w-full py-3 px-4 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm bg-saffron-50 text-saffron-800 hover:bg-saffron-100 border border-saffron-200 sd-btn sd-btn--join-mission"
              >
                <span>Register Now / चुनें एवं आगे बढ़ें</span>
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
                  className="lucide lucide-arrow-right w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className="group relative rounded-3xl overflow-hidden border-2 bg-white flex flex-col justify-between cursor-pointer transition-all duration-300 border-slate-200 hover:border-saffron-300 hover:shadow-xl"
          >
            <div>
              <div
                className="relative h-[240px] w-full overflow-hidden bg-[#180c06] p-2 flex items-center justify-center"
              >
                <img
                  src="/img/vigilance_department.jpeg"
                  alt="VIGILANCE DEPARTMENT"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"
                ></div>
                <span
                  className="absolute top-3 left-3 bg-saffron-600/90 backdrop-blur-md text-white font-black text-xs px-3 py-1 rounded-full shadow-md z-10"
                >#3 Integrity &amp; Vigilance Wing</span>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-saffron-900">VIGILANCE DEPARTMENT</h3>
                  <h4 className="text-sm font-bold text-amber-700">विजिलेंस विभाग</h4>
                  <p className="text-[11px] text-slate-500 font-medium italic mt-0.5">
                    (Transparency, Integrity &amp; Fraud Awareness Wing / सतर्कता एवं निगरानी विभाग)
                  </p>
                </div>
                <p
                  className="text-xs text-slate-600 leading-relaxed line-clamp-3 bg-saffron-50/50 p-2.5 rounded-xl border border-saffron-100"
                >
                  Vigilance Department का उद्देश्य संस्था की पारदर्शिता, विश्वसनीयता एवं अनुशासन बनाए रखने के साथ-साथ धोखाधड़ी, ठगी, साइबर फ्रॉड, संस्था के नाम के दुरुपयोग एवं अन्य गलत गतिविधियों के प्रति जागरूकता और सतर्कता को बढ़ावा देना है।
                </p>
                <div className="pt-1">
                  <span className="text-[11px] font-extrabold uppercase text-slate-500 block mb-1">सहयोग राशि (Fee Structure):</span>
                  <div className="flex flex-wrap gap-1 text-[11px] font-bold">
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">Local: ₹101</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">District: ₹1,001</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">State: ₹5,001</span>
                    <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md">National: ₹21,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button
                className="w-full py-3 px-4 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm bg-saffron-50 text-saffron-800 hover:bg-saffron-100 border border-saffron-200 sd-btn sd-btn--join-mission"
              >
                <span>Register Now / चुनें एवं आगे बढ़ें</span>
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
                  className="lucide lucide-arrow-right w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className="group relative rounded-3xl overflow-hidden border-2 bg-white flex flex-col justify-between cursor-pointer transition-all duration-300 border-slate-200 hover:border-saffron-300 hover:shadow-xl"
          >
            <div>
              <div
                className="relative h-[240px] w-full overflow-hidden bg-[#180c06] p-2 flex items-center justify-center"
              >
                <img
                  src="/img/seva_network.jpeg"
                  alt="SANATAN SEVA NETWORK"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"
                ></div>
                <span
                  className="absolute top-3 left-3 bg-saffron-600/90 backdrop-blur-md text-white font-black text-xs px-3 py-1 rounded-full shadow-md z-10"
                >#4 Professionals &amp; Services Platform</span>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-saffron-900">SANATAN SEVA NETWORK</h3>
                  <h4 className="text-sm font-bold text-amber-700">सनातन सेवा नेटवर्क</h4>
                  <p className="text-[11px] text-slate-500 font-medium italic mt-0.5">
                    (Professionals, Businessmen &amp; Service Providers Network / पेशेवर एवं सेवाप्रदाता मंच)
                  </p>
                </div>
                <p
                  className="text-xs text-slate-600 leading-relaxed line-clamp-3 bg-saffron-50/50 p-2.5 rounded-xl border border-saffron-100"
                >
                  Sanatan Seva Network उन professionals, व्यवसायियों, सेवाप्रदाताओं एवं समाजसेवियों का सहयोग मंच है जो अपने ज्ञान, सेवा, अनुभव एवं नेटवर्क के माध्यम से समाज और सनातन परिवार की सहायता करना चाहते हैं।
                </p>
                <div className="pt-1">
                  <span className="text-[11px] font-extrabold uppercase text-slate-500 block mb-1">सहयोग राशि (Fee Structure):</span>
                  <div
                    className="inline-block bg-emerald-100 text-emerald-900 px-3 py-1 rounded-lg text-xs font-black"
                  >सहयोग राशि ₹1,100</div>
                </div>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button
                className="w-full py-3 px-4 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm bg-saffron-50 text-saffron-800 hover:bg-saffron-100 border border-saffron-200 sd-btn sd-btn--join-mission"
              >
                <span>Register Now / चुनें एवं आगे बढ़ें</span>
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
                  className="lucide lucide-arrow-right w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className="group relative rounded-3xl overflow-hidden border-2 bg-white flex flex-col justify-between cursor-pointer transition-all duration-300 border-slate-200 hover:border-saffron-300 hover:shadow-xl"
          >
            <div>
              <div
                className="relative h-[240px] w-full overflow-hidden bg-[#180c06] p-2 flex items-center justify-center"
              >
                <img
                  src="/img/supporting_member.jpeg"
                  alt="SUPPORTING MEMBER / PATRON MEMBER"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"
                ></div>
                <span
                  className="absolute top-3 left-3 bg-saffron-600/90 backdrop-blur-md text-white font-black text-xs px-3 py-1 rounded-full shadow-md z-10"
                >#5 Patrons &amp; Institutional Donors</span>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h3 className="font-serif text-xl font-bold text-saffron-900">SUPPORTING MEMBER / PATRON MEMBER</h3>
                  <h4 className="text-sm font-bold text-amber-700">संरक्षक / सहयोगी सदस्य</h4>
                  <p className="text-[11px] text-slate-500 font-medium italic mt-0.5">
                    (Patrons, Donors &amp; Institutional Supporters / विशिष्ट संरक्षक सदस्य)
                  </p>
                </div>
                <p
                  className="text-xs text-slate-600 leading-relaxed line-clamp-3 bg-saffron-50/50 p-2.5 rounded-xl border border-saffron-100"
                >
                  Supporting Member / Patron Member उन व्यक्तियों, व्यवसायों, समाजसेवियों एवं शुभचिंतकों के लिए है जो संस्था के सेवा, समाज कल्याण एवं जनजागरण अभियानों को सहयोग एवं समर्थन देना चाहते हैं।
                </p>
                <div className="pt-1">
                  <span className="text-[11px] font-extrabold uppercase text-slate-500 block mb-1">सहयोग राशि (Fee Structure):</span>
                  <div
                    className="inline-block bg-emerald-100 text-emerald-900 px-3 py-1 rounded-lg text-xs font-black"
                  >न्यूनतम सहयोग राशि ₹21,000</div>
                </div>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button
                className="w-full py-3 px-4 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm bg-saffron-50 text-saffron-800 hover:bg-saffron-100 border border-saffron-200 sd-btn sd-btn--join-mission"
              >
                <span>Register Now / चुनें एवं आगे बढ़ें</span>
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
                  className="lucide lucide-arrow-right w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <button
            className="rounded-full bg-gradient-to-r from-saffron-600 to-amber-600 px-10 py-4 text-sm font-bold text-white shadow-xl shadow-saffron-500/25 hover:opacity-95 transition-all inline-flex items-center gap-2 cursor-pointer sd-btn sd-btn--next"
          >
            <span>Proceed to Step 2: Category Details (सनातनी सेना)</span>
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
              className="lucide lucide-arrow-right w-5 h-5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
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
