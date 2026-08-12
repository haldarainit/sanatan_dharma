import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "सनातनी स्किल डेवलपमेंट सेंटर | सनातन धर्म मानव कल्याण फाउंडेशन",
  description: "सनातनी स्किल डेवलपमेंट सेंटर — कौशल • स्वावलंबन • सम्मान. युवाओं, महिलाओं एवं जरूरतमंद परिवारों को कौशल प्रशिक्षण देकर आत्मनिर्भर बनाना। कौशल विकास आत्मविश्वास, स्वाभिमान और सुरक्षित भविष्य का आधार है।",
}

export default function FutureActivitiesSkillDevelopmentPage() {
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
          <span>सनातनी स्किल डेवलपमेंट सेंटर</span>
        </div>
        <p className="hero-eyebrow deva">आगामी सेवा मिशन</p>
        <h1 className="hero-title deva">सनातनी स्किल डेवलपमेंट सेंटर</h1>
        <p className="hero-tagline deva">कौशल • स्वावलंबन • सम्मान</p>
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
          सनातनी स्किल डेवलपमेंट सेंटर एक भावी सेवा मिशन है, जिसका उद्देश्य युवाओं, महिलाओं एवं आर्थिक रूप से कमजोर परिवारों को उपयोगी कौशल प्रशिक्षण प्रदान कर आत्मनिर्भर बनाना है। अनेक प्रतिभाशाली लोग अवसर, प्रशिक्षण और मार्गदर्शन के अभाव में अपनी क्षमता का पूर्ण उपयोग नहीं कर पाते; यह केंद्र उनके लिए सशक्तिकरण और सम्मानजनक जीवन का माध्यम बनेगा।
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          हमारा मूल संकल्प है कि समाज का प्रत्येक परिवार अपनी मेहनत और कौशल के बल पर रोटी, कपड़ा और मकान जैसी जीवन की मूलभूत आवश्यकताओं को सम्मानपूर्वक प्राप्त कर सके। यह मिशन दान पर स्थायी निर्भरता नहीं, बल्कि आत्मनिर्भरता, स्वाभिमान और दीर्घकालिक सशक्तिकरण की दिशा में कार्य करेगा।
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          इस मिशन के अंतर्गत कंप्यूटर प्रशिक्षण, डिजिटल कौशल, स्वरोजगार, लघु उद्योग, हस्तकला, सेवा व्यवसाय, उद्यमिता तथा जीवनोपयोगी कौशलों से संबंधित प्रशिक्षण कार्यक्रम विकसित करने का लक्ष्य है। हमारा प्रयास है कि प्रशिक्षण केवल प्रमाणपत्र तक सीमित न रहे, बल्कि रोजगार, आयवृद्धि, परिवार की आर्थिक स्थिरता और सम्मानजनक जीवन से सीधे जुड़ सके।
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          हम मानते हैं कि जब एक व्यक्ति आत्मनिर्भर बनता है, तब पूरा परिवार सशक्त होता है; जब हजारों परिवार सशक्त होते हैं, तब समाज बदलता है; और जब समाज बदलता है, तब राष्ट्र मजबूत बनता है। इसलिए यह मिशन केवल कौशल प्रशिक्षण नहीं, बल्कि आत्मनिर्भर भारत और संस्कारित समाज निर्माण की आधारशिला है।
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">
          हम चरणबद्ध रूप से प्रशिक्षण केंद्र, स्वरोजगार सहायता, उद्यमिता मार्गदर्शन, रोजगार संपर्क एवं सामुदायिक सहयोग तंत्र विकसित करने का संकल्प लेकर आगे बढ़ रहे हैं। आपका सहयोग इस स्वप्न को वास्तविकता में बदलने की महत्वपूर्ण शक्ति बन सकता है।
        </p>
        <p className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify">आपका सहयोग इस कौशल विकास मिशन को नई शक्ति दे सकता है।</p>
      </div>
      {/* Sankalp Box */}
      <div className="sankalp-box deva">
        कौशल से रोजगार, रोजगार से स्वावलंबन, स्वावलंबन से सम्मान और सम्मान से सशक्त राष्ट्र का निर्माण होता है। आइए, मिलकर ऐसा समाज बनाएँ जहाँ हर परिवार आत्मनिर्भर, सुरक्षित और सम्मानित जीवन जी सके।
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
            data-legacy-onclick="if(navigator.share){navigator.share({title:'सनातनी स्किल डेवलपमेंट सेंटर',text:' कौशल से रोजगार, रोजगार से स्वावलंबन, स्वावलंबन से सम्मान और सम्मान से सशक्त राष्ट्र का निर्माण होता है। आइए, मिलकर ऐसा समाज बनाएँ जहाँ हर परिवार आत्मनिर्भर, सुरक्षित और सम्मानित जीवन जी सके।',url:window.location.href})}else{navigator.clipboard.writeText(window.location.href);alert('लिंक कॉपी किया गया!')}"
          >Share</button>
        </div>
      </div>
    </div>
    </div>
  )
}
