import { img, t, type ImageMap, type TextMap } from '@/lib/sanity/content'
export default function CommunityVoices({ text, images }: { text?: TextMap; images?: ImageMap }) {
  return (
    <section
      className="bg-[#fdfbf7] py-12 px-4 font-sans text-neutral-800 border-t border-[#efeae4] overflow-hidden sd-gap"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
          Community{' '}
          <span className="block sm:inline text-[#e35300]">{t(text, 'community-voices-k1', "Voices")}</span>
        </h2>
        <p
          className="text-slate-600 font-semibold text-[17px] sm:text-xl tracking-wide mb-12 uppercase"
        >REAL STORIES FROM DONORS, VOLUNTEERS &amp; FAMILIES</p>
        <div className="relative group">
          <button
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-neutral-700 shadow-md hover:bg-[#ea580c] hover:text-white hover:border-[#ea580c] active:scale-95 transition-all duration-200 cursor-pointer touch-manipulation"
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
          <div className="overflow-hidden py-6 px-2">
            <div
              className="flex gap-6 will-change-transform"
              style={{ transform: "translate3d(0, 0, 0)", transition: "none", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
            >
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k2', "यहाँ transparency और dedication साफ़ दिखाई देती है। यहाँ सेवा भावना साफ दिखाई देती है।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >अ</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">अमित शर्मा</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k3', "Dehradun, Uttarakhand")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k4', "Help Center, Seva Network और भविष्य की आपातकालीन सहायता जैसी योजनाएँ यदि सफलतापूर्वक आगे बढ़ती हैं, तो यह समाज के लिए बहुत बड़ा योगदान साबित हो सकती हैं।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >न</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">नितिन कुलकर्णी</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k5', "Pune, Maharashtra")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k6', "Foundation के साथ जुड़कर मुझे लगा कि समाज के लिए कुछ अच्छा करने का यह सही मंच है। यहाँ हर छोटा सहयोग भी महत्वपूर्ण माना जाता है।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >र</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">रचना सिंह</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k7', "Patna, Bihar")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k8', "सनातन संस्कृति, भजन, और समाज सेवा के माध्यम से समाज में सकारात्मक बदलाव लाना सराहनीय है।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >द</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">देवेंद्र जोशी</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k9', "Ujjain, Madhya Pradesh")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k10', "बच्चों की शिक्षा और स्वास्थ्य को लेकर संस्था द्वारा किए जा रहे प्रयास वास्तव में अनुकरणीय हैं।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >स</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">सुनीता वर्मा</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k11', "Lucknow, Uttar Pradesh")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k12', "आपदा के समय तुरंत सहायता पहुँचाना इस टीम की सबसे बड़ी खासियत है। मुझे गर्व है कि मैं इनसे जुड़ा हूँ।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >र</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">राजीव मेहरा</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k13', "Jaipur, Rajasthan")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k14', "पारदर्शिता और निष्ठा के साथ काम करने वाला यह एक अद्भुत संगठन है। हर दान सही जगह पहुँचता है।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >प</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">प्रिया देशपांडे</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k15', "Nagpur, Maharashtra")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k16', "युवाओं को समाज कल्याण के कार्यों से जोड़ना और उनमें सेवा भाव जगाना एक बेहतरीन पहल है।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >अ</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">अजय चौहान</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k17', "Ahmedabad, Gujarat")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k18', "हमारी पूरी सोसाइटी हर महीने इस संस्था को सहयोग देती है। इनका काम वास्तव में धरातल पर दिखता है।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >स</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">संजय गुप्ता</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k19', "Kanpur, Uttar Pradesh")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k20', "गरीब परिवारों को आत्मनिर्भर बनाने के लिए चलाए जा रहे वोकेशनल कोर्स बहुत ही असरदार हैं।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >म</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">मीनाक्षी राव</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k21', "Bengaluru, Karnataka")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k22', "वृद्ध आश्रमों में भोजन और मेडिकल सहायता उपलब्ध कराना एक बहुत ही पवित्र कार्य है।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >व</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">विशाल पांडे</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k23', "Varanasi, Uttar Pradesh")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k24', "साफ़ नियत और स्पष्ट विज़न के साथ काम करने वाली यह संस्था समाज का ताना-बाना मजबूत कर रही है।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >क</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">कविता पाटिल</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k25', "Nashik, Maharashtra")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k26', "मेडिकल कैंप्स के जरिए दूर-दराज के गाँवों तक स्वास्थ्य सेवाएँ पहुँचाना एक क्रांतिकारी कदम है।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >ड</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">डॉ. अलका भट्ट</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k27', "Shimla, Himachal Pradesh")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k28', "वालंटियर के रूप में काम करते हुए मुझे जो आत्मसंतोष मिला है, उसे शब्दों में बयां नहीं किया जा सकता।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >र</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">रोहन खन्ना</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k29', "Delhi NCR")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white border border-[#efeae4] rounded-2xl p-7 text-left flex flex-col justify-between transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ea580c]/10 hover:border-[#fbd6c6] cursor-pointer select-none"
              >
                <div>
                  <div className="font-serif text-3xl font-bold text-[#ea580c] leading-none mb-3">“</div>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
                    {t(text, 'community-voices-k30', "ईमानदारी और समर्पण का दूसरा नाम है यह संस्था। समाज के हर वर्ग को साथ लेकर चलना इनकी ताकत है।")}
                  </p>
                </div>
                <div>
                  <div className="h-[1px] bg-[#f1ebe5] mb-5"></div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-11 h-11 rounded-full bg-gradient-to-br from-[#ea580c] to-[#f97316] text-white font-bold text-lg flex items-center justify-center shrink-0"
                    >म</div>
                    <div>
                      <h4 className="font-bold text-sm text-neutral-900">मनोज जोशी</h4>
                      <p className="text-xs text-neutral-400 mt-0.5">{t(text, 'community-voices-k31', "Indore, Madhya Pradesh")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white border border-neutral-200 rounded-full flex items-center justify-center text-neutral-700 shadow-md hover:bg-[#ea580c] hover:text-white hover:border-[#ea580c] active:scale-95 transition-all duration-200 cursor-pointer touch-manipulation"
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
        </div>
      </div>
    </section>
  )
}
