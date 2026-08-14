import { img, t, type ImageMap, type TextMap } from '@/lib/sanity/content'
export default function Faq({ text, images }: { text?: TextMap; images?: ImageMap }) {
  return (
    <div
      className="w-full bg-[#faf8f5] py-16 px-4 flex justify-center items-start border-t border-[#eae7e1]"
    >
      <div className="w-full max-w-[720px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
            Frequently Asked{' '}
            <span className="block sm:inline text-[#e35300]">{t(text, 'faq-k1', "Questions")}</span>
          </h2>
          <p className="deva text-slate-600 font-semibold text-[17px] sm:text-xl tracking-wide mb-4">{t(text, 'faq-k2', "सामान्यतः पूछे जाने वाले प्रश्न।")}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-[#eae7e1] overflow-hidden">
          <div className="transition-colors duration-200 border-b border-[#f0ede6]">
            <button
              className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
            >
              <span
                className="font-bold text-base md:text-[17px] leading-snug pr-4 transition-colors text-gray-900"
              >क्या यह NGO केवल सनातन समाज के लिए कार्य करता है?</span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div className="transition-colors duration-200 border-b border-[#f0ede6]">
            <button
              className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
            >
              <span
                className="font-bold text-base md:text-[17px] leading-snug pr-4 transition-colors text-gray-900"
              >क्या यह NGO Government Registered एवं Verified है?</span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div className="transition-colors duration-200 border-b border-[#f0ede6]">
            <button
              className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
            >
              <span
                className="font-bold text-base md:text-[17px] leading-snug pr-4 transition-colors text-gray-900"
              >NGO से जुड़ने के लिए कोई पात्रता (Eligibility) आवश्यक होती है?</span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div className="transition-colors duration-200 border-b border-[#f0ede6]">
            <button
              className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
            >
              <span
                className="font-bold text-base md:text-[17px] leading-snug pr-4 transition-colors text-gray-900"
              >NGO से जुड़ने के लिए कोई शुल्क भी देना पड़ता है?</span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div className="transition-colors duration-200 border-b border-[#f0ede6]">
            <button
              className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
            >
              <span
                className="font-bold text-base md:text-[17px] leading-snug pr-4 transition-colors text-gray-900"
              >क्या मैं गुप्त (Anonymous) सहयोग कर सकता हूँ?</span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div className="transition-colors duration-200 border-b border-[#f0ede6]">
            <button
              className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
            >
              <span
                className="font-bold text-base md:text-[17px] leading-snug pr-4 transition-colors text-gray-900"
              >NGO किन-किन प्रकार की सहायता एवं सेवाओं से जुड़ा है?</span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div className="transition-colors duration-200 border-b border-[#f0ede6]">
            <button
              className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
            >
              <span
                className="font-bold text-base md:text-[17px] leading-snug pr-4 transition-colors text-gray-900"
              >
                {t(text, 'faq-k3', "Sanatani Sena, Vigilance Department एवं Sanatan Seva Network क्या हैं?")}
              </span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div className="transition-colors duration-200 border-b border-[#f0ede6]">
            <button
              className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
            >
              <span
                className="font-bold text-base md:text-[17px] leading-snug pr-4 transition-colors text-gray-900"
              >
                {t(text, 'faq-k4', "क्या कॉर्पोरेट कंपनियाँ (CSR) भी संस्था के अभियानों में सहयोग कर सकती हैं?")}
              </span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div className="transition-colors duration-200 border-b border-[#f0ede6]">
            <button
              className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
            >
              <span
                className="font-bold text-base md:text-[17px] leading-snug pr-4 transition-colors text-gray-900"
              >
                {t(text, 'faq-k5', "क्या संस्था द्वारा उत्कृष्ट कार्य करने वाले सदस्यों को सम्मानित किया जाता है?")}
              </span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div className="transition-colors duration-200 border-b border-[#f0ede6]">
            <button
              className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
            >
              <span
                className="font-bold text-base md:text-[17px] leading-snug pr-4 transition-colors text-gray-900"
              >क्या संस्था में कोई पद या जिम्मेदारी प्राप्त की जा सकती है?</span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
          <div className="transition-colors duration-200 ">
            <button
              className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
            >
              <span
                className="font-bold text-base md:text-[17px] leading-snug pr-4 transition-colors text-gray-900"
              >
                {t(text, 'faq-k6', "क्या संस्था द्वारा Appointment Letter, Certificate या ID Card प्रदान किया जाता है?")}
              </span>
              <svg
                className="w-4 h-4 shrink-0 transition-transform duration-200 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
