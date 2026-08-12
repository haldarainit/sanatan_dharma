import type { Metadata } from 'next'
import Link from 'next/link'
import { HelpRequestForm } from '@/components/portals/forms'
import PortalHero from '@/components/portals/PortalHero'
import { FaqAccordion, StatusTable, StatusTracker } from '@/components/portals/widgets'
import {
  NEED_HELP_FAQ, NEED_HELP_RULES, NEED_HELP_STATUS, NEED_HELP_STEPS,
} from '@/lib/portal-content'
import { CONTACT } from '@/lib/nav'
import { getFaq, getStatusRows } from '@/lib/sanity/data'

export const metadata: Metadata = {
  title: 'Need Help — सहायता केंद्र',
  description:
    'सहायता, मार्गदर्शन एवं सहयोग हेतु आधिकारिक आवेदन पोर्टल — Sanatan Dharm Manav Kalyan Foundation.',
}

/* Sections, order and wording follow the client's brief "Need Help.docx". */

function Lead({ en, hi }: { en: string; hi?: string }) {
  return (
    <div className="sd-fx-lead">
      <h2 className="deva">{en}</h2>
      {hi && <p>{hi}</p>}
    </div>
  )
}

export default async function NeedHelpPage() {
  const [faq, statusRows] = await Promise.all([getFaq('need-help'), getStatusRows('need-help')])

  return (
    <>
      <PortalHero
        crumb="Need Help"
        title="Need"
        accent="Help"
        hi="सहायता केंद्र • सहयोग एवं मार्गदर्शन केंद्र"
        eyebrow="Need Assistance? We’re Here to Help."
        lead="सहायता, मार्गदर्शन एवं सहयोग हेतु आधिकारिक आवेदन पोर्टल में आपका स्वागत है।"
      />

      <section className="container-x my-10 md:my-14 sd-gap">
        <div className="sd-fx">
          {/* ---------- Sanatan Seva Assistance Cell ---------- */}
          <div className="sd-fx-section">
            <Lead en="Sanatan Seva Assistance Cell" />
            <div className="sd-fx-panel">
              <p className="sd-mem-p deva">
                यदि आपको या आपके किसी परिचित को किसी प्रकार की सहायता, मार्गदर्शन या सहयोग की
                आवश्यकता है, तो कृपया नीचे दिए गए चरणों के अनुसार आवेदन करें। हमारी टीम उपलब्धता,
                पात्रता, सत्यापन एवं उपलब्ध संसाधनों के आधार पर प्रत्येक अनुरोध की समीक्षा कर
                यथासंभव सहायता एवं मार्गदर्शन प्रदान करने का प्रयास करेगी।
              </p>
              <div className="sd-fx-notice" style={{ marginTop: 16 }}>
                <strong>महत्वपूर्ण सूचना</strong>
                <p className="deva">
                  आवेदन जमा करने से सहायता की स्वीकृति या गारंटी नहीं मानी जाएगी।
                </p>
              </div>
            </div>
          </div>

          {/* ---------- How It Works ---------- */}
          <div className="sd-fx-section">
            <Lead en="सहायता प्राप्त करने की प्रक्रिया" hi="How It Works • सहायता प्रक्रिया" />
            <div className="sd-fx-panel">
              <ol className="sd-fx-steps-list deva">
                {NEED_HELP_STEPS.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </div>
          </div>

          {/* ---------- Help Request Form ---------- */}
          <div className="sd-fx-section">
            <Lead en="सहायता आवेदन फॉर्म" hi="Help Request Form (5 Steps)" />
            <HelpRequestForm />
          </div>

          {/* ---------- Application Tracking ---------- */}
          <div className="sd-fx-section">
            <Lead en="आवेदन स्थिति देखें" hi="Application Tracking | आवेदन स्थिति देखें" />
            <div className="sd-fx-lead">
              <p className="deva">
                अपना Auto Generated Request ID (उदाहरण: SHK-HELP-2026-89483) अथवा पंजीकृत मोबाइल
                नंबर दर्ज करके आवेदन की वर्तमान स्थिति देखें।
              </p>
            </div>
            <StatusTracker
              idLabel="Request ID / अनुरोध संख्या"
              placeholder="SHK-HELP-2026-89483"
              action="Check Request Status"
            />
            <div className="sd-fx-panel" style={{ marginTop: 18 }}>
              <StatusTable rows={statusRows} />
            </div>
          </div>

          {/* ---------- Fundraising Support ---------- */}
          <div className="sd-fx-section">
            <Lead
              en="अतिरिक्त सहयोग की आवश्यकता है?"
              hi="Fundraising Support | निधि-संग्रह सहयोग सुविधा"
            />
            <div className="sd-fx-panel">
              <p className="sd-mem-p deva">
                यदि आपकी आवश्यकता के लिए सामाजिक सहयोग की भी आवश्यकता है, तो आप Start Fundraiser के
                माध्यम से अपना अभियान प्रारंभ कर सकते हैं। चल रहे अभियानों को View Fundraisers में
                देखा जा सकता है।
              </p>
              <div className="sd-fx-actions">
                <Link className="sd-fx-btn" href="/start-fundraiser">Start Fundraiser</Link>
                <Link className="sd-fx-btn sd-fx-btn--ghost" href="/view-fundraisers">View Fundraisers</Link>
              </div>
            </div>
          </div>

          {/* ---------- Urgent Assistance ---------- */}
          <div className="sd-fx-section">
            <Lead en="अत्यावश्यक सहायता" hi="Urgent Assistance" />
            <div className="sd-fx-panel">
              <p className="sd-mem-p deva">
                यदि मामला अत्यंत गंभीर है, तो हमारी आपातकालीन सहायता टीम से सीधे संपर्क करें।
              </p>
              <div className="sd-fx-actions">
                <a className="sd-fx-btn" href={`tel:+${CONTACT.whatsapp}`}>Emergency Call</a>
                <a className="sd-fx-btn sd-fx-btn--ghost" href={`https://wa.me/${CONTACT.whatsapp}`}>
                  Emergency WhatsApp
                </a>
              </div>
              <div className="sd-fx-notice" style={{ marginTop: 18 }}>
                <strong>IMPORTANT EMERGENCY NOTICE</strong>
                <p className="deva">
                  यदि मामला जीवन-रक्षक चिकित्सा आपातकाल, अपराध, सड़क दुर्घटना, आग, प्राकृतिक आपदा,
                  महिला या बाल सुरक्षा से संबंधित तत्काल खतरे से जुड़ा है, तो कृपया सबसे पहले निम्न
                  सरकारी सेवाओं से संपर्क करें:
                </p>
                <ul className="deva">
                  <li>एम्बुलेंस — 108</li>
                  <li>अग्निशमन — 101</li>
                  <li>पुलिस — 112 / स्थानीय पुलिस</li>
                </ul>
                <p className="deva" style={{ marginTop: 8 }}>
                  संस्था उपलब्ध संसाधनों एवं परिस्थितियों के अनुसार सहायता एवं मार्गदर्शन प्रदान करने
                  का प्रयास करेगी।
                </p>
              </div>
            </div>
          </div>

          {/* ---------- Important Information ---------- */}
          <div className="sd-fx-section">
            <Lead en="आवश्यक नियम एवं दिशानिर्देश" hi="Important Information" />
            <div className="sd-fx-panel">
              <ul className="sd-mem-list deva">
                {NEED_HELP_RULES.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------- We Are Here to Listen ---------- */}
          <div className="sd-fx-section">
            <Lead en="हमारा आश्वासन" hi="We Are Here to Listen" />
            <div className="sd-fx-quote deva">
              &ldquo;कोई भी व्यक्ति अकेला नहीं है। यदि आपको सहायता की आवश्यकता है, तो हम आपकी बात
              सुनने, समझने और उपलब्ध संसाधनों के अनुसार सहयोग करने का पूरा प्रयास करेंगे।&rdquo;
            </div>
          </div>

          {/* ---------- FAQ ---------- */}
          <div className="sd-fx-section" id="faq">
            <Lead en="Frequently Asked Questions (FAQ)" hi="अक्सर पूछे जाने वाले प्रश्न" />
            <FaqAccordion items={faq} />
          </div>

          {/* ---------- Didn't Find Your Answer? ---------- */}
          <div className="sd-fx-section">
            <div className="sd-fx-lead">
              <h2>
                Didn&rsquo;t Find Your <span>Answer?</span>
              </h2>
              <p className="deva">
                यदि आपके प्रश्न का उत्तर ऊपर नहीं मिला — हमारी सहायता टीम से संपर्क करें। हम आपकी
                सहायता हेतु सदैव उपलब्ध हैं।
              </p>
            </div>
            <div className="sd-fx-actions" style={{ justifyContent: 'center' }}>
              <Link className="sd-fx-btn" href="/contact">Contact Us</Link>
              <a className="sd-fx-btn sd-fx-btn--ghost" href={`https://wa.me/${CONTACT.whatsapp}`}>
                WhatsApp Support
              </a>
            </div>
          </div>

          {/* ---------- Disclaimer ---------- */}
          <div className="sd-fx-section">
            <div className="sd-fx-notice">
              <strong>Disclaimer</strong>
              <p className="deva">
                सहायता की उपलब्धता संस्था के संसाधनों, पात्रता, सत्यापन एवं परिस्थितियों पर निर्भर
                करेगी। आवेदन जमा करने से सहायता की स्वीकृति या गारंटी नहीं मानी जाएगी। आवश्यकता होने
                पर अतिरिक्त जानकारी या दस्तावेज़ मांगे जा सकते हैं।
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
