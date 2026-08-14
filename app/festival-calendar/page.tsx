import { getPageContent, img, t } from '@/lib/sanity/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default async function FestivalCalendarPage() {
  const { text, images } = await getPageContent("/festival-calendar")
  return (
    <>
    <section
      className="bg-[#FFFDF9] py-8 sm:py-12 border-t border-[#FF6F00]/20 font-sans relative overflow-hidden sd-gap"
    >
      <div
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF6F00]/5 rounded-full blur-3xl pointer-events-none"
      ></div>
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FF8F00]/5 rounded-full blur-3xl pointer-events-none"
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5"
          >
            Festival Calendar{' '}
            <span className="text-[#e35300]">{t(text, 'k1', "सनातन पंचांग")}</span>
          </h2>
          <p className="text-[#e35300] font-bold text-xs tracking-wider mb-3">{t(text, 'k2', "सनातन पर्व, उत्सव एवं सेवा पंचांग।")}</p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t(text, 'k3', "Click or hover on any auspicious festival to discover its spiritual significance, motivational quotes, and contribute to its dedicated Seva mission.")}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
            <button
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer bg-[#FF6F00] text-white border-[#FF6F00] shadow-sm ring-2 ring-[#FF6F00]/20 font-extrabold"
            >
              <span>{t(text, 'k4', "All Events")}</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer bg-[#FFF0EB] border-[#E65100]/30 text-[#C62828] hover:bg-[#C62828]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#E65100] animate-pulse"></span>
              <span>{t(text, 'k5', "महापर्व (Major) 🚩")}</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer bg-[#FFF8E1] border-[#FFB300]/40 text-[#7A3200] hover:bg-[#F57C00]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#F57C00]"></span>
              <span>{t(text, 'k6', "पवित्र पर्व (Medium) 🪔")}</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer bg-[#E8F5E9] border-[#4CAF50]/40 text-[#1B5E20] hover:bg-[#2E7D32]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#2E7D32]"></span>
              <span>{t(text, 'k7', "शुभ व्रत (Vrat & Seva) 🌸")}</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div
            className="lg:col-span-7 xl:col-span-7 bg-white rounded-3xl border border-[#FF6F00]/20 p-4 sm:p-5 shadow-md flex flex-col justify-between"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <button
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-[#FF6F00] hover:text-white hover:border-[#FF6F00] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                  aria-label="Previous Month"
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
                    className="lucide lucide-chevron-left w-4 h-4"
                  >
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                </button>
                <div className="text-left min-w-[140px]">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2D1B10]">August 2026</h3>
                  <p className="deva text-[11px] font-semibold text-[#FF6F00] -mt-0.5">{t(text, 'k8', "अगस्त 2026")}</p>
                </div>
                <button
                  className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 hover:bg-[#FF6F00] hover:text-white hover:border-[#FF6F00] transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                  aria-label="Next Month"
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
                    className="lucide lucide-chevron-right w-4 h-4"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </div>
              <button
                className="text-xs font-bold text-slate-500 hover:text-[#FF6F00] underline transition-colors cursor-pointer"
              >Reset</button>
            </div>
            <div className="grid grid-cols-7 gap-1 pt-3 text-center">
              <div className="py-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">{t(text, 'k9', "Sun")}</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">{t(text, 'k10', "रवि")}</span>
              </div>
              <div className="py-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">{t(text, 'k11', "Mon")}</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">{t(text, 'k12', "सोम")}</span>
              </div>
              <div className="py-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">{t(text, 'k13', "Tue")}</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">{t(text, 'k14', "मंगल")}</span>
              </div>
              <div className="py-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">{t(text, 'k15', "Wed")}</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">{t(text, 'k16', "बुध")}</span>
              </div>
              <div className="py-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">{t(text, 'k17', "Thu")}</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">{t(text, 'k18', "गुरु")}</span>
              </div>
              <div className="py-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">{t(text, 'k19', "Fri")}</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">{t(text, 'k20', "शुक्र")}</span>
              </div>
              <div className="py-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">{t(text, 'k21', "Sat")}</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">{t(text, 'k22', "शनि")}</span>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 sm:gap-1.5 mt-1">
              <div
                className="min-h-[46px] sm:min-h-[54px] rounded-xl bg-slate-50/40 border border-slate-100/50 opacity-30"
              ></div>
              <div
                className="min-h-[46px] sm:min-h-[54px] rounded-xl bg-slate-50/40 border border-slate-100/50 opacity-30"
              ></div>
              <div
                className="min-h-[46px] sm:min-h-[54px] rounded-xl bg-slate-50/40 border border-slate-100/50 opacity-30"
              ></div>
              <div
                className="min-h-[46px] sm:min-h-[54px] rounded-xl bg-slate-50/40 border border-slate-100/50 opacity-30"
              ></div>
              <div
                className="min-h-[46px] sm:min-h-[54px] rounded-xl bg-slate-50/40 border border-slate-100/50 opacity-30"
              ></div>
              <div
                className="min-h-[46px] sm:min-h-[54px] rounded-xl bg-slate-50/40 border border-slate-100/50 opacity-30"
              ></div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">1</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-pointer hover:-translate-y-0.5 shadow-xs border-[#FFE082] bg-gradient-to-b from-[#FFFDF0] to-[#FFF8E1] shadow-3xs "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">2</span>
                  <span className="text-[10px] sm:text-xs leading-none drop-shadow-3xs">{t(text, 'k23', "🪔")}</span>
                </div>
                <div className="mt-auto">
                  <div
                    className="truncate text-[8.5px] sm:text-[9.5px] font-bold px-1 py-0.2 rounded text-center leading-tight bg-[#F57C00] text-white"
                  >नाग</div>
                </div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">3</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">4</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">5</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">6</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-[#FF6F00] bg-gradient-to-b from-[#FFF4E6] to-[#FFE0B2]/30 shadow-xs ring-2 ring-[#FF6F00] ring-offset-1 z-10 shadow-md shadow-[#FF6F00]/20"
              >
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] sm:text-xs font-bold w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#FF6F00] text-white flex items-center justify-center font-extrabold shadow-sm text-[10px] sm:text-xs"
                  >7</span>
                  <span
                    className="text-[8px] font-extrabold text-[#FF6F00] uppercase tracking-tighter bg-white px-1 py-0.2 rounded border border-[#FF6F00]/30 shadow-3xs"
                  >Today</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-pointer hover:-translate-y-0.5 shadow-xs border-[#A5D6A7] bg-gradient-to-b from-[#F1F8E9] to-[#E8F5E9] shadow-3xs "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">8</span>
                  <span className="text-[10px] sm:text-xs leading-none drop-shadow-3xs">{t(text, 'k24', "🌸")}</span>
                </div>
                <div className="mt-auto">
                  <div
                    className="truncate text-[8.5px] sm:text-[9.5px] font-bold px-1 py-0.2 rounded text-center leading-tight bg-[#2E7D32] text-white"
                  >श्रावण</div>
                </div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">9</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k25', "10")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k26', "11")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k27', "12")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k28', "13")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k29', "14")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k30', "15")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k31', "16")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k32', "17")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k33', "18")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k34', "19")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k35', "20")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k36', "21")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k37', "22")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k38', "23")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k39', "24")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k40', "25")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k41', "26")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k42', "27")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-pointer hover:-translate-y-0.5 shadow-xs border-[#FFB74D] bg-gradient-to-b from-[#FFF5ED] to-[#FFE0B2] shadow-2xs hover:shadow-xs "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k43', "28")}</span>
                  <span className="text-[10px] sm:text-xs leading-none drop-shadow-3xs">{t(text, 'k44', "🚩")}</span>
                </div>
                <div className="mt-auto">
                  <div
                    className="truncate text-[8.5px] sm:text-[9.5px] font-bold px-1 py-0.2 rounded text-center leading-tight bg-gradient-to-r from-[#E65100] to-[#D84315] text-white"
                  >रक्षाबंधन</div>
                </div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k45', "29")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k46', "30")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">{t(text, 'k47', "31")}</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
            </div>
            <div
              className="mt-3 pt-2.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-[11px] text-slate-500"
            >
              <div className="flex items-center gap-1.5">
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
                  className="lucide lucide-calendar w-3.5 h-3.5 text-[#FF6F00]"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span>
                  Showing{' '}
                  <strong>{t(text, 'k48', "August 2026")}</strong>
                </span>
              </div>
              <div className="deva text-[#FF6F00] font-semibold text-[10.5px]">{t(text, 'k49', "🚩 किसी भी पर्व पर क्लिक कर विशेष अन्नदान एवं सेवा संकल्प लें")}</div>
            </div>
          </div>
          <div
            className="lg:col-span-5 xl:col-span-5 bg-white rounded-3xl border border-[#FF6F00]/20 p-4 sm:p-5 shadow-md flex flex-col h-full"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2D1B10] flex items-center gap-1.5">
                  <span>{t(text, 'k50', "🚩 Auspicious Events")}</span>
                  <span
                    className="text-xs font-sans font-bold px-2 py-0.5 rounded-full bg-[#FFF4E6] text-[#FF6F00] border border-[#FF6F00]/30"
                  >3</span>
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">{t(text, 'k51', "August 2026 · सनातन पावन तिथि एवं सेवा")}</p>
              </div>
              <div
                className="hidden sm:flex items-center gap-1 text-[10px] text-[#FF6F00] font-bold bg-[#FFF4E6] px-2.5 py-1 rounded-full"
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
                  className="lucide lucide-heart w-3 h-3 text-[#FF6F00]"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
                <span>{t(text, 'k52', "80G Exemption")}</span>
              </div>
            </div>
            <div
              className="max-h-[380px] lg:max-h-[415px] overflow-y-auto pr-1 space-y-2.5 [scrollbar-width:thin] [scrollbar-color:#FF6F00_#FFF4E6] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-[#FFF4E6] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#FF6F00]/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#FF6F00]"
            >
              <div
                className="rounded-2xl border p-3 transition-all duration-200 flex flex-col justify-between gap-2.5 cursor-pointer hover:shadow-sm bg-gradient-to-r from-[#FFFDF0] to-white border-[#FFE082]/70 hover:border-[#F57C00] border-l-4 border-l-[#F57C00]"
              >
                <div className="flex items-start gap-2.5 min-w-0">
                  <div
                    className="w-8 h-8 rounded-xl bg-white shadow-3xs border border-slate-100 flex items-center justify-center text-base shrink-0"
                  >🪔</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                      <span
                        className="text-[10px] font-bold text-slate-700 bg-white px-1.5 py-0.2 rounded border border-slate-200"
                      >📅 2 August</span>
                      <span
                        className="text-[9.5px] font-bold px-1.5 py-0.2 rounded border bg-[#FFF8E1] text-[#7A3200] border-[#FFE082]"
                      >विशेष पर्व 🪔</span>
                      <span className="text-[10px] text-amber-900/80 font-semibold deva truncate">{t(text, 'k53', "श्रावण शुक्ल पक्ष पंचमी")}</span>
                    </div>
                    <h4 className="deva font-serif font-extrabold text-sm text-[#3D2212] truncate">नाग पंचमी एवं जीव दया पर्व</h4>
                    <p className="text-[11px] text-slate-600 truncate mt-0.5">
                      <strong className="text-[#FF6F00]">{t(text, 'k54', "सेवा संकल्प:")}</strong>
                      {' '}Gaushala Green Fodder &amp; Cow Care
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 pt-1 border-t border-slate-100/70">
                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-xl text-xs font-bold text-[#FF6F00] bg-[#FFF4E6] hover:bg-[#FF6F00] hover:text-white border border-[#FF6F00]/30 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 whitespace-nowrap sd-btn sd-btn--share-it"
                    title="Share this festival"
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
                      className="lucide lucide-share2 w-3.5 h-3.5"
                    >
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                    <span>{t(text, 'k55', "Share")}</span>
                  </button>
                  <button
                    type="button"
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#FF6F00] to-[#E65100] hover:opacity-95 shadow-md shadow-[#FF6F00]/20 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 whitespace-nowrap sd-btn sd-btn--donate-now"
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
                      className="lucide lucide-heart w-3.5 h-3.5 fill-white"
                    >
                      <path
                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                      ></path>
                    </svg>
                    <span>{t(text, 'k56', "Donate")}</span>
                  </button>
                </div>
              </div>
              <div
                className="rounded-2xl border p-3 transition-all duration-200 flex flex-col justify-between gap-2.5 cursor-pointer hover:shadow-sm bg-gradient-to-r from-[#F1F8E9]/60 to-white border-[#A5D6A7]/70 hover:border-[#2E7D32] border-l-4 border-l-[#2E7D32]"
              >
                <div className="flex items-start gap-2.5 min-w-0">
                  <div
                    className="w-8 h-8 rounded-xl bg-white shadow-3xs border border-slate-100 flex items-center justify-center text-base shrink-0"
                  >🌸</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                      <span
                        className="text-[10px] font-bold text-slate-700 bg-white px-1.5 py-0.2 rounded border border-slate-200"
                      >📅 8 August</span>
                      <span
                        className="text-[9.5px] font-bold px-1.5 py-0.2 rounded border bg-[#E8F5E9] text-[#1B5E20] border-[#A5D6A7]"
                      >शुभ व्रत 🌸</span>
                      <span className="text-[10px] text-amber-900/80 font-semibold deva truncate">{t(text, 'k57', "श्रावण शुक्ल पक्ष एकादशी")}</span>
                    </div>
                    <h4 className="deva font-serif font-extrabold text-sm text-[#3D2212] truncate">श्रावण पुत्रदा एकादशी</h4>
                    <p className="text-[11px] text-slate-600 truncate mt-0.5">
                      <strong className="text-[#FF6F00]">{t(text, 'k58', "सेवा संकल्प:")}</strong>
                      {' '}Girl Education &amp; School Supplies
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 pt-1 border-t border-slate-100/70">
                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-xl text-xs font-bold text-[#FF6F00] bg-[#FFF4E6] hover:bg-[#FF6F00] hover:text-white border border-[#FF6F00]/30 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 whitespace-nowrap sd-btn sd-btn--share-it"
                    title="Share this festival"
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
                      className="lucide lucide-share2 w-3.5 h-3.5"
                    >
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                    <span>{t(text, 'k59', "Share")}</span>
                  </button>
                  <button
                    type="button"
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#FF6F00] to-[#E65100] hover:opacity-95 shadow-md shadow-[#FF6F00]/20 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 whitespace-nowrap sd-btn sd-btn--donate-now"
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
                      className="lucide lucide-heart w-3.5 h-3.5 fill-white"
                    >
                      <path
                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                      ></path>
                    </svg>
                    <span>{t(text, 'k60', "Donate")}</span>
                  </button>
                </div>
              </div>
              <div
                className="rounded-2xl border p-3 transition-all duration-200 flex flex-col justify-between gap-2.5 cursor-pointer hover:shadow-sm bg-gradient-to-r from-[#FFF5ED] to-white border-[#FFB74D]/70 hover:border-[#E65100] border-l-4 border-l-[#E65100]"
              >
                <div className="flex items-start gap-2.5 min-w-0">
                  <div
                    className="w-8 h-8 rounded-xl bg-white shadow-3xs border border-slate-100 flex items-center justify-center text-base shrink-0"
                  >🚩</div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                      <span
                        className="text-[10px] font-bold text-slate-700 bg-white px-1.5 py-0.2 rounded border border-slate-200"
                      >📅 28 August</span>
                      <span
                        className="text-[9.5px] font-bold px-1.5 py-0.2 rounded border bg-[#FFF0EB] text-[#C62828] border-[#FFB74D]"
                      >महापर्व 🚩</span>
                      <span className="text-[10px] text-amber-900/80 font-semibold deva truncate">{t(text, 'k61', "श्रावण शुक्ल पक्ष पूर्णिमा")}</span>
                    </div>
                    <h4 className="deva font-serif font-extrabold text-sm text-[#3D2212] truncate">रक्षाबंधन एवं नारी सुरक्षा संकल्प पर्व</h4>
                    <p className="text-[11px] text-slate-600 truncate mt-0.5">
                      <strong className="text-[#FF6F00]">{t(text, 'k62', "सेवा संकल्प:")}</strong>
                      {' '}Nari Suraksha &amp; Self-Defense Kits
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end gap-2 pt-1 border-t border-slate-100/70">
                  <button
                    type="button"
                    className="px-3 py-1.5 rounded-xl text-xs font-bold text-[#FF6F00] bg-[#FFF4E6] hover:bg-[#FF6F00] hover:text-white border border-[#FF6F00]/30 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 whitespace-nowrap sd-btn sd-btn--share-it"
                    title="Share this festival"
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
                      className="lucide lucide-share2 w-3.5 h-3.5"
                    >
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                    <span>{t(text, 'k63', "Share")}</span>
                  </button>
                  <button
                    type="button"
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#FF6F00] to-[#E65100] hover:opacity-95 shadow-md shadow-[#FF6F00]/20 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95 whitespace-nowrap sd-btn sd-btn--donate-now"
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
                      className="lucide lucide-heart w-3.5 h-3.5 fill-white"
                    >
                      <path
                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                      ></path>
                    </svg>
                    <span>{t(text, 'k64', "Donate")}</span>
                  </button>
                </div>
              </div>
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
          <span className="text-[#e35300]">{t(text, 'k65', "संकल्प")}</span>
        </h2>
        <p className="text-[#e35300] font-bold text-xs tracking-widest uppercase mb-8">{t(text, 'k66', "Long-Term Commitment")}</p>
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
            {t(text, 'k67', "\"सेवा, सहायता, संस्कार, सुरक्षा एवं आत्मनिर्भरता के माध्यम से एक सशक्त, जागरूक, संगठित एवं आत्मनिर्भर समाज का निर्माण करना हमारा लक्ष्य है।\"")}
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 text-left">
          <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
            <h4 className="deva font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
              <span className="text-red-600">{t(text, 'k68', "🚩")}</span>
              {' '}वर्तमान में
            </h4>
            <p className="deva text-sm text-slate-600 leading-relaxed">{t(text, 'k69', "सेवा, जनकल्याण, जागरूकता एवं सामाजिक सहयोग संबंधी गतिविधियाँ।")}</p>
          </div>
          <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
            <h4 className="deva font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
              <span className="text-red-600">{t(text, 'k70', "🚩")}</span>
              {' '}भविष्य में
            </h4>
            <p className="deva text-sm text-slate-600 leading-relaxed">
              {t(text, 'k71', "सनातन हेल्प सेंटर, सनातन भोजनालय, सनातन शेल्टर हाउस, रोटी • कपड़ा • मकान एवं कौशल विकास केंद्र तथा सनातन गुरुकुल एवं संस्कार केंद्र की स्थापना एवं विस्तार।")}
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
        <p className="deva eyebrow text-saffron-100">{t(text, 'k72', "आपका सहयोग किसी के जीवन में नई उम्मीद ला सकता है")}</p>
        <h2 className="deva mt-3 font-display text-3xl font-bold sm:text-4xl">सेवा, सहयोग एवं सहभागिता के माध्यम से जुड़ें</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90">
          {t(text, 'k73', "Be part of positive change. Your contribution brings hope, support and dignity to lives across India.")}
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
            {t(text, 'k74', "Donate Now")}
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
            {t(text, 'k75', "Join the Mission")}
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
              {t(text, 'k76', "सनातन पर्व, सेवा अभियान, विशेष कार्यक्रमों एवं महत्वपूर्ण अपडेट्स की जानकारी प्राप्त करने के लिए Subscribe करें।")}
            </p>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <form className="space-y-4">
              <div>
                <label className="field-label">{t(text, 'k77', "Email Address")}</label>
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
                {t(text, 'k78', "Subscribe Now")}
              </button>
              <p className="text-center text-xs text-ink/50">{t(text, 'k79', "We respect your privacy. Unsubscribe anytime.")}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
