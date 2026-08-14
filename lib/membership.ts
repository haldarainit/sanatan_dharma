/* Membership Ecosystem — transcribed from the client's brief
   "JOIN THE MISSION  1326.docx".
   Content, order and wording follow the document; nothing is added. */

/* Each level now carries its own title and its own amounts, and from District
   upwards a minimum active-member network. The earlier brief priced every
   category off one shared table; this one gives all five their own. */
export type FeeRow = {
  level: string
  label: string
  base: number
  withId: number
  minMembers?: number
}

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
  /* one entry per paragraph */
  about?: string[]
  objectives?: string[]
  roles?: string[]
  /* the closing "सेवा संकल्प" panel, which only some categories have */
  sankalpTitle?: string
  sankalpTagline?: string
  sankalpText?: string
  interests: string[]
  skills: string[]
  declaration: string
  fees: FeeRow[]
  /* step 2 copy that differs per category */
  levelNote?: string
  idCardNote?: string
  autoUpdateNote?: boolean
  pledge: boolean
}

/* Local Volunteer ₹101 (ID ₹501), District Coordinator ₹1,001 (₹2,100),
   State ₹5,001 (₹11,000), National ₹21,000 (₹51,000) */
export const SENA_FEES: FeeRow[] = [
  { level: 'Local', label: 'Local Volunteer', base: 101, withId: 501 },
  { level: 'District', label: 'District Coordinator', base: 1001, withId: 2100, minMembers: 5 },
  { level: 'State', label: 'State Coordinator', base: 5001, withId: 11000, minMembers: 10 },
  { level: 'National', label: 'National Coordinator', base: 21000, withId: 51000, minMembers: 20 },
]

export const GENERAL_FEES: FeeRow[] = [
  { level: 'Local', label: 'General Member', base: 101, withId: 501 },
  { level: 'District', label: 'District General Member', base: 1001, withId: 2100, minMembers: 5 },
  { level: 'State', label: 'State General Member', base: 5001, withId: 11000, minMembers: 10 },
  { level: 'National', label: 'National General Member', base: 21000, withId: 51000, minMembers: 20 },
]

export const VIGILANCE_FEES: FeeRow[] = [
  { level: 'Local', label: 'Vigilance Volunteer', base: 2100, withId: 5001 },
  { level: 'District', label: 'District Vigilance Coordinator', base: 5001, withId: 11000, minMembers: 5 },
  { level: 'State', label: 'State Vigilance Coordinator', base: 11000, withId: 21000, minMembers: 10 },
  { level: 'National', label: 'National Vigilance Coordinator', base: 21000, withId: 51000, minMembers: 20 },
]

export const NETWORK_FEES: FeeRow[] = [
  { level: 'Local', label: 'Local Seva Associate', base: 501, withId: 1001 },
  { level: 'District', label: 'District Seva Coordinator', base: 1001, withId: 2100, minMembers: 5 },
  { level: 'State', label: 'State Seva Coordinator', base: 5001, withId: 11000, minMembers: 10 },
  { level: 'National', label: 'National Seva Coordinator', base: 21000, withId: 51000, minMembers: 20 },
]

export const PATRON_FEES: FeeRow[] = [
  { level: 'Local', label: 'Supporting Member', base: 5001, withId: 11000 },
  { level: 'District', label: 'District Supporting Patron', base: 11000, withId: 21000, minMembers: 5 },
  { level: 'State', label: 'State Supporting Patron', base: 21000, withId: 51000, minMembers: 10 },
  { level: 'National', label: 'National Supporting Patron', base: 51000, withId: 100001, minMembers: 20 },
]

const NOTICE_A =
  'यह सेवा एवं संगठनात्मक सहभागिता केवल सनातनी प्रेमियों, नागरिकों एवं श्रद्धालुओं के लिए है। कृपया वही व्यक्ति आवेदन करें जो सनातन प्रेम, संस्कृति, सेवा, सदाचार एवं संगठनात्मक अनुशासन के प्रति श्रद्धा और समर्पण रखते हों।'

const NOTICE_B =
  'यह सेवा एवं संगठनात्मक सहभागिता केवल सनातनी प्रेमियों, नागरिकों एवं श्रद्धालुओं के लिए है। कृपया वही व्यक्ति आवेदन करें जो सनातन प्रेम, संस्कृति, सेवा, सदाचार, सामाजिक उत्तरदायित्व एवं संगठनात्मक अनुशासन के प्रति श्रद्धा और समर्पण रखते हों।'

const NETWORK_RULE =
  'Membership को सक्रिय एवं निरंतर बनाए रखने हेतु District 5, State 10 तथा National 20 सक्रिय सदस्य जोड़ना आवश्यक होगा।'


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
    aboutTitle: 'About Sanatani Sena | सनातनी सेना क्या है?',
    about: [
      'सनातनी सेना संगठन की सक्रिय स्वयंसेवी सेवा एवं जनजागरण इकाई है, जो सेवा, संस्कार, संस्कृति, सामाजिक सद्भाव एवं राष्ट्रहित से जुड़े कार्यों में समर्पित सहभागिता करती है। इसके सदस्य संगठन के सेवा अभियानों, सांस्कृतिक एवं धार्मिक कार्यक्रमों, जनजागरण गतिविधियों तथा समाजहित कार्यों में अनुशासन और सेवा-भाव के साथ सक्रिय भूमिका निभाते हैं।',
      'सनातनी सेना का उद्देश्य ऐसे जागरूक एवं जिम्मेदार स्वयंसेवकों का एक संगठित नेटवर्क तैयार करना है, जो आवश्यकता के समय समाज की सहायता करने, सकारात्मक संदेशों को जन-जन तक पहुँचाने तथा संगठन के विभिन्न सेवा एवं जनकल्याण कार्यों को प्रभावी रूप से आगे बढ़ाने में सहयोग करें।',
    ],
    objectives: [
      'सनातन संस्कृति, संस्कार एवं सामाजिक मूल्यों के प्रति जागरूकता बढ़ाना',
      'सेवा एवं जनकल्याण गतिविधियों में सक्रिय सहभागिता सुनिश्चित करना',
      'समाज में सद्भाव, सहयोग एवं सकारात्मक चेतना को बढ़ावा देना',
      'जनजागरण एवं सामाजिक हित के अभियानों को मजबूत करना',
      'स्थानीय से राष्ट्रीय स्तर तक स्वयंसेवी सेवा नेटवर्क का निर्माण करना',
    ],
    roles: [
      'सेवा, राहत एवं जनकल्याण कार्यक्रमों में सक्रिय सहयोग',
      'धार्मिक, सांस्कृतिक एवं सामाजिक आयोजनों में सहभागिता एवं सहयोग',
      'जनजागरण अभियानों एवं समाजहित संदेशों का प्रसार',
      'स्थानीय स्तर पर संगठन के कार्यक्रमों एवं सेवा गतिविधियों में सहयोग',
      'आवश्यकता पड़ने पर सेवा एवं सहायता कार्यों में तत्पर सहभागिता',
      'संगठनात्मक कार्यक्रमों में अनुशासन, समन्वय एवं व्यवस्था बनाए रखने में सहयोग',
      'नए स्वयंसेवकों को जोड़ने एवं सेवा नेटवर्क के विस्तार में सहयोग',
      'सामाजिक सद्भाव, संस्कार एवं सकारात्मक मूल्यों के प्रसार में सहभागिता',
    ],
    sankalpTitle: 'Sanatani Sena का सेवा संकल्प',
    sankalpTagline: 'सेवा • संस्कार • संगठन • समाजहित • सनातन चेतना 🚩',
    sankalpText:
      'सनातनी सेना का प्रत्येक सदस्य सेवा-भाव, अनुशासन एवं जिम्मेदारी के साथ समाजहित कार्यों में अपना योगदान देने का संकल्प लेकर संगठन की सेवा यात्रा को मजबूत करता है।',
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
    fees: SENA_FEES,
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
    about: [
      'सामान्य सदस्य संगठन का आधारभूत सहयोगी सदस्य होता है, जो सेवा, संस्कार, सांस्कृतिक गतिविधियों, जनजागरण एवं सामाजिक कल्याण से जुड़े कार्यों में अपनी सहभागिता प्रदान करता है। यह सदस्य संगठन के कार्यक्रमों, अभियानों एवं सेवा गतिविधियों से नियमित रूप से जुड़कर समाजहित के कार्यों को समर्थन देता है।',
      'सामान्य सदस्यता का उद्देश्य ऐसे जागरूक नागरिकों को संगठन से जोड़ना है, जो अपनी क्षमता एवं समय के अनुसार सेवा कार्यों में सहयोग करना चाहते हैं तथा समाज में सकारात्मक सोच, सद्भाव एवं संस्कारों के प्रसार में योगदान देना चाहते हैं।',
    ],
    objectives: [
      'संगठन के सेवा एवं जनकल्याण कार्यों को सहयोग प्रदान करना',
      'सामाजिक एवं सांस्कृतिक गतिविधियों में सहभागिता बढ़ाना',
      'सनातन संस्कार एवं सकारात्मक सामाजिक मूल्यों का प्रसार करना',
      'जनजागरण एवं समाजहित अभियानों को समर्थन देना',
      'स्थानीय स्तर पर संगठन की सेवा गतिविधियों को मजबूत करना',
    ],
    roles: [
      'सेवा एवं जनकल्याण कार्यक्रमों में सहयोग',
      'धार्मिक, सांस्कृतिक एवं सामाजिक आयोजनों में सहभागिता',
      'जनजागरण एवं समाजहित संदेशों का प्रसार',
      'स्थानीय सेवा गतिविधियों में सहयोग',
      'संगठनात्मक कार्यक्रमों एवं अभियानों में उपस्थिति एवं सहयोग',
      'सामाजिक सद्भाव एवं संस्कार जागरण में सहभागिता',
      'संगठन के सेवा नेटवर्क से जुड़े रहना एवं आवश्यकता अनुसार सहयोग करना',
    ],
    sankalpTitle: 'General Membership का सेवा भाव',
    sankalpTagline: 'सेवा • सहयोग • संस्कार • सद्भाव • समाजहित 🚩',
    sankalpText:
      'सामान्य सदस्य संगठन के साथ जुड़कर अपनी क्षमता के अनुसार सेवा एवं समाजहित के कार्यों में योगदान देता है और मानव कल्याण की इस सेवा यात्रा को निरंतर मजबूत करता है।',
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
    fees: GENERAL_FEES,
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
    aboutTitle: 'About Vigilance Department | विजिलेंस विभाग क्या है?',
    about: [
      'विजिलेंस विभाग संगठन की सतर्कता, पारदर्शिता एवं जिम्मेदार सामाजिक सहयोग से जुड़ी विशेष इकाई है। इसका उद्देश्य संगठन की गतिविधियों, सेवा अभियानों एवं जनहित कार्यों में जागरूकता, अनुशासन, तथ्यपरकता एवं जिम्मेदार सहभागिता को बढ़ावा देना है।',
      'विजिलेंस विभाग से जुड़े सदस्य किसी व्यक्ति या संस्था के विरुद्ध स्वयं निर्णय लेने के बजाय निर्धारित संगठनात्मक प्रक्रिया के अनुसार प्राप्त जानकारी, शिकायत या संभावित अनियमितता को उचित स्तर तक पहुँचाने एवं आवश्यक सत्यापन में सहयोग करते हैं। इसका प्रमुख उद्देश्य जागरूकता, सत्यापन, पारदर्शिता एवं जनहित को मजबूत करना है।',
    ],
    objectives: [
      'सेवा कार्यों में पारदर्शिता एवं जिम्मेदारी को बढ़ावा देना',
      'संभावित अनियमितताओं एवं गलत गतिविधियों के प्रति जागरूकता बढ़ाना',
      'प्राप्त सूचना एवं शिकायतों के उचित सत्यापन में सहयोग करना',
      'संगठनात्मक अनुशासन एवं जवाबदेही को मजबूत करना',
      'समाज में जिम्मेदार नागरिक जागरूकता को बढ़ावा देना',
    ],
    roles: [
      'प्राप्त शिकायतों एवं सूचनाओं को निर्धारित प्रक्रिया के अनुसार दर्ज एवं अग्रेषित करना',
      'उपलब्ध तथ्यों एवं जानकारी के प्रारंभिक सत्यापन में सहयोग करना',
      'संदिग्ध या अनुचित गतिविधियों के संबंध में संगठन को सूचित करना',
      'सेवा कार्यक्रमों एवं संगठनात्मक गतिविधियों में आवश्यक सतर्कता सहयोग प्रदान करना',
      'गोपनीय एवं संवेदनशील जानकारी को जिम्मेदारी से संभालना',
      'बिना सत्यापन किसी व्यक्ति या संस्था पर आरोप लगाने से बचना',
      'संगठन की पारदर्शिता, अनुशासन एवं जवाबदेही को मजबूत करने में सहयोग करना',
    ],
    sankalpTitle: 'Vigilance Department का संकल्प',
    sankalpTagline: 'सतर्कता • सत्यापन • पारदर्शिता • अनुशासन • जनहित 🚩',
    sankalpText:
      'विजिलेंस विभाग का प्रत्येक सदस्य जिम्मेदारी, निष्पक्षता एवं निर्धारित प्रक्रिया का पालन करते हुए संगठन तथा समाज के हित में जागरूकता एवं पारदर्शिता को मजबूत करने का संकल्प लेकर कार्य करता है।',
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
    fees: VIGILANCE_FEES,
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
    aboutTitle: 'Sanatan Seva Network | सनातन सेवा नेटवर्क क्या है?',
    about: [
      'सनातन सेवा नेटवर्क समाजहित, सेवा, सहयोग एवं जनकल्याण से जुड़े व्यक्तियों, स्वयंसेवकों, पेशेवरों और सामाजिक सहयोगियों का समन्वित सेवा मंच है। इसका उद्देश्य विभिन्न क्षेत्रों के लोगों को जोड़कर सेवा कार्यों, सहायता अभियानों, जनजागरण तथा मानवीय सहयोग को मजबूत बनाना है।',
    ],
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
    aboutTitle: 'Patron Member सहयोगी / संरक्षक सदस्य क्या है?',
    about: [
      'सहयोगी / संरक्षक सदस्य वे श्रद्धालु एवं समर्थक होते हैं जो संगठन के सेवा, संस्कार, जनकल्याण, सांस्कृतिक संरक्षण एवं मानवीय अभियानों को नैतिक, सामाजिक एवं सहयोगात्मक समर्थन प्रदान करते हैं। यह श्रेणी संगठन के दीर्घकालिक सेवा कार्यों, विकास योजनाओं एवं समाजहित परियोजनाओं को स्थिरता एवं शक्ति प्रदान करने हेतु बनाई गई है।',
    ],
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
    fees: PATRON_FEES,
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
