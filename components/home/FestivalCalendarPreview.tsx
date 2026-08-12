export default function FestivalCalendarPreview() {
  return (
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
            <span className="block sm:inline text-[#e35300]">सनातन पंचांग</span>
          </h2>
          <p className="deva text-slate-600 font-semibold text-[17px] sm:text-xl tracking-wide mb-3">सनातन पर्व, उत्सव एवं सेवा पंचांग।</p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Click or hover on any auspicious festival to discover its spiritual significance, motivational quotes, and contribute to its dedicated Seva mission.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
            <button
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer bg-[#FF6F00] text-white border-[#FF6F00] shadow-sm ring-2 ring-[#FF6F00]/20 font-extrabold"
            >
              <span>All Events</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer bg-[#FFF0EB] border-[#E65100]/30 text-[#C62828] hover:bg-[#C62828]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#E65100] animate-pulse"></span>
              <span>महापर्व (Major) 🚩</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer bg-[#FFF8E1] border-[#FFB300]/40 text-[#7A3200] hover:bg-[#F57C00]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#F57C00]"></span>
              <span>पवित्र पर्व (Medium) 🪔</span>
            </button>
            <button
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer bg-[#E8F5E9] border-[#4CAF50]/40 text-[#1B5E20] hover:bg-[#2E7D32]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#2E7D32]"></span>
              <span>शुभ व्रत (Vrat &amp; Seva) 🌸</span>
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
                  <p className="deva text-[11px] font-semibold text-[#FF6F00] -mt-0.5">अगस्त 2026</p>
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
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">Sun</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">रवि</span>
              </div>
              <div className="py-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">Mon</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">सोम</span>
              </div>
              <div className="py-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">Tue</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">मंगल</span>
              </div>
              <div className="py-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">Wed</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">बुध</span>
              </div>
              <div className="py-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">Thu</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">गुरु</span>
              </div>
              <div className="py-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">Fri</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">शुक्र</span>
              </div>
              <div className="py-1">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#FF6F00]">Sat</span>
                <span className="deva block text-[9.5px] text-slate-400 font-semibold">शनि</span>
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
                  <span className="text-[10px] sm:text-xs leading-none drop-shadow-3xs">🪔</span>
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
                  <span className="text-[10px] sm:text-xs leading-none drop-shadow-3xs">🌸</span>
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
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">10</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">11</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">12</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">13</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">14</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">15</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">16</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">17</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">18</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">19</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">20</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">21</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">22</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">23</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">24</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">25</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">26</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">27</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-pointer hover:-translate-y-0.5 shadow-xs border-[#FFB74D] bg-gradient-to-b from-[#FFF5ED] to-[#FFE0B2] shadow-2xs hover:shadow-xs "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">28</span>
                  <span className="text-[10px] sm:text-xs leading-none drop-shadow-3xs">🚩</span>
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
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">29</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">30</span>
                </div>
                <div className="text-[8px] text-slate-300 font-medium text-right mt-auto"></div>
              </div>
              <div
                className="relative min-h-[46px] sm:min-h-[54px] rounded-xl border p-1 transition-all duration-200 flex flex-col justify-between select-none cursor-default border-slate-100 hover:border-[#FF6F00]/50 bg-white "
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-bold text-slate-800">31</span>
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
                  <strong>August 2026</strong>
                </span>
              </div>
              <div className="deva text-[#FF6F00] font-semibold text-[10.5px]">🚩 किसी भी पर्व पर क्लिक कर विशेष अन्नदान एवं सेवा संकल्प लें</div>
            </div>
          </div>
          <div
            className="lg:col-span-5 xl:col-span-5 bg-white rounded-3xl border border-[#FF6F00]/20 p-4 sm:p-5 shadow-md flex flex-col h-full"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#2D1B10] flex items-center gap-1.5">
                  <span>🚩 Auspicious Events</span>
                  <span
                    className="text-xs font-sans font-bold px-2 py-0.5 rounded-full bg-[#FFF4E6] text-[#FF6F00] border border-[#FF6F00]/30"
                  >3</span>
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">August 2026 · सनातन पावन तिथि एवं सेवा</p>
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
                <span>80G Exemption</span>
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
                      <span className="text-[10px] text-amber-900/80 font-semibold deva truncate">श्रावण शुक्ल पक्ष पंचमी</span>
                    </div>
                    <h4 className="deva font-serif font-extrabold text-sm text-[#3D2212] truncate">नाग पंचमी एवं जीव दया पर्व</h4>
                    <p className="text-[11px] text-slate-600 truncate mt-0.5">
                      <strong className="text-[#FF6F00]">सेवा संकल्प:</strong>
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
                    <span>Share</span>
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
                    <span>Donate</span>
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
                      <span className="text-[10px] text-amber-900/80 font-semibold deva truncate">श्रावण शुक्ल पक्ष एकादशी</span>
                    </div>
                    <h4 className="deva font-serif font-extrabold text-sm text-[#3D2212] truncate">श्रावण पुत्रदा एकादशी</h4>
                    <p className="text-[11px] text-slate-600 truncate mt-0.5">
                      <strong className="text-[#FF6F00]">सेवा संकल्प:</strong>
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
                    <span>Share</span>
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
                    <span>Donate</span>
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
                      <span className="text-[10px] text-amber-900/80 font-semibold deva truncate">श्रावण शुक्ल पक्ष पूर्णिमा</span>
                    </div>
                    <h4 className="deva font-serif font-extrabold text-sm text-[#3D2212] truncate">रक्षाबंधन एवं नारी सुरक्षा संकल्प पर्व</h4>
                    <p className="text-[11px] text-slate-600 truncate mt-0.5">
                      <strong className="text-[#FF6F00]">सेवा संकल्प:</strong>
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
                    <span>Share</span>
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
                    <span>Donate</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
