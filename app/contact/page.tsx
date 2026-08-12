import { getPageContent, img, t } from '@/lib/sanity/content'
import type { Metadata } from 'next'
import Link from 'next/link'
import { InquiryForm } from '@/components/portals/forms'
import { CONTACT } from '@/lib/nav'

export const metadata: Metadata = {
  title: 'Contact Us — Inquiry Portal',
  description:
    'संपर्क एवं सहयोग केंद्र — Sanatan Dharm Manav Kalyan Foundation से संपर्क करें।',
}

/* Sections, order and wording follow the client's brief
   "CONTACT US & INQUIRY PORTAL.docx". */

const QUICK_ACTIONS = [
  { label: 'Raise a Complaint / शिकायत दर्ज करें', href: '/raise-complaint' },
  { label: 'Track Complaint Status / शिकायत स्थिति देखें', href: '/raise-complaint#track' },
  { label: 'Need Help / सहायता केंद्र', href: '/need-help' },
  { label: 'Donation Support / दान सहायता', href: '/donate' },
]

const IMPORTANT = [
  'कृपया सही मोबाइल नंबर एवं ईमेल पता दर्ज करें।',
  'अधूरी या अस्पष्ट जानकारी होने पर उत्तर में विलंब हो सकता है।',
  'आवश्यक होने पर अतिरिक्त जानकारी या दस्तावेज़ मांगे जा सकते हैं।',
  'सामान्यतः अनुरोधों का उत्तर 24–72 कार्य घंटों के भीतर देने का प्रयास किया जाता है।',
]

export default async function ContactPage() {
  const { text, images } = await getPageContent("/contact")
  return (
    <>
      {/* CONTACT US / संपर्क एवं सहयोग केंद्र / INQUIRY PORTAL */}
      <section className="relative overflow-hidden bg-gradient-to-br from-saffron-50 via-cream to-saffron-100/60 font-sans">
        <div className="absolute -right-24 top-0 h-64 w-64 rounded-full bg-saffron-200/40 blur-3xl"></div>
        <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-maroon-500/10 blur-3xl"></div>
        <div className="container-x relative py-12 sm:py-16">
          <nav className="flex items-center gap-1.5 text-xs font-semibold text-ink/50 mb-4">
            <Link className="hover:text-saffron-700 transition-colors" href="/">
              {t(text, 'k1', "Home")}
            </Link>
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
              className="lucide lucide-chevron-right h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
            <span className="text-[#e35300]">{t(text, 'k2', "Contact Us")}</span>
          </nav>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-[1.05] text-gray-900 mb-1.5">
            Contact <span className="text-[#e35300]">Us</span>
          </h1>
          <p className="deva text-[#e35300] font-bold text-sm tracking-wide mb-2">
            {t(text, 'k3', "संपर्क एवं सहयोग केंद्र")}
          </p>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-slate-400">
            {t(text, 'k4', "Inquiry Portal")}
          </p>
        </div>
      </section>

      <section className="container-x my-10 md:my-14 sd-gap">
        <div className="sd-fx">
          {/* ---------- Welcome ---------- */}
          <div className="sd-fx-section">
            <div className="sd-fx-lead">
              <h2>Welcome</h2>
            </div>
            <div className="sd-fx-panel">
              <p className="sd-mem-p deva">
                {t(text, 'k5', "Sanatan Dharm Manav Kalyan Foundation में आपका स्वागत है। कृपया अपनी आवश्यकता के")}
                {t(text, 'k6', "अनुसार उपयुक्त सेवा का चयन करें। हमारी टीम उपलब्धता एवं अनुरोध की प्रकृति के अनुसार")}
                {t(text, 'k7', "आपसे संपर्क करने का प्रयास करेगी।")}
              </p>
            </div>
          </div>

          {/* ---------- How Can We Help You? ---------- */}
          <div className="sd-fx-section">
            <div className="sd-fx-lead">
              <h2>
                How Can We <span>Help You?</span>
              </h2>
              <p className="deva">{t(text, 'k8', "हम आपकी किस प्रकार सहायता कर सकते हैं?")}</p>
            </div>
            <div className="sd-fx-panel">
              <h3 className="sd-mem-h3">Before Applying | आवेदन करने से पूर्व</h3>
              <p className="sd-mem-p deva">
                {t(text, 'k9', "सामान्य प्रश्नों के उत्तर के लिए कृपया पहले FAQ देखें। संभव है कि आपके प्रश्न का उत्तर")}
                {t(text, 'k10', "पहले से उपलब्ध हो।")}
              </p>
              <div className="sd-fx-actions">
                <Link className="sd-fx-btn sd-fx-btn--ghost" href="/need-help#faq">
                  {t(text, 'k11', "View FAQ / सामान्य प्रश्न देखें")}
                </Link>
              </div>
              <p className="sd-mem-p deva" style={{ marginTop: 16 }}>
                {t(text, 'k12', "यदि आपको अपने प्रश्न का उत्तर FAQ में नहीं मिला है, तो कृपया नीचे दिया गया अनुरोध")}
                {t(text, 'k13', "फ़ॉर्म भरें।")}
              </p>
            </div>
          </div>

          {/* ---------- Request Form ---------- */}
          <div className="sd-fx-section">
            <div className="sd-fx-lead">
              <h2>
                Request Form | <span>अनुरोध फ़ॉर्म</span>
              </h2>
            </div>
            <InquiryForm />
          </div>

          {/* ---------- Disclaimer ---------- */}
          <div className="sd-fx-section">
            <div className="sd-fx-notice">
              <strong>{t(text, 'k14', "Disclaimer | अस्वीकरण")}</strong>
              <p className="deva">
                {t(text, 'k15', "उत्तर देने का समय अनुरोध की प्रकृति, सत्यापन प्रक्रिया एवं उपलब्ध संसाधनों पर निर्भर")}
                {t(text, 'k16', "करेगा। आवश्यकता होने पर संस्था अतिरिक्त जानकारी या दस्तावेज़ का अनुरोध कर सकती है।")}
              </p>
            </div>
          </div>

          {/* ---------- Quick Actions ---------- */}
          <div className="sd-fx-section">
            <div className="sd-fx-lead">
              <h2>
                Quick Actions | <span>त्वरित सहायता</span>
              </h2>
            </div>
            <div className="sd-fx-panel">
              <ul className="sd-fx-links">
                {QUICK_ACTIONS.map((q) => (
                  <li key={q.href}>
                    <Link href={q.href} className="deva">
                      {q.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------- Helpline Support ---------- */}
          <div className="sd-fx-section">
            <div className="sd-fx-lead">
              <h2>
                Helpline Support | <span>हेल्पलाइन सहायता</span>
              </h2>
            </div>
            <div className="sd-fx-panel">
              <ul className="sd-fx-links">
                {CONTACT.helplines.map((n) => (
                  <li key={n}>
                    <a href={`tel:${n.replace(/\s/g, '')}`}>{n}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------- Official Email ---------- */}
          <div className="sd-fx-section">
            <div className="sd-fx-lead">
              <h2>
                Official Email | <span>आधिकारिक ईमेल</span>
              </h2>
            </div>
            <div className="sd-fx-panel">
              <ul className="sd-fx-links">
                {CONTACT.emails.map((e) => (
                  <li key={e}>
                    <a href={`mailto:${e}`}>{e}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------- Important Information ---------- */}
          <div className="sd-fx-section">
            <div className="sd-fx-lead">
              <h2>
                Important Information | <span>महत्वपूर्ण सूचना</span>
              </h2>
            </div>
            <div className="sd-fx-panel">
              <ul className="sd-mem-list deva">
                {IMPORTANT.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <div className="sd-fx-notice" style={{ marginTop: 18 }}>
                <p className="deva">
                  {t(text, 'k17', "आपातकालीन चिकित्सा, पुलिस, अग्निशमन या सुरक्षा संबंधी स्थिति में तुरंत सरकारी")}
                  {t(text, 'k18', "हेल्पलाइन से संपर्क करें:")}
                </p>
                <ul className="deva">
                  <li>{t(text, 'k19', "पुलिस: 112 / 100")}</li>
                  <li>{t(text, 'k20', "एम्बुलेंस: 108")}</li>
                  <li>{t(text, 'k21', "अग्निशमन: 101")}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ---------- Thank You ---------- */}
          <div className="sd-fx-section">
            <div className="sd-fx-lead">
              <h2>
                Thank You | <span>धन्यवाद</span>
              </h2>
            </div>
            <div className="sd-fx-quote deva">
              {t(text, 'k22', "आपका विश्वास एवं सहयोग हमारे लिए महत्वपूर्ण है। हम सेवा, पारदर्शिता एवं उत्तरदायित्व के")}
              {t(text, 'k23', "साथ कार्य करने के लिए प्रतिबद्ध हैं।")}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
