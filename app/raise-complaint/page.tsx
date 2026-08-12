import type { Metadata } from 'next'
import Link from 'next/link'
import { ComplaintForm } from '@/components/portals/forms'
import { StatusTable, StatusTracker } from '@/components/portals/widgets'
import { COMPLAINT_STATUS } from '@/lib/portal-content'
import { CONTACT } from '@/lib/nav'
import { Mail, MessageCircle, Phone } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Raise a Complaint — शिकायत निवारण केंद्र',
  description:
    'शिकायत निवारण एवं पारदर्शिता केंद्र — Sanatan Dharm Manav Kalyan Foundation.',
}

export default function RaiseComplaintPage() {
  return (
    <section className="container-x my-10 md:my-14 sd-gap">
      <div className="sd-fx">
        <div className="sd-fx-section">
          <div className="sd-fx-lead">
            <h2 className="deva">
              शिकायत निवारण एवं <span>पारदर्शिता केंद्र</span>
            </h2>
            <p className="deva">
              Sanatan Dharm Manav Kalyan Foundation के आधिकारिक शिकायत एवं आवेदन स्थिति पोर्टल में
              आपका स्वागत है। यदि आपको संस्था की किसी सेवा, दान रसीद, स्वयंसेवक गतिविधि, सदस्यता,
              सहायता अनुरोध, भुगतान, सत्यापन या अन्य किसी प्रक्रिया से संबंधित शिकायत या समस्या है,
              तो कृपया शिकायत दर्ज करें।
            </p>
          </div>
          <div className="sd-fx-panel">
            <h3 className="sd-mem-h3">Official Grievance &amp; Tracking Portal</h3>
            <p className="sd-mem-p deva">
              Sanatan Dharm Manav Kalyan Foundation प्रत्येक शिकायत को पारदर्शिता, निष्पक्षता एवं
              प्राथमिकता के साथ समीक्षा कर यथासंभव समाधान प्रदान करने के लिए प्रतिबद्ध है।
            </p>
            <div className="sd-fx-actions">
              <a className="sd-fx-btn" href="#complaint-form">Raise a Complaint</a>
              <a className="sd-fx-btn sd-fx-btn--ghost" href="#track">Track Complaint Status</a>
            </div>
            <div className="sd-fx-notice" style={{ marginTop: 18 }}>
              <strong>महत्वपूर्ण सूचना</strong>
              <p className="deva">
                शिकायत दर्ज करना समाधान की गारंटी नहीं है। प्रत्येक शिकायत उपलब्ध जानकारी, सत्यापन
                एवं संस्था की प्रक्रिया के अनुसार समीक्षा की जाएगी।
              </p>
            </div>
          </div>
        </div>

        <div className="sd-fx-section" id="complaint-form">
          <div className="sd-fx-lead">
            <h2 className="deva">
              शिकायत <span>दर्ज करें</span>
            </h2>
            <p className="deva">
              कृपया अपनी शिकायत की सही एवं पूर्ण जानकारी दर्ज करें ताकि संबंधित अधिकारी उचित एवं
              त्वरित कार्यवाही कर सकें।
            </p>
          </div>
          <ComplaintForm />
          <div className="sd-fx-panel" style={{ marginTop: 18 }}>
            <div className="sd-fx-notice">
              <strong>Disclaimer | अस्वीकरण</strong>
              <p className="deva">
                शिकायत का पंजीकरण समाधान की गारंटी नहीं माना जाएगा। अंतिम निर्णय उपलब्ध तथ्यों,
                सत्यापन एवं संस्था की प्रक्रिया पर आधारित होगा।
              </p>
            </div>
          </div>
        </div>

        <div className="sd-fx-section" id="track">
          <div className="sd-fx-lead">
            <h2 className="deva">
              शिकायत <span>स्थिति देखें</span>
            </h2>
            <p className="deva">
              अपना Complaint ID अथवा पंजीकृत मोबाइल नंबर दर्ज करके शिकायत की वर्तमान स्थिति देखें।
              यदि आपको शिकायत संख्या उपलब्ध नहीं है, तो पंजीकृत मोबाइल नंबर के माध्यम से स्थिति खोजी
              जा सकती है।
            </p>
          </div>
          <StatusTracker idLabel="Complaint ID / शिकायत संख्या" placeholder="SDMKF-CMP-2026-12345" />
          <div className="sd-fx-panel" style={{ marginTop: 18 }}>
            <h3 className="sd-mem-h3 deva">स्थिति मार्गदर्शिका</h3>
            <StatusTable rows={COMPLAINT_STATUS} />
          </div>
        </div>

        <div className="sd-fx-section">
          <div className="sd-fx-lead">
            <h2>
              Need <span>Assistance?</span>
            </h2>
            <p className="deva">सहायता चाहिए?</p>
          </div>
          <div className="sd-fx-cards">
            <article className="sd-fx-card">
              <span className="sd-fx-card-ico">
                <Phone />
              </span>
              <div>
                <h4>Helpline Support</h4>
                <p>
                  <a href={`tel:+${CONTACT.whatsapp}`}>{CONTACT.helplines[0]}</a>
                </p>
              </div>
            </article>
            <article className="sd-fx-card">
              <span className="sd-fx-card-ico">
                <MessageCircle />
              </span>
              <div>
                <h4>WhatsApp Support</h4>
                <p>
                  <a href={`https://wa.me/${CONTACT.whatsapp}`}>{CONTACT.helplines[0]}</a>
                </p>
              </div>
            </article>
            <article className="sd-fx-card">
              <span className="sd-fx-card-ico">
                <Mail />
              </span>
              <div>
                <h4>Contact Us</h4>
                <p>
                  <Link href="/contact">संपर्क पृष्ठ खोलें &rsaquo;</Link>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
