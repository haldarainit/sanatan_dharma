'use client'

import { img, t, type ImageMap, type TextMap } from '@/lib/sanity/content'
import Link from 'next/link'
import { useState } from 'react'
export default function OurMissions({ text, images }: { text?: TextMap; images?: ImageMap }) {
  const [showAll, setShowAll] = useState(false)

  return (
    <section
      className="bg-[#fdfbf7] py-8 px-4 sm:px-6 lg:px-8 font-sans border-t border-saffron-100 sd-gap"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-3xl text-center mb-10 space-y-2">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
            Our{' '}
            <span className="text-[#e35300]">{t(text, 'our-missions-k1', "Missions")}</span>
          </h2>
          <p className="deva text-slate-600 font-semibold text-[17px] sm:text-xl tracking-wide mb-3">{t(text, 'our-missions-k2', "हमारे सेवा मिशन")}</p>
          <p
            className="deva max-w-3xl mx-auto text-sm sm:text-[15px] text-slate-600 leading-relaxed text-justify"
          >
            {t(text, 'our-missions-k3', "सनातन धर्म मानव कल्याण फाउंडेशन सेवा, संस्कार, संस्कृति और मानव कल्याण के विभिन्न क्षेत्रों में समर्पित भाव से कार्यरत है। हमारा उद्देश्य जनजागरण, सेवा भावना और सनातन मूल्यों के संरक्षण के माध्यम से समाज में सकारात्मक परिवर्तन लाना है।")}
            <br />
            <br />
            {t(text, 'our-missions-k4', "हम अपने सेवा अभियानों के माध्यम से अधिक से अधिक लोगों तक सहयोग पहुँचाने का सतत प्रयास करते हैं। आइए, सेवा और मानव कल्याण की इस पवित्र यात्रा में सहभागी बनें और मानव कल्याण के कार्यों को नई शक्ति प्रदान करें।🚩")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-56 w-full">
                <img
                  src={img(images, 'our-missions-i5', "/img/yogi-flag.jpg")}
                  alt="सनातन संस्कृति संरक्षण एवं जनजागरण अभियान"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white p-1 shadow-md flex items-center justify-center"
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center relative"
                    style={{ background: "conic-gradient(#ea580c 187.20000000000002deg, #e2e8f0 0deg)" }}
                  >
                    <span
                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-slate-800 z-10"
                    >52%</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="deva text-lg font-bold text-slate-900 mb-2">सनातन संस्कृति संरक्षण एवं जनजागरण अभियान</h3>
                <p className="deva text-slate-500 text-sm leading-relaxed mb-4">
                  {t(text, 'our-missions-k6', "सनातनी समाज को अपनी सांस्कृतिक जड़ों, राष्ट्रप्रेम और जागरूक नागरिकता से जोड़ने का सतत प्रयास।")}
                </p>
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="mb-4">
                <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                  <span className="text-slate-800">{t(text, 'our-missions-k7', "₹2,60,000")}</span>
                  <span className="text-slate-400">{t(text, 'our-missions-k8', "Goal: ₹5,00,000")}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300"
                    style={{ width: "52%" }}
                  ></div>
                </div>
              </div>
              <Link
                href="/missions/sanskriti-jagran"
                className="w-full py-2 px-4 border border-orange-600 text-orange-600 font-semibold text-sm rounded-full hover:bg-orange-50 transition-colors cursor-pointer sd-btn sd-btn--view-details inline-flex items-center justify-center"
              >Details</Link>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-56 w-full">
                <img
                  src={img(images, 'our-missions-i9', "/img/act-women.jpg")}
                  alt="महिला सुरक्षा एवं सम्मान अभियान"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white p-1 shadow-md flex items-center justify-center"
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center relative"
                    style={{ background: "conic-gradient(#ea580c 176.4deg, #e2e8f0 0deg)" }}
                  >
                    <span
                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-slate-800 z-10"
                    >49%</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="deva text-lg font-bold text-slate-900 mb-2">महिला सुरक्षा एवं सम्मान अभियान</h3>
                <p className="deva text-slate-500 text-sm leading-relaxed mb-4">{t(text, 'our-missions-k10', "महिलाओं एवं बालिकाओं की सुरक्षा, सम्मान, जागरूकता और सहयोग के लिए समर्पित अभियान।")}</p>
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="mb-4">
                <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                  <span className="text-slate-800">{t(text, 'our-missions-k11', "₹2,45,000")}</span>
                  <span className="text-slate-400">{t(text, 'our-missions-k12', "Goal: ₹5,00,000")}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300"
                    style={{ width: "49%" }}
                  ></div>
                </div>
              </div>
              <Link
                href="/missions/mahila-suraksha"
                className="w-full py-2 px-4 border border-orange-600 text-orange-600 font-semibold text-sm rounded-full hover:bg-orange-50 transition-colors cursor-pointer sd-btn sd-btn--view-details inline-flex items-center justify-center"
              >Details</Link>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-56 w-full">
                <img
                  src={img(images, 'our-missions-i13', "/img/act-child.jpg")}
                  alt="अन्न सेवा अभियान"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white p-1 shadow-md flex items-center justify-center"
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center relative"
                    style={{ background: "conic-gradient(#ea580c 205.20000000000002deg, #e2e8f0 0deg)" }}
                  >
                    <span
                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-slate-800 z-10"
                    >57%</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="deva text-lg font-bold text-slate-900 mb-2">अन्न सेवा अभियान</h3>
                <p className="deva text-slate-500 text-sm leading-relaxed mb-4">{t(text, 'our-missions-k14', "जरूरतमंद एवं असहाय लोगों तक भोजन एवं आवश्यक सहायता पहुँचाने का सेवा अभियान।")}</p>
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="mb-4">
                <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                  <span className="text-slate-800">{t(text, 'our-missions-k15', "₹2,85,000")}</span>
                  <span className="text-slate-400">{t(text, 'our-missions-k16', "Goal: ₹5,00,000")}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300"
                    style={{ width: "57%" }}
                  ></div>
                </div>
              </div>
              <Link
                href="/missions/anna-seva"
                className="w-full py-2 px-4 border border-orange-600 text-orange-600 font-semibold text-sm rounded-full hover:bg-orange-50 transition-colors cursor-pointer sd-btn sd-btn--view-details inline-flex items-center justify-center"
              >Details</Link>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between sd-mis-more"
            hidden={!showAll}
          >
            <div>
              <div className="relative h-56 w-full">
                <img
                  src={img(images, 'our-missions-i17', "/img/campaign-gurukul.jpg")}
                  alt="शिक्षा एवं संस्कार सहायता अभियान"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white p-1 shadow-md flex items-center justify-center"
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center relative"
                    style={{ background: "conic-gradient(#ea580c 0deg, #e2e8f0 0deg)" }}
                  >
                    <span
                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-slate-800 z-10"
                    >0%</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="deva text-lg font-bold text-slate-900 mb-2">शिक्षा एवं संस्कार सहायता अभियान</h3>
                <p className="deva text-slate-500 text-sm leading-relaxed mb-4">{t(text, 'our-missions-k18', "आर्थिक रूप से कमजोर एवं जरूरतमंद विद्यार्थियों के लिए शिक्षा, मार्गदर्शन और संस्कार आधारित सहयोग का अभियान।")}</p>
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="mb-4">
                <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                  <span className="text-slate-800">{t(text, 'our-missions-k19', "₹0")}</span>
                  <span className="text-slate-400">{t(text, 'our-missions-k20', "Goal: ₹5,00,000")}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <Link
                href="/missions/shiksha-sanskar"
                className="w-full py-2 px-4 border border-orange-600 text-orange-600 font-semibold text-sm rounded-full hover:bg-orange-50 transition-colors cursor-pointer sd-btn sd-btn--view-details inline-flex items-center justify-center"
              >Details</Link>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between sd-mis-more"
            hidden={!showAll}
          >
            <div>
              <div className="relative h-56 w-full">
                <img
                  src={img(images, 'our-missions-i21', "/img/future-help.jpeg")}
                  alt="धोखाधड़ी जागरूकता एवं सुरक्षा अभियान"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white p-1 shadow-md flex items-center justify-center"
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center relative"
                    style={{ background: "conic-gradient(#ea580c 0deg, #e2e8f0 0deg)" }}
                  >
                    <span
                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-slate-800 z-10"
                    >0%</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="deva text-lg font-bold text-slate-900 mb-2">धोखाधड़ी जागरूकता एवं सुरक्षा अभियान</h3>
                <p className="deva text-slate-500 text-sm leading-relaxed mb-4">
                  {t(text, 'our-missions-k22', "धोखाधड़ी, फर्जीवाड़े, नकली उत्पादों, मिलावटी वस्तुओं एवं संदिग्ध गतिविधियों के विरुद्ध जागरूकता और सहयोग हेतु समर्पित अभियान।")}
                </p>
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="mb-4">
                <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                  <span className="text-slate-800">{t(text, 'our-missions-k23', "₹0")}</span>
                  <span className="text-slate-400">{t(text, 'our-missions-k24', "Goal: ₹5,00,000")}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <Link
                href="/missions/dhokhadhadi-jagrukta"
                className="w-full py-2 px-4 border border-orange-600 text-orange-600 font-semibold text-sm rounded-full hover:bg-orange-50 transition-colors cursor-pointer sd-btn sd-btn--view-details inline-flex items-center justify-center"
              >Details</Link>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between sd-mis-more"
            hidden={!showAll}
          >
            <div>
              <div className="relative h-56 w-full">
                <img
                  src={img(images, 'our-missions-i25', "/img/campaign-gaushala.jpg")}
                  alt="गौ सेवा एवं संरक्षण अभियान"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white p-1 shadow-md flex items-center justify-center"
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center relative"
                    style={{ background: "conic-gradient(#ea580c 0deg, #e2e8f0 0deg)" }}
                  >
                    <span
                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-slate-800 z-10"
                    >0%</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="deva text-lg font-bold text-slate-900 mb-2">गौ सेवा एवं संरक्षण अभियान</h3>
                <p className="deva text-slate-500 text-sm leading-relaxed mb-4">{t(text, 'our-missions-k26', "गौ संरक्षण, सेवा, देखभाल एवं जनजागरण के लिए समर्पित अभियान।")}</p>
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="mb-4">
                <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                  <span className="text-slate-800">{t(text, 'our-missions-k27', "₹0")}</span>
                  <span className="text-slate-400">{t(text, 'our-missions-k28', "Goal: ₹5,00,000")}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <Link
                href="/missions/gau-seva"
                className="w-full py-2 px-4 border border-orange-600 text-orange-600 font-semibold text-sm rounded-full hover:bg-orange-50 transition-colors cursor-pointer sd-btn sd-btn--view-details inline-flex items-center justify-center"
              >Details</Link>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between sd-mis-more"
            hidden={!showAll}
          >
            <div>
              <div className="relative h-56 w-full">
                <img
                  src={img(images, 'our-missions-i29', "/img/campaign-tree.jpg")}
                  alt="पर्यावरण संरक्षण एवं वृक्षारोपण अभियान"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white p-1 shadow-md flex items-center justify-center"
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center relative"
                    style={{ background: "conic-gradient(#ea580c 0deg, #e2e8f0 0deg)" }}
                  >
                    <span
                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-slate-800 z-10"
                    >0%</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="deva text-lg font-bold text-slate-900 mb-2">पर्यावरण संरक्षण एवं वृक्षारोपण अभियान</h3>
                <p className="deva text-slate-500 text-sm leading-relaxed mb-4">{t(text, 'our-missions-k30', "वृक्षारोपण, पर्यावरण जागरूकता और संरक्षण के लिए समर्पित अभियान।")}</p>
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="mb-4">
                <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                  <span className="text-slate-800">{t(text, 'our-missions-k31', "₹0")}</span>
                  <span className="text-slate-400">{t(text, 'our-missions-k32', "Goal: ₹5,00,000")}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <Link
                href="/missions/paryavaran-sanrakshan"
                className="w-full py-2 px-4 border border-orange-600 text-orange-600 font-semibold text-sm rounded-full hover:bg-orange-50 transition-colors cursor-pointer sd-btn sd-btn--view-details inline-flex items-center justify-center"
              >Details</Link>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between sd-mis-more"
            hidden={!showAll}
          >
            <div>
              <div className="relative h-56 w-full">
                <img
                  src={img(images, 'our-missions-i33', "/img/campaign-disaster.jpg")}
                  alt="आपदा राहत एवं मानव सहायता अभियान"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white p-1 shadow-md flex items-center justify-center"
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center relative"
                    style={{ background: "conic-gradient(#ea580c 0deg, #e2e8f0 0deg)" }}
                  >
                    <span
                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-slate-800 z-10"
                    >0%</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="deva text-lg font-bold text-slate-900 mb-2">आपदा राहत एवं मानव सहायता अभियान</h3>
                <p className="deva text-slate-500 text-sm leading-relaxed mb-4">
                  {t(text, 'our-missions-k34', "प्राकृतिक आपदा, दुर्घटना एवं आपातकालीन परिस्थितियों में राहत एवं मानव सहायता के लिए समर्पित अभियान।")}
                </p>
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="mb-4">
                <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                  <span className="text-slate-800">{t(text, 'our-missions-k35', "₹0")}</span>
                  <span className="text-slate-400">{t(text, 'our-missions-k36', "Goal: ₹5,00,000")}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <Link
                href="/missions/aapda-rahat"
                className="w-full py-2 px-4 border border-orange-600 text-orange-600 font-semibold text-sm rounded-full hover:bg-orange-50 transition-colors cursor-pointer sd-btn sd-btn--view-details inline-flex items-center justify-center"
              >Details</Link>
            </div>
          </div>
          <div
            className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between sd-mis-more"
            hidden={!showAll}
          >
            <div>
              <div className="relative h-56 w-full">
                <img
                  src={img(images, 'our-missions-i37', "/img/megaphone.jpeg")}
                  alt="फिल्म, संगीत एवं सांस्कृतिक जनजागरण अभियान"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white p-1 shadow-md flex items-center justify-center"
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center relative"
                    style={{ background: "conic-gradient(#ea580c 0deg, #e2e8f0 0deg)" }}
                  >
                    <span
                      className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-[10px] font-bold text-slate-800 z-10"
                    >0%</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="deva text-lg font-bold text-slate-900 mb-2">फिल्म, संगीत एवं सांस्कृतिक जनजागरण अभियान</h3>
                <p className="deva text-slate-500 text-sm leading-relaxed mb-4">
                  {t(text, 'our-missions-k38', "फिल्म, वेब सीरीज़, संगीत एवं डिजिटल मीडिया के माध्यम से सकारात्मक सामाजिक संदेश पहुँचाने का समर्पित अभियान।")}
                </p>
              </div>
            </div>
            <div className="px-5 pb-5">
              <div className="mb-4">
                <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
                  <span className="text-slate-800">{t(text, 'our-missions-k39', "₹0")}</span>
                  <span className="text-slate-400">{t(text, 'our-missions-k40', "Goal: ₹5,00,000")}</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-300"
                    style={{ width: "0%" }}
                  ></div>
                </div>
              </div>
              <Link
                href="/missions/film-sangeet"
                className="w-full py-2 px-4 border border-orange-600 text-orange-600 font-semibold text-sm rounded-full hover:bg-orange-50 transition-colors cursor-pointer sd-btn sd-btn--view-details inline-flex items-center justify-center"
              >Details</Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <button
            type="button"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium px-6 py-3 rounded-full shadow-lg hover:opacity-95 transition-all transform active:scale-95 cursor-pointer sd-btn sd-btn--view-details"
            aria-expanded={showAll}
            onClick={() => setShowAll((v) => !v)}
          >
            <span>{showAll ? 'View Less' : 'View All'}</span>
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
              className="lucide lucide-arrow-right w-4 h-4"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
