import { getPageContent, img, t } from '@/lib/sanity/content'
import Link from 'next/link'
import PeopleSlider from '@/components/PeopleSlider'
import { getPeople } from '@/lib/sanity/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default async function AboutPage() {
  const { text, images } = await getPageContent("/about")
  const people = await getPeople()

  return (
    <>
    <div className="min-h-screen bg-[#fdfbf7]">
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
            <span className="text-[#e35300]">{t(text, 'k2', "About Us")}</span>
          </nav>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold leading-[1.05] text-gray-900 mb-1.5">
            About{' '}
            <span className="text-[#e35300]">{t(text, 'k3', "Us")}</span>
          </h1>
          <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">{t(text, 'k4', "सेवा • संस्कार • सामाजिक उत्तरदायित्व")}</p>
        </div>
      </section>
      <div className="sticky top-[68px] sm:top-[72px] z-30 bg-white/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className="flex items-center justify-center sm:justify-start gap-2 sm:gap-6 py-2.5 overflow-x-auto scrollbar-none"
          >
            <a
              href="#intro"
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:text-saffron-600 hover:bg-saffron-50 transition-colors whitespace-nowrap"
            >हमारा परिचय</a>
            <a
              href="#vision-mission"
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:text-saffron-600 hover:bg-saffron-50 transition-colors whitespace-nowrap"
            >दृष्टिकोण एवं मिशन</a>
            <a
              href="#leadership"
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:text-saffron-600 hover:bg-saffron-50 transition-colors whitespace-nowrap"
            >हमारा नेतृत्व</a>
            <a
              href="#inspirations"
              className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 hover:text-saffron-600 hover:bg-saffron-50 transition-colors whitespace-nowrap"
            >प्रेरणा स्रोत</a>
          </div>
        </div>
      </div>
      <section
        id="intro"
        className="scroll-mt-28 sm:scroll-mt-32 bg-[#fdfbf7] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden sd-gap"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-white rounded-3xl border border-saffron-100/80 p-6 sm:p-10 lg:p-12 shadow-sm"
          >
            <div className="grid gap-8 lg:gap-12 lg:grid-cols-2 items-center">
              <div className="relative shrink-0 w-full max-w-[360px] mx-auto order-2 lg:order-1">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-saffron-100 group"
                >
                  <img
                    src={img(images, 'i5', "/img/who-we-are.jpeg")}
                    alt="सनातन धर्म मानव कल्याण फाउंडेशन"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"
                  ></div>
                </div>
                <div
                  className="absolute -bottom-4 right-4 bg-white border border-slate-200 rounded-full py-2 px-4 flex items-center gap-2 shadow-md"
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
                    className="lucide lucide-shield-check w-4 h-4 text-[#1a8738]"
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  <span className="text-[11px] font-bold text-[#1a8738] tracking-wider uppercase">{t(text, 'k6', "PUNYAKARYA TRUST")}</span>
                </div>
              </div>
              <div className="order-1 lg:order-2 text-left space-y-4">
                <div>
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold mb-2"
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
                      className="lucide lucide-flag w-3.5 h-3.5 text-saffron-600"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                      <line x1="4" x2="4" y1="22" y2="15"></line>
                    </svg>
                    {' '}हमारा परिचय
                  </span>
                  <h2
                    className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-gray-900"
                  >
                    सेवा ही{' '}
                    <span className="text-[#e35300]">{t(text, 'k7', "सनातन")}</span>
                    {' '}• समर्पण ही हमारा धर्म
                  </h2>
                </div>
                <div className="deva space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
                  <p>
                    <strong className="text-gray-900 font-bold">{t(text, 'k8', "सनातन धर्म मानव कल्याण फाउंडेशन")}</strong>
                    {' '}सेवा, संस्कार, सामाजिक उत्तरदायित्व एवं मानव कल्याण को समर्पित एक पंजीकृत संस्था है। हमारा उद्देश्य सनातन संस्कृति एवं भारतीय मूल्यों के संरक्षण के साथ-साथ समाज के विभिन्न वर्गों तक सेवा, सहयोग एवं जागरूकता पहुँचाना है।
                  </p>
                  <p>
                    हम अन्न सेवा के माध्यम से{' '}
                    <strong className="text-saffron-700">{t(text, 'k9', "&quot;कोई भूखा न सोए&quot;")}</strong>
                    {' '}के संकल्प, स्वास्थ्य सहायता, शिक्षा एवं संस्कार, महिला सुरक्षा एवं सम्मान, गौ सेवा, पर्यावरण संरक्षण, आपदा राहत तथा अन्य सामाजिक एवं मानवीय अभियानों के माध्यम से सकारात्मक परिवर्तन लाने हेतु कार्यरत हैं।
                  </p>
                  <p>
                    {t(text, 'k10', "हमारा उद्देश्य केवल सहायता प्रदान करना नहीं, बल्कि सेवा, संगठन, जागरूकता एवं जनसहभागिता के माध्यम से एक सशक्त, संस्कारित, आत्मनिर्भर एवं उत्तरदायी समाज के निर्माण में सक्रिय योगदान देना है।")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="vision-mission"
        className="scroll-mt-28 sm:scroll-mt-32 bg-gradient-to-b from-saffron-50/60 to-[#fdfbf7] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans border-y border-saffron-100 sd-gap"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[#e35300] font-bold text-xs tracking-widest uppercase mb-1 block">{t(text, 'k11', "VISION &amp; MISSION")}</span>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight text-gray-900"
            >
              दृष्टिकोण एवं{' '}
              <span className="text-[#e35300]">{t(text, 'k12', "मिशन")}</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div
              className="bg-white rounded-3xl border border-saffron-100 shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5 border-b border-slate-100 pb-4">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl bg-saffron-100 text-saffron-600 shrink-0 shadow-sm"
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
                      className="lucide lucide-eye h-6 w-6"
                    >
                      <path
                        d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
                      ></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-saffron-600 uppercase tracking-wider">{t(text, 'k13', "VISION")}</span>
                    <h3 className="font-serif text-2xl font-bold text-gray-900">हमारा दृष्टिकोण</h3>
                  </div>
                </div>
                <div className="deva space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
                  <p className="font-medium text-slate-800">
                    {t(text, 'k14', "एक ऐसे सशक्त, जागरूक, संस्कारित एवं आत्मनिर्भर समाज का निर्माण करना जहाँ सेवा, सुरक्षा, संस्कार एवं सनातन मूल्यों के आधार पर प्रत्येक व्यक्ति सम्मानपूर्वक जीवन जी सके।")}
                  </p>
                  <p className="text-slate-600">
                    {t(text, 'k15', "हमारा विश्वास है कि जब समाज स्वयं समाज के प्रति अपनी जिम्मेदारी को समझता है और सेवा को अपना कर्तव्य मानता है, तभी वास्तविक एवं स्थायी परिवर्तन संभव होता है।")}
                  </p>
                </div>
              </div>
              <div
                className="mt-6 pt-4 border-t border-saffron-50 flex items-center gap-2 text-xs font-bold text-saffron-700"
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
                  className="lucide lucide-shield-check w-4 h-4 text-saffron-500"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  ></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>{t(text, 'k16', "सेवा • सुरक्षा • संस्कार • सनातन मूल्य")}</span>
              </div>
            </div>
            <div
              className="bg-white rounded-3xl border border-saffron-100 shadow-sm p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5 border-b border-slate-100 pb-4">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl bg-saffron-100 text-saffron-600 shrink-0 shadow-sm"
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
                      className="lucide lucide-target h-6 w-6"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-saffron-600 uppercase tracking-wider">{t(text, 'k17', "MISSION")}</span>
                    <h3 className="font-serif text-2xl font-bold text-gray-900">हमारा मिशन</h3>
                  </div>
                </div>
                <div className="deva space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
                  <p>
                    {t(text, 'k18', "सनातन धर्म मानव कल्याण फाउंडेशन का मिशन सेवा, संस्कार, सामाजिक जागरूकता एवं मानव कल्याण के माध्यम से समाज में सकारात्मक परिवर्तन लाना है।")}
                  </p>
                  <p>
                    {t(text, 'k19', "हम सनातन संस्कृति एवं मूल्यों के संरक्षण, जरूरतमंद लोगों तक सहायता पहुँचाने, सेवा भावना को प्रोत्साहित करने तथा जनसहभागिता के माध्यम से एक संगठित, जिम्मेदार एवं सशक्त समाज के निर्माण हेतु कार्य करने के लिए प्रतिबद्ध हैं।")}
                  </p>
                </div>
              </div>
              <div
                className="mt-6 pt-4 border-t border-saffron-50 bg-saffron-50/80 rounded-2xl p-3 text-center"
              >
                <p className="deva text-xs sm:text-sm font-bold text-saffron-800">{t(text, 'k20', "सेवा • सुरक्षा • संस्कार • धर्म — मानव कल्याण हमारा कर्म")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="leadership"
        className="scroll-mt-28 sm:scroll-mt-32 bg-[#fdfbf7] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans sd-gap"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-[#e35300] font-bold text-xs tracking-widest uppercase block">{t(text, 'k21', "LEADERSHIP")}</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900">
              हमारा{' '}
              <span className="text-[#e35300]">{t(text, 'k22', "नेतृत्व")}</span>
            </h2>
            <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 sm:p-5 shadow-xs">
              <p className="deva text-xs sm:text-sm leading-relaxed text-slate-700 font-medium italic">
                {t(text, 'k23', "&quot;हमारा नेतृत्व सेवा, पारदर्शिता, उत्तरदायित्व एवं जनसहभागिता के मूल्यों पर आधारित है। हमारा उद्देश्य केवल संस्था का संचालन करना नहीं, बल्कि समाज के साथ मिलकर सकारात्मक परिवर्तन की दिशा में कार्य करना है।&quot;")}
              </p>
            </div>
          </div>
          <div
            className="bg-white rounded-3xl border border-saffron-100 shadow-md overflow-hidden grid md:grid-cols-12 items-stretch"
          >
            <div
              className="md:col-span-5 relative bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200 min-h-[320px] md:min-h-[460px] flex items-center justify-center overflow-hidden"
            >
              <img
                src={img(images, 'i24', "/people/founder.jpeg")}
                alt="Sanjay A Singh - Founder"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"
              ></div>
              <div className="absolute bottom-3 left-3 right-3 text-white md:hidden">
                <h3 className="font-serif text-xl font-bold">Sanjay A Singh</h3>
                <p className="text-xs text-amber-200 font-medium">{t(text, 'k25', "Founder | Social Entrepreneur")}</p>
              </div>
            </div>
            <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="hidden md:block border-b border-slate-100 pb-4">
                <span
                  className="px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider"
                >FOUNDER</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-2">Sanjay A Singh</h3>
                <p className="text-sm font-semibold text-saffron-600">{t(text, 'k26', "Founder | Social Entrepreneur")}</p>
              </div>
              <div className="space-y-3">
                <div
                  className="bg-saffron-50/60 rounded-2xl p-3.5 sm:p-4 border border-saffron-100/70 flex gap-3 items-start"
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
                    className="lucide lucide-quote h-4 w-4 text-saffron-500 shrink-0 mt-1"
                  >
                    <path
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                  <p className="deva text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                    {t(text, 'k27', "&quot;सेवा केवल सहायता नहीं, बल्कि समाज के प्रति हमारी जिम्मेदारी है। जब हम संस्कार, सेवा और सामाजिक उत्तरदायित्व को अपनाते हैं, तभी एक सशक्त, जागरूक एवं संवेदनशील समाज का निर्माण संभव होता है।&quot;")}
                  </p>
                </div>
                <div
                  className="bg-saffron-50/60 rounded-2xl p-3.5 sm:p-4 border border-saffron-100/70 flex gap-3 items-start"
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
                    className="lucide lucide-quote h-4 w-4 text-saffron-500 shrink-0 mt-1"
                  >
                    <path
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                  <p className="deva text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                    {t(text, 'k28', "&quot;सनातन केवल आस्था नहीं, बल्कि जीवन जीने की एक संस्कृति, एक विचारधारा और मानव कल्याण का शाश्वत मार्ग है।&quot;")}
                  </p>
                </div>
                <div
                  className="bg-saffron-50/60 rounded-2xl p-3.5 sm:p-4 border border-saffron-100/70 flex gap-3 items-start"
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
                    className="lucide lucide-quote h-4 w-4 text-saffron-500 shrink-0 mt-1"
                  >
                    <path
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                  <p className="deva text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                    {t(text, 'k29', "&quot;हमारा विश्वास है कि समाज की वास्तविक शक्ति संगठन, सहयोग और जनसहभागिता में निहित है। जब अच्छे लोग एक उद्देश्य के लिए एकजुट होते हैं, तो सकारात्मक परिवर्तन अवश्य होता है।&quot;")}
                  </p>
                </div>
                <div
                  className="bg-saffron-50/60 rounded-2xl p-3.5 sm:p-4 border border-saffron-100/70 flex gap-3 items-start"
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
                    className="lucide lucide-quote h-4 w-4 text-saffron-500 shrink-0 mt-1"
                  >
                    <path
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                  <p className="deva text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                    {t(text, 'k30', "&quot;आइए, सेवा, संस्कार और सनातन मूल्यों के साथ मिलकर ऐसा समाज बनाएं, जहाँ सहायता, सम्मान और मानवता केवल शब्द नहीं, बल्कि प्रत्येक व्यक्ति के जीवन का हिस्सा बनें।&quot;")}
                  </p>
                </div>
              </div>
              <div
                className="space-y-1.5 pt-2 border-t border-slate-100 text-xs font-bold text-saffron-800 deva"
              >
                <p className="flex items-center gap-1.5">
                  <span>{t(text, 'k31', "सेवा • सुरक्षा • संस्कार • धर्म — मानव कल्याण हमारा कर्म")}</span>
                </p>
                <p className="text-[#e35300]">{t(text, 'k32', "गर्व से कहो हम सनातनी हैं • जय श्री राम • हर हर महादेव")}</p>
              </div>
            </div>
          </div>
          <div
            className="bg-white rounded-3xl border border-saffron-100 shadow-md overflow-hidden grid md:grid-cols-12 items-stretch"
          >
            <div
              className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 order-2 md:order-1"
            >
              <div className="hidden md:block border-b border-slate-100 pb-4">
                <span
                  className="px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold uppercase tracking-wider"
                >CO-FOUNDER &amp; DIRECTOR</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mt-2">Krishnam Singh</h3>
                <p className="text-sm font-semibold text-saffron-600">{t(text, 'k33', "Co-Founder &amp; Director")}</p>
              </div>
              <div className="space-y-3">
                <div
                  className="bg-amber-50/60 rounded-2xl p-3.5 sm:p-4 border border-amber-200/60 flex gap-3 items-start"
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
                    className="lucide lucide-quote h-4 w-4 text-saffron-500 shrink-0 mt-1"
                  >
                    <path
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                  <p className="deva text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                    {t(text, 'k34', "&quot;हम केवल बेहतर भविष्य की कल्पना नहीं करते, बल्कि उसे साकार करने का संकल्प भी लेते हैं। सनातन मूल्यों, युवा शक्ति और सेवा भाव के साथ समाज में सकारात्मक परिवर्तन लाना ही हमारा लक्ष्य है।&quot;")}
                  </p>
                </div>
                <div
                  className="bg-amber-50/60 rounded-2xl p-3.5 sm:p-4 border border-amber-200/60 flex gap-3 items-start"
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
                    className="lucide lucide-quote h-4 w-4 text-saffron-500 shrink-0 mt-1"
                  >
                    <path
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                  <p className="deva text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                    {t(text, 'k35', "&quot;जब युवा जागरूक होते हैं, तो समाज सशक्त बनता है; और जब समाज संगठित होता है, तो राष्ट्र प्रगति के नए आयाम स्थापित करता है।&quot;")}
                  </p>
                </div>
                <div
                  className="bg-amber-50/60 rounded-2xl p-3.5 sm:p-4 border border-amber-200/60 flex gap-3 items-start"
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
                    className="lucide lucide-quote h-4 w-4 text-saffron-500 shrink-0 mt-1"
                  >
                    <path
                      d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                    <path
                      d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                    ></path>
                  </svg>
                  <p className="deva text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                    {t(text, 'k36', "&quot;आइए, हम सभी सेवा, समर्पण और सामाजिक उत्तरदायित्व के साथ मिलकर आने वाली पीढ़ियों के लिए एक सुरक्षित, संस्कारित और सशक्त भारत के निर्माण में अपना योगदान दें।&quot;")}
                  </p>
                </div>
              </div>
              <div
                className="pt-2 border-t border-slate-100 text-xs sm:text-sm font-bold text-saffron-800 deva"
              >
                <p>{t(text, 'k37', "युवा शक्ति • सेवा • संस्कार • राष्ट्र निर्माण")}</p>
              </div>
            </div>
            <div
              className="md:col-span-5 relative bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200 min-h-[320px] md:min-h-[440px] flex items-center justify-center overflow-hidden order-1 md:order-2"
            >
              <img
                src={img(images, 'i38', "/people/co-founder.jpeg")}
                alt="Krishnam Singh - Co-Founder & Director"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden"
              ></div>
              <div className="absolute bottom-3 left-3 right-3 text-white md:hidden">
                <h3 className="font-serif text-xl font-bold">Krishnam Singh</h3>
                <p className="text-xs text-amber-200 font-medium">{t(text, 'k39', "Co-Founder &amp; Director")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="inspirations"
        className="scroll-mt-28 sm:scroll-mt-32 bg-gradient-to-b from-[#fdfbf7] to-saffron-50/40 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 font-sans sd-gap"
      >
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-100 text-saffron-800 text-xs font-bold"
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
                className="lucide lucide-shield-check w-3.5 h-3.5 text-saffron-600"
              >
                <path
                  d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                ></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              {' '}Our Inspirations &amp; Ideals
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900">
              हमारे आदर्श एवं{' '}
              <span className="text-[#e35300]">{t(text, 'k40', "प्रेरणा स्रोत")}</span>
            </h2>
            <p className="deva text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {t(text, 'k41', "वे महान संत, धर्माचार्य, राष्ट्रचिंतक, समाजसेवी, विधिवेत्ता एवं जननेता, जिनके विचार, तप, संघर्ष, नेतृत्व, सेवा और राष्ट्रधर्म के प्रति अटूट समर्पण ने हमें सनातन, समाज और संस्कृति के संरक्षण, संवर्धन एवं जनकल्याण के लिए निरंतर कार्य करने की प्रेरणा दी है। उनके आदर्श, त्याग और जीवन-मूल्य हमारे लिए केवल प्रेरणा ही नहीं, बल्कि सेवा, सुरक्षा, संस्कार एवं धर्म के मार्ग पर आगे बढ़ने का सतत मार्गदर्शन भी हैं।")}
            </p>
          </div>
          <PeopleSlider people={people} />
          <div
            className="bg-amber-50/90 border border-amber-200 rounded-2xl p-5 sm:p-6 text-left shadow-xs mt-10"
          >
            <div className="flex items-start gap-3">
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
                className="lucide lucide-info w-5 h-5 text-amber-700 shrink-0 mt-0.5"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <div className="space-y-1">
                <h4 className="font-serif text-sm font-bold text-amber-900">अस्वीकरण (Disclaimer)</h4>
                <p className="deva text-xs sm:text-sm leading-relaxed text-amber-800">
                  {t(text, 'k42', "उपरोक्त सभी व्यक्तित्व हमारे लिए प्रेरणा एवं सम्मान के स्रोत हैं। उनका उल्लेख केवल उनके विचारों, राष्ट्रसेवा, सनातन संस्कृति एवं समाजहित में किए गए योगदान के प्रति सम्मान व्यक्त करने के उद्देश्य से किया गया है। इसका किसी प्रकार का राजनीतिक समर्थन, संबद्धता अथवा आधिकारिक अनुमोदन अभिप्रेत नहीं है।")}
                </p>
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
          <p className="deva eyebrow text-saffron-100">{t(text, 'k43', "आपका सहयोग किसी के जीवन में नई उम्मीद ला सकता है")}</p>
          <h2 className="deva mt-3 font-display text-3xl font-bold sm:text-4xl">सेवा, सहयोग एवं सहभागिता के माध्यम से जुड़ें</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90">
            {t(text, 'k44', "Be part of positive change. Your contribution brings hope, support and dignity to lives across India.")}
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
              {t(text, 'k45', "Donate Now")}
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
              {t(text, 'k46', "Join the Mission")}
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
                {t(text, 'k47', "सनातन पर्व, सेवा अभियान, विशेष कार्यक्रमों एवं महत्वपूर्ण अपडेट्स की जानकारी प्राप्त करने के लिए Subscribe करें।")}
              </p>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <form className="space-y-4">
                <div>
                  <label className="field-label">{t(text, 'k48', "Email Address")}</label>
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
                  {t(text, 'k49', "Subscribe Now")}
                </button>
                <p className="text-center text-xs text-ink/50">{t(text, 'k50', "We respect your privacy. Unsubscribe anytime.")}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
