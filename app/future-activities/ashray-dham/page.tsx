import { getPageContent, img, t } from '@/lib/sanity/content'
import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "सनातनी आश्रय धाम | सनातन धर्म मानव कल्याण फाउंडेशन",
  description: "सनातनी आश्रय धाम — आश्रय • सुरक्षा • करुणा. निराश्रित, असहाय, वृद्ध एवं बेसहारा व्यक्तियों को सुरक्षित आश्रय, संरक्षण और सम्मानपूर्ण जीवन उपलब्ध कराना — यही सनातनी आश्रय धाम का संकल्प है।",
}

export default async function FutureActivitiesAshrayDhamPage() {
  const { text, images } = await getPageContent("/future-activities/ashray-dham")
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
          <span>{t(text, 'k3', "सनातनी आश्रय धाम")}</span>
        </div>
        <p className="hero-eyebrow deva">{t(text, 'k4', "आगामी सेवा मिशन")}</p>
        <h1 className="hero-title deva">सनातनी आश्रय धाम</h1>
        <p className="hero-tagline deva">{t(text, 'k5', "आश्रय • सुरक्षा • करुणा")}</p>
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
          {t(text, 'k9', "सनातनी आश्रय धाम एक भावी सेवा मिशन है, जिसका उद्देश्य निराश्रित, असहाय, वृद्ध, संकटग्रस्त, परित्यक्त एवं बेसहारा व्यक्तियों को सुरक्षित आश्रय, संरक्षण और सम्मानपूर्ण वातावरण प्रदान करना है। समाज में अनेक लोग आर्थिक, सामाजिक या पारिवारिक परिस्थितियों के कारण असुरक्षित जीवन जीने को विवश हो जाते हैं; यह मिशन उनके लिए आशा, सुरक्षा और पुनर्स्थापना का केंद्र बनने का प्रयास करेगा।")}
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          {t(text, 'k10', "हमारा मूल संकल्प है कि कोई भी जरूरतमंद व्यक्ति स्वयं को अकेला, असुरक्षित या निराश न महसूस करे। आश्रय धाम के माध्यम से सुरक्षित निवास, भोजन, वस्त्र, स्वास्थ्य सहयोग, परामर्श, भावनात्मक समर्थन तथा पुनर्वास से संबंधित सेवाएँ चरणबद्ध रूप से विकसित करने का लक्ष्य है।")}
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          {t(text, 'k11', "यह मिशन दया नहीं, बल्कि मानव गरिमा के सम्मान पर आधारित है। हम मानते हैं कि प्रत्येक व्यक्ति को सुरक्षित जीवन, सम्मान और अवसर का अधिकार है। जब किसी निराश व्यक्ति को आश्रय मिलता है, तब केवल उसका जीवन नहीं बदलता, बल्कि समाज में संवेदनशीलता और करुणा की भावना भी मजबूत होती है।")}
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          {t(text, 'k12', "भविष्य में हमारा लक्ष्य ऐसे आश्रय केंद्र विकसित करना है जहाँ जरूरतमंदों को केवल रहने की जगह ही नहीं, बल्कि आत्मनिर्भरता, सामाजिक पुनर्स्थापना और सम्मानपूर्वक जीवन जीने की दिशा में सहयोग प्राप्त हो सके।")}
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">{t(text, 'k13', "आपका सहयोग इस आश्रय मिशन को नई शक्ति दे सकता है।")}</p>
      </div>
      {/* Sankalp Box */}
      <div className="sankalp-box deva">
        {t(text, 'k14', "सुरक्षित आश्रय केवल छत नहीं, बल्कि सम्मान, सुरक्षा और नए जीवन की शुरुआत है। आइए, मिलकर ऐसा समाज बनाएँ जहाँ कोई भी बेसहारा न रहे।")}
      </div>
      {/* Support Action Card (Only Bottom 3 Action Buttons) */}
      <div className="support-card">
        <h2 className="support-title deva">सहयोग एवं सहभागिता माध्यम</h2>
        <div className="action-btns">
          <Link href="/donate" className="btn-donate">{t(text, 'k15', "Donate")}</Link>
          {' '}
          <Link href="/membership" className="btn-join">{t(text, 'k16', "Join")}</Link>
          {' '}
          <ShareButton title="सनातनी आश्रय धाम" />
        </div>
      </div>
    </div>
    </div>
  )
}
