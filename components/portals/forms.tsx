'use client'

import { useState } from 'react'
import {
  Declaration, DemoNotice, OtpField, SelectField, TextAreaField, TextField,
  CaptchaBox, checkRequired, makeRef, useCaptcha,
} from './fields'
import { StepRail, SubmittedPanel } from './widgets'

const DECL_MISSING = 'कृपया सभी आवश्यक घोषणाएँ स्वीकार करें।'

/* ============================ Need Help ============================ */
/* Fields, labels and buttons follow the client's brief "Need Help.docx".
   The brief titles the form "Help Request Form (5 Steps)" but only defines
   STEP 1 OF 5, so step 1 is built exactly as written and the later steps
   say plainly that they are not specified yet. */
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
      <p className="sd-fx-stepcount">STEP {step} OF 5</p>
      <StepRail
        steps={['Applicant Information', 'सहायता विवरण', 'दस्तावेज़', 'समीक्षा', 'पुष्टि']}
        current={step}
      />

      {step === 1 && (
        <>
          <h3 className="sd-mem-h3">
            Applicant Information <span>• आवेदक की जानकारी</span>
          </h3>
          <p className="sd-mem-hint deva">आवेदक का व्यक्तिगत विवरण भरें।</p>

          <div className="sd-fx-grid">
            <TextField label="Full Name / पूरा नाम" required value={name} onChange={setName} error={errors.name} />
          </div>
          <OtpField label="Mobile Number / मोबाइल नंबर" required value={mobile} onChange={setMobile} error={errors.mobile} />
          <div className="sd-fx-grid">
            <TextField
              label="Email Address (Optional) / ईमेल पता (वैकल्पिक)"
              type="email"
              value={email}
              onChange={setEmail}
              error={errors.email}
            />
          </div>

          <div className="sd-fx-actions">
            <a className="sd-fx-btn sd-fx-btn--ghost" href="/">Cancel</a>
            <button type="button" className="sd-fx-btn sd-fx-btn--wide" onClick={next}>Continue</button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="sd-fx-notice">
            <strong>चरण 2–5 की जानकारी प्रतीक्षित</strong>
            <p className="deva">
              ब्रीफ़ में केवल STEP 1 OF 5 का विवरण दिया गया है। शेष चरणों के फ़ील्ड प्राप्त होते ही
              यहाँ जोड़ दिए जाएँगे। तब तक आप नीचे पुष्टि कर अनुरोध दर्ज कर सकते हैं।
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
/* Fields, order and wording follow the client's brief
   "CONTACT US & INQUIRY PORTAL.docx". */
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

  const captcha = useCaptcha()

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
      setFormErr('कृपया दोनों घोषणाएँ स्वीकार करें।')
      return
    }
    if (!captcha.solved) {
      setFormErr('कृपया Captcha का सही उत्तर दें।')
      return
    }
    setFormErr('')
    setReference(makeRef('SDMKF-INQ'))
  }

  return (
    <div className="sd-fx-panel">
      <p className="sd-mem-p deva">कृपया निम्न जानकारी साझा करें:</p>

      <div className="sd-fx-grid">
        <TextField label="पूरा नाम" required value={f.name} onChange={set('name')} error={errors.name} />
      </div>
      <OtpField label="मोबाइल नंबर" required verb="Verify" value={f.mobile} onChange={set('mobile')} error={errors.mobile} />
      <OtpField label="Email ID" required verb="Verify" type="email" value={f.email} onChange={set('email')} error={errors.email} />

      <div className="sd-fx-grid">
        <SelectField
          label="Subject / Purpose" required
          value={f.purpose} onChange={set('purpose')} error={errors.purpose}
          placeholder="Select Purpose" options={PURPOSES}
        />
      </div>

      <h4 className="sd-mem-h3">Your Message | अपना संदेश</h4>
      <TextAreaField label="Message" required rows={5} value={f.message} onChange={set('message')} error={errors.message} />

      <label className="sd-mem-check sd-mem-check--decl">
        <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
        <span>
          I have read and agree to the{' '}
          <a href="/legal-documents" className="sd-fx-inlink">Terms &amp; Conditions</a>
        </span>
      </label>
      <label className="sd-mem-check sd-mem-check--decl">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
        <span>I agree to be contacted regarding this inquiry</span>
      </label>

      <CaptchaBox id="ct-captcha" sum={captcha.sum} answer={captcha.answer} setAnswer={captcha.setAnswer} />

      {formErr && <p className="sd-mem-err sd-mem-err--block">{formErr}</p>}

      <div className="sd-fx-actions">
        <button type="button" className="sd-fx-btn sd-fx-btn--wide" onClick={submit}>
          Submit Inquiry
        </button>
      </div>
      <DemoNotice />
    </div>
  )
}

/* ============================ Complaint ============================ */
/* Steps, dropdowns and declarations follow the client's brief
   "Raise a Complaint Page.docx". */
const CATEGORIES = [
  'Service / Helpline Delay',
  'Donation / Receipt Issue',
  'Volunteer Related',
  'Membership / ID Related',
  'Payment / Transaction Issue',
  'Verification Related',
  'Website / Technical Issue',
  'Misconduct / Behaviour Issue',
  'Other',
]
const PRIORITIES = ['Normal (48 Hours)', 'High (24 Hours)', 'Urgent (यथाशीघ्र समीक्षा)']

export function ComplaintForm() {
  const [step, setStep] = useState(1)
  const [f, setF] = useState({
    name: '', mobile: '', email: '', category: '', priority: '', subject: '', detail: '',
  })
  const [proof, setProof] = useState('')
  const [notRobot, setNotRobot] = useState(false)
  const [truth, setTruth] = useState(false)
  const [terms, setTerms] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formErr, setFormErr] = useState('')
  const [reference, setReference] = useState('')
  const captcha = useCaptcha()

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
    if (!Object.keys(e).length) { setFormErr(''); setStep(2) }
  }

  function step2() {
    const e = checkRequired([
      { key: 'category', value: f.category, required: true },
      { key: 'priority', value: f.priority, required: true },
      { key: 'subject', value: f.subject, required: true },
      { key: 'detail', value: f.detail, required: true },
    ])
    setErrors(e)
    if (!Object.keys(e).length) { setFormErr(''); setStep(3) }
  }

  function submit() {
    if (!notRobot) return setFormErr('कृपया "I am not a robot" पर टिक करें।')
    if (!captcha.solved) return setFormErr('कृपया Captcha का सही उत्तर दें।')
    if (!truth || !terms) return setFormErr(DECL_MISSING)
    setFormErr('')
    setReference(makeRef('SDMKF-CMP'))
  }

  return (
    <div className="sd-fx-panel">
      <StepRail
        steps={['Complainant Details', 'Complaint Nature & Details', 'Verification & Declaration']}
        current={step}
      />

      {step === 1 && (
        <>
          <h3 className="sd-mem-h3">
            Step 1: Complainant Details <span>| शिकायतकर्ता का विवरण</span>
          </h3>
          <div className="sd-fx-grid">
            <TextField label="Full Name / पूरा नाम" required value={f.name} onChange={set('name')} error={errors.name} />
          </div>
          <OtpField label="Mobile Number / मोबाइल नंबर" required verb="Verify" value={f.mobile} onChange={set('mobile')} error={errors.mobile} />
          <OtpField label="Email Address (Optional) / ईमेल पता (वैकल्पिक)" verb="Verify" type="email" value={f.email} onChange={set('email')} error={errors.email} />
          <p className="sd-mem-hint deva">
            (ईमेल पता अपडेट एवं स्थिति सूचना प्राप्त करने हेतु उपयोग किया जा सकता है।)
          </p>
          <div className="sd-fx-actions">
            <button type="button" className="sd-fx-btn sd-fx-btn--wide" onClick={step1}>आगे बढ़ें | Continue</button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <h3 className="sd-mem-h3">
            Step 2: Complaint Nature &amp; Details <span>| शिकायत का प्रकार एवं विवरण</span>
          </h3>
          <div className="sd-fx-grid">
            <SelectField
              label="Complaint Category / शिकायत श्रेणी" required
              value={f.category} onChange={set('category')} error={errors.category}
              placeholder="Select Category" options={CATEGORIES}
            />
            <SelectField
              label="Priority Level / प्राथमिकता स्तर" required
              value={f.priority} onChange={set('priority')} error={errors.priority}
              placeholder="Select Priority" options={PRIORITIES}
            />
          </div>
          <TextField
            label="Complaint Subject / शिकायत का विषय" required
            placeholder="विषय दर्ज करें"
            value={f.subject} onChange={set('subject')} error={errors.subject}
          />
          <TextAreaField
            label="Detailed Complaint Description | विस्तृत शिकायत विवरण" required rows={5}
            hint="कृपया अपनी समस्या का पूरा विवरण लिखें।"
            value={f.detail} onChange={set('detail')} error={errors.detail}
          />
          <div className="sd-mem-field">
            <label htmlFor="cp-proof">
              Attach Proof / दस्तावेज़ संलग्न करें (Optional)
              <em>JPG, PNG, PDF (Max 10 MB)</em>
            </label>
            <input
              id="cp-proof"
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={(e) => setProof(e.target.files?.[0]?.name || '')}
            />
            {proof && <p className="sd-mem-hint">{proof}</p>}
          </div>
          <div className="sd-fx-actions">
            <button type="button" className="sd-fx-btn sd-fx-btn--ghost" onClick={() => setStep(1)}>← पीछे</button>
            <button type="button" className="sd-fx-btn sd-fx-btn--wide" onClick={step2}>आगे बढ़ें | Continue</button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <h3 className="sd-mem-h3">
            Step 3: Verification &amp; Declaration <span>| सत्यापन एवं घोषणा</span>
          </h3>

          <label className="sd-mem-check sd-mem-check--decl">
            <input type="checkbox" checked={notRobot} onChange={(e) => setNotRobot(e.target.checked)} />
            <span>I am not a robot (CAPTCHA Protection)</span>
          </label>
          <CaptchaBox id="cp-captcha" sum={captcha.sum} answer={captcha.answer} setAnswer={captcha.setAnswer} />

          <label className="sd-mem-check sd-mem-check--decl">
            <input type="checkbox" checked={truth} onChange={(e) => setTruth(e.target.checked)} />
            <span className="deva">
              मैं पुष्टि करता/करती हूँ कि मेरे द्वारा दी गई जानकारी सत्य एवं सही है।
            </span>
          </label>
          <label className="sd-mem-check sd-mem-check--decl">
            <input type="checkbox" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
            <span>
              I have read and agree to the{' '}
              <a href="/legal-documents" className="sd-fx-inlink">Terms &amp; Conditions</a>
            </span>
          </label>

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