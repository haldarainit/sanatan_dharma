import { getPageContent, img, t } from '@/lib/sanity/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sanatan Dharm Manav Kalyan Foundation",
  description: "Official Portal of Sanatan Dharm Manav Kalyan Foundation for Seva, Gau Raksha, Annadanam, and Cultural Upliftment.",
}

export default async function StartFundraiserPage() {
  const { text, images } = await getPageContent("/start-fundraiser")
  return (
    <>
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#0D1B2A]">
      <div
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none w-full max-w-md px-4"
      ></div>
      <div className="flex-1 py-10 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="inline-flex items-center px-4 py-1 rounded-full bg-[#FFF4E6] text-[#FF6F00] border border-[#FF6F00]/30 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm"
            >Fundraising Support</span>
            <h1
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D1B2A] tracking-tight leading-tight mb-2"
            >START FUNDRAISING</h1>
            <p className="text-lg sm:text-xl font-bold text-[#FF6F00] mb-3">{t(text, 'k1', "सेवा अभियान सहयोग सुविधा")}</p>
            <p
              className="text-sm sm:text-base font-semibold text-slate-600 max-w-3xl mx-auto mb-5 leading-normal"
            >मिलकर बदलें किसी का जीवन — आपका सहयोग बन सकता है उम्मीद की किरण</p>
            <div
              className="max-w-3xl mx-auto bg-white border border-[#FF6F00]/20 rounded-3xl p-6 sm:p-7 shadow-sm text-sm sm:text-base leading-relaxed text-slate-700 space-y-3"
            >
              <p>{t(text, 'k2', "हर अभियान के पीछे एक सच्ची आवश्यकता, एक संघर्ष और एक उम्मीद होती है।")}</p>
              <p className="font-medium text-[#0D1B2A]">
                सनातन धर्म मानव कल्याण फाउंडेशन के माध्यम से आप{' '}
                <span className="text-[#FF6F00] font-bold">{t(text, 'k3', "Verified Missions, Social Causes एवं Genuine Need Cases")}</span>
                {' '}के लिए Fundraising Request Submit कर सकते हैं।
              </p>
              <p
                className="text-xs sm:text-sm text-slate-600 italic bg-[#FFF4E6]/50 p-3.5 rounded-2xl border border-[#FF6F00]/15"
              >
                {t(text, 'k4', "यह सुविधा संस्था की निगरानी एवं निर्धारित नीतियों के अनुसार संचालित की जाती है, ताकि सहयोग सही व्यक्ति, सही उद्देश्य और सही समय पर पहुँच सके।")}
              </p>
            </div>
          </div>
          <hr className="my-10 border-slate-200" />
          <div className="mb-14">
            <div className="text-center mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6F00]">{t(text, 'k5', "Eligibility & Scope")}</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1B2A] mt-1">WHO CAN APPLY FOR FUNDRAISING SUPPORT?</h2>
              <p className="text-sm font-semibold text-[#FF6F00] mt-1">{t(text, 'k6', "Fundraising सहायता हेतु कौन आवेदन कर सकता है?")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div
                    className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center mb-4 shadow-md"
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
                      className="lucide lucide-user h-6 w-6"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#0D1B2A] leading-snug">Individual / Family Support</h3>
                  <p className="text-xs text-[#FF6F00] font-semibold mb-4">{t(text, 'k7', "व्यक्तिगत एवं पारिवारिक सहायता")}</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k8', "Medical Emergency")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k9', "Education Support")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k10', "Food & Nutrition Support")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k11', "Women Support & Safety")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k12', "Family Crisis / Financial Hardship")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k13', "Disaster Relief Assistance")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k14', "Senior Citizen Support")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k15', "Child Welfare Support")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k16', "Livelihood & Skill Support")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k17', "Other Genuine Humanitarian Needs")}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div
                    className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-600 to-amber-600 text-white flex items-center justify-center mb-4 shadow-md"
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
                      className="lucide lucide-building2 h-6 w-6"
                    >
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                      <path d="M10 6h4"></path>
                      <path d="M10 10h4"></path>
                      <path d="M10 14h4"></path>
                      <path d="M10 18h4"></path>
                    </svg>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#0D1B2A] leading-snug">NGO Missions &amp; Activities</h3>
                  <p className="text-xs text-[#FF6F00] font-semibold mb-4">{t(text, 'k18', "एनजीओ मिशन एवं सेवा गतिविधियाँ")}</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k19', "अन्न सेवा एवं भोजन सहायता")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k20', "चिकित्सा एवं स्वास्थ्य सहायता")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k21', "शिक्षा एवं संस्कार सहायता")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k22', "महिला सुरक्षा एवं सम्मान अभियान")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k23', "आपदा राहत एवं मानव सेवा")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k24', "गौ सेवा एवं संरक्षण")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k25', "पर्यावरण संरक्षण एवं वृक्षारोपण")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k26', "सनातन संस्कृति संरक्षण एवं जनजागरण")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k27', "फिल्म, वेब सीरीज़, संगीत एवं सांस्कृतिक जनजागरण")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k28', "Fraud Awareness & Help Center")}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div
                    className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-600 to-red-600 text-white flex items-center justify-center mb-4 shadow-md"
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
                      className="lucide lucide-shield-check h-6 w-6"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#0D1B2A] leading-snug">Future Missions &amp; Service Projects</h3>
                  <p className="text-xs text-[#FF6F00] font-semibold mb-4">{t(text, 'k29', "भविष्य के मिशन एवं सेवा परियोजनाएं")}</p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k30', "सनातन हेल्प सेंटर")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k31', "सनातन भोजनालय")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k32', "रोटी • कपड़ा • मकान एवं कौशल विकास केंद्र")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k33', "सनातन शेल्टर हाउस")}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F00] mt-1.5 shrink-0"></span>
                      <span>{t(text, 'k34', "सनातन गुरुकुल एवं संस्कार केंद्र")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-amber-50/80 border border-amber-300 rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
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
                  className="lucide lucide-shield-alert h-6 w-6 text-amber-700 shrink-0"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                  ></path>
                  <path d="M12 8v4"></path>
                  <path d="M12 16h.01"></path>
                </svg>
                <h3 className="font-serif text-lg font-bold text-amber-900">महत्वपूर्ण सूचना (Important Notice)</h3>
              </div>
              <ul
                className="space-y-2.5 text-xs sm:text-sm text-amber-900/90 font-medium list-disc list-inside"
              >
                <li>
                  {t(text, 'k35', "केवल वास्तविक, सत्यापन योग्य एवं संस्था के उद्देश्यों के अनुरूप मामलों पर ही विचार किया जाएगा।")}
                </li>
                <li>
                  {t(text, 'k36', "सहायता उपलब्धता, पात्रता, सत्यापन, संसाधनों एवं संस्था की नीतियों के आधार पर प्रदान की जा सकती है।")}
                </li>
                <li>
                  {t(text, 'k37', "संस्था द्वारा प्राप्त प्रत्येक अनुरोध पर Fundraising Approval प्रदान करना अनिवार्य नहीं होगा।")}
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-10 border-slate-200" />
          <div className="mb-14">
            <div className="text-center mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6F00]">{t(text, 'k38', "Process & Workflow")}</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1B2A] mt-1">HOW FUNDRAISING WORKS?</h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">{t(text, 'k39', "6 सरल चरणों में जानिए अभियान की संपूर्ण प्रक्रिया")}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div
                className="bg-white rounded-2xl border border-slate-200 p-5 relative overflow-hidden shadow-sm hover:border-[#FF6F00]/50 transition-all"
              >
                <div
                  className="absolute top-3 right-3 text-3xl font-extrabold text-slate-100 font-mono select-none"
                >01</div>
                <div
                  className="inline-block px-3 py-1 rounded-full bg-[#FFF4E6] text-[#FF6F00] text-[11px] font-bold uppercase mb-2"
                >Step 1</div>
                <h4 className="font-bold text-sm text-[#0D1B2A] mb-1">Request Submission</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{t(text, 'k40', "Applicant Fundraising Request Submit करता है।")}</p>
              </div>
              <div
                className="bg-white rounded-2xl border border-slate-200 p-5 relative overflow-hidden shadow-sm hover:border-[#FF6F00]/50 transition-all"
              >
                <div
                  className="absolute top-3 right-3 text-3xl font-extrabold text-slate-100 font-mono select-none"
                >02</div>
                <div
                  className="inline-block px-3 py-1 rounded-full bg-[#FFF4E6] text-[#FF6F00] text-[11px] font-bold uppercase mb-2"
                >Step 2</div>
                <h4 className="font-bold text-sm text-[#0D1B2A] mb-1">Initial Review</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {t(text, 'k41', "NGO Team उपलब्ध जानकारी एवं दस्तावेज़ों की प्रारंभिक समीक्षा एवं सत्यापन करती है।")}
                </p>
              </div>
              <div
                className="bg-white rounded-2xl border border-slate-200 p-5 relative overflow-hidden shadow-sm hover:border-[#FF6F00]/50 transition-all"
              >
                <div
                  className="absolute top-3 right-3 text-3xl font-extrabold text-slate-100 font-mono select-none"
                >03</div>
                <div
                  className="inline-block px-3 py-1 rounded-full bg-[#FFF4E6] text-[#FF6F00] text-[11px] font-bold uppercase mb-2"
                >Step 3</div>
                <h4 className="font-bold text-sm text-[#0D1B2A] mb-1">Campaign Publishing</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{t(text, 'k42', "Approved Case / Campaign Website पर Publish किया जाता है।")}</p>
              </div>
              <div
                className="bg-white rounded-2xl border border-slate-200 p-5 relative overflow-hidden shadow-sm hover:border-[#FF6F00]/50 transition-all"
              >
                <div
                  className="absolute top-3 right-3 text-3xl font-extrabold text-slate-100 font-mono select-none"
                >04</div>
                <div
                  className="inline-block px-3 py-1 rounded-full bg-[#FFF4E6] text-[#FF6F00] text-[11px] font-bold uppercase mb-2"
                >Step 4</div>
                <h4 className="font-bold text-sm text-[#0D1B2A] mb-1">Supporter Engagement</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{t(text, 'k43', "Supporters अपनी इच्छा एवं समझ के अनुसार सहयोग करते हैं।")}</p>
              </div>
              <div
                className="bg-white rounded-2xl border border-slate-200 p-5 relative overflow-hidden shadow-sm hover:border-[#FF6F00]/50 transition-all"
              >
                <div
                  className="absolute top-3 right-3 text-3xl font-extrabold text-slate-100 font-mono select-none"
                >05</div>
                <div
                  className="inline-block px-3 py-1 rounded-full bg-[#FFF4E6] text-[#FF6F00] text-[11px] font-bold uppercase mb-2"
                >Step 5</div>
                <h4 className="font-bold text-sm text-[#0D1B2A] mb-1">Fund Utilization</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{t(text, 'k44', "सहयोग राशि Approved Purpose के अनुसार उपयोग की जाती है।")}</p>
              </div>
              <div
                className="bg-white rounded-2xl border border-slate-200 p-5 relative overflow-hidden shadow-sm hover:border-[#FF6F00]/50 transition-all"
              >
                <div
                  className="absolute top-3 right-3 text-3xl font-extrabold text-slate-100 font-mono select-none"
                >06</div>
                <div
                  className="inline-block px-3 py-1 rounded-full bg-[#FFF4E6] text-[#FF6F00] text-[11px] font-bold uppercase mb-2"
                >Step 6</div>
                <h4 className="font-bold text-sm text-[#0D1B2A] mb-1">Updates &amp; Monitoring</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{t(text, 'k45', "NGO आवश्यकतानुसार Updates एवं Records Maintain करती है।")}</p>
              </div>
            </div>
          </div>
          <hr className="my-10 border-slate-200" />
          <div className="mb-14">
            <div className="text-center mb-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6F00]">{t(text, 'k46', "Interactive Application Form")}</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0D1B2A] mt-1">FUNDRAISING REQUEST FORM</h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">{t(text, 'k47', "चरणबद्ध तरीके से अपना आवेदन फॉर्म पूरा करें (Step 1 of 4)")}</p>
            </div>
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xl">
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-bold text-[#0D1B2A] mb-2">
                  <span>{t(text, 'k48', "Application Progress")}</span>
                  <span className="text-[#FF6F00] font-extrabold">{t(text, 'k49', "25% Completed")}</span>
                </div>
                <div
                  className="h-3 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200"
                >
                  <div
                    className="h-full bg-gradient-to-r from-[#FF6F00] via-amber-500 to-[#FF6F00] rounded-full shadow-md"
                    style={{ width: "25%" }}
                  ></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                  <div
                    className="p-3 rounded-2xl border text-center transition-all bg-[#FFF4E6] border-[#FF6F00] text-[#0D1B2A] shadow-sm ring-1 ring-[#FF6F00]"
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <span
                        className="h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-[#FF6F00] text-white"
                      >1</span>
                      <span className="text-xs font-bold">{t(text, 'k50', "Section A")}</span>
                    </div>
                    <div className="text-[11px] font-medium truncate">{t(text, 'k51', "Applicant Details")}</div>
                  </div>
                  <div
                    className="p-3 rounded-2xl border text-center transition-all bg-slate-50 border-slate-200 text-slate-400"
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <span
                        className="h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-slate-200 text-slate-600"
                      >2</span>
                      <span className="text-xs font-bold">{t(text, 'k52', "Section B")}</span>
                    </div>
                    <div className="text-[11px] font-medium truncate">{t(text, 'k53', "Campaign Details")}</div>
                  </div>
                  <div
                    className="p-3 rounded-2xl border text-center transition-all bg-slate-50 border-slate-200 text-slate-400"
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <span
                        className="h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-slate-200 text-slate-600"
                      >3</span>
                      <span className="text-xs font-bold">{t(text, 'k54', "Section C")}</span>
                    </div>
                    <div className="text-[11px] font-medium truncate">{t(text, 'k55', "Supporting Information")}</div>
                  </div>
                  <div
                    className="p-3 rounded-2xl border text-center transition-all bg-slate-50 border-slate-200 text-slate-400"
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-0.5">
                      <span
                        className="h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold bg-slate-200 text-slate-600"
                      >4</span>
                      <span className="text-xs font-bold">{t(text, 'k56', "Section D")}</span>
                    </div>
                    <div className="text-[11px] font-medium truncate">{t(text, 'k57', "Transfer & Declaration")}</div>
                  </div>
                </div>
              </div>
              <form>
                <div className="space-y-6" style={{ opacity: "1" }}>
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                    <div
                      className="h-9 w-9 rounded-xl bg-[#FF6F00] text-white flex items-center justify-center font-bold text-base shadow"
                    >A</div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#0D1B2A]">Section A – Applicant Details</h3>
                      <p className="text-xs text-slate-500">{t(text, 'k58', "आवेदक के व्यक्तिगत एवं संपर्क विवरण")}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#0D1B2A] uppercase tracking-wider mb-1.5">{t(text, 'k59', "Full Name *")}</label>
                      <input
                        type="text"
                        required
                        placeholder="आपका पूरा नाम दर्ज करें"
                        className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-[#FFFDF9] text-sm focus:outline-none focus:border-[#FF6F00]"
                        defaultValue=""
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-[#0D1B2A] uppercase tracking-wider">{t(text, 'k60', "Mobile Number *")}</label>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="tel"
                          required
                          placeholder="10 अंकों का मोबाइल नंबर"
                          className="flex-1 h-12 px-4 rounded-xl border border-slate-300 bg-[#FFFDF9] text-sm focus:outline-none focus:border-[#FF6F00]"
                          defaultValue=""
                        />
                        <button
                          type="button"
                          className="px-4 h-12 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer bg-[#FF6F00] text-white hover:bg-[#e06200] shadow-sm sd-btn sd-btn--submit"
                        >Send OTP</button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0D1B2A] uppercase tracking-wider mb-1.5">{t(text, 'k61', "Email ID")}</label>
                      <input
                        type="email"
                        placeholder="example@mail.com"
                        className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-[#FFFDF9] text-sm focus:outline-none focus:border-[#FF6F00]"
                        defaultValue=""
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0D1B2A] uppercase tracking-wider mb-1.5">{t(text, 'k62', "City / State *")}</label>
                      <input
                        type="text"
                        required
                        placeholder="उदा. Jaipur, Rajasthan"
                        className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-[#FFFDF9] text-sm focus:outline-none focus:border-[#FF6F00]"
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] uppercase tracking-wider mb-2">{t(text, 'k63', "Applying As *")}</label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                      <button
                        type="button"
                        className="py-3 px-3 rounded-xl border text-xs font-bold transition-all bg-[#0D1B2A] border-[#0D1B2A] text-white shadow"
                      >• Individual</button>
                      <button
                        type="button"
                        className="py-3 px-3 rounded-xl border text-xs font-bold transition-all bg-white border-slate-200 text-slate-700 hover:border-[#FF6F00]"
                      >• Family</button>
                      <button
                        type="button"
                        className="py-3 px-3 rounded-xl border text-xs font-bold transition-all bg-white border-slate-200 text-slate-700 hover:border-[#FF6F00]"
                      >• Group / Community</button>
                      <button
                        type="button"
                        className="py-3 px-3 rounded-xl border text-xs font-bold transition-all bg-white border-slate-200 text-slate-700 hover:border-[#FF6F00]"
                      >• NGO Project</button>
                      <button
                        type="button"
                        className="py-3 px-3 rounded-xl border text-xs font-bold transition-all bg-white border-slate-200 text-slate-700 hover:border-[#FF6F00]"
                      >• Other</button>
                    </div>
                  </div>
                  <div className="pt-6 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#FF6F00] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-md sd-btn sd-btn--next"
                    >
                      <span>{t(text, 'k64', "Proceed to Section B")}</span>
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
                        className="lucide lucide-arrow-right h-4 w-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <hr className="my-10 border-slate-200" />
          <div className="space-y-6 mb-14">
            <div
              className="bg-[#0D1B2A] text-white rounded-3xl p-6 sm:p-8 shadow-lg border border-[#FF6F00]/30 relative overflow-hidden space-y-3"
            >
              <div
                className="absolute -right-6 -bottom-6 w-32 h-32 bg-[#FF6F00]/10 rounded-full blur-2xl pointer-events-none"
              ></div>
              <div className="flex items-center gap-3">
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
                  className="lucide lucide-lock h-6 w-6 text-[#FF6F00] shrink-0"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FF6F00] tracking-wide">SECURITY NOTICE / सुरक्षा सूचना</h3>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm text-slate-200 leading-relaxed font-medium pt-1">
                <p className="flex items-start gap-2.5">
                  <span className="text-[#FF6F00] font-bold text-base leading-none mt-0.5">•</span>
                  <span>
                    सहयोग करते समय कृपया सुनिश्चित करें कि भुगतान स्क्रीन पर{' '}
                    <strong
                      className="text-amber-300 font-bold bg-[#FF6F00]/25 px-2 py-0.5 rounded border border-[#FF6F00]/40 inline-block my-0.5"
                    >&quot;Sanatan Dharm Manav Kalyan Foundation&quot;</strong>
                    {' '}नाम ही प्रदर्शित हो।
                  </span>
                </p>
                <p className="flex items-start gap-2.5 text-amber-200/95 font-semibold">
                  <span className="text-[#FF6F00] font-bold text-base leading-none mt-0.5">•</span>
                  <span>{t(text, 'k65', "कृपया किसी भी अन्य अनधिकृत अथवा व्यक्तिगत नाम पर भुगतान न करें।")}</span>
                </p>
              </div>
            </div>
            <div
              className="bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-amber-50/90 border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden space-y-4"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"
              ></div>
              <div
                className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200/60 pb-3.5"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-700 grid place-items-center shrink-0 shadow-sm"
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
                      className="lucide lucide-shield-alert h-5 w-5 text-amber-700"
                    >
                      <path
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                      <path d="M12 8v4"></path>
                      <path d="M12 16h.01"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-amber-950 tracking-tight">OFFICIAL DISCLAIMER / कानूनी अस्वीकरण</h3>
                    <p className="text-[11px] text-amber-800/80 font-medium">{t(text, 'k66', "फंडरेजिंग सुविधा हेतु महत्वपूर्ण कानूनी एवं नीतिगत सूचना")}</p>
                  </div>
                </div>
                <span
                  className="px-3 py-1 rounded-full bg-amber-200/60 text-amber-900 border border-amber-300 text-[10.5px] font-bold uppercase tracking-wider shadow-2xs"
                >Legal &amp; Policy Notice</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-amber-950/90 font-medium leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>
                    <strong className="text-amber-900">{t(text, 'k67', "मानवीय एवं गैर-व्यावसायिक उद्देश्य:")}</strong>
                    {' '}यह Fundraising Support Facility पूर्णतः मानवीय, सामाजिक एवं गैर-व्यावसायिक उद्देश्यों के लिए संचालित की जाती है।
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>
                    <strong className="text-amber-900">{t(text, 'k68', "सुविधा एवं सत्यापन भूमिका:")}</strong>
                    {' '}संस्था Facilitation, Verification एवं Monitoring की भूमिका में कार्य करती है तथा किसी भी प्रकार की व्यक्तिगत, कानूनी, वित्तीय अथवा परिणाम संबंधी गारंटी प्रदान नहीं करती।
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-amber-600 mt-2 shrink-0"></span>
                  <span>
                    <strong className="text-amber-900">{t(text, 'k69', "स्वैच्छिक योगदान:")}</strong>
                    {' '}सभी सहयोग पूर्णतः स्वैच्छिक हैं तथा सहयोगकर्ता अपने स्वविवेक एवं पूर्ण संतुष्टि के पश्चात ही योगदान देने का निर्णय लें।
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="text-center bg-gradient-to-br from-[#FFF4E6] to-[#FFF9F2] border border-[#FF6F00]/25 rounded-3xl p-8 sm:p-12 shadow-sm"
          >
            <blockquote
              className="font-serif text-base sm:text-xl font-bold text-[#0D1B2A] italic max-w-3xl mx-auto leading-relaxed mb-4"
            >
              {t(text, 'k70', "\"हमारा उद्देश्य केवल धन संग्रह करना नहीं, बल्कि सही व्यक्ति, सही उद्देश्य और सही आवश्यकता तक सहयोग पहुँचाना है — पूर्ण पारदर्शिता, उत्तरदायित्व एवं सेवा भावना के साथ।\"")}
            </blockquote>
            <div className="text-[#FF6F00] font-extrabold text-sm sm:text-base tracking-widest uppercase">{t(text, 'k71', "🚩 सेवा ही सनातन • समर्पण ही हमारा धर्म")}</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
