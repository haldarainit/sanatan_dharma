import Link from 'next/link'

export default function DonationHub() {
  return (
    <section className="bg-[#FFFDF9] py-14 border-t border-[#FF6F00]/15 relative sd-gap">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
            Donation{' '}
            <span className="text-[#e35300]">Hub</span>
          </h2>
          <p className="font-serif text-lg sm:text-xl font-bold text-gray-900 mb-1.5">Online &amp; Offline</p>
          <p className="deva text-slate-600 font-semibold text-[17px] sm:text-xl tracking-wide mb-4">ऑनलाइन एवं प्रत्यक्ष सहयोग माध्यम।</p>
        </div>
        <div
          className="mt-8 mx-auto max-w-4xl rounded-3xl bg-white border border-[#0D1B2A]/10 p-6 shadow-[0_10px_30px_-15px_rgba(13,27,42,0.15)]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#0D1B2A]">Choose Contribution Amount:</div>
            <div className="text-xs text-[#FF6F00] font-bold">Selected: ₹501</div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            <button
              type="button"
              className="relative rounded-xl border px-2 py-2.5 text-center transition-all bg-white border-[#0D1B2A]/10 text-[#0D1B2A] hover:border-[#FF6F00]/40"
            >
              <div className="font-bold text-xs sm:text-sm">₹51</div>
              <div className="text-[10px] text-[#0D1B2A]/60">शुभ</div>
            </button>
            <button
              type="button"
              className="relative rounded-xl border px-2 py-2.5 text-center transition-all bg-white border-[#0D1B2A]/10 text-[#0D1B2A] hover:border-[#FF6F00]/40"
            >
              <div className="font-bold text-xs sm:text-sm">₹101</div>
              <div className="text-[10px] text-[#0D1B2A]/60">मंगल</div>
            </button>
            <button
              type="button"
              className="relative rounded-xl border px-2 py-2.5 text-center transition-all bg-white border-[#0D1B2A]/10 text-[#0D1B2A] hover:border-[#FF6F00]/40"
            >
              <div className="font-bold text-xs sm:text-sm">₹301</div>
              <div className="text-[10px] text-[#0D1B2A]/60">शुभारंभ</div>
            </button>
            <button
              type="button"
              className="relative rounded-xl border px-2 py-2.5 text-center transition-all bg-[#FF6F00] border-[#FF6F00] text-white shadow-md"
            >
              <span
                className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#0D1B2A] text-white border shadow-sm"
              >Most Chosen</span>
              <div className="font-bold text-xs sm:text-sm">₹501</div>
              <div className="text-[10px] text-white/90">एक परिवार का सहारा</div>
            </button>
            <button
              type="button"
              className="relative rounded-xl border px-2 py-2.5 text-center transition-all bg-white border-[#0D1B2A]/10 text-[#0D1B2A] hover:border-[#FF6F00]/40"
            >
              <div className="font-bold text-xs sm:text-sm">₹1,001</div>
              <div className="text-[10px] text-[#0D1B2A]/60">शिक्षा सहयोग</div>
            </button>
            <button
              type="button"
              className="relative rounded-xl border px-2 py-2.5 text-center transition-all bg-white border-[#0D1B2A]/10 text-[#0D1B2A] hover:border-[#FF6F00]/40"
            >
              <div className="font-bold text-xs sm:text-sm">₹5,001</div>
              <div className="text-[10px] text-[#0D1B2A]/60">विशेष सहायता</div>
            </button>
            <button
              type="button"
              className="relative rounded-xl border px-2 py-2.5 text-center transition-all bg-white border-[#0D1B2A]/10 text-[#0D1B2A] hover:border-[#FF6F00]/40"
            >
              <div className="font-bold text-xs sm:text-sm">₹11,000</div>
              <div className="text-[10px] text-[#0D1B2A]/60">बड़ी मदद</div>
            </button>
            <button
              type="button"
              className="relative rounded-xl border px-2 py-2.5 text-center transition-all bg-white border-[#0D1B2A]/10 text-[#0D1B2A] hover:border-[#FF6F00]/40"
            >
              <div className="font-bold text-xs sm:text-sm">₹21,000</div>
              <div className="text-[10px] text-[#0D1B2A]/60">महत्वपूर्ण योगदान</div>
            </button>
            <button
              type="button"
              className="relative rounded-xl border px-2 py-2.5 text-center transition-all bg-white border-[#0D1B2A]/10 text-[#0D1B2A] hover:border-[#FF6F00]/40"
            >
              <span
                className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#0D1B2A] text-white border shadow-sm"
              >VIP Supporter</span>
              <div className="font-bold text-xs sm:text-sm">₹51,000</div>
              <div className="text-[10px] text-[#0D1B2A]/60">सम्मानित सहयोगी</div>
            </button>
            <button
              type="button"
              className="relative rounded-xl border px-2 py-2.5 text-center transition-all bg-white border-[#0D1B2A]/10 text-[#0D1B2A] hover:border-[#FF6F00]/40"
            >
              <span
                className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#0D1B2A] text-white border shadow-sm"
              >VVIP Contributor</span>
              <div className="font-bold text-xs sm:text-sm">₹1,00,001</div>
              <div className="text-[10px] text-[#0D1B2A]/60">गर्व का योगदान</div>
            </button>
            <button
              type="button"
              className="col-span-2 sm:col-span-3 lg:col-span-5 rounded-xl border px-3 py-2 text-xs font-bold transition-all bg-white border-dashed border-[#0D1B2A]/20 text-[#0D1B2A]"
            >Custom Amount</button>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          <button
            className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all bg-[#FF6F00] text-white shadow-md"
          >UPI / QR Code</button>
          <button
            className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all bg-white text-[#0D1B2A]/80 border border-[#FF6F00]/30 hover:bg-[#FFF4E6]"
          >Bank Transfer Details</button>
          <button
            className="rounded-full px-5 py-2.5 text-xs sm:text-sm font-bold transition-all bg-white text-[#0D1B2A]/80 border border-[#FF6F00]/30 hover:bg-[#FFF4E6]"
          >Other Ways to Support</button>
        </div>
        <div
          className="mx-auto mt-8 max-w-2xl rounded-3xl border border-[#FF6F00]/20 bg-white p-6 sm:p-8 shadow-sm"
        >
          <div>
            <div className="grid grid-cols-2 rounded-xl bg-[#FFF4E6] p-1 mb-5">
              <button
                type="button"
                className="py-2 rounded-lg text-xs font-bold transition-all bg-white text-[#FF6F00] shadow-sm"
              >Google Pay Card</button>
              <button
                type="button"
                className="py-2 rounded-lg text-xs font-bold transition-all text-[#0D1B2A]/60"
              >Indian Bank Card</button>
            </div>
            <div
              className="mx-auto w-full max-w-[320px] rounded-[28px] bg-[#DCE4EC] p-3.5 shadow-md border border-[#CBD5E1]"
            >
              <div
                className="rounded-[22px] bg-white overflow-hidden shadow-sm border border-gray-100 flex flex-col items-center p-4"
              >
                <div className="w-[calc(100%+2rem)] -mt-4 h-1.5 flex mb-3.5">
                  <div className="w-1/4 bg-[#4285F4]"></div>
                  <div className="w-1/4 bg-[#34A853]"></div>
                  <div className="w-1/4 bg-[#FBBC05]"></div>
                  <div className="w-1/4 bg-[#EA4335]"></div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <svg className="h-6 w-6 shrink-0" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M43.61 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.39-3.917z"
                      fill="#FFC107"
                    ></path>
                    <path
                      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                      fill="#FF3D00"
                    ></path>
                    <path
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                      fill="#4CAF50"
                    ></path>
                    <path
                      d="M43.61 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l6.19 5.238C41.05 35.617 44 30.3 44 24c0-1.341-.138-2.65-.39-3.917z"
                      fill="#1976D2"
                    ></path>
                  </svg>
                  <span className="font-sans font-bold text-xl tracking-tight text-gray-800">Google Pay</span>
                </div>
                <h3
                  className="font-sans font-semibold text-[13px] text-center text-gray-800 leading-snug px-1 mt-0.5"
                >Sanathan Dharm Manav Kalyan Foundation</h3>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5">+91 97680 00666</div>
                <div
                  className="mt-2.5 mb-1 px-3 py-1 rounded-full bg-[#FFF4E6] border border-[#FF6F00]/30 flex items-center gap-1.5 text-[11.5px]"
                >
                  <span className="text-gray-600 font-medium">Scan &amp; pay:</span>
                  <span className="font-extrabold text-[#FF6F00]">₹501</span>
                </div>
                <div className="relative my-2 p-2 bg-white border border-gray-200 rounded-xl shadow-inner">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=upi%3A%2F%2Fpay%3Fpa%3D9768000666-4%40okbizaxis%26pn%3DSanathan%2520Dharm%2520Manav%2520Kalyan%2520Foundation%26am%3D501%26cu%3DINR"
                    alt="Google Pay QR Code for ₹501"
                    className="w-[175px] h-[175px] object-contain rounded-md"
                  />
                </div>
                <div className="mt-1 flex items-center justify-center gap-1.5">
                  <span className="text-[10.5px] font-semibold text-gray-500 uppercase">UPI ID:</span>
                  <code className="text-[11.5px] font-bold font-mono text-gray-800">9768000666-4@okbizaxis</code>
                  <button
                    type="button"
                    className="text-[#FF6F00] hover:text-[#e06200] p-1 rounded transition-colors"
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
                      className="lucide lucide-copy h-3.5 w-3.5"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                    </svg>
                  </button>
                </div>
                <div className="w-full mt-3 pt-2.5 border-t border-gray-100 flex flex-col items-center gap-1.5">
                  <div
                    className="flex items-center justify-center gap-2 text-[9.5px] font-extrabold text-gray-700"
                  >
                    <span className="px-2 py-0.5 rounded bg-gray-100 border border-gray-200">BHIM</span>
                    <span className="px-2 py-0.5 rounded bg-[#0A2540] text-white font-mono">UPI</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-1.5 text-[9px] font-bold">
                    <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-100">G Pay</span>
                    <span className="px-1.5 py-0.5 rounded bg-sky-50 text-sky-600 border border-sky-100">Paytm</span>
                    <span className="px-1.5 py-0.5 rounded bg-purple-50 text-purple-600 border border-purple-100">PhonePe</span>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="upi://pay?pa=9768000666-4@okbizaxis&pn=Sanathan%20Dharm%20Manav%20Kalyan%20Foundation&am=501&cu=INR"
              className="mt-5 w-full py-3 px-4 rounded-xl bg-[#FF6F00] hover:bg-[#e06200] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md text-center sd-btn sd-btn--pay-now"
            >
              <span>Open GPay / UPI App (₹501)</span>
            </a>
            <div className="mt-4 text-center">
              <Link
                className="inline-flex items-center gap-1 text-xs font-bold text-[#FF6F00] hover:underline"
                href="/donate"
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
                  className="lucide lucide-heart h-3.5 w-3.5"
                >
                  <path
                    d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                  ></path>
                </svg>
                {' '}Go to Full Donation Page &amp; 80G Claim Form →
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 max-w-4xl mx-auto">
          <div
            className="w-full max-w-5xl mx-auto bg-[#152232] rounded-2xl p-8 sm:p-11 text-white shadow-xl font-sans text-left"
          >
            <h3
              className="text-[#d89b33] text-xs sm:text-sm font-extrabold tracking-[0.2em] uppercase mb-3"
            >DONOR PROMISE</h3>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white mb-7 leading-snug">पारदर्शिता, जवाबदेही और विश्वास हमारी प्राथमिकता है।</h2>
            <ul className="space-y-3.5">
              <li className="flex items-center gap-3.5 text-sm sm:text-base text-slate-100 font-medium">
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
                  className="lucide lucide-check w-5 h-5 text-[#8b5cf6] stroke-[3] flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>Donation Receipt ईमेल एवं WhatsApp पर उपलब्ध कराई जाती है।</span>
              </li>
              <li className="flex items-center gap-3.5 text-sm sm:text-base text-slate-100 font-medium">
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
                  className="lucide lucide-check w-5 h-5 text-[#8b5cf6] stroke-[3] flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>80G Tax Benefit (लागू नियमों के अनुसार)।</span>
              </li>
              <li className="flex items-center gap-3.5 text-sm sm:text-base text-slate-100 font-medium">
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
                  className="lucide lucide-check w-5 h-5 text-[#8b5cf6] stroke-[3] flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>
                  प्रमुख सेवा कार्यों एवं अभियानों की जानकारी समय-समय पर साझा की जाती है।
                </span>
              </li>
              <li className="flex items-center gap-3.5 text-sm sm:text-base text-slate-100 font-medium">
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
                  className="lucide lucide-check w-5 h-5 text-[#8b5cf6] stroke-[3] flex-shrink-0"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span>महत्वपूर्ण रिपोर्ट एवं दस्तावेज उपलब्ध कराए जाते हैं।</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
