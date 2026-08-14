/* The site is written in Hindi (with the English the client uses alongside
   it), and that is what a visitor gets by default. Picking any other language
   hands the page to Google's translator; picking Hindi again clears it and
   restores exactly the wording published in the Studio.

   Codes are Google Translate's own. Names are written in their own script,
   which is why the switcher is marked notranslate -- otherwise the list
   itself would be translated and stop being readable. */

export const SOURCE_LANG = 'hi'

export type Language = { code: string; name: string; english: string }

export const LANGUAGES: Language[] = [
  { code: 'sa', name: 'संस्कृत', english: 'Sanskrit' },
  { code: 'hi', name: 'हिंदी', english: 'Hindi' },
  { code: 'en', name: 'English', english: 'English' },
  { code: 'mr', name: 'मराठी', english: 'Marathi' },
  { code: 'gu', name: 'ગુજરાતી', english: 'Gujarati' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', english: 'Punjabi' },
  { code: 'bn', name: 'বাংলা', english: 'Bengali' },
  { code: 'or', name: 'ଓଡ଼ିଆ', english: 'Odia' },
  { code: 'as', name: 'অসমীয়া', english: 'Assamese' },
  { code: 'ta', name: 'தமிழ்', english: 'Tamil' },
  { code: 'te', name: 'తెలుగు', english: 'Telugu' },
  { code: 'kn', name: 'ಕನ್ನಡ', english: 'Kannada' },
  { code: 'ml', name: 'മലയാളം', english: 'Malayalam' },
  { code: 'ur', name: 'اردو', english: 'Urdu' },
  { code: 'ne', name: 'नेपाली', english: 'Nepali' },
  { code: 'kok', name: 'कोंकणी', english: 'Konkani' },
  { code: 'mai', name: 'मैथिली', english: 'Maithili' },
  { code: 'bho', name: 'भोजपुरी', english: 'Bhojpuri' },
  { code: 'doi', name: 'डोगरी', english: 'Dogri' },
  { code: 'sd', name: 'سنڌي', english: 'Sindhi' },
  { code: 'mni-Mtei', name: 'ꯃꯤꯇꯩꯂꯣꯟ', english: 'Manipuri' },
  { code: 'sat', name: 'ᱥᱟᱱᱛᱟᱲᱤ', english: 'Santali' },
]

export const DEFAULT_LANGUAGE =
  LANGUAGES.find((l) => l.code === SOURCE_LANG) ?? LANGUAGES[0]

/* Google stores the active pair in a "googtrans" cookie, which is also how
   the choice survives a move to another page: every page reads the same
   cookie on load. */
export const TRANSLATE_COOKIE = 'googtrans'

export function readLanguage(cookie: string): string {
  const m = cookie.match(/(?:^|;\s*)googtrans=\/[^/]+\/([^;]+)/)
  return m ? decodeURIComponent(m[1]) : SOURCE_LANG
}
