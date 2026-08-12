import { getPageContent, img, t } from '@/lib/sanity/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default async function ViewFundraisersPage() {
  const { text, images } = await getPageContent("/view-fundraisers")
  return (
    <>
    <div className="min-h-screen flex flex-col bg-[#FFFDF9]">
      <div
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none"
      ></div>
      <div className="flex-1 py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-8">
            <span
              className="inline-flex items-center px-4 py-1 rounded-full bg-[#FFF4E6] text-[#FF6F00] border border-[#FF6F00]/25 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm"
            >Verified Crowdfunding Causes</span>
            <h1
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-3"
            >
              <span>{t(text, 'k1', "Active Fundraisers")}</span>
              <span className="mx-2 text-slate-300 font-light">•</span>
              <span className="text-[#FF6F00]">{t(text, 'k2', "सक्रिय अभियान")}</span>
            </h1>
            <p className="text-[#FF6F00] font-bold text-xs sm:text-sm tracking-wider mb-4">
              {t(text, 'k3', "सनातन धर्म, संस्कृति, गौ सेवा एवं मानव कल्याण हेतु चल रहे अभियानों में अपना योगदान दें।")}
            </p>
            <p
              className="max-w-3xl mx-auto text-[14.5px] leading-relaxed text-[#0D1B2A]/80 bg-white/70 border border-[#FF6F00]/15 rounded-2xl px-5 py-3.5 shadow-sm"
            >
              {t(text, 'k4', "प्रत्येक अभियान 100% सत्यापित है। आपका छोटा सा योगदान किसी मंदिर के जिर्णोद्धार, गौ माता के भोजन या किसी निर्धन बालक की शिक्षा में बड़ी क्रांति ला सकता है।")}
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            <div className="rounded-2xl bg-white border border-[#FF6F00]/20 p-4 text-center shadow-sm">
              <div className="font-serif font-bold text-lg sm:text-xl text-[#FF6F00]">{t(text, 'k5', "₹1.48 Crore+")}</div>
              <div className="font-bold text-xs text-[#0D1B2A] mt-1">{t(text, 'k6', "Total Raised / कुल सहयोग")}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{t(text, 'k7', "Directly Impacting Causes")}</div>
            </div>
            <div className="rounded-2xl bg-white border border-[#FF6F00]/20 p-4 text-center shadow-sm">
              <div className="font-serif font-bold text-lg sm:text-xl text-[#FF6F00]">{t(text, 'k8', "12 Live Drives")}</div>
              <div className="font-bold text-xs text-[#0D1B2A] mt-1">{t(text, 'k9', "Active Causes / सक्रिय अभियान")}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{t(text, 'k10', "Verified &amp; Ongoing")}</div>
            </div>
            <div className="rounded-2xl bg-white border border-[#FF6F00]/20 p-4 text-center shadow-sm">
              <div className="font-serif font-bold text-lg sm:text-xl text-[#FF6F00]">{t(text, 'k11', "18,400+ Donors")}</div>
              <div className="font-bold text-xs text-[#0D1B2A] mt-1">{t(text, 'k12', "Verified Donors / दानदाता")}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{t(text, 'k13', "Across India &amp; Abroad")}</div>
            </div>
            <div className="rounded-2xl bg-white border border-[#FF6F00]/20 p-4 text-center shadow-sm">
              <div className="font-serif font-bold text-lg sm:text-xl text-[#FF6F00]">{t(text, 'k14', "0% Zero Fee")}</div>
              <div className="font-bold text-xs text-[#0D1B2A] mt-1">{t(text, 'k15', "Platform Fee / प्लेटफॉर्म शुल्क")}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{t(text, 'k16', "100% Goes To Cause")}</div>
            </div>
          </div>
          <div
            className="rounded-3xl bg-white border border-[#0D1B2A]/10 p-5 sm:p-6 mb-8 shadow-sm space-y-4"
          >
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
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
                  placeholder="Search campaigns by keyword..."
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 text-xs font-semibold text-[#0D1B2A] focus:outline-none focus:border-[#FF6F00]"
                  defaultValue=""
                />
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
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
                    className="lucide lucide-filter h-4 w-4 text-[#FF6F00]"
                  >
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                  </svg>
                  <select
                    className="h-11 px-3 rounded-xl border border-slate-200 text-xs font-bold text-[#0D1B2A] bg-white focus:outline-none"
                  >
                    <option defaultValue="urgent" selected>{t(text, 'k17', "Most Urgent First")}</option>
                    <option defaultValue="raised">{t(text, 'k18', "Highest Raised")}</option>
                    <option defaultValue="newest">{t(text, 'k19', "Ending Soon")}</option>
                  </select>
                </div>
                <Link
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FF6F00] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 whitespace-nowrap shadow-sm sd-btn sd-btn--start-fundraising"
                  href="/start-fundraiser"
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
                    className="lucide lucide-circle-plus h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8"></path>
                    <path d="M12 8v8"></path>
                  </svg>
                  <span>{t(text, 'k20', "Start Campaign")}</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 no-scrollbar">
              <button
                className="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer bg-[#FF6F00] text-white shadow-sm"
              >All Causes / सभी अभियान</button>
              <button
                className="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer bg-slate-100 text-slate-700 hover:bg-slate-200"
              >Temple / मंदिर</button>
              <button
                className="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer bg-slate-100 text-slate-700 hover:bg-slate-200"
              >Gau Seva / गौ सेवा</button>
              <button
                className="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer bg-slate-100 text-slate-700 hover:bg-slate-200"
              >Education / शिक्षा</button>
              <button
                className="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer bg-slate-100 text-slate-700 hover:bg-slate-200"
              >Medical / चिकित्सा</button>
              <button
                className="px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer bg-slate-100 text-slate-700 hover:bg-slate-200"
              >Annadanam / अन्नक्षेत्र</button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              style={{ opacity: "1" }}
            >
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <img
                  src={img(images, 'i21', "/img/hero.jpg")}
                  alt="Shri Ram Mandir Heritage Restoration & Annadanam"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-full bg-[#FF6F00] text-white text-[10.5px] font-bold uppercase tracking-wider shadow-sm"
                  >Temple Restoration</span>
                  <span
                    className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider animate-pulse"
                  >Urgent Relief</span>
                </div>
                <button
                  className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center hover:bg-white transition-all shadow-sm"
                  title="Share Campaign"
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
                    className="lucide lucide-share2 h-4 w-4"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                  </svg>
                </button>
                <div
                  className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold"
                >
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
                      className="lucide lucide-shield-check h-3.5 w-3.5 text-[#FF6F00]"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}By Sanatan Seva Trust
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full">
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
                      className="lucide lucide-clock h-3 w-3 text-amber-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {' '}12 days left
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    className="font-serif font-bold text-base sm:text-lg text-[#0D1B2A] leading-snug group-hover:text-[#FF6F00] transition-colors mb-2"
                  >Shri Ram Mandir Heritage Restoration &amp; Annadanam</h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {t(text, 'k22', "प्राचीन राम मंदिर जिर्णोद्धार, सुरक्षा दीवार निर्माण एवं प्रतिदिन 500 श्रद्धालुओं हेतु नि:शुल्क अन्नक्षेत्र सेवा।")}
                  </p>
                </div>
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-[#FF6F00]">
                      ₹3,85,000{' '}
                      <span className="text-slate-500 font-normal">{t(text, 'k23', "raised")}</span>
                    </span>
                    <span className="text-slate-700">{t(text, 'k24', "Goal: ₹5,00,000")}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF8C00] to-[#FF6F00] rounded-full transition-all duration-500"
                      style={{ width: "77%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-semibold">
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
                        className="lucide lucide-users h-3.5 w-3.5 text-slate-400"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {' '}420 Donors
                    </span>
                    <span className="font-bold text-[#FF6F00]">{t(text, 'k25', "77% Complete")}</span>
                  </div>
                </div>
                <button
                  className="w-full h-11 rounded-xl bg-[#FF6F00] hover:bg-[#e06200] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md sd-btn sd-btn--donate-now"
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
                    className="lucide lucide-heart h-4 w-4 fill-white/20"
                  >
                    <path
                      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    ></path>
                  </svg>
                  <span>{t(text, 'k26', "Donate To Campaign")}</span>
                </button>
              </div>
            </div>
            <div
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              style={{ opacity: "1" }}
            >
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <img
                  src={img(images, 'i27', "/img/hero.jpg")}
                  alt="Vedic Gaushala Winter Shed Construction & Cattle Feed"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-full bg-[#FF6F00] text-white text-[10.5px] font-bold uppercase tracking-wider shadow-sm"
                  >Gau Seva</span>
                  <span
                    className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider animate-pulse"
                  >Urgent Relief</span>
                </div>
                <button
                  className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center hover:bg-white transition-all shadow-sm"
                  title="Share Campaign"
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
                    className="lucide lucide-share2 h-4 w-4"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                  </svg>
                </button>
                <div
                  className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold"
                >
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
                      className="lucide lucide-shield-check h-3.5 w-3.5 text-[#FF6F00]"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}By Nandi Gau Raksha Samiti
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full">
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
                      className="lucide lucide-clock h-3 w-3 text-amber-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {' '}8 days left
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    className="font-serif font-bold text-base sm:text-lg text-[#0D1B2A] leading-snug group-hover:text-[#FF6F00] transition-colors mb-2"
                  >Vedic Gaushala Winter Shed Construction &amp; Cattle Feed</h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {t(text, 'k28', "150 असहाय गौवंश हेतु शीतकालीन शेड का निर्माण, हरा चारा एवं पशु चिकित्सा सुविधा।")}
                  </p>
                </div>
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-[#FF6F00]">
                      ₹2,45,000{' '}
                      <span className="text-slate-500 font-normal">{t(text, 'k29', "raised")}</span>
                    </span>
                    <span className="text-slate-700">{t(text, 'k30', "Goal: ₹3,00,000")}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF8C00] to-[#FF6F00] rounded-full transition-all duration-500"
                      style={{ width: "82%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-semibold">
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
                        className="lucide lucide-users h-3.5 w-3.5 text-slate-400"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {' '}310 Donors
                    </span>
                    <span className="font-bold text-[#FF6F00]">{t(text, 'k31', "82% Complete")}</span>
                  </div>
                </div>
                <button
                  className="w-full h-11 rounded-xl bg-[#FF6F00] hover:bg-[#e06200] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md sd-btn sd-btn--donate-now"
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
                    className="lucide lucide-heart h-4 w-4 fill-white/20"
                  >
                    <path
                      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    ></path>
                  </svg>
                  <span>{t(text, 'k32', "Donate To Campaign")}</span>
                </button>
              </div>
            </div>
            <div
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              style={{ opacity: "1" }}
            >
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <img
                  src={img(images, 'i33', "/img/hero.jpg")}
                  alt="Rural Health Camp & Free Medicine Distribution Drive"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-full bg-[#FF6F00] text-white text-[10.5px] font-bold uppercase tracking-wider shadow-sm"
                  >Medical Relief</span>
                  <span
                    className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider animate-pulse"
                  >Urgent Relief</span>
                </div>
                <button
                  className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center hover:bg-white transition-all shadow-sm"
                  title="Share Campaign"
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
                    className="lucide lucide-share2 h-4 w-4"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                  </svg>
                </button>
                <div
                  className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold"
                >
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
                      className="lucide lucide-shield-check h-3.5 w-3.5 text-[#FF6F00]"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}By SDMKS Health Team
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full">
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
                      className="lucide lucide-clock h-3 w-3 text-amber-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {' '}5 days left
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    className="font-serif font-bold text-base sm:text-lg text-[#0D1B2A] leading-snug group-hover:text-[#FF6F00] transition-colors mb-2"
                  >Rural Health Camp &amp; Free Medicine Distribution Drive</h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {t(text, 'k34', "सुदूर ग्रामीण क्षेत्रों में निःशुल्क नेत्र जांच, मोतियाबिंद ऑपरेशन एवं जीवन रक्षक दवाइयाँ।")}
                  </p>
                </div>
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-[#FF6F00]">
                      ₹1,40,000{' '}
                      <span className="text-slate-500 font-normal">{t(text, 'k35', "raised")}</span>
                    </span>
                    <span className="text-slate-700">{t(text, 'k36', "Goal: ₹2,00,000")}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF8C00] to-[#FF6F00] rounded-full transition-all duration-500"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-semibold">
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
                        className="lucide lucide-users h-3.5 w-3.5 text-slate-400"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {' '}160 Donors
                    </span>
                    <span className="font-bold text-[#FF6F00]">{t(text, 'k37', "70% Complete")}</span>
                  </div>
                </div>
                <button
                  className="w-full h-11 rounded-xl bg-[#FF6F00] hover:bg-[#e06200] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md sd-btn sd-btn--donate-now"
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
                    className="lucide lucide-heart h-4 w-4 fill-white/20"
                  >
                    <path
                      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    ></path>
                  </svg>
                  <span>{t(text, 'k38', "Donate To Campaign")}</span>
                </button>
              </div>
            </div>
            <div
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              style={{ opacity: "1" }}
            >
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <img
                  src={img(images, 'i39', "/img/hero.jpg")}
                  alt="Vedic Gurukul Education & Free Digital Computer Lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-full bg-[#FF6F00] text-white text-[10.5px] font-bold uppercase tracking-wider shadow-sm"
                  >Gurukul Education</span>
                </div>
                <button
                  className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center hover:bg-white transition-all shadow-sm"
                  title="Share Campaign"
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
                    className="lucide lucide-share2 h-4 w-4"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                  </svg>
                </button>
                <div
                  className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold"
                >
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
                      className="lucide lucide-shield-check h-3.5 w-3.5 text-[#FF6F00]"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}By Vedic Education Wing
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full">
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
                      className="lucide lucide-clock h-3 w-3 text-amber-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {' '}22 days left
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    className="font-serif font-bold text-base sm:text-lg text-[#0D1B2A] leading-snug group-hover:text-[#FF6F00] transition-colors mb-2"
                  >Vedic Gurukul Education &amp; Free Digital Computer Lab</h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {t(text, 'k40', "100 निर्धन बटुकों हेतु वेद-पुराण शिक्षा, निःशुल्क आवास, भोजन एवं कम्प्यूटर शिक्षा लैब।")}
                  </p>
                </div>
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-[#FF6F00]">
                      ₹1,80,000{' '}
                      <span className="text-slate-500 font-normal">{t(text, 'k41', "raised")}</span>
                    </span>
                    <span className="text-slate-700">{t(text, 'k42', "Goal: ₹2,50,000")}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF8C00] to-[#FF6F00] rounded-full transition-all duration-500"
                      style={{ width: "72%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-semibold">
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
                        className="lucide lucide-users h-3.5 w-3.5 text-slate-400"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {' '}195 Donors
                    </span>
                    <span className="font-bold text-[#FF6F00]">{t(text, 'k43', "72% Complete")}</span>
                  </div>
                </div>
                <button
                  className="w-full h-11 rounded-xl bg-[#FF6F00] hover:bg-[#e06200] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md sd-btn sd-btn--donate-now"
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
                    className="lucide lucide-heart h-4 w-4 fill-white/20"
                  >
                    <path
                      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    ></path>
                  </svg>
                  <span>{t(text, 'k44', "Donate To Campaign")}</span>
                </button>
              </div>
            </div>
            <div
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              style={{ opacity: "1" }}
            >
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <img
                  src={img(images, 'i45', "/img/hero.jpg")}
                  alt="Daily Annapurna Meal Distribution for Pilgrims"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-full bg-[#FF6F00] text-white text-[10.5px] font-bold uppercase tracking-wider shadow-sm"
                  >Annadanam</span>
                </div>
                <button
                  className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center hover:bg-white transition-all shadow-sm"
                  title="Share Campaign"
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
                    className="lucide lucide-share2 h-4 w-4"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                  </svg>
                </button>
                <div
                  className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold"
                >
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
                      className="lucide lucide-shield-check h-3.5 w-3.5 text-[#FF6F00]"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}By Sanatan Annapurna Trust
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full">
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
                      className="lucide lucide-clock h-3 w-3 text-amber-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {' '}18 days left
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    className="font-serif font-bold text-base sm:text-lg text-[#0D1B2A] leading-snug group-hover:text-[#FF6F00] transition-colors mb-2"
                  >Daily Annapurna Meal Distribution for Pilgrims</h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {t(text, 'k46', "तीर्थ यात्रियों, साधु-संतों एवं असहाय जनों हेतु प्रतिदिन शुद्ध सात्विक महाप्रसाद वितरण।")}
                  </p>
                </div>
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-[#FF6F00]">
                      ₹3,10,000{' '}
                      <span className="text-slate-500 font-normal">{t(text, 'k47', "raised")}</span>
                    </span>
                    <span className="text-slate-700">{t(text, 'k48', "Goal: ₹4,00,000")}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF8C00] to-[#FF6F00] rounded-full transition-all duration-500"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-semibold">
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
                        className="lucide lucide-users h-3.5 w-3.5 text-slate-400"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {' '}512 Donors
                    </span>
                    <span className="font-bold text-[#FF6F00]">{t(text, 'k49', "78% Complete")}</span>
                  </div>
                </div>
                <button
                  className="w-full h-11 rounded-xl bg-[#FF6F00] hover:bg-[#e06200] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md sd-btn sd-btn--donate-now"
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
                    className="lucide lucide-heart h-4 w-4 fill-white/20"
                  >
                    <path
                      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    ></path>
                  </svg>
                  <span>{t(text, 'k50', "Donate To Campaign")}</span>
                </button>
              </div>
            </div>
            <div
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              style={{ opacity: "1" }}
            >
              <div className="relative h-48 bg-slate-900 overflow-hidden">
                <img
                  src={img(images, 'i51', "/img/hero.jpg")}
                  alt="Cultural Heritage Pavilion & Sacred Literature Distribution"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-full bg-[#FF6F00] text-white text-[10.5px] font-bold uppercase tracking-wider shadow-sm"
                  >Cultural Awakening</span>
                </div>
                <button
                  className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 text-slate-800 flex items-center justify-center hover:bg-white transition-all shadow-sm"
                  title="Share Campaign"
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
                    className="lucide lucide-share2 h-4 w-4"
                  >
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                  </svg>
                </button>
                <div
                  className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold"
                >
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
                      className="lucide lucide-shield-check h-3.5 w-3.5 text-[#FF6F00]"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}By Sanatan Dharma Sanskriti Manch
                  </span>
                  <span className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full">
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
                      className="lucide lucide-clock h-3 w-3 text-amber-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {' '}29 days left
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    className="font-serif font-bold text-base sm:text-lg text-[#0D1B2A] leading-snug group-hover:text-[#FF6F00] transition-colors mb-2"
                  >Cultural Heritage Pavilion &amp; Sacred Literature Distribution</h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {t(text, 'k52', "श्रीमद्भगवद्गीता एवं धार्मिक साहित्य का निःशुल्क वितरण तथा युवा जागृति शिविर।")}
                  </p>
                </div>
                <div className="space-y-2 pt-1 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-[#FF6F00]">
                      ₹92,000{' '}
                      <span className="text-slate-500 font-normal">{t(text, 'k53', "raised")}</span>
                    </span>
                    <span className="text-slate-700">{t(text, 'k54', "Goal: ₹1,50,000")}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#FF8C00] to-[#FF6F00] rounded-full transition-all duration-500"
                      style={{ width: "61%" }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-semibold">
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
                        className="lucide lucide-users h-3.5 w-3.5 text-slate-400"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      {' '}110 Donors
                    </span>
                    <span className="font-bold text-[#FF6F00]">{t(text, 'k55', "61% Complete")}</span>
                  </div>
                </div>
                <button
                  className="w-full h-11 rounded-xl bg-[#FF6F00] hover:bg-[#e06200] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md sd-btn sd-btn--donate-now"
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
                    className="lucide lucide-heart h-4 w-4 fill-white/20"
                  >
                    <path
                      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    ></path>
                  </svg>
                  <span>{t(text, 'k56', "Donate To Campaign")}</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="sd-fc">
            <div className="sd-fc-head">
              <p className="sd-fc-eyebrow">{t(text, 'k57', "Where Your Support Goes")}</p>
              <h2 className="sd-fc-title">
                Campaign{' '}
                <span>{t(text, 'k58', "Categories")}</span>
              </h2>
              <p className="sd-fc-sub deva">
                {t(text, 'k59', "सेवा एवं सहायता, जनजागरण एवं मिशन, तथा भावी विकास — इन तीन दिशाओं में आपका सहयोग कार्य करता है।")}
              </p>
            </div>
            <div className="sd-fc-grid">
              <article className="sd-fc-card">
                <span className="sd-fc-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"></path>
                    <path
                      d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
                    ></path>
                    <path d="m2 15 6 6"></path>
                    <path
                      d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.7 2.7 0 0 0 16 4a2.7 2.7 0 0 0-5 1.8c0 1.2.8 2 1.5 2.7L16 12z"
                    ></path>
                  </svg>
                </span>
                <h3 className="sd-fc-name deva">सेवा एवं सहायता अभियान</h3>
                <p className="sd-fc-en">{t(text, 'k60', "Service &amp; Relief")}</p>
                <ul className="sd-fc-list deva">
                  <li>{t(text, 'k61', "अन्न सेवा एवं भोजन सहायता")}</li>
                  <li>{t(text, 'k62', "चिकित्सा एवं स्वास्थ्य सहायता")}</li>
                  <li>{t(text, 'k63', "शिक्षा, संस्कार एवं बाल विकास सहायता")}</li>
                  <li>{t(text, 'k64', "महिला सुरक्षा, सम्मान एवं सहायता अभियान")}</li>
                  <li>{t(text, 'k65', "गौ सेवा एवं संरक्षण अभियान")}</li>
                  <li>{t(text, 'k66', "आपदा राहत एवं मानव सहायता अभियान")}</li>
                </ul>
              </article>
              <article className="sd-fc-card">
                <span className="sd-fc-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m3 11 18-5v12L3 14v-3z"></path>
                    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
                  </svg>
                </span>
                <h3 className="sd-fc-name deva">जनजागरण एवं मिशन अभियान</h3>
                <p className="sd-fc-en">{t(text, 'k67', "Awareness &amp; Mission")}</p>
                <ul className="sd-fc-list deva">
                  <li>{t(text, 'k68', "राष्ट्रीय जागरण एवं सनातन चेतना अभियान")}</li>
                  <li>{t(text, 'k69', "सनातन संस्कृति संरक्षण एवं जनजागरण अभियान")}</li>
                  <li>{t(text, 'k70', "फिल्म, संगीत एवं सांस्कृतिक जनजागरण कार्यक्रम")}</li>
                </ul>
              </article>
              <article className="sd-fc-card sd-fc-card--future">
                <span className="sd-fc-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                    <path d="M10 6h4"></path>
                    <path d="M10 10h4"></path>
                    <path d="M10 14h4"></path>
                    <path d="M10 18h4"></path>
                  </svg>
                </span>
                <h3 className="sd-fc-name deva">भावी विकास परियोजनाएँ</h3>
                <p className="sd-fc-en">{t(text, 'k71', "Upcoming Projects")}</p>
                <ul className="sd-fc-list deva">
                  <li>{t(text, 'k72', "सनातनी सहायता केंद्र")}</li>
                  <li>{t(text, 'k73', "सनातनी भोजनालय")}</li>
                  <li>{t(text, 'k74', "सनातनी स्किल डेवलपमेंट सेंटर")}</li>
                  <li>{t(text, 'k75', "सनातनी आश्रय धाम")}</li>
                  <li>{t(text, 'k76', "सनातन गुरुकुल एवं संस्कार केंद्र")}</li>
                </ul>
                <p className="sd-fc-note deva">
                  ये परियोजनाएँ आपके सहयोग की प्रतीक्षा में हैं। विस्तार से जानने हेतु{' '}
                  <Link
                    href="/future-activities"
                    style={{ color: "#FF6F00", fontWeight: "700", textDecoration: "none" }}
                  >आगामी सेवा मिशन</Link>
                  {' '}देखें।
                </p>
              </article>
            </div>
          </div>
          <div
            className="mt-14 rounded-3xl bg-gradient-to-r from-[#0D1B2A] to-[#1E293B] text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6F00]">{t(text, 'k77', "Sanatan Community Welfare")}</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1">Have a Cause in Mind? Start a Fundraiser</h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                {t(text, 'k78', "यदि आप मंदिर जिर्णोद्धार, गौ सेवा या किसी सामाजिक कार्य हेतु धन जुटाना चाहते हैं, तो 0% प्लेटफॉर्म फीस के साथ अपना अभियान शुरू करें।")}
              </p>
            </div>
            <Link
              className="px-8 py-3.5 rounded-xl bg-[#FF6F00] hover:bg-[#e06200] text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-lg shadow-[#FF6F00]/30 transition-all shrink-0 sd-btn sd-btn--start-fundraising"
              href="/start-fundraiser"
            >Start Your Campaign Now</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
