import Link from 'next/link'

export default function SevaActivities() {
  return (
    <section className="w-full bg-gray-50 py-12 px-4 border-t border-saffron-100 font-sans sd-gap">
      
      
      <div className="sd-mj-head">
        <h2 className="sd-mj-title deva">
          सेवा के{' '}
          <span>बढ़ते कदम</span>
        </h2>
        <p className="sd-mj-eyebrow">Our Mission Journey</p>
        <p className="sd-mj-sub deva">चल रहे, आगामी एवं पूर्ण हो चुके सेवा अभियानों की एक प्रेरक झलक।</p>
        <p className="sd-mj-desc deva">
          हमारे सेवा, जनजागरण एवं विकास अभियानों की वर्तमान यात्रा — सक्रिय मिशन, सहयोग की प्रतीक्षा में चल रही भावी योजनाएँ तथा सफलतापूर्वक पूर्ण किए गए सेवा कार्य।
        </p>
      </div>
      <div className="sd-mj-grid">
        <article className="sd-mj-card sd-mj-card--green card-glow-green" data-sd-mj="">
          <button
            type="button"
            className="sd-mj-toggle"
            aria-expanded="false"
            aria-controls="sd-mj-panel-active"
          >
            <span className="sd-mj-toprow">
              <span className="sd-mj-dot glow-green"></span>
              <span className="sd-mj-names">
                <span className="sd-mj-en">Active Missions</span>
                <span className="sd-mj-hi deva">सक्रिय मिशन (वर्तमान)</span>
              </span>
              <svg className="sd-mj-caret" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
            <span className="sd-mj-cardtext deva">
              वर्तमान में संचालित सेवा कार्य एवं अभियान, जिनमें आपका सहयोग सकारात्मक परिवर्तन लाता है।
            </span>
            <span className="sd-mj-cta">
              <span className="sd-mj-count deva">5 सक्रिय अभियान</span>
              <span className="sd-mj-clicklabel" data-sd-mj-label="">Click to View</span>
            </span>
          </button>
          <div className="sd-mj-panel" id="sd-mj-panel-active">
            <div className="sd-mj-panelinner">
              <div className="sd-mj-panelbody">
                <ul className="sd-mj-list">
                  <li>
                    <Link className="sd-mj-item" href="/activities#mission-sanatan-board">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">सनातन बोर्ड</span>
                        <span className="sd-mj-inote deva">हमारा प्रथम एवं प्रमुख मिशन</span>
                      </span>
                      <span className="sd-mj-badge deva">सक्रिय</span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/activities#mission-mahila-suraksha">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">महिला सुरक्षा एवं सम्मान अभियान</span>
                      </span>
                      <span className="sd-mj-badge deva">सक्रिय</span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/activities#mission-anna-seva">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">अन्न सेवा अभियान</span>
                      </span>
                      <span className="sd-mj-badge deva">सक्रिय</span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/activities#mission-shiksha-sanskar">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">शिक्षा एवं संस्कार सहायता अभियान</span>
                      </span>
                      <span className="sd-mj-badge deva">सक्रिय</span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/activities#mission-dhokhadhadi-jagrukta">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">धोखाधड़ी जागरूकता एवं सहायता अभियान</span>
                      </span>
                      <span className="sd-mj-badge deva">सक्रिय</span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                </ul>
                <Link className="sd-mj-more deva" href="/activities">सभी सक्रिय अभियान देखें →</Link>
              </div>
            </div>
          </div>
        </article>
        <article className="sd-mj-card sd-mj-card--orange card-glow-orange" data-sd-mj="">
          <button
            type="button"
            className="sd-mj-toggle"
            aria-expanded="false"
            aria-controls="sd-mj-panel-upcoming"
          >
            <span className="sd-mj-toprow">
              <span className="sd-mj-dot glow-orange"></span>
              <span className="sd-mj-names">
                <span className="sd-mj-en">Upcoming Missions</span>
                <span className="sd-mj-hi deva">आगामी सेवा मिशन</span>
              </span>
              <svg className="sd-mj-caret" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
            <span className="sd-mj-cardtext deva">
              प्रस्तावित सेवा परियोजनाएँ एवं जनकल्याण अभियान, जो आपके सहयोग एवं समर्थन की प्रतीक्षा में हैं।
            </span>
            <span className="sd-mj-cta">
              <span className="sd-mj-count deva">5 प्रस्तावित परियोजनाएँ</span>
              <span className="sd-mj-clicklabel" data-sd-mj-label="">Click to View</span>
            </span>
          </button>
          <div className="sd-mj-panel" id="sd-mj-panel-upcoming">
            <div className="sd-mj-panelinner">
              <div className="sd-mj-panelbody">
                <ul className="sd-mj-list">
                  <li>
                    <Link className="sd-mj-item" href="/future-activities/sanatan-help-center">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">सनातन हेल्प सेंटर</span>
                      </span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/future-activities/sanatan-bhojanalaya">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">सनातनी भोजनालय</span>
                      </span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/future-activities/skill-development">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">सनातनी स्किल डेवलपमेंट सेंटर</span>
                      </span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/future-activities/ashray-dham">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">सनातनी आश्रय धाम</span>
                      </span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                  <li>
                    <Link className="sd-mj-item" href="/future-activities/gurukul-sansar-kendra">
                      <span className="sd-mj-itext">
                        <span className="sd-mj-iname deva">सनातन गुरुकुल एवं संस्कार केंद्र</span>
                      </span>
                      <span className="sd-mj-arrow" aria-hidden="true">›</span>
                    </Link>
                  </li>
                </ul>
                <Link className="sd-mj-more deva" href="/future-activities">सभी आगामी मिशन देखें →</Link>
              </div>
            </div>
          </div>
        </article>
        <article className="sd-mj-card sd-mj-card--blue card-glow-blue" data-sd-mj="">
          <button
            type="button"
            className="sd-mj-toggle"
            aria-expanded="false"
            aria-controls="sd-mj-panel-completed"
          >
            <span className="sd-mj-toprow">
              <span className="sd-mj-dot glow-blue"></span>
              <span className="sd-mj-names">
                <span className="sd-mj-en">Completed Missions</span>
                <span className="sd-mj-hi deva">सफलतापूर्वक पूर्ण मिशन</span>
              </span>
              <svg className="sd-mj-caret" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
            <span className="sd-mj-cardtext deva">
              आपके अमूल्य सहयोग से सफलतापूर्वक पूर्ण हुए सेवा कार्य, जनकल्याण अभियान एवं सामाजिक पहल।
            </span>
            <span className="sd-mj-cta">
              <span className="sd-mj-count deva">5 पूर्ण अभियान</span>
              <span className="sd-mj-clicklabel" data-sd-mj-label="">Click to View</span>
            </span>
          </button>
          <div className="sd-mj-panel" id="sd-mj-panel-completed">
            <div className="sd-mj-panelinner">
              <div className="sd-mj-panelbody">
                <p className="sd-mj-panelnote deva">(पिछले महीनों में पूर्ण किए गए सेवा अभियान)</p>
                <ul className="sd-mj-list">
                  <li className="sd-mj-item">
                    <span className="sd-mj-itext">
                      <span className="sd-mj-iname deva">अन्न सेवा वितरण अभियान</span>
                      <span className="sd-mj-meta">
                        <span className="sd-mj-chip sd-mj-chip--done">Completed</span>
                        <span className="sd-mj-chip">250+ People</span>
                        <span className="sd-mj-chip">April 2026</span>
                      </span>
                    </span>
                  </li>
                  <li className="sd-mj-item">
                    <span className="sd-mj-itext">
                      <span className="sd-mj-iname deva">निःशुल्क स्वास्थ्य एवं चिकित्सा सहायता शिविर</span>
                      <span className="sd-mj-inote">Free Medical &amp; Health Camp</span>
                      <span className="sd-mj-meta">
                        <span className="sd-mj-chip sd-mj-chip--done">Completed</span>
                        <span className="sd-mj-chip">120+ People</span>
                        <span className="sd-mj-chip">May 2026</span>
                      </span>
                    </span>
                  </li>
                  <li className="sd-mj-item">
                    <span className="sd-mj-itext">
                      <span className="sd-mj-iname deva">वृक्षारोपण एवं पर्यावरण संरक्षण अभियान</span>
                      <span className="sd-mj-inote">Tree Plantation Drive</span>
                      <span className="sd-mj-meta">
                        <span className="sd-mj-chip sd-mj-chip--done">Completed</span>
                        <span className="sd-mj-chip">100+ Trees Planted</span>
                        <span className="sd-mj-chip">June 2026</span>
                      </span>
                    </span>
                  </li>
                  <li className="sd-mj-item">
                    <span className="sd-mj-itext">
                      <span className="sd-mj-iname deva">सनातन संस्कार एवं जागरूकता कार्यक्रम</span>
                      <span className="sd-mj-inote">Sanatan Sanskar &amp; Awareness Program</span>
                      <span className="sd-mj-meta">
                        <span className="sd-mj-chip sd-mj-chip--done">Completed</span>
                        <span className="sd-mj-chip">80+ Families</span>
                        <span className="sd-mj-chip">June 2026</span>
                      </span>
                    </span>
                  </li>
                  <li className="sd-mj-item">
                    <span className="sd-mj-itext">
                      <span className="sd-mj-iname deva">गौ सेवा एवं चारा वितरण अभियान</span>
                      <span className="sd-mj-inote">Gau Seva &amp; Fodder Support Drive</span>
                      <span className="sd-mj-meta">
                        <span className="sd-mj-chip sd-mj-chip--done">Completed</span>
                        <span className="sd-mj-chip">50+ Cattle Supported</span>
                        <span className="sd-mj-chip">July 2026</span>
                      </span>
                    </span>
                  </li>
                </ul>
                <Link className="sd-mj-more deva" href="/activities">पूर्ण अभियानों की रिपोर्ट देखें →</Link>
              </div>
            </div>
          </div>
        </article>
      </div>
      <p className="sd-mj-note deva">
        यह सेवा यात्रा निरंतर आगे बढ़ रही है। आपका सहयोग आने वाले अनेक सेवा अभियानों को वास्तविकता में बदल सकता है।
      </p>
      <div className="sd-mj-actions">
        <button
          className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-700 font-semibold text-sm px-8 py-3 rounded-full hover:bg-slate-800 hover:text-white hover:border-slate-800 shadow-sm transition-all duration-300 cursor-pointer active:scale-95 sd-btn sd-btn--view-details"
        >
          <span>View Reports</span>
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
      <script>
        {"(function () {\r\n    function initMissionJourney() {\r\n      var cards = document.querySelectorAll('[data-sd-mj]');\r\n      if (!cards.length) return;\r\n      Array.prototype.forEach.call(cards, function (card) {\r\n        if (card.dataset.sdMjInit === '1') return;\r\n        card.dataset.sdMjInit = '1';\r\n        var toggle = card.querySelector('.sd-mj-toggle');\r\n        var label = card.querySelector('[data-sd-mj-label]');\r\n        if (!toggle) return;\r\n\r\n        function setOpen(open) {\r\n          card.classList.toggle('is-open', open);\r\n          toggle.setAttribute('aria-expanded', open ? 'true' : 'false');\r\n          if (label) label.textContent = open ? 'Click to Close' : 'Click to View';\r\n        }\r\n\r\n        toggle.addEventListener('click', function () {\r\n          var willOpen = !card.classList.contains('is-open');\r\n          Array.prototype.forEach.call(cards, function (other) {\r\n            if (other !== card && other.classList.contains('is-open')) {\r\n              other.classList.remove('is-open');\r\n              var t = other.querySelector('.sd-mj-toggle');\r\n              var l = other.querySelector('[data-sd-mj-label]');\r\n              if (t) t.setAttribute('aria-expanded', 'false');\r\n              if (l) l.textContent = 'Click to View';\r\n            }\r\n          });\r\n          setOpen(willOpen);\r\n        });\r\n\r\n        setOpen(false);\r\n      });\r\n    }\r\n\r\n    if (document.readyState === 'loading') {\r\n      document.addEventListener('DOMContentLoaded', initMissionJourney);\r\n    } else {\r\n      initMissionJourney();\r\n    }\r\n  })();"}
      </script>
    </section>
  )
}
