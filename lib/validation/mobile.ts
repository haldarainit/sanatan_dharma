/* Normalising an Indian mobile number as people actually type it.

   Kept free of framework imports so it can be tested directly. The variety
   is not hypothetical: the same person writes +91 98765 43210 on one form and
   098765-43210 on the next, and a rule that accepts only one of them reads to
   them as "the site is broken".

   The subtle part is the country code. Stripping a leading "91" on sight
   corrupts 9123456780 — a perfectly ordinary number that happens to start
   with those digits — into 23456780. So a prefix is only removed when what
   remains is still a full ten digits. */

const TEN = /^[6-9]\d{9}$/

export function normaliseMobile(raw: string): string {
  /* spaces, dashes, brackets and dots are decoration */
  let v = String(raw ?? '').trim().replace(/[\s\-().]/g, '')

  /* an explicit + is unambiguous: whatever follows 91 is the number */
  if (v.startsWith('+91')) v = v.slice(3)
  else if (v.startsWith('0091')) v = v.slice(4)
  /* without a +, only strip when the remainder is still a whole number —
     otherwise 9123456780 loses its first two digits */
  else if (v.length === 12 && v.startsWith('91')) v = v.slice(2)
  else if (v.length === 11 && v.startsWith('0')) v = v.slice(1)

  return v
}

/** Indian mobile numbers are ten digits and begin 6, 7, 8 or 9. */
export function isValidMobile(raw: string): boolean {
  return TEN.test(normaliseMobile(raw))
}
