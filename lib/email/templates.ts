import { env } from '@/lib/env'

/* Bilingual transactional emails, Hindi first then English, matching how the
   site itself reads.

   Written as plain strings rather than a component library: they must render
   in Gmail, Outlook and every Indian webmail client, which means tables and
   inline styles, not flexbox. There is no build step and nothing to learn
   before editing one.

   The acknowledgement templates are careful never to imply a receipt.
   Someone who has reported an offline payment has not yet been verified, and
   telling them "thank you for your donation, here is your receipt" before an
   admin has checked the bank statement is how an NGO ends up issuing 80G
   certificates for money that never arrived. */

const BRAND = '#c44800'
const INK = '#1f2937'
const MUTED = '#6b7280'

function layout(title: string, body: string, footerNote?: string) {
  const site = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f6f7f9;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f6f7f9;padding:24px 12px;">
<tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;font-family:Arial,'Noto Sans',sans-serif;">
  <tr><td style="padding:20px 24px;border-bottom:3px solid ${BRAND};">
    <div style="font-size:17px;font-weight:bold;color:${INK};">सनातन धर्म मानव कल्याण फाउंडेशन</div>
    <div style="font-size:11px;color:${MUTED};letter-spacing:.5px;">SANATAN DHARM MANAV KALYAN FOUNDATION</div>
  </td></tr>
  <tr><td style="padding:24px;">
    <h1 style="margin:0 0 14px;font-size:18px;color:${INK};">${title}</h1>
    ${body}
  </td></tr>
  <tr><td style="padding:16px 24px;background:#fafafa;border-top:1px solid #eee;font-size:11px;color:${MUTED};line-height:1.7;">
    ${footerNote ? `<div style="margin-bottom:8px;">${footerNote}</div>` : ''}
    <a href="${site}" style="color:${BRAND};text-decoration:none;">${site.replace(/^https?:\/\//, '')}</a>
    &nbsp;·&nbsp; ${env.EMAIL_REPLY_TO || ''}
    <div style="margin-top:8px;">यह एक स्वचालित संदेश है। This is an automated message.</div>
  </td></tr>
</table>
</td></tr></table>
</body></html>`
}

const refBox = (label: string, value: string) => `
<table role="presentation" cellpadding="0" cellspacing="0" style="margin:16px 0;background:#fff8f0;border:1px solid #f3d9bd;border-radius:8px;">
  <tr><td style="padding:14px 18px;">
    <div style="font-size:11px;color:${MUTED};text-transform:uppercase;letter-spacing:.06em;">${label}</div>
    <div style="font-size:22px;font-weight:bold;color:${BRAND};letter-spacing:.02em;margin-top:2px;">${value}</div>
  </td></tr>
</table>`

const p = (hi: string, en: string) => `
<p style="margin:0 0 10px;font-size:14px;line-height:1.8;color:${INK};">${hi}</p>
<p style="margin:0 0 16px;font-size:13px;line-height:1.7;color:${MUTED};">${en}</p>`

/* ---------- acknowledgements: sent automatically, promise nothing ---------- */

const KIND_LABEL: Record<string, { hi: string; en: string }> = {
  help: { hi: 'सहायता अनुरोध', en: 'Help request' },
  complaint: { hi: 'शिकायत', en: 'Complaint' },
  inquiry: { hi: 'पूछताछ', en: 'Enquiry' },
  callback: { hi: 'कॉल बैक अनुरोध', en: 'Call-back request' },
  csr_partner: { hi: 'CSR साझेदारी अनुरोध', en: 'CSR partnership enquiry' },
  seva_partner: { hi: 'सेवा साझेदारी अनुरोध', en: 'Seva partnership enquiry' },
  fundraiser: { hi: 'फंडरेज़र आवेदन', en: 'Fundraiser application' },
  report_fake_id: { hi: 'फर्जी पहचान पत्र की सूचना', en: 'Fake ID report' },
}

export function ticketAcknowledgement(o: {
  name: string
  kind: string
  ticketNo: string
  slaHours: number
}) {
  const label = KIND_LABEL[o.kind] ?? { hi: 'अनुरोध', en: 'Request' }
  const site = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')

  return {
    subject: `${label.en} received — ${o.ticketNo}`,
    html: layout(
      'आपका अनुरोध प्राप्त हो गया है',
      `${p(
        `नमस्ते ${o.name},`,
        `Dear ${o.name},`
      )}
      ${p(
        `आपका ${label.hi} सफलतापूर्वक प्राप्त हो गया है। हमारी टीम आपके द्वारा साझा की गई जानकारी की समीक्षा करेगी और आवश्यकता अनुसार आपसे संपर्क करने का प्रयास करेगी।`,
        `Your ${label.en.toLowerCase()} has been received. Our team will review the information you shared and get in touch as needed.`
      )}
      ${refBox('संदर्भ संख्या / Reference number', o.ticketNo)}
      ${p(
        `कृपया यह संख्या सुरक्षित रखें। आप <a href="${site}/track" style="color:${BRAND};">स्थिति ट्रैक</a> करने के लिए इसका उपयोग कर सकते हैं।`,
        `Please keep this number safe — you can use it to track the status of your request.`
      )}
      ${p(
        `सामान्यतः हम ${o.slaHours} घंटों के भीतर समीक्षा पूरी करने का प्रयास करते हैं।`,
        `We aim to review requests within ${o.slaHours} hours.`
      )}`,
      'सेवा • सत्य • संस्कार ही सच्चा धर्म है'
    ),
    text:
      `Your ${label.en.toLowerCase()} has been received.\n\n` +
      `Reference number: ${o.ticketNo}\n\n` +
      `Keep this number to track the status. We aim to review within ${o.slaHours} hours.`,
  }
}

/* ---------- what the office is told ---------- */

export function adminNotification(o: {
  kind: string
  ticketNo: string
  name: string
  mobile: string
  summary?: string
}) {
  const label = KIND_LABEL[o.kind] ?? { hi: '', en: 'Request' }
  const site = env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  return {
    subject: `New ${label.en.toLowerCase()} — ${o.ticketNo}`,
    html: layout(
      `New ${label.en.toLowerCase()}`,
      `<table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;font-size:13px;color:${INK};">
        <tr><td style="padding:5px 0;color:${MUTED};width:110px;">Reference</td><td style="padding:5px 0;font-weight:bold;">${o.ticketNo}</td></tr>
        <tr><td style="padding:5px 0;color:${MUTED};">Name</td><td style="padding:5px 0;">${o.name}</td></tr>
        <tr><td style="padding:5px 0;color:${MUTED};">Mobile</td><td style="padding:5px 0;">${o.mobile}</td></tr>
        ${o.summary ? `<tr><td style="padding:5px 0;color:${MUTED};vertical-align:top;">Details</td><td style="padding:5px 0;">${escapeHtml(o.summary).slice(0, 500)}</td></tr>` : ''}
      </table>
      <p style="margin:18px 0 0;">
        <a href="${site}/admin/tickets" style="display:inline-block;background:${BRAND};color:#fff;text-decoration:none;padding:10px 18px;border-radius:6px;font-size:13px;font-weight:bold;">Open in admin</a>
      </p>`
    ),
    text: `New ${label.en.toLowerCase()} ${o.ticketNo}\nName: ${o.name}\nMobile: ${o.mobile}\n\n${site}/admin/tickets`,
  }
}

export function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export { layout, refBox, p as paragraph }
