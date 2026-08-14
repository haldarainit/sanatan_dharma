import { getPageContent, img, t } from '@/lib/sanity/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default async function ActivitiesPage() {
  const { text, images } = await getPageContent("/activities")
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
          <span className="text-[#e35300]">{t(text, 'k2', "Current Activities")}</span>
        </nav>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          Current{' '}
          <span className="text-[#e35300]">{t(text, 'k3', "Activities")}</span>
        </h1>
        <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">{t(text, 'k4', "🚩 वर्तमान गतिविधियाँ")}</p>
        <p className="max-w-3xl text-sm sm:text-[15px] leading-relaxed text-slate-700">{t(text, 'k5', "सनातन धर्म मानव कल्याण फाउंडेशन के प्रमुख सेवा अभियान एवं गतिविधियाँ।")}</p>
      </div>
    </section>
    <section className="bg-[#fdfbf7] py-12 px-4 sm:px-6 lg:px-8 font-sans sd-gap">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            id="mission-sanatan-board"
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <img src={img(images, 'i29', "/img/yogi-flag.jpg")} alt="सनातन बोर्ड" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div
                className="absolute top-3 right-3 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md"
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
                  className="lucide lucide-landmark h-5 w-5 text-saffron-600"
                >
                  <line x1="3" x2="21" y1="22" y2="22"></line>
                  <line x1="6" x2="6" y1="18" y2="11"></line>
                  <line x1="10" x2="10" y1="18" y2="11"></line>
                  <line x1="14" x2="14" y1="18" y2="11"></line>
                  <line x1="18" x2="18" y1="18" y2="11"></line>
                  <polygon points="12 2 20 7 4 7"></polygon>
                </svg>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="deva font-serif text-lg font-bold text-slate-900 mb-2 leading-tight">सनातन बोर्ड</h3>
              <p className="deva text-sm text-slate-500 leading-relaxed mb-4 flex-1">{t(text, 'k6', "हमारा प्रथम एवं प्रमुख मिशन।")}</p>
              <button
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-saffron-500 text-saffron-700 font-semibold text-sm rounded-full hover:bg-saffron-50 transition-colors cursor-pointer sd-btn sd-btn--view-details"
              >
                Read More{' '}
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
              </button>
            </div>
          </div>
          <div
            id="mission-mahila-suraksha"
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={img(images, 'i7', "/img/act-women.jpg")}
                alt="महिला सुरक्षा एवं सम्मान अभियान"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div
                className="absolute top-3 right-3 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md"
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
                  className="lucide lucide-shield-check h-5 w-5 text-saffron-600"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  ></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="deva font-serif text-lg font-bold text-slate-900 mb-2 leading-tight">महिला सुरक्षा एवं सम्मान अभियान</h3>
              <p className="deva text-sm text-slate-500 leading-relaxed mb-4 flex-1">{t(text, 'k8', "हर माँ, बहन और बेटी सुरक्षित रहे।")}</p>
              <button
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-saffron-500 text-saffron-700 font-semibold text-sm rounded-full hover:bg-saffron-50 transition-colors cursor-pointer sd-btn sd-btn--view-details"
              >
                Read More{' '}
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
              </button>
            </div>
          </div>
          <div
            id="mission-anna-seva"
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <img src={img(images, 'i30', "/img/act-child.jpg")} alt="अन्न सेवा अभियान" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div
                className="absolute top-3 right-3 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md"
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
                  className="lucide lucide-utensils h-5 w-5 text-saffron-600"
                >
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                  <path d="M7 2v20"></path>
                  <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
                </svg>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="deva font-serif text-lg font-bold text-slate-900 mb-2 leading-tight">अन्न सेवा अभियान</h3>
              <p className="deva text-sm text-slate-500 leading-relaxed mb-4 flex-1">{t(text, 'k9', "कोई भूखा न रहे — यही हमारा संकल्प है।")}</p>
              <button
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-saffron-500 text-saffron-700 font-semibold text-sm rounded-full hover:bg-saffron-50 transition-colors cursor-pointer sd-btn sd-btn--view-details"
              >
                Read More{' '}
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
              </button>
            </div>
          </div>
          <div
            id="mission-shiksha-sanskar"
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={img(images, 'i10', "/img/campaign-gurukul.jpg")}
                alt="शिक्षा एवं संस्कार सहायता अभियान"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div
                className="absolute top-3 right-3 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md"
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
                  className="lucide lucide-graduation-cap h-5 w-5 text-saffron-600"
                >
                  <path
                    d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
                  ></path>
                  <path d="M22 10v6"></path>
                  <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                </svg>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="deva font-serif text-lg font-bold text-slate-900 mb-2 leading-tight">शिक्षा एवं संस्कार सहायता अभियान</h3>
              <p className="deva text-sm text-slate-500 leading-relaxed mb-4 flex-1">{t(text, 'k11', "कोई भी बच्चा शिक्षा से वंचित न रहे।")}</p>
              <button
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-saffron-500 text-saffron-700 font-semibold text-sm rounded-full hover:bg-saffron-50 transition-colors cursor-pointer sd-btn sd-btn--view-details"
              >
                Read More{' '}
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
              </button>
            </div>
          </div>
          <div
            id="mission-dhokhadhadi-jagrukta"
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
          >
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={img(images, 'i12', "/img/future-help.jpeg")}
                alt="धोखाधड़ी जागरूकता एवं सहायता अभियान"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div
                className="absolute top-3 right-3 w-11 h-11 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md"
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
                  className="lucide lucide-eye h-5 w-5 text-saffron-600"
                >
                  <path
                    d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                  ></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="deva font-serif text-lg font-bold text-slate-900 mb-2 leading-tight">धोखाधड़ी जागरूकता एवं सहायता अभियान</h3>
              <p className="deva text-sm text-slate-500 leading-relaxed mb-4 flex-1">{t(text, 'k13', "सतर्क रहें • सुरक्षित रहें।")}</p>
              <button
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-saffron-500 text-saffron-700 font-semibold text-sm rounded-full hover:bg-saffron-50 transition-colors cursor-pointer sd-btn sd-btn--view-details"
              >
                Read More{' '}
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="bg-[#fdfbf7] py-12 px-4 sm:px-6 lg:px-8 font-sans border-t border-saffron-100 sd-gap"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          हमारा दीर्घकालिक{' '}
          <span className="text-[#e35300]">{t(text, 'k14', "संकल्प")}</span>
        </h2>
        <p className="text-[#e35300] font-bold text-xs tracking-widest uppercase mb-8">{t(text, 'k15', "Long-Term Commitment")}</p>
        <div className="bg-saffron-50/60 rounded-2xl border border-saffron-100 p-8 sm:p-10">
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
            className="lucide lucide-quote h-8 w-8 text-saffron-400 mx-auto mb-4"
          >
            <path
              d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
            ></path>
            <path
              d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
            ></path>
          </svg>
          <p
            className="deva text-lg sm:text-xl font-bold text-slate-800 leading-relaxed max-w-3xl mx-auto"
          >
            {t(text, 'k16', "\"सेवा, सहायता, संस्कार, सुरक्षा एवं आत्मनिर्भरता के माध्यम से एक सशक्त, जागरूक, संगठित एवं आत्मनिर्भर समाज का निर्माण करना हमारा लक्ष्य है।\"")}
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 text-left">
          <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
            <h4 className="deva font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
              <span className="text-red-600">{t(text, 'k17', "🚩")}</span>
              {' '}वर्तमान में
            </h4>
            <p className="deva text-sm text-slate-600 leading-relaxed">{t(text, 'k18', "सेवा, जनकल्याण, जागरूकता एवं सामाजिक सहयोग संबंधी गतिविधियाँ।")}</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
            <h4 className="deva font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
              <span className="text-red-600">{t(text, 'k19', "🚩")}</span>
              {' '}भविष्य में
            </h4>
            <p className="deva text-sm text-slate-600 leading-relaxed">
              {t(text, 'k20', "सनातन हेल्प सेंटर, सनातन भोजनालय, सनातन शेल्टर हाउस, रोटी • कपड़ा • मकान एवं कौशल विकास केंद्र तथा सनातन गुरुकुल एवं संस्कार केंद्र की स्थापना एवं विस्तार।")}
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-7 rounded-full shadow-md transition-transform hover:-translate-y-0.5 sd-btn sd-btn--join-mission"
            href="/membership"
          >Join Us</Link>
          <Link
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-7 rounded-full shadow-md transition-transform hover:-translate-y-0.5 sd-btn sd-btn--donate-now"
            href="/donate"
          >Donate Now</Link>
        </div>
      </div>
    </section>
    <section className="container-x my-12 sd-gap">
      <div
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-saffron-600 via-saffron-500 to-maroon-600 px-6 py-14 text-center text-white shadow-xl sm:px-12"
      >
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl"></div>
        <p className="deva eyebrow text-saffron-100">{t(text, 'k21', "आपका सहयोग किसी के जीवन में नई उम्मीद ला सकता है")}</p>
        <h2 className="deva mt-3 font-display text-3xl font-bold sm:text-4xl">सेवा, सहयोग एवं सहभागिता के माध्यम से जुड़ें</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90">
          {t(text, 'k22', "Be part of positive change. Your contribution brings hope, support and dignity to lives across India.")}
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
            {t(text, 'k23', "Donate Now")}
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
            {t(text, 'k24', "Join the Mission")}
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
              {t(text, 'k25', "सनातन पर्व, सेवा अभियान, विशेष कार्यक्रमों एवं महत्वपूर्ण अपडेट्स की जानकारी प्राप्त करने के लिए Subscribe करें।")}
            </p>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <form className="space-y-4">
              <div>
                <label className="field-label">{t(text, 'k26', "Email Address")}</label>
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
                {t(text, 'k27', "Subscribe Now")}
              </button>
              <p className="text-center text-xs text-ink/50">{t(text, 'k28', "We respect your privacy. Unsubscribe anytime.")}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
