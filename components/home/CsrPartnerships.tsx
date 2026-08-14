import { img, t, type ImageMap, type TextMap } from '@/lib/sanity/content'
import Link from 'next/link'

export default function CsrPartnerships({ text, images }: { text?: TextMap; images?: ImageMap }) {
  return (
    <section className="bg-white border-t border-saffron-100 py-8 sm:py-12 sd-gap">
      <div className="container-x">
        <div className="w-full max-w-[1050px] mx-auto py-4 font-sans">
          <header className="mb-6 text-left">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
              CSR &amp;{' '}
              <span className="block sm:inline text-[#e35300]">{t(text, 'csr-partnerships-k1', "Partnerships")}</span>
            </h2>
            <p className="deva text-slate-600 font-semibold text-[17px] sm:text-xl tracking-wide mb-4">{t(text, 'csr-partnerships-k2', "साझेदारी से सेवा, सहयोग से परिवर्तन।")}</p>
            <p className="deva text-[#615a53] text-sm sm:text-base leading-relaxed">
              {t(text, 'csr-partnerships-k3', "CSR, Sponsorship एवं Strategic Partnerships के माध्यम से समाज कल्याण एवं जनहित कार्यों में हमारे साथ जुड़ें।")}
            </p>
          </header>
          <div
            className="bg-gradient-to-r from-[#3d0c00] via-[#b83a00] to-[#d95300] rounded-2xl p-8 md:p-10 text-white shadow-md mb-10 text-left"
          >
            <svg
              className="w-8 h-8 mb-4 text-orange-200/90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M8 12c1-1.5 2-1.5 3 0s2 1.5 3 0 2-1.5 2-1.5"></path>
            </svg>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2.5">Become a CSR Partner</h2>
            <p className="text-orange-100 text-sm md:text-base max-w-3xl mb-6 leading-relaxed opacity-95">
              {t(text, 'csr-partnerships-k4', "From rural education to gaushala infrastructure — co-design and co-brand programs aligned to your CSR mandate.")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                className="bg-orange-600 hover:bg-orange-700 text-white text-xs md:text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 transition-colors whitespace-nowrap sd-btn sd-btn--csr-partnership"
                href="/csr-partner"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="5" width="14" height="14" rx="3"></rect>
                  <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor"></rect>
                </svg>
                {t(text, 'csr-partnerships-k5', "CSR Partnership")}
              </Link>
              <Link
                className="border border-white/40 hover:border-white hover:bg-white/10 text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full transition-all whitespace-nowrap sd-btn sd-btn--csr-partnership"
                href="/csr-partner"
              >Become a Partner</Link>
            </div>
          </div>
          <div
            className="text-center text-[0.72rem] font-bold text-[#d95300] uppercase tracking-[2px] mb-7"
          >OUR CSR OUTREACH PARTNERS</div>
          <div
            className="sd-partner-logos flex flex-col gap-6 overflow-hidden py-4 bg-white rounded-2xl border border-orange-100/60 p-4 sm:p-6 shadow-sm"
          >
            <div className="group relative flex overflow-hidden w-full">
              <div
                className="absolute left-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"
              ></div>
              <div
                className="absolute right-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"
              ></div>
              <div
                className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8 animate-marquee-left md:group-hover:[animation-play-state:paused]"
              >
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i6', "/img/tata.jpeg")}
                    alt="TATA"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i7', "/img/infosys.jpeg")}
                    alt="INFOSYS"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i8', "/img/wipro.jpeg")}
                    alt="WIPRO"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i9', "/img/reliance.jpeg")}
                    alt="RELIANCE"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i10', "/img/icici.jpeg")}
                    alt="ICICI BANK"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i11', "/img/indian.jpeg")}
                    alt="INDIAN OIL"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8 animate-marquee-left md:group-hover:[animation-play-state:paused]"
              >
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i12', "/img/tata.jpeg")}
                    alt="TATA"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i13', "/img/infosys.jpeg")}
                    alt="INFOSYS"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i14', "/img/wipro.jpeg")}
                    alt="WIPRO"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i15', "/img/reliance.jpeg")}
                    alt="RELIANCE"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i16', "/img/icici.jpeg")}
                    alt="ICICI BANK"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i17', "/img/indian.jpeg")}
                    alt="INDIAN OIL"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="group relative flex overflow-hidden w-full">
              <div
                className="absolute left-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"
              ></div>
              <div
                className="absolute right-0 top-0 z-10 h-full w-16 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"
              ></div>
              <div
                className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8 animate-marquee-right md:group-hover:[animation-play-state:paused]"
              >
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i18', "/img/hdfc.jpeg")}
                    alt="HDFC BANK"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i19', "/img/abg.jpeg")}
                    alt="ADITYA BIRLA GROUP"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i20', "/img/lnt.jpeg")}
                    alt="L&T"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i21', "/img/mahindra.jpeg")}
                    alt="MAHINDRA"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i22', "/img/ntpc.jpeg")}
                    alt="NTPC"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div
                aria-hidden="true"
                className="flex shrink-0 items-center gap-6 sm:gap-8 pr-6 sm:pr-8 animate-marquee-right md:group-hover:[animation-play-state:paused]"
              >
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i23', "/img/hdfc.jpeg")}
                    alt="HDFC BANK"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i24', "/img/abg.jpeg")}
                    alt="ADITYA BIRLA GROUP"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i25', "/img/lnt.jpeg")}
                    alt="L&T"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i26', "/img/mahindra.jpeg")}
                    alt="MAHINDRA"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div
                  className="flex h-16 sm:h-20 w-36 sm:w-44 shrink-0 items-center justify-center p-2 rounded-xl bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-sm hover:border-orange-200 transition-all duration-300"
                >
                  <img
                    src={img(images, 'csr-partnerships-i27', "/img/ntpc.jpeg")}
                    alt="NTPC"
                    loading="lazy"
                    className="max-h-12 sm:max-h-14 max-w-[85%] object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
