'use client'

import { img, t, type ImageMap, type TextMap } from '@/lib/sanity/content'
import { useState } from 'react'
import Link from 'next/link'

export default function LongTermCommitment({ text, images }: { text?: TextMap; images?: ImageMap }) {
  const [open, setOpen] = useState(false)

  return (
    <section
      className="w-full flex justify-center p-4 md:p-8 bg-gray-50 border-t border-saffron-100 font-sans sd-gap"
    >
      <div
        className={'rounded-3xl max-w-5xl w-full p-6 md:p-10 text-center shadow-sm sd-commitment-box' + (open ? ' is-open' : '')}
      >
        <button type="button" className="sd-commitment-close" aria-label="Close" onClick={() => setOpen(false)}>&times;</button>
        <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-white mb-1.5">
          Long-Term{' '}
          <span className="block sm:inline sd-cm-accent">{t(text, 'long-term-commitment-k1', "Commitment")}</span>
        </h2>
        <p className="deva sd-cm-sub font-semibold text-[15px] sm:text-lg tracking-wide mb-6">{t(text, 'long-term-commitment-k2', "हमारा दीर्घकालिक संकल्प।")}</p>
        <h2
          className="text-xl md:text-2xl font-bold sd-cm-lead leading-relaxed max-w-4xl mx-auto mb-6"
        >
          {t(text, 'long-term-commitment-k3', "“सेवा, सहायता, संस्कार, सुरक्षा एवं आत्मनिर्भरता के माध्यम से एक सशक्त, जागरूक, संगठित एवं आत्मनिर्भर समाज का निर्माण करना हमारा लक्ष्य है।”")}
        </h2>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sd-commitment-toggle inline-flex items-center gap-2 px-6 py-2.5 text-sm sd-btn sd-btn--view-details"
        >
          <span>{open ? 'Show Less' : 'Know More'}</span>
          <span>{open ? '▲' : '▼'}</span>
        </button>
        <div className="sd-commitment-panel">
          <p className="sd-cm-p">
            {t(text, 'long-term-commitment-k4', "सनातन धर्म मानव कल्याण फाउंडेशन का उद्देश्य केवल वर्तमान समस्याओं का समाधान करना नहीं, बल्कि आने वाली पीढ़ियों के लिए एक सुरक्षित, संस्कारित, संगठित एवं आत्मनिर्भर समाज की मजबूत नींव तैयार करना है।")}
          </p>
          <p className="sd-cm-p">
            {t(text, 'long-term-commitment-k5', "हमारा प्रथम संकल्प सनातन समाज को संगठित, सुरक्षित, जागरूक एवं सशक्त बनाना है, ताकि आवश्यकता पड़ने पर प्रत्येक सनातनी को सहयोग, मार्गदर्शन एवं सहायता का एक विश्वसनीय मंच उपलब्ध हो सके।")}
          </p>
          <p className="sd-cm-p">
            {t(text, 'long-term-commitment-k6', "हम मानते हैं कि वास्तविक परिवर्तन केवल सहायता प्रदान करने से नहीं, बल्कि समाज को जागरूक, संगठित और आत्मनिर्भर बनाने से आता है। इसी विचार के साथ संस्था सेवा, संस्कार, सामाजिक उत्तरदायित्व, महिला सुरक्षा, स्वास्थ्य सहायता, शिक्षा, गौ सेवा, पर्यावरण संरक्षण एवं जनजागरण के विभिन्न क्षेत्रों में दीर्घकालिक कार्य करने के लिए प्रतिबद्ध है।")}
          </p>
          <div className="sd-cm-head">
            <span>{t(text, 'long-term-commitment-k7', "हमारी कार्य दिशा")}</span>
          </div>
          <div className="sd-cm-grid">
            <div className="sd-cm-card">
              <h4>सेवा एवं मानव कल्याण</h4>
              <p>
                {t(text, 'long-term-commitment-k8', "कोई भूखा न सोए, कोई असहाय अकेला न रहे और आवश्यकता पड़ने पर प्रत्येक सनातनी को समय पर सहयोग एवं सहायता प्राप्त हो सके — इसी उद्देश्य से विभिन्न सेवा, सहायता एवं जनकल्याण कार्यक्रमों का संचालन किया जाता है। साथ ही आवश्यकता अनुसार अन्य जरूरतमंद लोगों तक भी मानवीय सहायता पहुँचाने का प्रयास किया जाता है।")}
              </p>
            </div>
            <div className="sd-cm-card">
              <h4>शिक्षा, संस्कार एवं जनजागरण</h4>
              <p>
                {t(text, 'long-term-commitment-k9', "बच्चों, युवाओं एवं समाज में नैतिक मूल्यों, भारतीय संस्कृति, सनातन परंपराओं, सामाजिक उत्तरदायित्व एवं राष्ट्रहित की भावना को सुदृढ़ करना तथा जागरूक एवं संस्कारित समाज के निर्माण में योगदान देना।")}
              </p>
            </div>
            <div className="sd-cm-card">
              <h4>महिला सुरक्षा, सम्मान एवं सशक्तीकरण</h4>
              <p>
                {t(text, 'long-term-commitment-k10', "महिलाओं की सुरक्षा हमारी सर्वोच्च प्राथमिकताओं में से एक है। महिला सुरक्षा, सम्मान, जागरूकता, आत्मनिर्भरता एवं अधिकारों के संरक्षण हेतु सहयोग, मार्गदर्शन, सहायता एवं जनजागरण अभियान संचालित किए जाते हैं। हमारा प्रयास है कि प्रत्येक महिला स्वयं को सुरक्षित, सम्मानित, सक्षम और आत्मविश्वासी महसूस करे तथा उसे उसके अधिकार एवं सम्मान प्राप्त हों।")}
              </p>
            </div>
            <div className="sd-cm-card">
              <h4>स्वास्थ्य सहायता एवं राहत कार्य</h4>
              <p>
                {t(text, 'long-term-commitment-k11', "आर्थिक रूप से कमजोर, असहाय एवं जरूरतमंद सनातनी परिवारों को स्वास्थ्य सहायता, चिकित्सा सहयोग, रक्तदान, आपदा राहत एवं आपातकालीन सहायता उपलब्ध कराने के लिए निरंतर प्रयास करना। आवश्यकता अनुसार अन्य जरूरतमंद व्यक्तियों तक भी मानवीय सहयोग पहुँचाने का प्रयास किया जाता है।")}
              </p>
            </div>
            <div className="sd-cm-card">
              <h4>गौ सेवा एवं पर्यावरण संरक्षण</h4>
              <p>
                {t(text, 'long-term-commitment-k12', "गौ संरक्षण, गौ सेवा, वृक्षारोपण, जल संरक्षण एवं पर्यावरण जागरूकता के माध्यम से प्रकृति एवं जीव-जगत के प्रति अपनी जिम्मेदारियों का निर्वहन करना।")}
              </p>
            </div>
            <div className="sd-cm-card">
              <h4>संगठन, सुरक्षा एवं सामाजिक सहयोग</h4>
              <p>
                {t(text, 'long-term-commitment-k13', "सनातन समाज को एक सशक्त, संगठित एवं सहयोगी नेटवर्क से जोड़ना, सामाजिक जागरूकता बढ़ाना, गलत गतिविधियों के प्रति सतर्कता विकसित करना तथा आवश्यकता पड़ने पर सहयोग एवं मार्गदर्शन उपलब्ध कराना।")}
              </p>
            </div>
            <div className="sd-cm-card sd-cm-card--wide">
              <h4>आत्मनिर्भर एवं सशक्त समाज निर्माण</h4>
              <p>
                {t(text, 'long-term-commitment-k14', "कौशल विकास, मार्गदर्शन, जनसहभागिता, स्वयंसेवा एवं सामुदायिक सहयोग के माध्यम से ऐसे समाज का निर्माण करना जहाँ व्यक्ति केवल सहायता प्राप्त करने वाला नहीं, बल्कि दूसरों की सहायता करने में भी सक्षम बन सके।")}
              </p>
            </div>
          </div>
          <div className="sd-cm-head">
            <span>{t(text, 'long-term-commitment-k15', "हमारा विश्वास")}</span>
          </div>
          <div className="sd-cm-center">
            <p className="sd-cm-p">
              {t(text, 'long-term-commitment-k16', "हमारा विश्वास है कि जब सेवा संस्कारों से जुड़ती है, सुरक्षा संगठन से जुड़ती है और समाज जागरूक होकर एक साथ खड़ा होता है, तब परिवर्तन केवल एक अभियान नहीं रहता — वह एक स्थायी सामाजिक शक्ति बन जाता है।")}
            </p>
            <p className="sd-cm-p">
              {t(text, 'long-term-commitment-k17', "हम ऐसा समाज देखना चाहते हैं जहाँ प्रत्येक सनातनी स्वयं को सुरक्षित, सम्मानित, जागरूक एवं संगठित महसूस करे, जहाँ सेवा जीवन का संस्कार बने और जहाँ समाज का प्रत्येक सक्षम व्यक्ति किसी न किसी रूप में मानव कल्याण का सहभागी बने।")}
            </p>
            <p className="sd-cm-p">
              {t(text, 'long-term-commitment-k18', "इसी विश्वास और संकल्प के साथ सनातन धर्म मानव कल्याण फाउंडेशन सेवा, सुरक्षा, संस्कार एवं आत्मनिर्भरता आधारित समाज निर्माण के लिए निरंतर कार्यरत है।")}
            </p>
          </div>
          <div className="sd-cm-head">
            <span>{t(text, 'long-term-commitment-k19', "आप भी इस मिशन का हिस्सा बनें")}</span>
          </div>
          <p className="sd-cm-p sd-cm-center">
            {t(text, 'long-term-commitment-k20', "सेवा का संकल्प लें, समाज से जुड़ें और सकारात्मक परिवर्तन के सहभागी बनें।")}
          </p>
          <div className="sd-cm-actions">
            <Link className="px-6 py-2.5 text-sm sd-btn sd-btn--join-mission" href="/membership">{t(text, 'long-term-commitment-k21', "Join Us")}</Link>
            <Link className="px-6 py-2.5 text-sm sd-btn sd-btn--donate-now" href="/donate">{t(text, 'long-term-commitment-k22', "Donate Now")}</Link>
            <Link className="px-6 py-2.5 text-sm sd-btn sd-btn--donate-now" href="/donate">{t(text, 'long-term-commitment-k23', "Daily Support")}</Link>
            <Link className="px-6 py-2.5 text-sm sd-btn sd-btn--start-fundraising" href="/start-fundraiser">{t(text, 'long-term-commitment-k24', "Start Fundraising")}</Link>
          </div>
          <div className="sd-cm-quote">{t(text, 'long-term-commitment-k25', "“सेवा ही सनातन, समर्पण ही हमारा धर्म।”")}</div>
        </div>
      </div>
    </section>
  )
}
