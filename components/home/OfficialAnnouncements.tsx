import Link from 'next/link'

export default function OfficialAnnouncements() {
  return (
    <section
      className="py-8 sm:py-12 bg-[#fcf8f5] flex items-center justify-center p-4 border-t border-[#FF6F00]/15 sd-gap"
    >
      <div
        className="max-w-5xl w-full bg-gradient-to-br from-[#182232] via-[#111822] to-[#1e1b18] rounded-2xl p-6 sm:p-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8 shadow-2xl overflow-hidden border border-slate-800"
      >
        <div className="flex-1 flex flex-col items-start text-left">
          <div
            className="flex items-center gap-2 text-yellow-500 text-xs font-bold tracking-widest uppercase mb-3"
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
              className="lucide lucide-megaphone w-4 h-4"
            >
              <path d="m3 11 18-5v12L3 14v-3z"></path>
              <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
            </svg>
            <span>REGISTERED MEMBERS ONLY</span>
          </div>
          <h2 className="deva text-2xl sm:text-3xl font-bold text-white mb-1 leading-tight">आधिकारिक सूचना</h2>
          <p className="text-slate-200 font-bold text-base sm:text-lg mb-1">Official Announcements</p>
          <p className="text-slate-400 text-xs sm:text-sm mb-4">(Only for Registered Members)</p>
          <p className="deva text-slate-300 text-sm leading-relaxed mb-3">
            संगठन की महत्वपूर्ण घोषणाएँ, अभियान निर्देश, बैठक सूचनाएँ, कार्यक्रम अपडेट एवं अन्य आवश्यक जानकारी केवल पंजीकृत सदस्यों के लिए उपलब्ध है।
          </p>
          <p className="deva text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
            यहाँ प्रकाशित सूचनाएँ संगठन की आधिकारिक जानकारी मानी जाएँगी। सभी सदस्यों से अनुरोध है कि समय-समय पर नवीनतम अपडेट एवं घोषणाएँ अवश्य देखें।
          </p>
          <Link
            href="/portal/announcements"
            className="inline-flex items-center gap-2 bg-gradient-to-b from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer sd-btn sd-btn--view-details"
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
              className="lucide lucide-lock w-4 h-4"
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>View Announcements</span>
          </Link>
        </div>
        <div
          className="w-full md:w-80 h-48 md:h-56 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 relative shadow-xl border border-slate-700/50 group bg-slate-900"
        >
          <img
            src="/img/members_only.jpeg"
            alt="Registered Members Only Notice"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  )
}
