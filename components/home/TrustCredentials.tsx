import Link from 'next/link'

export default function TrustCredentials() {
  return (
    <section
      className="bg-[#fdfbf7] py-8 md:py-12 px-4 sm:px-6 text-center font-sans overflow-hidden sd-gap"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-gray-900 mb-1.5"
        >
          Government Registered &amp;{' '}
          <span className="whitespace-nowrap">
            Certified{' '}
            <span className="text-[#e35300]">NGO</span>
          </span>
        </h2>
        <p
          className="deva text-slate-600 font-semibold text-[17px] sm:text-xl tracking-wide mb-8 md:mb-10"
        >🚩 सरकार द्वारा पंजीकृत एवं प्रमाणित संस्था</p>
        <div className="hidden md:flex flex-wrap justify-center gap-4 lg:gap-5 mb-12">
          <div
            className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card flex flex-col items-center justify-center cursor-pointer shadow-xs hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 select-none"
          >
            <div
              className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
            >
              <img
                src="/img/Screenshot 2026-07-30 122551.png"
                alt="Section 8"
                className="object-contain sd-cert-img"
              />
            </div>
            <h3 className="font-serif font-bold text-base text-gray-900 mb-1 leading-tight">Section 8</h3>
            <p className="text-xs text-slate-500 font-normal leading-tight text-center">Company Registered</p>
          </div>
          <div
            className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card flex flex-col items-center justify-center cursor-pointer shadow-xs hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 select-none"
          >
            <div
              className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
            >
              <img
                src="/img/Screenshot 2026-07-30 122605.png"
                alt="12A"
                className="object-contain sd-cert-img"
              />
            </div>
            <h3 className="font-serif font-bold text-base text-gray-900 mb-1 leading-tight">12A</h3>
            <p className="text-xs text-slate-500 font-normal leading-tight text-center">Income Tax Exempt</p>
          </div>
          <div
            className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card flex flex-col items-center justify-center cursor-pointer shadow-xs hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 select-none"
          >
            <div
              className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
            >
              <img
                src="/img/Screenshot 2026-07-30 122618.png"
                alt="80G"
                className="object-contain sd-cert-img"
              />
            </div>
            <h3 className="font-serif font-bold text-base text-gray-900 mb-1 leading-tight">80G</h3>
            <p className="text-xs text-slate-500 font-normal leading-tight text-center">50% Tax Deduction</p>
          </div>
          <div
            className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card flex flex-col items-center justify-center cursor-pointer shadow-xs hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 select-none"
          >
            <div
              className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
            >
              <img
                src="/img/Screenshot 2026-07-30 122631.png"
                alt="CSR-1"
                className="object-contain sd-cert-img"
              />
            </div>
            <h3 className="font-serif font-bold text-base text-gray-900 mb-1 leading-tight">CSR-1</h3>
            <p className="text-xs text-slate-500 font-normal leading-tight text-center">MCA Certified</p>
          </div>
          <div
            className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card flex flex-col items-center justify-center cursor-pointer shadow-xs hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 select-none"
          >
            <div
              className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
            >
              <img
                src="/img/Screenshot 2026-07-30 122642.png"
                alt="NGO Darpan"
                className="object-contain sd-cert-img"
              />
            </div>
            <h3 className="font-serif font-bold text-base text-gray-900 mb-1 leading-tight">NGO Darpan</h3>
            <p className="text-xs text-slate-500 font-normal leading-tight text-center">Niti Aayog Listed</p>
          </div>
          <div
            className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card flex flex-col items-center justify-center cursor-pointer shadow-xs hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-300 select-none"
          >
            <div
              className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
            >
              <img
                src="/img/Screenshot 2026-07-30 122655.png"
                alt="ISO 9001:2015"
                className="object-contain sd-cert-img"
              />
            </div>
            <h3 className="font-serif font-bold text-base text-gray-900 mb-1 leading-tight">ISO 9001:2015</h3>
            <p className="text-xs text-slate-500 font-normal leading-tight text-center">Certified Operations</p>
          </div>
        </div>
        <div className="block md:hidden overflow-hidden w-full mb-10 relative group py-2">
          <div
            className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#fdfbf7] to-transparent z-10 pointer-events-none"
          ></div>
          <div
            className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#fdfbf7] to-transparent z-10 pointer-events-none"
          ></div>
          <div
            className="flex gap-4 w-max animate-marquee-right-half md:group-hover:[animation-play-state:paused]"
          >
            <div
              className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card shrink-0 flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-transform duration-150 select-none"
            >
              <div
                className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
              >
                <img
                  src="/img/Screenshot 2026-07-30 122551.png"
                  alt="Section 8"
                  className="object-contain sd-cert-img"
                />
              </div>
              <h3 className="font-serif font-bold text-sm text-gray-900 mb-1 leading-tight text-center">Section 8</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-tight text-center">Company Registered</p>
            </div>
            <div
              className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card shrink-0 flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-transform duration-150 select-none"
            >
              <div
                className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
              >
                <img
                  src="/img/Screenshot 2026-07-30 122605.png"
                  alt="12A"
                  className="object-contain sd-cert-img"
                />
              </div>
              <h3 className="font-serif font-bold text-sm text-gray-900 mb-1 leading-tight text-center">12A</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-tight text-center">Income Tax Exempt</p>
            </div>
            <div
              className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card shrink-0 flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-transform duration-150 select-none"
            >
              <div
                className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
              >
                <img
                  src="/img/Screenshot 2026-07-30 122618.png"
                  alt="80G"
                  className="object-contain sd-cert-img"
                />
              </div>
              <h3 className="font-serif font-bold text-sm text-gray-900 mb-1 leading-tight text-center">80G</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-tight text-center">50% Tax Deduction</p>
            </div>
            <div
              className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card shrink-0 flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-transform duration-150 select-none"
            >
              <div
                className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
              >
                <img
                  src="/img/Screenshot 2026-07-30 122631.png"
                  alt="CSR-1"
                  className="object-contain sd-cert-img"
                />
              </div>
              <h3 className="font-serif font-bold text-sm text-gray-900 mb-1 leading-tight text-center">CSR-1</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-tight text-center">MCA Certified</p>
            </div>
            <div
              className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card shrink-0 flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-transform duration-150 select-none"
            >
              <div
                className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
              >
                <img
                  src="/img/Screenshot 2026-07-30 122642.png"
                  alt="NGO Darpan"
                  className="object-contain sd-cert-img"
                />
              </div>
              <h3 className="font-serif font-bold text-sm text-gray-900 mb-1 leading-tight text-center">NGO Darpan</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-tight text-center">Niti Aayog Listed</p>
            </div>
            <div
              className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card shrink-0 flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-transform duration-150 select-none"
            >
              <div
                className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
              >
                <img
                  src="/img/Screenshot 2026-07-30 122655.png"
                  alt="ISO 9001:2015"
                  className="object-contain sd-cert-img"
                />
              </div>
              <h3 className="font-serif font-bold text-sm text-gray-900 mb-1 leading-tight text-center">ISO 9001:2015</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-tight text-center">Certified Operations</p>
            </div>
            <div
              className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card shrink-0 flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-transform duration-150 select-none"
            >
              <div
                className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
              >
                <img
                  src="/img/Screenshot 2026-07-30 122551.png"
                  alt="Section 8"
                  className="object-contain sd-cert-img"
                />
              </div>
              <h3 className="font-serif font-bold text-sm text-gray-900 mb-1 leading-tight text-center">Section 8</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-tight text-center">Company Registered</p>
            </div>
            <div
              className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card shrink-0 flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-transform duration-150 select-none"
            >
              <div
                className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
              >
                <img
                  src="/img/Screenshot 2026-07-30 122605.png"
                  alt="12A"
                  className="object-contain sd-cert-img"
                />
              </div>
              <h3 className="font-serif font-bold text-sm text-gray-900 mb-1 leading-tight text-center">12A</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-tight text-center">Income Tax Exempt</p>
            </div>
            <div
              className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card shrink-0 flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-transform duration-150 select-none"
            >
              <div
                className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
              >
                <img
                  src="/img/Screenshot 2026-07-30 122618.png"
                  alt="80G"
                  className="object-contain sd-cert-img"
                />
              </div>
              <h3 className="font-serif font-bold text-sm text-gray-900 mb-1 leading-tight text-center">80G</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-tight text-center">50% Tax Deduction</p>
            </div>
            <div
              className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card shrink-0 flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-transform duration-150 select-none"
            >
              <div
                className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
              >
                <img
                  src="/img/Screenshot 2026-07-30 122631.png"
                  alt="CSR-1"
                  className="object-contain sd-cert-img"
                />
              </div>
              <h3 className="font-serif font-bold text-sm text-gray-900 mb-1 leading-tight text-center">CSR-1</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-tight text-center">MCA Certified</p>
            </div>
            <div
              className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card shrink-0 flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-transform duration-150 select-none"
            >
              <div
                className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
              >
                <img
                  src="/img/Screenshot 2026-07-30 122642.png"
                  alt="NGO Darpan"
                  className="object-contain sd-cert-img"
                />
              </div>
              <h3 className="font-serif font-bold text-sm text-gray-900 mb-1 leading-tight text-center">NGO Darpan</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-tight text-center">Niti Aayog Listed</p>
            </div>
            <div
              className="bg-white border border-slate-200/90 rounded-2xl sd-cert-card shrink-0 flex flex-col items-center justify-center cursor-pointer shadow-xs active:scale-95 transition-transform duration-150 select-none"
            >
              <div
                className="bg-white border border-slate-100 flex items-center justify-center shadow-2xs sd-cert-icon"
              >
                <img
                  src="/img/Screenshot 2026-07-30 122655.png"
                  alt="ISO 9001:2015"
                  className="object-contain sd-cert-img"
                />
              </div>
              <h3 className="font-serif font-bold text-sm text-gray-900 mb-1 leading-tight text-center">ISO 9001:2015</h3>
              <p className="text-[11px] text-slate-500 font-normal leading-tight text-center">Certified Operations</p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-3.5 sm:gap-5 max-w-sm md:max-w-none mx-auto"
        >
          <Link
            className="w-full md:w-60 bg-[#1976D2] hover:bg-[#1565C0] text-white font-bold text-base py-3.5 px-4 rounded-full shadow-md shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-200 text-center inline-block sd-btn sd-btn--login-register"
            href="/membership"
          >Login / Register</Link>
          <Link
            className="w-full md:w-60 bg-[#00897B] hover:bg-[#00796B] text-white font-bold text-base py-3.5 px-4 rounded-full shadow-md shadow-teal-500/20 hover:-translate-y-0.5 transition-all duration-200 text-center inline-block sd-btn sd-btn--start-fundraising"
            href="/donate"
          >Start Fundraiser</Link>
          <Link
            className="w-full md:w-60 bg-[#C62828] hover:bg-[#B71C1C] text-white font-bold text-base py-3.5 px-4 rounded-full shadow-md shadow-red-500/20 hover:-translate-y-0.5 transition-all duration-200 text-center inline-block sd-btn sd-btn--need-help"
            href="/need-help"
          >Need Help</Link>
        </div>
      </div>
    </section>
  )
}
