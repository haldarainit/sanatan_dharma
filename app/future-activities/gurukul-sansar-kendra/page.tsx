import { getPageContent, img, t } from '@/lib/sanity/content'
import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "सनातन गुरुकुल एवं संस्कार केंद्र | सनातन धर्म मानव कल्याण फाउंडेशन",
  description: "सनातन गुरुकुल एवं संस्कार केंद्र — शिक्षा • संस्कार • संस्कृति. बच्चों और युवाओं में शिक्षा, संस्कार, चरित्र निर्माण तथा सनातन सांस्कृतिक मूल्यों का विकास। संस्कारित पीढ़ी ही सशक्त समाज और सुदृढ़ राष्ट्र की आधारशिला होती है।",
}

export default async function FutureActivitiesGurukulSansarKendraPage() {
  const { text, images } = await getPageContent("/future-activities/gurukul-sansar-kendra")
  return (
    <div className="mission-page">
    {/* HERO */}
    <section className="hero-section">
      <div className="hero-inner">
        <div className="breadcrumb">
          <Link href="/">{t(text, 'k1', "होम")}</Link>
          {' '}
          <span>›</span>
          {' '}
          <Link href="/future-activities">{t(text, 'k2', "आगामी सेवा मिशन")}</Link>
          {' '}
          <span>›</span>
          {' '}
          <span>{t(text, 'k3', "सनातन गुरुकुल एवं संस्कार केंद्र")}</span>
        </div>
        <p className="hero-eyebrow deva">{t(text, 'k4', "आगामी सेवा मिशन")}</p>
        <h1 className="hero-title deva">सनातन गुरुकुल एवं संस्कार केंद्र</h1>
        <p className="hero-tagline deva">{t(text, 'k5', "शिक्षा • संस्कार • संस्कृति")}</p>
        <span className="status-badge deva">{t(text, 'k6', "Upcoming")}</span>
      </div>
    </section>
    {/* CONTENT */}
    <div className="content-wrap">
      <Link href="/future-activities" className="back-btn">{t(text, 'k7', "← आगामी सेवा मिशन सूची पर वापस जाएँ")}</Link>
      {/* Description card */}
      <div className="desc-card">
        <div>
          <p className="section-heading deva">{t(text, 'k8', "मिशन परिचय")}</p>
          <div className="divider"></div>
        </div>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          {t(text, 'k9', "सनातन गुरुकुल एवं संस्कार केंद्र एक भावी सेवा मिशन है, जिसका उद्देश्य बच्चों, किशोरों और युवाओं को शिक्षा, संस्कार, चरित्र निर्माण तथा सनातन सांस्कृतिक मूल्यों से जोड़ना है। वर्तमान समय में ज्ञान के साथ नैतिकता, अनुशासन, परिवार सम्मान, सेवा भावना और सांस्कृतिक चेतना का संतुलन अत्यंत आवश्यक है; यह केंद्र उसी संतुलित व्यक्तित्व निर्माण की दिशा में कार्य करने का संकल्प रखता है।")}
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          {t(text, 'k10', "हमारा मूल उद्देश्य ऐसी पीढ़ी तैयार करना है जो आधुनिक ज्ञान से सक्षम हो, भारतीय संस्कृति से जुड़ी हो, परिवार और समाज के प्रति उत्तरदायी हो तथा राष्ट्रहित को सर्वोपरि मानकर जीवन जी सके। यह मिशन शिक्षा को केवल रोजगार का साधन नहीं, बल्कि व्यक्तित्व, चरित्र और जीवन मूल्यों के निर्माण का माध्यम मानता है।")}
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          {t(text, 'k11', "इस केंद्र के अंतर्गत संस्कार शिक्षा, नैतिक शिक्षा, भारतीय इतिहास एवं संस्कृति परिचय, योग, ध्यान, जीवन कौशल, व्यक्तित्व विकास, सेवा प्रशिक्षण, अध्यात्म एवं सांस्कृतिक गतिविधियों से संबंधित कार्यक्रम विकसित करने का लक्ष्य है। हमारा प्रयास है कि बच्चे और युवा आत्मविश्वासी, अनुशासित, संवेदनशील और समाजोपयोगी नागरिक बनें।")}
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          {t(text, 'k12', "हम मानते हैं कि जब बच्चों को सही शिक्षा और संस्कार मिलते हैं, तब परिवार मजबूत होते हैं; जब परिवार मजबूत होते हैं, तब समाज सशक्त बनता है; और जब समाज सशक्त बनता है, तब राष्ट्र उज्ज्वल भविष्य की ओर अग्रसर होता है। इसलिए यह मिशन आने वाली पीढ़ियों के भविष्य में एक दीर्घकालिक निवेश है।")}
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">{t(text, 'k13', "आपका सहयोग इस गुरुकुल एवं संस्कार मिशन को नई शक्ति दे सकता है।")}</p>
      </div>
      {/* Sankalp Box */}
      <div className="sankalp-box deva">
        {t(text, 'k14', "ज्ञान से बुद्धि, संस्कार से चरित्र और चरित्र से महान राष्ट्र का निर्माण होता है। आइए, मिलकर आने वाली पीढ़ियों के उज्ज्वल भविष्य का निर्माण करें।")}
      </div>
      {/* Support Action Card (Only Bottom 3 Action Buttons) */}
      <div className="support-card">
        <h2 className="support-title deva">सहयोग एवं सहभागिता माध्यम</h2>
        <div className="action-btns">
          <Link href="/donate" className="btn-donate">{t(text, 'k15', "Donate")}</Link>
          {' '}
          <Link href="/membership" className="btn-join">{t(text, 'k16', "Join")}</Link>
          {' '}
          <ShareButton title="सनातन गुरुकुल एवं संस्कार केंद्र" />
        </div>
      </div>
    </div>
    </div>
  )
}
