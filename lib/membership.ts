/* Membership Ecosystem — transcribed from the client's brief
   "JOIN THE MISSION  MEMBERSHIP ECOSYSTEM 11.docx".
   Content, order and wording follow the document; nothing is added. */

export type FeeRow = { level: string; base: number; withId: number }

export type Category = {
  id: string
  /* section 1 card */
  cardTitle: string
  cardText: string
  img: string
  /* form screens */
  formTitle: string
  headingEn: string
  headingHi: string
  notice: string
  aboutTitle?: string
  about?: string
  roles?: string[]
  interests: string[]
  skills: string[]
  declaration: string
  fees: FeeRow[]
  feeLine: string
  /* step 2 copy that differs per category */
  levelNote: string
  idCardNote?: string
  autoUpdateNote?: boolean
  pledge: boolean
}

/* Local ₹501 (With ID Card ₹1,001), District ₹2,100 (₹5,100),
   State ₹11,000 (₹21,000), National ₹51,000 (₹1,00,001) */
export const STANDARD_FEES: FeeRow[] = [
  { level: 'Local', base: 501, withId: 1001 },
  { level: 'District', base: 2100, withId: 5100 },
  { level: 'State', base: 11000, withId: 21000 },
  { level: 'National', base: 51000, withId: 100001 },
]

/* Sanatan Seva Network runs on its own scale */
export const NETWORK_FEES: FeeRow[] = [
  { level: 'Local', base: 251, withId: 751 },
  { level: 'District', base: 2001, withId: 5001 },
  { level: 'State', base: 7501, withId: 15001 },
  { level: 'National', base: 31000, withId: 61000 },
]

const STANDARD_FEE_LINE =
  'सेवा सहयोग राशि: Local ₹501 (With ID Card ₹1,001), District ₹2,100 (With ID Card ₹5,100), State ₹11,000 (With ID Card ₹21,000), National ₹51,000 (With ID Card ₹1,00,001)।'

const NETWORK_FEE_LINE =
  'Sanatan Seva Network — सेवा सहयोग राशि: Local ₹251 (With ID Card ₹751), District ₹2,001 (With ID Card ₹5,001), State ₹7,501 (With ID Card ₹15,001), National ₹31,000 (With ID Card ₹61,000)'

const NOTICE_A =
  'यह सेवा एवं संगठनात्मक सहभागिता केवल सनातनी प्रेमियों, नागरिकों एवं श्रद्धालुओं के लिए है। कृपया वही व्यक्ति आवेदन करें जो सनातन प्रेम, संस्कृति, सेवा, सदाचार एवं संगठनात्मक अनुशासन के प्रति श्रद्धा और समर्पण रखते हों।'

const NOTICE_B =
  'यह सेवा एवं संगठनात्मक सहभागिता केवल सनातनी प्रेमियों, नागरिकों एवं श्रद्धालुओं के लिए है। कृपया वही व्यक्ति आवेदन करें जो सनातन प्रेम, संस्कृति, सेवा, सदाचार, सामाजिक उत्तरदायित्व एवं संगठनात्मक अनुशासन के प्रति श्रद्धा और समर्पण रखते हों।'

const NETWORK_RULE =
  'Membership को सक्रिय एवं निरंतर बनाए रखने हेतु District 5, State 10 तथा National 20 सक्रिय सदस्य जोड़ना आवश्यक होगा।'

const TIME_NOTE = 'चयनित सेवा स्तर के अनुसार सेवा सहयोग राशि नीचे स्वतः प्रदर्शित होगी।'

/* Basic Information | मूल जानकारी — the same twelve fields in every form */
export const BASIC_FIELDS = [
  'पूरा नाम',
  'पिता / पति का नाम',
  'जन्मतिथि',
  'मोबाइल नंबर',
  'WhatsApp नंबर',
  'ईमेल (वैकल्पिक)',
  'फ्लैट / मकान / भवन / ग्राम',
  'पोस्ट / क्षेत्र / ब्लॉक',
  'शहर / तहसील',
  'जिला',
  'राज्य',
  'पिनकोड',
] as const

export const TIME_OPTIONS = ['प्रतिदिन', 'साप्ताहिक', 'मासिक', 'आवश्यकता अनुसार']

export const SERVICE_LEVELS = ['Local', 'District', 'State', 'National']

export const PLEDGE =
  'मैं सनातन धर्म, संस्कृति और मानव कल्याण के उद्देश्यों के प्रति अपनी आस्था व्यक्त करते हुए Sanatan Dharm Manav Kalyan Foundation के नियमों एवं मर्यादाओं का पालन करने का संकल्प {लेता/लेती} हूँ।'

export const TERMS = 'I agree to Terms & Conditions and Foundation Rules.'

export const PAYMENT_OPTIONS = ['Razorpay', 'UPI', 'QR Code', 'Bank Transfer']

export const PAYMENT_NOTE =
  'भुगतान करते समय स्क्रीन पर “Sanatan Dharm Manav Kalyan Foundation” नाम दिखाई दे, तभी भुगतान करें।'

export const THANK_YOU = {
  title: 'Thank You',
  lines: [
    'आपका आवेदन सफलतापूर्वक प्राप्त हो गया है।',
    'Verification के बाद आपकी Membership / Volunteer Registration सक्रिय की जाएगी।',
    'आपको Confirmation SMS / Email / WhatsApp के माध्यम से सूचना दी जाएगी।',
  ],
}

export const SUCCESS_POINTS = [
  'आवेदन सफल हुआ',
  'आवेदन संख्या',
  'डाउनलोड रसीद',
  'धन्यवाद संदेश',
  'आगे की सूचना SMS / Email / WhatsApp द्वारा भेजी जाएगी',
]

export const CATEGORIES: Category[] = [
  {
    id: 'sanatani-sena',
    img: '/img/sanatani_sena.jpeg',
    cardTitle: 'Sanatani Sena',
    cardText:
      'समाज सेवा, जनजागरण, आयोजन, राहत कार्य, धार्मिक-सांस्कृतिक अभियान एवं जनसंपर्क कार्यों में सक्रिय स्वयंसेवक के रूप में जुड़ें।',
    formTitle: 'Sanatani Sena Registration Form | सनातनी सेना पंजीकरण प्रपत्र',
    headingEn: 'SANATANI SENA',
    headingHi: 'सनातनी सेना',
    notice: NOTICE_A,
    interests: [
      'सभी सेवा कार्यों में सहयोग',
      'सेवा कार्यक्रमों में सहयोग',
      'धार्मिक / सांस्कृतिक आयोजन सहयोग',
      'जनजागरण एवं प्रचार सेवा',
      'सोशल मीडिया / डिजिटल सेवा',
      'शिक्षा / संस्कार सेवा',
      'चिकित्सा / राहत सेवा',
      'पर्यावरण / वृक्षारोपण सेवा',
      'गौ सेवा / पशु सेवा',
      'प्रशासनिक / संगठनात्मक सहयोग',
    ],
    skills: [
      'प्रबंधन',
      'शिक्षण',
      'कंप्यूटर / डिजिटल',
      'मीडिया / फोटोग्राफी',
      'लेखन / प्रचार',
      'सामाजिक सेवा',
    ],
    declaration:
      'मैं स्वेच्छा से सनातनी सेना से जुड़ {रहा/रही} हूँ। मुझ पर किसी प्रकार का दबाव नहीं है तथा मैं संगठन की नियमावली, नीति, सेवा शर्तें एवं अन्य सभी Terms & Conditions से सहमत हूँ।',
    fees: STANDARD_FEES,
    feeLine: STANDARD_FEE_LINE,
    levelNote: TIME_NOTE,
    idCardNote: 'चयन करने पर सेवा सहयोग राशि स्वतः अपडेट होगी।',
    autoUpdateNote: true,
    pledge: false,
  },
  {
    id: 'active-member',
    img: '/img/active_member.jpeg',
    cardTitle: 'Active Member',
    cardText:
      'फाउंडेशन के सक्रिय सदस्य के रूप में जुड़कर सेवा कार्यों, कार्यक्रमों और सामाजिक अभियानों में भाग लें।',
    formTitle: 'General Member Registration Form | सामान्य सदस्य पंजीकरण प्रपत्र',
    headingEn: 'GENERAL MEMBER',
    headingHi: 'सामान्य सदस्य',
    notice: NOTICE_A,
    aboutTitle: 'About General Membership | सामान्य सदस्य क्या है?',
    about:
      'सामान्य सदस्य संगठन का आधारभूत सहयोगी सदस्य होता है, जो सेवा, संस्कार, सांस्कृतिक गतिविधियों, जनजागरण एवं सामाजिक कल्याण कार्यों में सहभागिता करता है। यह सदस्य संगठन के कार्यक्रमों, अभियानों एवं सेवा गतिविधियों से नियमित रूप से जुड़कर समाजहित कार्यों को समर्थन प्रदान करता है।',
    roles: [
      'सेवा कार्यक्रमों में सहयोग',
      'सांस्कृतिक एवं धार्मिक आयोजनों में सहभागिता',
      'जनजागरण एवं समाजहित संदेश प्रसार',
      'स्थानीय सेवा गतिविधियों में सहयोग',
      'संगठनात्मक कार्यक्रमों में उपस्थिति एवं सहयोग',
      'सामाजिक सद्भाव एवं संस्कार जागरण में सहभागिता',
    ],
    interests: [
      'सभी सेवा कार्यों में सहयोग',
      'सेवा कार्यक्रमों में सहयोग',
      'धार्मिक / सांस्कृतिक आयोजन सहयोग',
      'जनजागरण एवं प्रचार सेवा',
      'सोशल मीडिया / डिजिटल सेवा',
      'शिक्षा / संस्कार सेवा',
      'चिकित्सा / राहत सेवा',
      'पर्यावरण / वृक्षारोपण सेवा',
      'गौ सेवा / पशु सेवा',
      'संगठनात्मक सहयोग',
    ],
    skills: [
      'प्रबंधन',
      'शिक्षण',
      'कंप्यूटर / डिजिटल',
      'मीडिया / फोटोग्राफी',
      'लेखन / प्रचार',
      'सामाजिक सेवा',
    ],
    declaration:
      'मैं स्वेच्छा से सामान्य सदस्य के रूप में संगठन से जुड़ {रहा/रही} हूँ। मुझ पर किसी प्रकार का दबाव नहीं है तथा मैं संगठन की नियमावली, नीति, सेवा शर्तें एवं अन्य सभी Terms & Conditions से सहमत हूँ।',
    fees: STANDARD_FEES,
    feeLine: STANDARD_FEE_LINE,
    levelNote: NETWORK_RULE,
    autoUpdateNote: true,
    pledge: true,
  },
  {
    id: 'vigilance-department',
    img: '/img/vigilance_department.jpeg',
    cardTitle: 'Vigilance Department',
    cardText:
      'जागरूकता, सत्यापन, अनुशासन, सहायता, Fraud Awareness और सामाजिक सुरक्षा से जुड़े कार्यों में योगदान दें।',
    formTitle: 'Vigilance Department Registration Form | सतर्कता विभाग पंजीकरण प्रपत्र',
    headingEn: 'VIGILANCE DEPARTMENT',
    headingHi: 'सतर्कता विभाग',
    notice: NOTICE_B,
    aboutTitle: 'About Vigilance Department | सतर्कता विभाग क्या है?',
    about:
      'सतर्कता विभाग संगठन की अनुशासन, पारदर्शिता, सुरक्षा जागरूकता एवं सामाजिक उत्तरदायित्व से जुड़ी सेवा इकाई है। इसका उद्देश्य सेवा कार्यों में नैतिकता, अनुशासन, शिकायत सहायता, जनजागरण तथा सामाजिक सुरक्षा जागरूकता को सुदृढ़ करना है।',
    roles: [
      'सेवा गतिविधियों में अनुशासन एवं समन्वय सहयोग',
      'शिकायत एवं सहायता संबंधी मार्गदर्शन',
      'सामाजिक सुरक्षा एवं जागरूकता अभियान',
      'जनहित सूचना एवं सतर्कता सहयोग',
      'संगठनात्मक पारदर्शिता एवं उत्तरदायित्व में सहयोग',
      'समाजहित एवं नैतिक मूल्यों के संरक्षण में सहभागिता',
    ],
    interests: [
      'सभी सेवा कार्यों में सहयोग',
      'शिकायत सहायता एवं मार्गदर्शन',
      'सामाजिक सुरक्षा जागरूकता अभियान',
      'जनजागरण एवं प्रचार सेवा',
      'महिला सुरक्षा एवं सम्मान जागरूकता',
      'डिजिटल जागरूकता एवं साइबर सतर्कता',
      'संगठनात्मक अनुशासन सहयोग',
      'सेवा कार्यक्रम समन्वय',
      'प्रशासनिक / प्रबंधन सहयोग',
    ],
    skills: [
      'प्रशासन / प्रबंधन',
      'विधिक / कानूनी जागरूकता',
      'कंप्यूटर / डिजिटल',
      'साइबर सुरक्षा जागरूकता',
      'मीडिया / संचार',
      'सामाजिक सेवा',
    ],
    declaration:
      'मैं स्वेच्छा से सतर्कता विभाग से जुड़ {रहा/रही} हूँ। मुझ पर किसी प्रकार का दबाव नहीं है तथा मैं संगठन की नियमावली, नीति, सेवा शर्तें एवं अन्य सभी Terms & Conditions से सहमत हूँ।',
    fees: STANDARD_FEES,
    feeLine: STANDARD_FEE_LINE,
    levelNote: NETWORK_RULE,
    pledge: true,
  },
  {
    id: 'sanatan-seva-network',
    img: '/img/seva_network.jpeg',
    cardTitle: 'Sanatan Seva Network',
    cardText:
      'Doctor, Advocate, Teacher, Businessman, Technical Expert या अन्य Professional अपनी सेवा, सलाह या सहयोग समाजहित में दे सकते हैं।',
    formTitle: 'Sanatan Seva Network Registration Form | सनातन सेवा नेटवर्क पंजीकरण प्रपत्र',
    headingEn: 'SANATAN SEVA NETWORK',
    headingHi: 'सनातन सेवा नेटवर्क',
    notice: NOTICE_B,
    aboutTitle: 'About Sanatan Seva Network | सनातन सेवा नेटवर्क क्या है?',
    about:
      'सनातन सेवा नेटवर्क समाजहित, सेवा, सहयोग एवं जनकल्याण से जुड़े व्यक्तियों, स्वयंसेवकों, पेशेवरों और सामाजिक सहयोगियों का समन्वित सेवा मंच है। इसका उद्देश्य विभिन्न क्षेत्रों के लोगों को जोड़कर सेवा कार्यों, सहायता अभियानों, जनजागरण तथा मानवीय सहयोग को मजबूत बनाना है।',
    roles: [
      'सेवा अभियानों में सक्रिय सहयोग',
      'जरूरतमंदों की सहायता एवं मार्गदर्शन',
      'स्वास्थ्य, शिक्षा एवं सामाजिक सेवा गतिविधियों में सहयोग',
      'आपदा एवं राहत कार्यों में सहभागिता',
      'जनजागरण एवं सामाजिक जागरूकता अभियान',
      'स्थानीय सेवा नेटवर्क निर्माण एवं समन्वय',
      'समाजहित परियोजनाओं में सहयोग',
    ],
    interests: [
      'सभी सेवा कार्यों में सहयोग',
      'भोजन / अन्न सेवा',
      'चिकित्सा सहायता सेवा',
      'शिक्षा एवं संस्कार सेवा',
      'महिला एवं परिवार सहायता सेवा',
      'वरिष्ठ नागरिक सहायता सेवा',
      'आपदा राहत एवं आपात सहायता',
      'पर्यावरण / वृक्षारोपण सेवा',
      'गौ सेवा / पशु सेवा',
      'जनजागरण एवं प्रचार सेवा',
      'संगठनात्मक / नेटवर्क समन्वय',
    ],
    skills: [
      'चिकित्सा / स्वास्थ्य',
      'शिक्षण / प्रशिक्षण',
      'प्रबंधन / समन्वय',
      'कंप्यूटर / डिजिटल सेवा',
      'मीडिया / संचार',
      'सामाजिक सेवा',
    ],
    declaration:
      'मैं स्वेच्छा से सनातन सेवा नेटवर्क से जुड़ {रहा/रही} हूँ। मुझ पर किसी प्रकार का दबाव नहीं है तथा मैं संगठन की नियमावली, नीति, सेवा शर्तें एवं अन्य सभी Terms & Conditions से सहमत हूँ।',
    fees: NETWORK_FEES,
    feeLine: NETWORK_FEE_LINE,
    levelNote: NETWORK_RULE,
    pledge: true,
  },
  {
    id: 'patron-member',
    img: '/img/supporting_member.jpeg',
    cardTitle: 'Supporting / Patron Member',
    cardText:
      'फाउंडेशन के कार्यों को आर्थिक, सामाजिक एवं मार्गदर्शक सहयोग देने हेतु विशेष सदस्य के रूप में जुड़ें।',
    formTitle:
      'Supporting / Patron Member Registration Form | सहयोगी / संरक्षक सदस्य पंजीकरण प्रपत्र',
    headingEn: 'SUPPORTING / PATRON MEMBER',
    headingHi: 'सहयोगी / संरक्षक सदस्य',
    notice: NOTICE_B,
    aboutTitle: 'About Supporting / Patron Member | सहयोगी / संरक्षक सदस्य क्या है?',
    about:
      'सहयोगी / संरक्षक सदस्य वे श्रद्धालु एवं समर्थक होते हैं जो संगठन के सेवा, संस्कार, जनकल्याण, सांस्कृतिक संरक्षण एवं मानवीय अभियानों को नैतिक, सामाजिक एवं सहयोगात्मक समर्थन प्रदान करते हैं। यह श्रेणी संगठन के दीर्घकालिक सेवा कार्यों, विकास योजनाओं एवं समाजहित परियोजनाओं को स्थिरता एवं शक्ति प्रदान करने हेतु बनाई गई है।',
    roles: [
      'सेवा एवं जनकल्याण अभियानों का समर्थन',
      'सांस्कृतिक एवं धार्मिक संरक्षण गतिविधियों में सहयोग',
      'समाजहित परियोजनाओं को प्रोत्साहन',
      'संगठनात्मक विकास एवं विस्तार में सहयोग',
      'जनजागरण एवं संस्कार प्रसार में सहभागिता',
      'प्रेरक, मार्गदर्शक एवं संरक्षक सहयोग',
    ],
    interests: [
      'सभी सेवा कार्यों में सहयोग',
      'अन्न / भोजन सेवा सहयोग',
      'चिकित्सा सहायता सहयोग',
      'शिक्षा एवं संस्कार सहयोग',
      'महिला एवं परिवार सहायता सहयोग',
      'गौ सेवा सहयोग',
      'पर्यावरण एवं वृक्षारोपण सहयोग',
      'आपदा राहत सहयोग',
      'सांस्कृतिक संरक्षण सहयोग',
      'संगठनात्मक विकास सहयोग',
      'विशेष परियोजना सहयोग',
    ],
    skills: [
      'मार्गदर्शन / मेंटरशिप',
      'प्रबंधन / नेतृत्व',
      'वित्तीय / प्रशासनिक अनुभव',
      'शिक्षा / प्रशिक्षण',
      'डिजिटल / तकनीकी सहयोग',
      'मीडिया / संचार',
      'सामाजिक सेवा',
    ],
    declaration:
      'मैं स्वेच्छा से सहयोगी / संरक्षक सदस्य के रूप में संगठन से जुड़ {रहा/रही} हूँ। मुझ पर किसी प्रकार का दबाव नहीं है तथा मैं संगठन की नियमावली, नीति, सेवा शर्तें एवं अन्य सभी Terms & Conditions से सहमत हूँ।',
    fees: STANDARD_FEES,
    feeLine: STANDARD_FEE_LINE,
    levelNote: NETWORK_RULE,
    autoUpdateNote: true,
    pledge: false,
  },
]

/* "Male / Female चयन के अनुसार भाषा स्वतः बदल जाए" -- the brief writes the
   gendered verbs as रहा / रही, करता / करती, लेता / लेती. */
export function gendered(text: string, gender: 'male' | 'female' | '') {
  return text.replace(/\{([^/}]+)\/([^}]+)\}/g, (_m, m1, f1) =>
    gender === 'female' ? f1 : gender === 'male' ? m1 : `${m1} / ${f1}`
  )
}

export function inr(n: number) {
  return '₹' + n.toLocaleString('en-IN')
}

/* The brief gives SDMKF-MH-000125 and SDMKF-UP-000001, i.e. the official
   state code -- not the first two letters of the name, which would make
   Maharashtra "MA" and Uttar Pradesh "UT". */
const STATE_CODES: Record<string, string> = {
  'andhra pradesh': 'AP', 'अरुणाचल प्रदेश': 'AR', 'arunachal pradesh': 'AR',
  assam: 'AS', असम: 'AS', bihar: 'BR', बिहार: 'BR',
  chhattisgarh: 'CG', छत्तीसगढ़: 'CG', goa: 'GA', गोवा: 'GA',
  gujarat: 'GJ', गुजरात: 'GJ', haryana: 'HR', हरियाणा: 'HR',
  'himachal pradesh': 'HP', 'हिमाचल प्रदेश': 'HP',
  jharkhand: 'JH', झारखंड: 'JH', karnataka: 'KA', कर्नाटक: 'KA',
  kerala: 'KL', केरल: 'KL', 'madhya pradesh': 'MP', 'मध्य प्रदेश': 'MP',
  maharashtra: 'MH', महाराष्ट्र: 'MH', manipur: 'MN', मणिपुर: 'MN',
  meghalaya: 'ML', मेघालय: 'ML', mizoram: 'MZ', मिजोरम: 'MZ',
  nagaland: 'NL', नागालैंड: 'NL', odisha: 'OD', ओडिशा: 'OD',
  punjab: 'PB', पंजाब: 'PB', rajasthan: 'RJ', राजस्थान: 'RJ',
  sikkim: 'SK', सिक्किम: 'SK', 'tamil nadu': 'TN', 'तमिलनाडु': 'TN',
  telangana: 'TS', तेलंगाना: 'TS', tripura: 'TR', त्रिपुरा: 'TR',
  'uttar pradesh': 'UP', 'उत्तर प्रदेश': 'UP',
  uttarakhand: 'UK', उत्तराखंड: 'UK',
  'west bengal': 'WB', 'पश्चिम बंगाल': 'WB',
  delhi: 'DL', दिल्ली: 'DL', 'jammu and kashmir': 'JK', 'जम्मू कश्मीर': 'JK',
  ladakh: 'LA', लद्दाख: 'LA', puducherry: 'PY', पुडुचेरी: 'PY',
  chandigarh: 'CH', चंडीगढ़: 'CH', andaman: 'AN', lakshadweep: 'LD',
}

export function stateCode(state: string) {
  const key = state.trim().toLowerCase()
  if (STATE_CODES[key]) return STATE_CODES[key]
  const letters = state.replace(/[^A-Za-z]/g, '').toUpperCase()
  return letters.slice(0, 2).padEnd(2, 'X') || 'IN'
}

/* SDMKF-MH-000125 */
export function memberId(state: string) {
  const n = Math.floor(Math.random() * 999999) + 1
  return `SDMKF-${stateCode(state)}-${String(n).padStart(6, '0')}`
}
