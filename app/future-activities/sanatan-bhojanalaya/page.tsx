import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "सनातनी भोजनालय | सनातन धर्म मानव कल्याण फाउंडेशन",
  description: "सनातनी भोजनालय — अन्न सेवा • सम्मान • संतोष. सनातनी भोजनालय का उद्देश्य जरूरतमंद, श्रमिक, वृद्ध एवं असहाय लोगों तक सम्मानपूर्वक भोजन पहुँचाना है। यह सेवा करुणा और मानव सेवा का एक सतत प्रयास है।",
}

export default function FutureActivitiesSanatanBhojanalayaPage() {
  return (
    <div className="mission-page">
    {/* HERO */}
    <section className="hero-section">
      <div className="hero-inner">
        <div className="breadcrumb">
          <Link href="/">होम</Link>
          {' '}
          <span>›</span>
          {' '}
          <Link href="/future-activities">आगामी सेवा मिशन</Link>
          {' '}
          <span>›</span>
          {' '}
          <span>सनातनी भोजनालय</span>
        </div>
        <p className="hero-eyebrow deva">आगामी सेवा मिशन</p>
        <h1 className="hero-title deva">सनातनी भोजनालय</h1>
        <p className="hero-tagline deva">अन्न सेवा • सम्मान • संतोष</p>
        <span className="status-badge deva">Upcoming</span>
      </div>
    </section>
    {/* CONTENT */}
    <div className="content-wrap">
      <Link href="/future-activities" className="back-btn">← आगामी सेवा मिशन सूची पर वापस जाएँ</Link>
      {/* Description card */}
      <div className="desc-card">
        <div>
          <p className="section-heading deva">मिशन परिचय</p>
          <div className="divider"></div>
        </div>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          सनातनी भोजनालय एक भावी सेवा मिशन है, जिसका उद्देश्य जरूरतमंद व्यक्तियों एवं परिवारों तक सम्मानपूर्वक भोजन पहुँचाना है। भूख केवल शारीरिक आवश्यकता नहीं, बल्कि मानव गरिमा से जुड़ा विषय है; इसलिए इस अभियान का केंद्रबिंदु "सम्मान सहित भोजन" है।
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          इस सेवा के अंतर्गत गरीब, श्रमिक, वृद्ध, निराश्रित, रोगी, यात्री एवं आर्थिक रूप से कमजोर लोगों को निःशुल्क अथवा सहयोग आधारित भोजन उपलब्ध कराने की व्यवस्था विकसित करने का लक्ष्य है। हमारा प्रयास है कि भोजन सेवा नियमित, स्वच्छ, पौष्टिक और व्यवस्थित रूप से संचालित हो।
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          यह मिशन समाज में करुणा, दान, सहभागिता और सामूहिक उत्तरदायित्व की भावना को सुदृढ़ करने का माध्यम बनेगा। हम मानते हैं कि जब समाज मिलकर अन्न सेवा करता है, तब केवल पेट ही नहीं भरता, बल्कि विश्वास और मानवता भी मजबूत होती है।
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">आपका सहयोग इस अन्न सेवा मिशन को नई शक्ति दे सकता है।</p>
      </div>
      {/* Sankalp Box */}
      <div className="sankalp-box deva">
        अन्न सेवा सबसे महान सेवाओं में से एक है। आइए, मिलकर ऐसा समाज बनाएँ जहाँ कोई भी भूखा न सोए।
      </div>
      {/* Support Action Card (Only Bottom 3 Action Buttons) */}
      <div className="support-card">
        <h2 className="support-title deva">सहयोग एवं सहभागिता माध्यम</h2>
        <div className="action-btns">
          <Link href="/donate" className="btn-donate">Donate</Link>
          {' '}
          <Link href="/membership" className="btn-join">Join</Link>
          {' '}
          <button
            className="btn-share"
            data-legacy-onclick="if(navigator.share){navigator.share({title:'सनातनी भोजनालय',text:' अन्न सेवा सबसे महान सेवाओं में से एक है। आइए, मिलकर ऐसा समाज बनाएँ जहाँ कोई भी भूखा न सोए।',url:window.location.href})}else{navigator.clipboard.writeText(window.location.href);alert('लिंक कॉपी किया गया!')}"
          >Share</button>
        </div>
      </div>
    </div>
    </div>
  )
}
