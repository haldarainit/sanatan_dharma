import Link from 'next/link'
import DonationFlow from '@/components/DonationFlow'
import { getDonationTiers } from '@/lib/sanity/data'
import PayTabs from '@/components/donate/PayTabs'
import PaymentConfirmForm from '@/components/donate/PaymentConfirmForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default async function DonatePage() {
  const tiers = await getDonationTiers()

  return (
    <>
    <div className="min-h-screen flex flex-col bg-[#FFFDF9]">
      <div
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none"
      ></div>
      <main className="flex-1 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
              Donation{' '}
              <span className="text-[#e35300]">Hub</span>
            </h1>
            <p className="deva text-[15px] sm:text-lg font-bold text-[#0D1B2A] mb-1">दान केंद्र</p>
            <p className="deva text-[#e35300] font-bold text-[13px] sm:text-sm tracking-wide mb-4">सनातन सेवा में आपका स्वागत है</p>
            <p
              className="mt-4 max-w-3xl mx-auto text-[14.5px] leading-relaxed text-[#0D1B2A]/80 bg-white/60 border border-[#FF6F00]/15 rounded-2xl px-5 py-4"
            >
              आपका प्रत्येक सहयोग सनातन धर्म मानव कल्याण फाउंडेशन के सेवा कार्यों को आगे बढ़ाने में महत्वपूर्ण योगदान देता है। इस Donation Hub के माध्यम से आप सुरक्षित, पारदर्शी एवं सुविधाजनक तरीके से दान कर सकते हैं।
              <br />
              <span className="font-bold text-[#FF6F00]">
                दान करने हेतु अनेक माध्यम उपलब्ध हैं। कृपया अपनी सुविधा अनुसार किसी भी माध्यम का उपयोग करें।
              </span>
            </p>
          </div>
          <div className="sd-donate-grid grid lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
            <div className="sd-donate-col space-y-6">
              <div
                className="sd-donate-details rounded-3xl bg-white border border-[#0D1B2A]/10 p-6 sm:p-8 shadow-[0_10px_40px_-20px_rgba(13,27,42,0.25)]"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-[#0D1B2A]">Donation Details</h2>
                    <p className="text-[13px] text-[#0D1B2A]/60 mt-1">Fill in your details and choose how you want to contribute.</p>
                    <div className="sd-opg-sub">
                      <div className="sd-opg-sub-head">
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
                          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                          <line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg>
                        <span>Online Payment Gateway</span>
                      </div>
                      <p className="deva">
                        आप सुरक्षित Online Payment Gateway के माध्यम से Debit Card अथवा Credit Card द्वारा भी दान कर सकते हैं। यह सुविधा पूर्णतः सुरक्षित एवं विश्वसनीय है।
                      </p>
                    </div>
                  </div>
                </div>
                <DonationFlow tiers={tiers} />
              </div>
              <div className="sd-donate-info grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div
                  className="rounded-2xl bg-white border border-[#0D1B2A]/10 p-5 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10.5px] tracking-[0.16em] uppercase font-bold text-[#FF6F00]">Why Donate</div>
                    <h3 className="font-serif text-lg font-bold text-[#0D1B2A] mt-0.5">क्यों सहयोग करें?</h3>
                    <p className="deva mt-2.5 text-[12.5px] leading-[1.85] text-[#0D1B2A]/80">
                      आपका सहयोग केवल दान नहीं, बल्कि सेवा, सुरक्षा, संस्कार एवं धर्म आधारित समाज निर्माण के इस अभियान को आगे बढ़ाने में आपकी सक्रिय सहभागिता है। आपका सहयोग जरूरतमंदों के जीवन में सकारात्मक परिवर्तन लाने के साथ-साथ सनातन मूल्यों एवं मानव कल्याण के कार्यों को भी सशक्त बनाता है।
                    </p>
                  </div>
                </div>
                <div
                  className="rounded-2xl bg-white border border-[#0D1B2A]/10 p-5 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10.5px] tracking-[0.16em] uppercase font-bold text-[#FF6F00]">Trust &amp; Transparency</div>
                    <h3 className="font-serif text-lg font-bold text-[#0D1B2A] mt-0.5">Verified &amp; Compliant</h3>
                    <p className="deva mt-2.5 text-[12px] leading-[1.8] text-[#0D1B2A]/75">
                      हम आपकी सहयोग राशि का पूर्ण पारदर्शिता एवं जिम्मेदारी के साथ उपयोग करते हैं। यह राशि वर्तमान गतिविधियों, भावी योजनाओं, संस्था के संचालन, प्रशासनिक आवश्यकताओं, टीम प्रबंधन एवं विभिन्न समाज सेवा कार्यों में उपयोग की जाती है। संस्था द्वारा समय-समय पर गतिविधियों एवं उपयोग संबंधी जानकारी वेबसाइट पर प्रकाशित की जाती है।
                    </p>
                    <ul className="mt-2.5 space-y-2 text-[13px] text-[#0D1B2A]/85">
                      <li className="flex items-center gap-2">
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
                          className="lucide lucide-circle-check h-4 w-4 text-[#FF6F00] shrink-0"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="font-medium">Verified NGO</span>
                      </li>
                      <li className="flex items-center gap-2">
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
                          className="lucide lucide-circle-check h-4 w-4 text-[#FF6F00] shrink-0"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="font-medium">Proper Fund Utilization</span>
                      </li>
                      <li className="flex items-center gap-2">
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
                          className="lucide lucide-circle-check h-4 w-4 text-[#FF6F00] shrink-0"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="font-medium">Regular Updates &amp; Reports</span>
                      </li>
                      <li className="flex items-center gap-2">
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
                          className="lucide lucide-circle-check h-4 w-4 text-[#FF6F00] shrink-0"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <span className="font-medium">CSR Compliance</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="rounded-2xl bg-white border border-[#0D1B2A]/10 p-5 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10.5px] tracking-[0.16em] uppercase font-bold text-[#FF6F00]">Where Your Donation Goes</div>
                    <h3 className="font-serif text-lg font-bold text-[#0D1B2A] mt-0.5">Active Programs</h3>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      <Link
                        className="px-2.5 py-1 rounded-full text-[11.5px] font-semibold bg-[#FFF4E6] text-[#0D1B2A]/85 hover:bg-[#FF6F00] hover:text-white transition-colors"
                        href="/activities"
                      >Annapurna / अन्न सेवा</Link>
                      <Link
                        className="px-2.5 py-1 rounded-full text-[11.5px] font-semibold bg-[#FFF4E6] text-[#0D1B2A]/85 hover:bg-[#FF6F00] hover:text-white transition-colors"
                        href="/activities"
                      >Gau Seva / गौ सेवा</Link>
                      <Link
                        className="px-2.5 py-1 rounded-full text-[11.5px] font-semibold bg-[#FFF4E6] text-[#0D1B2A]/85 hover:bg-[#FF6F00] hover:text-white transition-colors"
                        href="/activities"
                      >Medical Help / चिकित्सा सहायता</Link>
                      <Link
                        className="px-2.5 py-1 rounded-full text-[11.5px] font-semibold bg-[#FFF4E6] text-[#0D1B2A]/85 hover:bg-[#FF6F00] hover:text-white transition-colors"
                        href="/activities"
                      >Education &amp; Gurukul / शिक्षा</Link>
                      <Link
                        className="px-2.5 py-1 rounded-full text-[11.5px] font-semibold bg-[#FFF4E6] text-[#0D1B2A]/85 hover:bg-[#FF6F00] hover:text-white transition-colors"
                        href="/activities"
                      >Disaster Relief / आपदा राहत</Link>
                      <Link
                        className="px-2.5 py-1 rounded-full text-[11.5px] font-semibold bg-[#FFF4E6] text-[#0D1B2A]/85 hover:bg-[#FF6F00] hover:text-white transition-colors"
                        href="/activities"
                      >Cultural Preservation / संस्कृति संरक्षण</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sd-donate-col space-y-5">
              <div
                className="sd-donate-scan rounded-3xl bg-white border border-[#0D1B2A]/10 p-6 shadow-[0_10px_40px_-20px_rgba(13,27,42,0.25)]"
              >
                <div>
                  <h2 className="font-serif text-xl font-bold text-[#0D1B2A]">Scan &amp; Pay</h2>
                  <p className="text-[12px] text-[#0D1B2A]/60 mt-1">Use QR or bank transfer for instant payments.</p>
                </div>
                <PayTabs />
              </div>
              <PaymentConfirmForm />
              <div
                className="sd-donate-flow rounded-3xl p-6 text-white shadow-[0_18px_40px_-18px_rgba(255,111,0,0.6)]"
                style={{ background: "#FF6F00" }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="h-10 w-10 rounded-xl bg-white/15 grid place-items-center">
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
                      className="lucide lucide-shield-check h-5 w-5 text-white"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="font-serif text-lg font-bold leading-tight">Verified Donation Flow</div>
                    <div className="text-[12px] text-white/85">Designed to keep your payment and receipt records in sync.</div>
                  </div>
                </div>
                <ol className="mt-4 space-y-2.5 text-[13px]">
                  <li className="flex gap-2.5">
                    <span
                      className="shrink-0 h-5 w-5 rounded-full bg-white text-[#FF6F00] grid place-items-center text-[11px] font-bold"
                    >1</span>
                    <span className="text-white/95">Choose an amount and project.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span
                      className="shrink-0 h-5 w-5 rounded-full bg-white text-[#FF6F00] grid place-items-center text-[11px] font-bold"
                    >2</span>
                    <span className="text-white/95">Pay online with Razorpay or scan the QR and transfer manually.</span>
                  </li>
                  <li className="flex gap-2.5">
                    <span
                      className="shrink-0 h-5 w-5 rounded-full bg-white text-[#FF6F00] grid place-items-center text-[11px] font-bold"
                    >3</span>
                    <span className="text-white/95">
                      Online payments are verified automatically and manual payments are reviewed by the team.
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="sd-secnote">
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
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <div>
              <div className="sd-secnote-title">Security Note</div>
              <p className="deva">
                भुगतान करते समय कृपया सुनिश्चित करें कि स्क्रीन पर{' '}
                <strong>"SANATAN DHARM MANAV KALYAN FOUNDATION"</strong>
                {' '}नाम प्रदर्शित हो रहा हो। नाम सत्यापित करने के बाद ही भुगतान करें।
              </p>
            </div>
          </div>
          <p className="sd-pay-quote2 deva">
            आपका सहयोग हमारे लिए केवल राशि नहीं, बल्कि समाज सेवा के इस अभियान को आगे बढ़ाने की शक्ति है।
          </p>
          <div className="sd-pay-closing deva">
            “दशांश” अपनाइए, नेक कार्य की शुरुआत कीजिए और अपने जीवन को सुख, शांति एवं समृद्धि से भरिए।
          </div>
        </div>
      </main>
    </div>
    </>
  )
}
