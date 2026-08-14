import { img, t, type ImageMap, type TextMap } from '@/lib/sanity/content'
import Link from 'next/link'

export default function StartFundraising({ text, images }: { text?: TextMap; images?: ImageMap }) {
  return (
    <section className="w-full py-14 px-4 font-sans sd-gap sd-dark-section">
      
      <div className="sd-fr-card">
        <div className="sd-fr-head">
          <p className="sd-fr-eyebrow">{t(text, 'start-fundraising-k1', "Fundraising Support")}</p>
          <h2 className="sd-fr-title">
            Start{' '}
            <span>{t(text, 'start-fundraising-k2', "Fundraising")}</span>
          </h2>
          <p className="sd-fr-sub deva">{t(text, 'start-fundraising-k3', "निधि-संग्रह सहयोग सुविधा")}</p>
          <div className="sd-fr-rule"></div>
        </div>
        <p className="sd-fr-lead deva">
          {t(text, 'start-fundraising-k4', "आइए, मिलकर किसी मजबूर, लाचार एवं असहाय जरूरतमंद की आवश्यकता पूरी करें — आपका मामूली सहयोग भी उसके जीवन में अमूल्य महत्व रखता है।")}
        </p>
        <div className="sd-fr-body">
          <p className="sd-fr-p deva">
            {t(text, 'start-fundraising-k5', "हर Mission (अभियान) के पीछे एक वास्तविक जरूरत, एक संघर्ष और एक नई उम्मीद छिपी होती है।")}
          </p>
          <p className="sd-fr-p deva">
            सनातन धर्म मानव कल्याण फाउंडेशन के माध्यम से आप{' '}
            <strong>{t(text, 'start-fundraising-k6', "Verified Missions")}</strong>
            ,{' '}
            <strong>{t(text, 'start-fundraising-k7', "Social Causes")}</strong>
            {' '}एवं{' '}
            <strong>{t(text, 'start-fundraising-k8', "Genuine Need Cases")}</strong>
            {' '}के लिए Fundraising Request प्रस्तुत कर सकते हैं।
          </p>
          <p className="sd-fr-p deva">
            {t(text, 'start-fundraising-k9', "यह सुविधा संस्था की निगरानी एवं निर्धारित नीतियों के अनुसार संचालित की जाती है, ताकि आपका सहयोग सही व्यक्ति, सही उद्देश्य और सही समय पर पहुँच सके।")}
          </p>
          <p className="sd-fr-p deva">
            {t(text, 'start-fundraising-k10', "एक छोटी सी सहायता किसी के उपचार, भोजन, शिक्षा, सुरक्षा या सम्मानपूर्ण जीवन का आधार बन सकती है। आपका सहयोग केवल आर्थिक सहायता नहीं, बल्कि मानवता, करुणा और सनातन सेवा भाव का सशक्त प्रतीक है।")}
          </p>
        </div>
        <div className="sd-fr-actions">
          <Link href="/start-fundraiser" className="sd-fr-btn sd-btn sd-btn--start-fundraising">
            <span>{t(text, 'start-fundraising-k11', "Start Fundraising")}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
