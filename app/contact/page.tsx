import type { Metadata } from 'next'
import Link from 'next/link'
import { InquiryForm } from '@/components/portals/forms'
import { CONTACT_RULES } from '@/lib/portal-content'
import { CONTACT } from '@/lib/nav'
import { ExternalLink, Mail, Phone } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Contact Us & Inquiry Portal',
  description:
    'संपर्क एवं सहयोग केंद्र — Sanatan Dharm Manav Kalyan Foundation से संपर्क करें।',
}

const QUICK = [
  { title: 'Raise a Complaint', hi: 'शिकायत दर्ज करें', href: '/raise-complaint' },
  { title: 'Track Complaint Status', hi: 'शिकायत स्थिति देखें', href: '/raise-complaint#track' },
  { title: 'Need Help', hi: 'सहायता केंद्र', href: '/need-help' },
  { title: 'Donation Support', hi: 'दान सहायता', href: '/donate' },
]

export default function ContactPage() {
  return (
    <section className="container-x my-10 md:my-14 sd-gap">
      <div className="sd-fx">
        <div className="sd-fx-section">
          <div className="sd-fx-lead">
            <h2 className="deva">
              संपर्क एवं <span>सहयोग केंद्र</span>
            </h2>
            <p className="deva">
              Sanatan Dharm Manav Kalyan Foundation में आपका स्वागत है। कृपया अपनी आवश्यकता के
              अनुसार उपयुक्त सेवा का चयन करें। हमारी टीम उपलब्धता एवं अनुरोध की प्रकृति के अनुसार
              आपसे संपर्क करने का प्रयास करेगी।
            </p>
          </div>
        </div>

        <div className="sd-fx-section">
          <div className="sd-fx-lead">
            <h2>
              How Can We <span>Help You?</span>
            </h2>
            <p className="deva">हम आपकी किस प्रकार सहायता कर सकते हैं?</p>
          </div>
          <div className="sd-fx-panel">
            <h3 className="sd-mem-h3 deva">
              आवेदन करने से पूर्व <span>| Before Applying</span>
            </h3>
            <p className="sd-mem-p deva">
              सामान्य प्रश्नों के उत्तर के लिए कृपया पहले FAQ देखें। संभव है कि आपके प्रश्न का उत्तर
              पहले से उपलब्ध हो। यदि आपको अपने प्रश्न का उत्तर FAQ में नहीं मिला है, तो कृपया नीचे
              दिया गया अनुरोध फ़ॉर्म भरें।
            </p>
            <div className="sd-fx-actions">
              <Link className="sd-fx-btn sd-fx-btn--ghost" href="/need-help#faq">
                View FAQ / सामान्य प्रश्न देखें
              </Link>
            </div>
          </div>
        </div>

        <div className="sd-fx-section">
          <div className="sd-fx-lead">
            <h2 className="deva">
              अनुरोध <span>फ़ॉर्म</span>
            </h2>
            <p>Request Form — कृपया निम्न जानकारी साझा करें</p>
          </div>
          <InquiryForm />
          <div className="sd-fx-panel" style={{ marginTop: 18 }}>
            <div className="sd-fx-notice">
              <strong>Disclaimer | अस्वीकरण</strong>
              <p className="deva">
                उत्तर देने का समय अनुरोध की प्रकृति, सत्यापन प्रक्रिया एवं उपलब्ध संसाधनों पर निर्भर
                करेगा। आवश्यकता होने पर संस्था अतिरिक्त जानकारी या दस्तावेज़ का अनुरोध कर सकती है।
              </p>
            </div>
          </div>
        </div>

        <div className="sd-fx-section">
          <div className="sd-fx-lead">
            <h2 className="deva">
              त्वरित <span>सहायता</span>
            </h2>
            <p>Quick Actions</p>
          </div>
          <div className="sd-fx-cards sd-fx-cards--4">
            {QUICK.map((q) => (
              <article className="sd-fx-card" key={q.href}>
                <span className="sd-fx-card-ico">
                  <ExternalLink />
                </span>
                <div>
                  <h4>{q.title}</h4>
                  <p className="deva">{q.hi}</p>
                  <p style={{ marginTop: 6 }}>
                    <Link href={q.href}>खोलें &rsaquo;</Link>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="sd-fx-section">
          <div className="sd-fx-lead">
            <h2 className="deva">
              हेल्पलाइन एवं <span>ईमेल</span>
            </h2>
            <p>Helpline Support | Official Email</p>
          </div>
          <div className="sd-fx-cards">
            <article className="sd-fx-card">
              <span className="sd-fx-card-ico">
                <Phone />
              </span>
              <div>
                <h4>Helpline Support</h4>
                {CONTACT.helplines.map((n) => (
                  <p key={n}>
                    <a href={`tel:${n.replace(/\s/g, '')}`}>{n}</a>
                  </p>
                ))}
              </div>
            </article>
            <article className="sd-fx-card">
              <span className="sd-fx-card-ico">
                <Mail />
              </span>
              <div>
                <h4>Official Email</h4>
                {CONTACT.emails.map((e) => (
                  <p key={e}>
                    <a href={`mailto:${e}`}>{e}</a>
                  </p>
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className="sd-fx-section">
          <div className="sd-fx-lead">
            <h2 className="deva">
              महत्वपूर्ण <span>सूचना</span>
            </h2>
            <p>Important Information</p>
          </div>
          <div className="sd-fx-panel">
            <ul className="sd-mem-list deva">
              {CONTACT_RULES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div className="sd-fx-notice" style={{ marginTop: 18 }}>
              <strong>आपातकालीन स्थिति</strong>
              <p className="deva">
                आपातकालीन चिकित्सा, पुलिस, अग्निशमन या सुरक्षा संबंधी स्थिति में तुरंत सरकारी
                हेल्पलाइन से संपर्क करें:
              </p>
              <ul className="deva">
                <li>पुलिस — 112 / 100</li>
                <li>एम्बुलेंस — 108</li>
                <li>अग्निशमन — 101</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sd-fx-section">
          <div className="sd-fx-quote deva">
            <strong>Thank You | धन्यवाद</strong>
            <br />
            आपका विश्वास एवं सहयोग हमारे लिए महत्वपूर्ण है। हम सेवा, पारदर्शिता एवं उत्तरदायित्व के
            साथ कार्य करने के लिए प्रतिबद्ध हैं।
          </div>
        </div>
      </div>
    </section>
  )
}
