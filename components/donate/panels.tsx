'use client'

import { useState } from 'react'
import CopyButton from './CopyButton'
import { BANK, DEFAULT_UPI, upiLink, upiQr, type Upi } from '@/lib/upi'

/* The three payment panels from the donate page, split out during the
   Next.js rebuild so PayTabs can switch between them. */
export function QrPanel({ upi = DEFAULT_UPI }: { upi?: Upi }) {
  const [qr, setQr] = useState<string>('gpay')

  return (
    <div className="sd-pay-body">
      <div className="sd-pay-lead">
        <h3 className="deva">UPI एवं QR Code द्वारा दान</h3>
        <p className="deva">
          आपकी सुविधा के लिए UPI एवं QR Code द्वारा दान करने हेतु निम्न तीन विकल्प उपलब्ध हैं — Indian Bank, Google Pay एवं Razorpay। कृपया अपनी सुविधा अनुसार किसी भी विकल्प का उपयोग करें।
        </p>
      </div>
      <div className="sd-pay-subtabs">
        <button
          type="button"
          className={'sd-pay-subtab' + (qr === 'gpay' ? ' is-active' : '')}
          aria-selected={qr === 'gpay'}
          onClick={() => setQr('gpay')}
        >UPI QR — Google Pay</button>
        {' '}
        <button
          type="button"
          className={'sd-pay-subtab' + (qr === 'indianbank' ? ' is-active' : '')}
          aria-selected={qr === 'indianbank'}
          onClick={() => setQr('indianbank')}
        >Indian Bank QR</button>
        {' '}
        <button
          type="button"
          className={'sd-pay-subtab' + (qr === 'razorpay' ? ' is-active' : '')}
          aria-selected={qr === 'razorpay'}
          onClick={() => setQr('razorpay')}
        >Razorpay QR</button>
      </div>
      <div className={'sd-qr-pane' + (qr === 'gpay' ? ' is-active' : '')}>
        <div className="sd-phone">
          <div className="sd-phone-inner">
            <div className="sd-phone-head">
              <span className="sd-phone-title">Google Pay / UPI</span>
              <div className="sd-phone-sub">Official Seva UPI ID</div>
            </div>
            <h3 className="sd-phone-name">Sanatan Dharm Manav Kalyan Foundation</h3>
            <div className="sd-phone-phone">+91 97680 00666</div>
            <div className="sd-phone-amt">
              <span>Amount set to:</span>
              <strong>₹501</strong>
            </div>
            <div className="sd-phone-qr">
              <img
                src={upiQr(upi)}
                alt="Google Pay UPI QR code for ₹501"
                className="sd-phone-qrimg"
                loading="lazy"
              />
            </div>
            <div className="sd-phone-foot">
              <div>
                UPI ID:{' '}
                <strong className="sd-mono">{upi.id}</strong>
              </div>
            </div>
          </div>
        </div>
        <a
          href={upiLink(upi)}
          className="sd-pay-cta sd-btn sd-btn--pay-now"
        >
          <span>Open Google Pay / UPI App (₹501)</span>
        </a>
        <p className="sd-pay-note">
          Scanning this QR automatically opens Google Pay / UPI with{' '}
          <strong>₹501</strong>
          {' '}pre-filled.
        </p>
      </div>
      <div className={'sd-qr-pane' + (qr === 'indianbank' ? ' is-active' : '')}>
        <div className="sd-phone">
          <div className="sd-phone-inner">
            <div className="sd-phone-head">
              <span className="sd-phone-title">Indian Bank</span>
              <div className="sd-phone-sub">Official Seva Account QR</div>
            </div>
            <h3 className="sd-phone-name">Sanatan Dharm Manav Kalyan Foundation</h3>
            <div className="sd-phone-phone">+91 97680 00666</div>
            <div className="sd-phone-amt">
              <span>Amount set to:</span>
              <strong>₹501</strong>
            </div>
            <div className="sd-phone-qr">
              <img
                src={upiQr(upi)}
                alt="Indian Bank QR code for ₹501"
                className="sd-phone-qrimg"
                loading="lazy"
              />
            </div>
            <div className="sd-phone-foot">
              <div>
                Account:{' '}
                <strong className="sd-mono">{BANK.accountNumber}</strong>
              </div>
              <div>
                IFSC:{' '}
                <strong className="sd-mono">{BANK.ifsc}</strong>
              </div>
            </div>
          </div>
        </div>
        <a
          href={upiLink(upi)}
          className="sd-pay-cta sd-btn sd-btn--pay-now"
        >
          <span>Open Google Pay / UPI App (₹501)</span>
        </a>
        <p className="sd-pay-note">
          Scanning this QR automatically opens Google Pay / UPI with{' '}
          <strong>₹501</strong>
          {' '}pre-filled.
        </p>
      </div>
      <div className={'sd-qr-pane' + (qr === 'razorpay' ? ' is-active' : '')}>
        <div className="sd-pay-pending">
          <div className="sd-pay-pending-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="5" height="5" x="3" y="3" rx="1"></rect>
              <rect width="5" height="5" x="16" y="3" rx="1"></rect>
              <rect width="5" height="5" x="3" y="16" rx="1"></rect>
              <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
              <path d="M21 21v.01"></path>
              <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
              <path d="M3 12h.01"></path>
              <path d="M12 3h.01"></path>
              <path d="M12 16v.01"></path>
              <path d="M16 12h1"></path>
              <path d="M21 12v.01"></path>
              <path d="M12 21v-1"></path>
            </svg>
          </div>
          <h3 className="sd-pay-pending-title">Razorpay QR</h3>
          <p className="sd-pay-pending-text">
            Razorpay का आधिकारिक QR कोड शीघ्र ही यहाँ उपलब्ध कराया जाएगा। तब तक कृपया ऊपर दिए गए UPI QR अथवा Indian Bank QR का उपयोग करें।
          </p>
          <p className="sd-pay-pending-en">
            The official Razorpay QR will be added here. Until then, please use the UPI or Indian Bank QR above.
          </p>
        </div>
      </div>
    </div>
  )
}

export function BankPanel({ upi = DEFAULT_UPI }: { upi?: Upi }) {
  return (
    <div className="sd-pay-body">
      <div className="sd-pay-lead">
        <h3 className="deva">बैंक ट्रांसफर द्वारा दान</h3>
        <p className="deva">
          आप Account Number एवं IFSC Code के माध्यम से सीधे बैंक खाते में राशि Transfer कर सकते हैं। इसके अतिरिक्त NEFT / RTGS / IMPS द्वारा भी सहयोग कर सकते हैं।
        </p>
      </div>
      <div className="sd-pay-quote">
        आज आपका छोटा सा सहयोग इस मिशन को आगे बढ़ाने के लिए अत्यंत महत्वपूर्ण होगा। आपका योगदान सेवा, सुरक्षा, संस्कार एवं धर्म आधारित मानव कल्याण के इस अभियान को सशक्त बनाने में महत्वपूर्ण भूमिका निभाएगा।
      </div>
      <div className="sd-bank">
        <div className="sd-bank-head">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="3" x2="21" y1="22" y2="22"></line>
            <line x1="6" x2="6" y1="18" y2="11"></line>
            <line x1="10" x2="10" y1="18" y2="11"></line>
            <line x1="14" x2="14" y1="18" y2="11"></line>
            <line x1="18" x2="18" y1="18" y2="11"></line>
            <polygon points="12 2 20 7 4 7"></polygon>
          </svg>
          <span>Bank Account Details</span>
        </div>
        <div className="sd-bank-rows">
          <div className="sd-bank-row">
            <span className="sd-bank-k">Account Name:</span>
            <span className="sd-bank-v">{BANK.accountName}</span>
            <CopyButton value={BANK.accountName} label="account name" />
          </div>
          <div className="sd-bank-row">
            <span className="sd-bank-k">Bank Name:</span>
            <span className="sd-bank-v">{BANK.bankName}</span>
            <CopyButton value={BANK.bankName} label="bank name" />
          </div>
          <div className="sd-bank-row">
            <span className="sd-bank-k">Account Number:</span>
            <span className="sd-bank-v sd-mono">{BANK.accountNumber}</span>
            <CopyButton value={BANK.accountNumber} label="account number" />
          </div>
          <div className="sd-bank-row">
            <span className="sd-bank-k">IFSC Code:</span>
            <span className="sd-bank-v sd-mono">{BANK.ifsc}</span>
            <CopyButton value={BANK.ifsc} label="IFSC code" />
          </div>
        </div>
      </div>
      <div className="sd-pay-warn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
          <path d="M12 9v4"></path>
          <path d="M12 17h.01"></path>
        </svg>
        <p>
          भुगतान करते समय कृपया सुनिश्चित करें कि बैंक खाता{' '}
          <strong>'Sanatan Dharm Manav Kalyan Foundation'</strong>
          {' '}के नाम पर ही हो।
        </p>
      </div>
      <div className="sd-how">
        <div className="sd-how-title">How To Donate</div>
        <ol className="sd-how-list">
          <li>
            <span className="sd-how-n">1</span>
            <span>
              Transfer the donation amount via NEFT / RTGS / IMPS to the account above.
            </span>
          </li>
          {/* Steps 2-4 point at the Payment Confirmation form further down this
              page. Telling donors to phone the details in instead left the
              office reconciling transfers by hand against a bank statement. */}
          <li>
            <span className="sd-how-n">2</span>
            <span>Fill out the Payment Confirmation form below with your details.</span>
          </li>
          <li>
            <span className="sd-how-n">3</span>
            <span>Provide the UTR / Transaction Reference Number from your bank.</span>
          </li>
          <li>
            <span className="sd-how-n">4</span>
            <span>Upload a screenshot of the successful payment as evidence.</span>
          </li>
          <li>
            <span className="sd-how-n">5</span>
            <span>
              Our team will verify your contribution and email the 80G receipt within 24 hours.
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export function OtherPanel({ upi = DEFAULT_UPI }: { upi?: Upi }) {
  return (
    <div className="sd-pay-body">
      <div className="sd-pay-lead">
        <h3 className="deva">अन्य सहयोग माध्यम</h3>
        <p className="deva">नीचे दिए गए माध्यमों से भी आप सहयोग प्रदान कर सकते हैं।</p>
      </div>
      <div className="sd-ow">
        <article className="sd-ow-card">
          <div className="sd-ow-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M8 13h8"></path>
              <path d="M8 17h5"></path>
            </svg>
          </div>
          <div className="sd-ow-body">
            <h4 className="sd-ow-title">Cheque / Demand Draft</h4>
            <p className="sd-ow-text deva">आप Cheque या Demand Draft (DD) द्वारा भी सहयोग प्रदान कर सकते हैं।</p>
            <p className="sd-ow-note deva">
              Cheque / DD{' '}
              <strong>'Sanatan Dharm Manav Kalyan Foundation'</strong>
              {' '}के नाम पर बनवाएँ। विवरण हेतु +91 97680 00666 पर संपर्क करें।
            </p>
          </div>
        </article>
        <article className="sd-ow-card">
          <div className="sd-ow-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 12v10H4V12"></path>
              <path d="M2 7h20v5H2z"></path>
              <path d="M12 22V7"></path>
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
            </svg>
          </div>
          <div className="sd-ow-body">
            <h4 className="sd-ow-title deva">वस्तु एवं अन्य सहयोग</h4>
            <p className="sd-ow-text deva">
              आप Mobile, Bike, Office Equipment, वस्त्र, दवाइयाँ, पुस्तकें, सामग्री, संपत्ति (Property) अथवा किसी अन्य प्रकार से भी सहयोग कर सकते हैं।
            </p>
            <p className="sd-ow-note deva">
              इस प्रकार के सहयोग हेतु कृपया हमारी टीम से संपर्क करें — आवश्यक जानकारी एवं प्रक्रिया आपको उपलब्ध करा दी जाएगी।
            </p>
          </div>
        </article>
      </div>
      <p className="sd-ow-foot deva">
        आपका प्रत्येक सहयोग सनातन धर्म, सेवा एवं मानव कल्याण के कार्यों को आगे बढ़ाने में महत्वपूर्ण भूमिका निभाता है।
      </p>
      <a className="sd-pay-cta sd-btn sd-btn--contact-us" href="/contact">
        <span>Contact Us For Assistance</span>
      </a>
    </div>
  )
}
