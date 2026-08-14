'use client'

import { img, t, type ImageMap, type TextMap } from '@/lib/sanity/content'
import { useState } from 'react'
import Link from 'next/link'

export default function SevaActivities({ text, images }: { text?: TextMap; images?: ImageMap }) {
  /* opening one card closes the others */
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="w-full bg-gray-50 py-12 px-4 border-t border-saffron-100 font-sans sd-gap">
      
      
      <div className="sd-mj-head">
        <h2 className="sd-mj-title deva">
          सेवा के{' '}
          <span>{t(text, 'seva-activities-k1', "बढ़ते कदम")}</span>
        </h2>
        <p className="sd-mj-eyebrow">{t(text, 'seva-activities-k2', "Our Mission Journey")}</p>
        <p className="sd-mj-sub deva">{t(text, 'seva-activities-k3', "चल रहे, आगामी एवं पूर्ण हो चुके सेवा अभियानों की एक प्रेरक झलक।")}</p>
        <p className="sd-mj-desc deva">
          {t(text, 'seva-activities-k4', "हमारे सेवा, जनजागरण एवं विकास अभियानों की वर्तमान यात्रा — सक्रिय मिशन, सहयोग की प्रतीक्षा में चल रही भावी योजनाएँ तथा सफलतापूर्वक पूर्ण किए गए सेवा कार्य।")}
        </p>
      </div>
      <div className="sd-mj-grid">
        <article className={'sd-mj-card sd-mj-card--green card-glow-green' + (open === 0 ? ' is-open' : '')}>
          <button
            type="button"
            className="sd-mj-toggle"
            aria-expanded={open === 0}
            aria-controls="sd-mj-panel-active"
            onClick={() => setOpen(open === 0 ? null : 0)}
          >
            <span className="sd-mj-toprow">
              <span className="sd-mj-dot glow-green"></span>
              <span className="sd-mj-names">
                <span className="sd-mj-en">{t(text, 'seva-activities-k5', "Active Missions")}</span>
                <span className="sd-mj-hi deva">{t(text, 'seva-activities-k6', "सक्रिय मिशन (वर्तमान)")}</span>
              </span>
              <svg className="sd-mj-caret" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
            <span className="sd-mj-cardtext deva">
              {t(text, 'seva-activities-k7', "वर्तमान में संचालित सेवा कार्य एवं अभियान, जिनमें आपका सहयोग सकारात्मक परिवर्तन लाता है।")}
            </span>
            <span className="sd-mj-cta">
              <span className="sd-mj-count deva">{t(text, 'seva-activities-k8', "5 सक्रिय अभियान")}</span>
              <span className="sd-mj-clicklabel">{open === 0 ? 'Click to Close' : 'Click to View'}</span>
            </span>
          </button>
          <div className="sd-mj-panel" id="sd-mj-panel-active">
            <div className="sd-mj-panelinner">
              <div className="sd-mj-panelbody">
                <ul className="sd-mj-list">
                  <li>
                    <Link className="sd-mj-item" href="/activities#mission-sanatan-board">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">{t(text, 'seva-activities-k9', "सनातन बोर्ड")}</span>
                        <span className="sd-mj-inote deva">{t(text, 'seva-activities-k10', "हमारा प्रथम एवं प्रमुख मिशन")}</span>
                      </span>
                      <span className="sd-mj-badge deva">{t(text, 'seva-activities-k11', "सक्रिय")}</span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/activities#mission-mahila-suraksha">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">{t(text, 'seva-activities-k12', "महिला सुरक्षा एवं सम्मान अभियान")}</span>
                      </span>
                      <span className="sd-mj-badge deva">{t(text, 'seva-activities-k13', "सक्रिय")}</span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/activities#mission-anna-seva">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">{t(text, 'seva-activities-k14', "अन्न सेवा अभियान")}</span>
                      </span>
                      <span className="sd-mj-badge deva">{t(text, 'seva-activities-k15', "सक्रिय")}</span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/activities#mission-shiksha-sanskar">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">{t(text, 'seva-activities-k16', "शिक्षा एवं संस्कार सहायता अभियान")}</span>
                      </span>
                      <span className="sd-mj-badge deva">{t(text, 'seva-activities-k17', "सक्रिय")}</span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/activities#mission-dhokhadhadi-jagrukta">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">{t(text, 'seva-activities-k18', "धोखाधड़ी जागरूकता एवं सहायता अभियान")}</span>
                      </span>
                      <span className="sd-mj-badge deva">{t(text, 'seva-activities-k19', "सक्रिय")}</span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                </ul>
                <Link className="sd-mj-more deva" href="/activities">{t(text, 'seva-activities-k20', "सभी सक्रिय अभियान देखें →")}</Link>
              </div>
            </div>
          </div>
        </article>
        <article className={'sd-mj-card sd-mj-card--orange card-glow-orange' + (open === 1 ? ' is-open' : '')}>
          <button
            type="button"
            className="sd-mj-toggle"
            aria-expanded={open === 1}
            aria-controls="sd-mj-panel-upcoming"
            onClick={() => setOpen(open === 1 ? null : 1)}
          >
            <span className="sd-mj-toprow">
              <span className="sd-mj-dot glow-orange"></span>
              <span className="sd-mj-names">
                <span className="sd-mj-en">{t(text, 'seva-activities-k21', "Upcoming Missions")}</span>
                <span className="sd-mj-hi deva">{t(text, 'seva-activities-k22', "आगामी सेवा मिशन")}</span>
              </span>
              <svg className="sd-mj-caret" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
            <span className="sd-mj-cardtext deva">
              {t(text, 'seva-activities-k23', "प्रस्तावित सेवा परियोजनाएँ एवं जनकल्याण अभियान, जो आपके सहयोग एवं समर्थन की प्रतीक्षा में हैं।")}
            </span>
            <span className="sd-mj-cta">
              <span className="sd-mj-count deva">{t(text, 'seva-activities-k24', "5 प्रस्तावित परियोजनाएँ")}</span>
              <span className="sd-mj-clicklabel">{open === 1 ? 'Click to Close' : 'Click to View'}</span>
            </span>
          </button>
          <div className="sd-mj-panel" id="sd-mj-panel-upcoming">
            <div className="sd-mj-panelinner">
              <div className="sd-mj-panelbody">
                <ul className="sd-mj-list">
                  <li>
                    <Link className="sd-mj-item" href="/future-activities/sanatan-help-center">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">{t(text, 'seva-activities-k25', "सनातन हेल्प सेंटर")}</span>
                      </span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/future-activities/sanatan-bhojanalaya">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">{t(text, 'seva-activities-k26', "सनातनी भोजनालय")}</span>
                      </span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/future-activities/skill-development">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">{t(text, 'seva-activities-k27', "सनातनी स्किल डेवलपमेंट सेंटर")}</span>
                      </span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/future-activities/ashray-dham">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">{t(text, 'seva-activities-k28', "सनातनी आश्रय धाम")}</span>
                      </span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/future-activities/gurukul-sansar-kendra">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">{t(text, 'seva-activities-k29', "सनातन गुरुकुल एवं संस्कार केंद्र")}</span>
                      </span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                </ul>
                <Link className="sd-mj-more deva" href="/future-activities">{t(text, 'seva-activities-k30', "सभी आगामी मिशन देखें →")}</Link>
              </div>
            </div>
          </div>
        </article>
        <article className={'sd-mj-card sd-mj-card--blue card-glow-blue' + (open === 2 ? ' is-open' : '')}>
          <button
            type="button"
            className="sd-mj-toggle"
            aria-expanded={open === 2}
            aria-controls="sd-mj-panel-completed"
            onClick={() => setOpen(open === 2 ? null : 2)}
          >
            <span className="sd-mj-toprow">
              <span className="sd-mj-dot glow-blue"></span>
              <span className="sd-mj-names">
                <span className="sd-mj-en">{t(text, 'seva-activities-k31', "Completed Missions")}</span>
                <span className="sd-mj-hi deva">{t(text, 'seva-activities-k32', "सफलतापूर्वक पूर्ण मिशन")}</span>
              </span>
              <svg className="sd-mj-caret" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
            <span className="sd-mj-cardtext deva">
              {t(text, 'seva-activities-k33', "आपके अमूल्य सहयोग से सफलतापूर्वक पूर्ण हुए सेवा कार्य, जनकल्याण अभियान एवं सामाजिक पहल।")}
            </span>
            <span className="sd-mj-cta">
              <span className="sd-mj-count deva">{t(text, 'seva-activities-k34', "5 पूर्ण अभियान")}</span>
              <span className="sd-mj-clicklabel">{open === 2 ? 'Click to Close' : 'Click to View'}</span>
            </span>
          </button>
          <div className="sd-mj-panel" id="sd-mj-panel-completed">
            <div className="sd-mj-panelinner">
              <div className="sd-mj-panelbody">
                <p className="sd-mj-panelnote deva">{t(text, 'seva-activities-k35', "(पिछले महीनों में पूर्ण किए गए सेवा अभियान)")}</p>
                <ul className="sd-mj-list">
                  <li className="sd-mj-item">
                    <span className="sd-mj-itext">
                      <span className="sd-mj-iname deva">{t(text, 'seva-activities-k36', "अन्न सेवा वितरण अभियान")}</span>
                      <span className="sd-mj-meta">
                        <span className="sd-mj-chip sd-mj-chip--done">{t(text, 'seva-activities-k37', "Completed")}</span>
                        <span className="sd-mj-chip">{t(text, 'seva-activities-k38', "250+ People")}</span>
                        <span className="sd-mj-chip">{t(text, 'seva-activities-k39', "April 2026")}</span>
                      </span>
                    </span>
                  </li>
                  <li className="sd-mj-item">
                    <span className="sd-mj-itext">
                      <span className="sd-mj-iname deva">{t(text, 'seva-activities-k40', "निःशुल्क स्वास्थ्य एवं चिकित्सा सहायता शिविर")}</span>
                      <span className="sd-mj-inote">{t(text, 'seva-activities-k41', "Free Medical & Health Camp")}</span>
                      <span className="sd-mj-meta">
                        <span className="sd-mj-chip sd-mj-chip--done">{t(text, 'seva-activities-k42', "Completed")}</span>
                        <span className="sd-mj-chip">{t(text, 'seva-activities-k43', "120+ People")}</span>
                        <span className="sd-mj-chip">{t(text, 'seva-activities-k44', "May 2026")}</span>
                      </span>
                    </span>
                  </li>
                  <li className="sd-mj-item">
                    <span className="sd-mj-itext">
                      <span className="sd-mj-iname deva">{t(text, 'seva-activities-k45', "वृक्षारोपण एवं पर्यावरण संरक्षण अभियान")}</span>
                      <span className="sd-mj-inote">{t(text, 'seva-activities-k46', "Tree Plantation Drive")}</span>
                      <span className="sd-mj-meta">
                        <span className="sd-mj-chip sd-mj-chip--done">{t(text, 'seva-activities-k47', "Completed")}</span>
                        <span className="sd-mj-chip">{t(text, 'seva-activities-k48', "100+ Trees Planted")}</span>
                        <span className="sd-mj-chip">{t(text, 'seva-activities-k49', "June 2026")}</span>
                      </span>
                    </span>
                  </li>
                  <li className="sd-mj-item">
                    <span className="sd-mj-itext">
                      <span className="sd-mj-iname deva">{t(text, 'seva-activities-k50', "सनातन संस्कार एवं जागरूकता कार्यक्रम")}</span>
                      <span className="sd-mj-inote">{t(text, 'seva-activities-k51', "Sanatan Sanskar & Awareness Program")}</span>
                      <span className="sd-mj-meta">
                        <span className="sd-mj-chip sd-mj-chip--done">{t(text, 'seva-activities-k52', "Completed")}</span>
                        <span className="sd-mj-chip">{t(text, 'seva-activities-k53', "80+ Families")}</span>
                        <span className="sd-mj-chip">{t(text, 'seva-activities-k54', "June 2026")}</span>
                      </span>
                    </span>
                  </li>
                  <li className="sd-mj-item">
                    <span className="sd-mj-itext">
                      <span className="sd-mj-iname deva">{t(text, 'seva-activities-k55', "गौ सेवा एवं चारा वितरण अभियान")}</span>
                      <span className="sd-mj-inote">{t(text, 'seva-activities-k56', "Gau Seva & Fodder Support Drive")}</span>
                      <span className="sd-mj-meta">
                        <span className="sd-mj-chip sd-mj-chip--done">{t(text, 'seva-activities-k57', "Completed")}</span>
                        <span className="sd-mj-chip">{t(text, 'seva-activities-k58', "50+ Cattle Supported")}</span>
                        <span className="sd-mj-chip">{t(text, 'seva-activities-k59', "July 2026")}</span>
                      </span>
                    </span>
                  </li>
                </ul>
                <Link className="sd-mj-more deva" href="/activities">{t(text, 'seva-activities-k60', "पूर्ण अभियानों की रिपोर्ट देखें →")}</Link>
              </div>
            </div>
          </div>
        </article>
      </div>
      <p className="sd-mj-note deva">
        {t(text, 'seva-activities-k61', "यह सेवा यात्रा निरंतर आगे बढ़ रही है। आपका सहयोग आने वाले अनेक सेवा अभियानों को वास्तविकता में बदल सकता है।")}
      </p>
      <div className="sd-mj-actions">
        <button
          className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-700 font-semibold text-sm px-8 py-3 rounded-full hover:bg-slate-800 hover:text-white hover:border-slate-800 shadow-sm transition-all duration-300 cursor-pointer active:scale-95 sd-btn sd-btn--view-details"
        >
          <span>{t(text, 'seva-activities-k62', "View Reports")}</span>
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
      
    </section>
  )
}
