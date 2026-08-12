import { getPageContent, img, t } from '@/lib/sanity/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "सनातन हेल्प सेंटर | सनातन धर्म मानव कल्याण फाउंडेशन",
  description: "सनातन हेल्प सेंटर — सहायता • मार्गदर्शन • सहयोग. सनातन हेल्प सेंटर का उद्देश्य सनातनी समाज के प्रत्येक जरूरतमंद व्यक्ति एवं परिवार को मार्गदर्शन, सहायता एवं सहयोग उपलब्ध कराना है। सेवाएँ पूर्णतः निःशुल्क होंगी।",
}

export default async function FutureActivitiesSanatanHelpCenterPage() {
  const { text, images } = await getPageContent("/future-activities/sanatan-help-center")
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
          <span>{t(text, 'k3', "सनातन हेल्प सेंटर")}</span>
        </div>
        <p className="hero-eyebrow deva">{t(text, 'k4', "आगामी सेवा मिशन")}</p>
        <h1 className="hero-title deva">सनातन हेल्प सेंटर</h1>
        <p className="hero-tagline deva">{t(text, 'k5', "सहायता • मार्गदर्शन • सहयोग")}</p>
        <span className="status-badge deva">{t(text, 'k6', "Planned / Deploying")}</span>
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
          {t(text, 'k9', "सनातन हेल्प सेंटर एक सेवा-आधारित सहायता मंच है, जिसका उद्देश्य जरूरतमंद व्यक्तियों एवं परिवारों तक समय पर सही जानकारी, मार्गदर्शन और सहयोग पहुँचाना है। अनेक लोग जानकारी के अभाव, संसाधनों की कमी या उचित मार्गदर्शन न मिलने के कारण कठिनाइयों का सामना करते हैं; यह केंद्र उनके लिए सहयोग का माध्यम बनने का प्रयास करेगा।")}
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          {t(text, 'k10', "इस केंद्र के माध्यम से सामाजिक, कानूनी, प्रशासनिक, दस्तावेज़ी, रोजगार, स्वास्थ्य, शिक्षा तथा अन्य आवश्यक सेवाओं से संबंधित प्राथमिक मार्गदर्शन एवं सहायता उपलब्ध कराने का प्रयास किया जाएगा। हमारा लक्ष्य सहायता को सरल, सम्मानजनक और जरूरतमंदों तक सुलभ बनाना है।")}
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          {t(text, 'k11', "सनातन हेल्प सेंटर द्वारा प्रदान की जाने वाली मार्गदर्शन एवं सहयोग सेवाएँ पूर्णतः निःशुल्क (Free of Cost) होंगी। केवल सरकारी विभागों, संस्थाओं अथवा तृतीय-पक्ष सेवा प्रदाताओं द्वारा निर्धारित शुल्क, फीस या अन्य देय राशि का भुगतान संबंधित व्यक्ति को स्वयं करना होगा।")}
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          {t(text, 'k12', "हमारा विश्वास है कि सही समय पर मिला मार्गदर्शन किसी व्यक्ति, परिवार या जीवन की दिशा बदल सकता है। यह केंद्र सेवा, करुणा और सामाजिक उत्तरदायित्व की भावना पर आधारित एक जनसहयोग पहल है।")}
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">{t(text, 'k13', "आपका सहयोग इस सेवा मिशन को नई शक्ति दे सकता है।")}</p>
      </div>
      {/* Sankalp Box */}
      <div className="sankalp-box deva">{t(text, 'k14', "कोई भी जरूरतमंद अकेला न रहे — यही सनातन हेल्प सेंटर का संकल्प है।")}</div>
      {/* Support Action Card (Only Bottom 3 Action Buttons) */}
      <div className="support-card">
        <h2 className="support-title deva">सहयोग एवं सहभागिता माध्यम</h2>
        <div className="action-btns">
          <Link href="/donate" className="btn-donate">{t(text, 'k15', "Donate")}</Link>
          {' '}
          <Link href="/membership" className="btn-join">{t(text, 'k16', "Join")}</Link>
          {' '}
          <button
            className="btn-share"
            data-legacy-onclick="if(navigator.share){navigator.share({title:'सनातन हेल्प सेंटर',text:' कोई भी जरूरतमंद अकेला न रहे — यही सनातन हेल्प सेंटर का संकल्प है।',url:window.location.href})}else{navigator.clipboard.writeText(window.location.href);alert('लिंक कॉपी किया गया!')}"
          >Share</button>
        </div>
      </div>
    </div>
    </div>
  )
}
