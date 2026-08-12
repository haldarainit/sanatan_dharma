/* Donation flow config, lifted from the vanilla implementation during the
   Next.js rebuild. */

export type Tier = { amount: number; hi: string; tag?: string }

export const TIERS: Tier[] = [
  { amount: 1, hi: 'परीक्षण (Test)', tag: 'Test Mode' },
  { amount: 51, hi: 'शुभ' },
  { amount: 101, hi: 'मंगल' },
  { amount: 301, hi: 'शुभारंभ' },
  { amount: 501, hi: 'एक परिवार का सहारा', tag: 'Most Chosen' },
  { amount: 1001, hi: 'शिक्षा सहयोग' },
  { amount: 5001, hi: 'विशेष सहायता' },
  { amount: 11000, hi: 'बड़ी मदद' },
  { amount: 21000, hi: 'महत्वपूर्ण योगदान' },
  { amount: 51000, hi: 'सम्मानित सहयोगी', tag: 'VIP Supporter' },
  { amount: 100001, hi: 'गर्व और वित्तीय सम्मान का योगदान', tag: 'VVIP Contributor' },
]

export const FREQUENCIES = ['One Time', 'Monthly', 'Quarterly', 'Yearly'] as const

export const PURPOSES = [
  'सामान्य सहयोग (NGO की आवश्यकता अनुसार उपयोग हेतु)',
  'सनातन संस्कृति एवं जनजागरण',
  'वर्तमान गतिविधियाँ (Current Activities)',
  'भावी योजनाएँ (Future Missions)',
]

export function inr(n: number) {
  return '₹' + Number(n).toLocaleString('en-IN')
}
