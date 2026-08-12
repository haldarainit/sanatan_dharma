'use client'

import { useState } from 'react'
import {
  Declaration, DemoNotice, OtpField, SelectField, TextAreaField, TextField,
  checkRequired, makeRef,
} from './fields'
import { StepRail, SubmittedPanel } from './widgets'

const DECL_MISSING = 'कृपया सभी आवश्यक घोषणाएँ स्वीकार करें।'

/* ============================ Need Help ============================ */
export function HelpRequestForm() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [decl, setDecl] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formErr, setFormErr] = useState('')
  const [reference, setReference] = useState('')

  if (reference) {
    return (
      <SubmittedPanel
        title="आपका अनुरोध दर्ज हो गया"
        message="कृपया यह संदर्भ संख्या सुरक्षित रखें। समीक्षा के पश्चात हमारी टीम आपसे संपर्क करेगी।"
        reference={reference}
      />
    )
  }

  function next() {
    const e = checkRequired([
      { key: 'name', value: name, required: true },
      { key: 'mobile', value: mobile, type: 'tel', required: true },
      { key: 'email', value: email, type: 'email' },
    ])
    setErrors(e)
    if (!Object.keys(e).length) setStep(2)
  }

  function submit() {
    if (!decl) {
      setFormErr(DECL_MISSING)
      return
    }
    setFormErr('')
    setReference(makeRef('SHK-HELP'))
  }

  return (
    <div className="sd-fx-panel">
      <StepRail
        steps={['आवेदक की जानकारी', 'सहायता विवरण', 'दस्तावेज़', 'समीक्षा', 'पुष्टि']}
        current={step}
      />

      {step === 1 && (
        <>
          <h3 className="sd-mem-h3 deva">
            आवेदक की जानकारी <span>| Applicant Information</span>
          </h3>
          <p className="sd-mem-hint deva">आवेदक का व्यक्तिगत विवरण भरें।</p>
          <div className="sd-fx-grid">
            <TextField label="पूरा नाम" en="Full Name" required value={name} onChange={setName} error={errors.name} />
          </div>
          <OtpField label="मोबाइल नंबर" en="Mobile Number" required value={mobile} onChange={setMobile} error={errors.mobile} />
          <div className="sd-fx-grid">
            <TextField label="ईमेल पता (वैकल्पिक)" en="Email Address (Optional)" type="email" value={email} onChange={setEmail} error={errors.email} />
          </div>
          <div className="sd-fx-actions">
            <a className="sd-fx-btn sd-fx-btn--ghost" href="/">Cancel</a>
            <button type="button" className="sd-fx-btn sd-fx-btn--wide" onClick={next}>Continue</button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h3 className="sd-mem-h3 deva">
            सहायता विवरण <span>| Assistance Details</span>
          </h3>
          <div className="sd-fx-notice">
            <strong>आगे के चरण शीघ्र सक्रिय होंगे</strong>
            <p className="deva">
              मोबाइल सत्यापन के पश्चात सहायता विवरण, दस्तावेज़ अपलोड एवं पुष्टि के चरण यहाँ खुलेंगे।
              तब तक कृपया हेल्पलाइन पर संपर्क करें अथवा नीचे दिए गए विकल्पों का उपयोग करें।
            </p>
          </div>
          <Declaration checked={decl} onChange={setDecl}>
            मैं पुष्टि करता / करती हूँ कि दी गई जानकारी सत्य एवं सही है।
          </Declaration>
          {formErr && <p className="sd-mem-err sd-mem-err--block">{formErr}</p>}
          <div className="sd-fx-actions">
            <button type="button" className="sd-fx-btn sd-fx-btn--ghost" onClick={() => setStep(1)}>← पीछे</button>
            <button type="button" className="sd-fx-btn sd-fx-btn--wide" onClick={submit}>
              अनुरोध दर्ज करें | Submit Request
            </button>
          </div>
        </>
      )}

      <DemoNotice />
    </div>
  )
}

/* ============================ Contact ============================ */
const PURPOSES = [
  'General Contact / सामान्य संपर्क',
  'Call-back Request / कॉल बैक अनुरोध',
  'Donation & Payment Support / दान एवं भुगतान सहायता',
  'CSR / Partnership Inquiry / CSR एवं साझेदारी पूछताछ',
  'Media & Press Inquiry / मीडिया एवं प्रेस पूछताछ',
  'Volunteer / Membership Inquiry / स्वयंसेवक एवं सदस्यता पूछताछ',
  'Complaint Related / शिकायत संबंधी',
  'Technical / Website Support / तकनीकी सहायता',
  'Other / अन्य',
]

export function InquiryForm() {
  const [f, setF] = useState({ name: '', mobile: '', email: '', purpose: '', message: '' })
  const [terms, setTerms] = useState(false)
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formErr, setFormErr] = useState('')
  const [reference, setReference] = useState('')

  const set = (k: keyof typeof f) => (v: string) => setF((p) => ({ ...p, [k]: v }))

  if (reference) {
    return (
      <SubmittedPanel
        title="आपका अनुरोध प्राप्त हो गया"
        message="कृपया यह संदर्भ संख्या सुरक्षित रखें। सामान्यतः 24–72 कार्य घंटों के भीतर उत्तर देने का प्रयास किया जाता है।"
        reference={reference}
      />
    )
  }

  function submit() {
    const e = checkRequired([
      { key: 'name', value: f.name, required: true },
      { key: 'mobile', value: f.mobile, type: 'tel', required: true },
      { key: 'email', value: f.email, type: 'email', required: true },
      { key: 'purpose', value: f.purpose, required: true },
      { key: 'message', value: f.message, required: true },
    ])
    setErrors(e)
    if (Object.keys(e).length) return
    if (!terms || !consent) {
      setFormErr(DECL_MISSING)
      return
    }
    setFormErr('')
    setReference(makeRef('SDMKF-INQ'))
  }

  return (
    <div className="sd-fx-panel">
      <div className="sd-fx-grid">
        <TextField label="पूरा नाम" en="Full Name" required value={f.name} onChange={set('name')} error={errors.name} />
      </div>
      <OtpField label="मोबाइल नंबर" en="Mobile Number" required value={f.mobile} onChange={set('mobile')} error={errors.mobile} />
      <OtpField label="ईमेल आईडी" en="Email ID" type="email" required value={f.email} onChange={set('email')} error={errors.email} />
      <div className="sd-fx-grid">
        <SelectField
          label="विषय / उद्देश्य" en="Subject / Purpose" required
          value={f.purpose} onChange={set('purpose')} error={errors.purpose}
          placeholder="Select Purpose" options={PURPOSES}
        />
      </div>
      <TextAreaField label="अपना संदेश" en="Your Message" required rows={5} value={f.message} onChange={set('message')} error={errors.message} />

      <Declaration checked={terms} onChange={setTerms}>
        I have read and agree to the Terms &amp; Conditions
      </Declaration>
      <Declaration checked={consent} onChange={setConsent}>
        I agree to be contacted regarding this inquiry
      </Declaration>
      {formErr && <p className="sd-mem-err sd-mem-err--block">{formErr}</p>}

      <div className="sd-fx-actions">
        <button type="button" className="sd-fx-btn sd-fx-btn--wide" onClick={submit}>Submit Inquiry</button>
      </div>
      <DemoNotice />
    </div>
  )
}

/* ============================ Complaint ============================ */
const CATEGORIES = [
  'Service / Helpline Delay', 'Donation / Receipt Issue', 'Volunteer Related',
  'Membership / ID Related', 'Payment / Transaction Issue', 'Verification Related',
  'Website / Technical Issue', 'Misconduct / Behaviour Issue', 'Other',
]
const PRIORITIES = ['Normal (48 Hours)', 'High (24 Hours)', 'Urgent (यथाशीघ्र समीक्षा)']

export function ComplaintForm() {
  const [step, setStep] = useState(1)
  const [f, setF] = useState({
    name: '', mobile: '', email: '', category: '', priority: '', subject: '', detail: '',
  })
  const [truth, setTruth] = useState(false)
  const [terms, setTerms] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formErr, setFormErr] = useState('')
  const [reference, setReference] = useState('')

  const set = (k: keyof typeof f) => (v: string) => setF((p) => ({ ...p, [k]: v }))

  if (reference) {
    return (
      <SubmittedPanel
        title="आपकी शिकायत दर्ज हो गई"
        message="कृपया यह शिकायत संख्या सुरक्षित रखें। समीक्षा के पश्चात आपको सूचित किया जाएगा।"
        reference={reference}
      />
    )
  }

  function step1() {
    const e = checkRequired([
      { key: 'name', value: f.name, required: true },
      { key: 'mobile', value: f.mobile, type: 'tel', required: true },
      { key: 'email', value: f.email, type: 'email' },
    ])
    setErrors(e)
    if (!Object.keys(e).length) setStep(2)
  }

  function step2() {
    const e = checkRequired([
      { key: 'category', value: f.category, required: true },
      { key: 'priority', value: f.priority, required: true },
      { key: 'subject', value: f.subject, required: true },
      { key: 'detail', value: f.detail, required: true },
    ])
    setErrors(e)
    if (!Object.keys(e).length) setStep(3)
  }

  function submit() {
    if (!truth || !terms) {
      setFormErr(DECL_MISSING)
      return
    }
    setFormErr('')
    setReference(makeRef('SDMKF-CMP'))
  }

  return (
    <div className="sd-fx-panel">
      <StepRail steps={['शिकायतकर्ता विवरण', 'शिकायत का विवरण', 'सत्यापन एवं घोषणा']} current={step} />

      {step === 1 && (
        <>
          <h3 className="sd-mem-h3 deva">शिकायतकर्ता का विवरण <span>| Complainant Details</span></h3>
          <div className="sd-fx-grid">
            <TextField label="पूरा नाम" en="Full Name" required value={f.name} onChange={set('name')} error={errors.name} />
          </div>
          <OtpField label="मोबाइल नंबर" en="Mobile Number" required value={f.mobile} onChange={set('mobile')} error={errors.mobile} />
          <OtpField label="ईमेल पता (वैकल्पिक)" en="Email Address (Optional)" type="email" value={f.email} onChange={set('email')} error={errors.email} />
          <p className="sd-mem-hint deva">ईमेल पता अपडेट एवं स्थिति सूचना प्राप्त करने हेतु उपयोग किया जा सकता है।</p>
          <div className="sd-fx-actions">
            <button type="button" className="sd-fx-btn sd-fx-btn--wide" onClick={step1}>आगे बढ़ें | Continue</button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h3 className="sd-mem-h3 deva">शिकायत का प्रकार एवं विवरण <span>| Complaint Nature &amp; Details</span></h3>
          <div className="sd-fx-grid">
            <SelectField label="शिकायत श्रेणी" en="Complaint Category" required value={f.category} onChange={set('category')} error={errors.category} placeholder="Select Category" options={CATEGORIES} />
            <SelectField label="प्राथमिकता स्तर" en="Priority Level" required value={f.priority} onChange={set('priority')} error={errors.priority} placeholder="Select Priority" options={PRIORITIES} />
          </div>
          <TextField label="शिकायत का विषय" en="Complaint Subject" required value={f.subject} onChange={set('subject')} error={errors.subject} />
          <TextAreaField label="विस्तृत शिकायत विवरण" en="Detailed Complaint Description" required rows={5} value={f.detail} onChange={set('detail')} error={errors.detail} />
          <div className="sd-mem-field">
            <label htmlFor="cp-proof">
              दस्तावेज़ संलग्न करें (Optional)
              <em>Attach Proof — JPG, PNG, PDF (Max 10 MB)</em>
            </label>
            <input id="cp-proof" type="file" accept="image/*,.pdf" />
          </div>
          <div className="sd-fx-actions">
            <button type="button" className="sd-fx-btn sd-fx-btn--ghost" onClick={() => setStep(1)}>← पीछे</button>
            <button type="button" className="sd-fx-btn sd-fx-btn--wide" onClick={step2}>आगे बढ़ें | Continue</button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h3 className="sd-mem-h3 deva">सत्यापन एवं घोषणा <span>| Verification &amp; Declaration</span></h3>
          <Declaration checked={truth} onChange={setTruth}>
            मैं पुष्टि करता / करती हूँ कि मेरे द्वारा दी गई जानकारी सत्य एवं सही है।
          </Declaration>
          <Declaration checked={terms} onChange={setTerms}>
            I have read and agree to the Terms &amp; Conditions
          </Declaration>
          {formErr && <p className="sd-mem-err sd-mem-err--block">{formErr}</p>}
          <div className="sd-fx-actions">
            <button type="button" className="sd-fx-btn sd-fx-btn--ghost" onClick={() => setStep(2)}>← पीछे</button>
            <button type="button" className="sd-fx-btn sd-fx-btn--wide" onClick={submit}>
              Submit Complaint | शिकायत दर्ज करें
            </button>
          </div>
        </>
      )}

      <DemoNotice />
    </div>
  )
}
