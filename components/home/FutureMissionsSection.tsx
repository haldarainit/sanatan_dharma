import Link from 'next/link'
import FutureMissions from '@/components/FutureMissions'

export default function FutureMissionsSection() {
  return (
    <section className="bg-[#fdfbf7] py-12 px-4 sm:px-6 lg:px-8 font-sans sd-gap" id="future-missions">
      {/* Future Missions subtitle fixed */}
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 px-2">
          <p
            className="deva text-[#e35300] font-bold text-xs sm:text-sm tracking-widest uppercase mb-1.5"
          >आगामी सेवा मिशन</p>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-gray-900 mb-2"
          >
            Upcoming{' '}
            <span className="text-[#e35300]">Service Missions</span>
          </h2>
          <p className="deva text-slate-500 font-medium text-[13px] sm:text-base mb-1">आपके सहयोग, निधि एवं समर्थन की प्रतीक्षा में।</p>
          <p className="font-serif text-lg sm:text-xl lg:text-2xl font-semibold text-slate-700 mb-4">Awaiting Your Support &amp; Contribution</p>
          <p
            className="deva text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-3xl mx-auto text-justify"
          >
            शीघ्र प्रारंभ होने वाले सेवा अभियान, जिनमें आप सहभागी बन सकते हैं। आपका सहयोग इन्हें वास्तविकता में बदल सकता है।
          </p>
        </div>
        <FutureMissions />
        <div className="text-center mt-16 sm:mt-20">
          <Link
            href="/future-activities"
            className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-sm sm:text-base py-3 px-8 rounded-full shadow-md shadow-blue-600/20 transition-all sd-btn sd-btn--view-details"
          >
            <span>View All Missions</span>
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
          <p className="deva text-slate-500 text-xs sm:text-sm mt-3">सभी आगामी सेवा मिशन एक साथ देखें।</p>
        </div>
      </div>
      
    </section>
  )
}
