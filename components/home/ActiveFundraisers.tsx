import Link from 'next/link'

export default function ActiveFundraisers() {
  return (
    <section id="active-fundraisers" className="max-w-7xl mx-auto px-4 py-12 relative font-sans sd-gap">
      
      <div className="sd-af-head">
        <div>
          <p className="sd-af-eyebrow">Ongoing Fundraising Campaigns</p>
          <h2 className="sd-af-title">
            Active{' '}
            <span>Fundraisers</span>
          </h2>
          <p className="sd-af-sub deva">सक्रिय निधि-संग्रह अभियान</p>
          <p className="sd-af-subnote deva">वर्तमान में संचालित फंडरेज़िंग अभियान</p>
        </div>
        <Link className="sd-af-viewall" href="/view-fundraisers">
          <span>View All Fundraisers</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>
      <div className="sd-af-intro">
        <p className="sd-af-lead deva">
          सेवा, सहायता, जनजागरण एवं जनकल्याण अभियानों के लिए आपका सहयोग सादर आमंत्रित है।
        </p>
        <p className="sd-af-desc deva">
          किसी अस्पताल के कक्ष में, किसी साधारण घर में, या खुले आसमान के नीचे जीवन से संघर्ष कर रहा कोई व्यक्ति आज भी सहायता की प्रतीक्षा कर रहा है। उसकी आँखों में यह विश्वास जीवित है कि समाज में ऐसे संवेदनशील लोग हैं जो पीड़ा को समझते हैं और सहायता के लिए आगे आते हैं। आपका छोटा सा सहयोग किसी के जीवन में आशा, सम्मान और नई शुरुआत का कारण बन सकता है। अनेक बार किसी जरूरतमंद के लिए समय पर मिली सहायता ईश्वर की कृपा के समान अनुभव होती है।
        </p>
      </div>
      <div className="relative px-4 sm:px-8">
        <button
          className="absolute -left-1 sm:-left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-orange-600 hover:text-white hover:border-orange-600 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <button
          className="absolute -right-1 sm:-right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white border border-gray-200 rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:bg-orange-600 hover:text-white hover:border-orange-600 active:scale-95 transition-all duration-200 cursor-pointer"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
        <div className="overflow-hidden rounded-2xl py-2">
          <div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: "translateX(calc(-6 * (33.3333% + 8px)))" }}
          >
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-food.jpg"
                  alt="Feed 10,000 families across Varanasi this month"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Urgent</span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Annadanam</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Feed 10,000 families across Varanasi this month</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹18,42,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">74%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "74%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹25,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}4,892 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-girl.jpg"
                  alt="Send 500 girls back to school in rural Bihar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Education</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Send 500 girls back to school in rural Bihar</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹9,62,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">64%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "64%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹15,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}2,310 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-medical.jpg"
                  alt="Free medical camps in 40 tribal villages of Odisha"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Healthcare</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Free medical camps in 40 tribal villages of Odisha</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹13,20,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">73%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "73%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹18,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}3,104 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-temple.jpg"
                  alt="Restoration of 800-year old Shri Hanuman Mandir, Rajasthan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Dharma Seva</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Restoration of 800-year old Shri Hanuman Mandir, Rajasthan</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹27,45,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">69%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "69%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹40,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}5,681 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-gaushala.jpg"
                  alt="Shelter & care for 1,200 rescued cows at Mathura Gaushala"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Urgent</span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Gaushala</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Shelter &amp; care for 1,200 rescued cows at Mathura Gaushala</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹7,86,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">66%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "66%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹12,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}1,893 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-gurukul.jpg"
                  alt="Sponsor 100 students at traditional Gurukul, Haridwar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Vedic Education</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Sponsor 100 students at traditional Gurukul, Haridwar</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹5,43,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹9,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}1,242 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-food.jpg"
                  alt="Feed 10,000 families across Varanasi this month"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Urgent</span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Annadanam</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Feed 10,000 families across Varanasi this month</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹18,42,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">74%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "74%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹25,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}4,892 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-girl.jpg"
                  alt="Send 500 girls back to school in rural Bihar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Education</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Send 500 girls back to school in rural Bihar</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹9,62,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">64%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "64%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹15,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}2,310 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-medical.jpg"
                  alt="Free medical camps in 40 tribal villages of Odisha"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Healthcare</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Free medical camps in 40 tribal villages of Odisha</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹13,20,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">73%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "73%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹18,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}3,104 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-temple.jpg"
                  alt="Restoration of 800-year old Shri Hanuman Mandir, Rajasthan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Dharma Seva</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Restoration of 800-year old Shri Hanuman Mandir, Rajasthan</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹27,45,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">69%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "69%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹40,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}5,681 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-gaushala.jpg"
                  alt="Shelter & care for 1,200 rescued cows at Mathura Gaushala"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Urgent</span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Gaushala</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Shelter &amp; care for 1,200 rescued cows at Mathura Gaushala</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹7,86,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">66%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "66%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹12,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}1,893 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-gurukul.jpg"
                  alt="Sponsor 100 students at traditional Gurukul, Haridwar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Vedic Education</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Sponsor 100 students at traditional Gurukul, Haridwar</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹5,43,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹9,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}1,242 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-food.jpg"
                  alt="Feed 10,000 families across Varanasi this month"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Urgent</span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Annadanam</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Feed 10,000 families across Varanasi this month</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹18,42,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">74%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "74%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹25,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}4,892 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-girl.jpg"
                  alt="Send 500 girls back to school in rural Bihar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Education</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Send 500 girls back to school in rural Bihar</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹9,62,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">64%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "64%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹15,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}2,310 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-medical.jpg"
                  alt="Free medical camps in 40 tribal villages of Odisha"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Healthcare</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Free medical camps in 40 tribal villages of Odisha</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹13,20,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">73%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "73%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹18,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}3,104 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-temple.jpg"
                  alt="Restoration of 800-year old Shri Hanuman Mandir, Rajasthan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Dharma Seva</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Restoration of 800-year old Shri Hanuman Mandir, Rajasthan</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹27,45,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">69%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "69%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹40,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}5,681 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-gaushala.jpg"
                  alt="Shelter & care for 1,200 rescued cows at Mathura Gaushala"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Urgent</span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Gaushala</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Shelter &amp; care for 1,200 rescued cows at Mathura Gaushala</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹7,86,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">66%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "66%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹12,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}1,893 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
            <div
              className="min-w-[100%] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <img
                  src="/img/campaign-gurukul.jpg"
                  alt="Sponsor 100 students at traditional Gurukul, Haridwar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span
                    className="flex items-center gap-1 bg-white/95 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-check text-emerald-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                    {' '}Verified
                  </span>
                </div>
                <span
                  className="absolute bottom-3.5 left-3.5 bg-orange-600 text-white text-[11px] font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase"
                >Vedic Education</span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-6 h-14">Sponsor 100 students at traditional Gurukul, Haridwar</h3>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-base font-bold text-gray-900">
                    ₹5,43,000{' '}
                    <span className="font-normal text-gray-500 text-sm">raised</span>
                  </span>
                  <span className="text-orange-600 font-bold text-sm">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    className="bg-orange-600 h-full rounded-full transition-all duration-300"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium mb-6">
                  <span>Goal ₹9,00,000</span>
                  <span className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
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
                    {' '}1,242 donors
                  </span>
                </div>
                <div className="mt-auto flex items-center gap-3">
                  <div
                    className="flex-1 bg-orange-50 text-orange-800 text-xs font-bold py-2.5 px-3 rounded-xl flex items-center gap-1.5 justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-tag text-orange-700"
                    >
                      <path
                        d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
                      ></path>
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </svg>
                    {' '}50% Tax Saved · 80G
                  </div>
                  <Link
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm px-6 py-2.5 rounded-full transition cursor-pointer text-center sd-btn sd-btn--donate-now"
                    href="/donate"
                  >Donate</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            aria-label="Go to slide 1"
            className="h-2 rounded-full transition-all duration-300 cursor-pointer w-6 bg-orange-600"
          ></button>
          <button
            aria-label="Go to slide 2"
            className="h-2 rounded-full transition-all duration-300 cursor-pointer w-2 bg-gray-300 hover:bg-gray-400"
          ></button>
          <button
            aria-label="Go to slide 3"
            className="h-2 rounded-full transition-all duration-300 cursor-pointer w-2 bg-gray-300 hover:bg-gray-400"
          ></button>
          <button
            aria-label="Go to slide 4"
            className="h-2 rounded-full transition-all duration-300 cursor-pointer w-2 bg-gray-300 hover:bg-gray-400"
          ></button>
          <button
            aria-label="Go to slide 5"
            className="h-2 rounded-full transition-all duration-300 cursor-pointer w-2 bg-gray-300 hover:bg-gray-400"
          ></button>
          <button
            aria-label="Go to slide 6"
            className="h-2 rounded-full transition-all duration-300 cursor-pointer w-2 bg-gray-300 hover:bg-gray-400"
          ></button>
        </div>
        <div className="sd-af-cta">
          <p className="sd-af-ctatext deva">
            जरा सोचिए, आपका सहयोग कितना महत्वपूर्ण हो सकता है। आपकी छोटी-सी मदद किसी के जीवन में आशा, उपचार, सुरक्षा और नई शुरुआत का कारण बन सकती है। आइए, सहायता करें और सदैव सहायता करने योग्य बने रहें।
          </p>
          <div className="sd-af-ctaactions">
            <Link className="sd-af-donate sd-btn sd-btn--donate-now" href="/donate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                ></path>
              </svg>
              <span>Donate Now</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
