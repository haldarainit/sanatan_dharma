/* Join The Mission — membership ecosystem flow
   Built from the client's brief: five categories, each with its own
   registration form, then service level + contribution, then payment.
   Everything is rendered from the config below so the five forms stay
   consistent with one another. */
(function () {
  'use strict';

  var STANDARD = {
    Local: [501, 1001],
    District: [2100, 5100],
    State: [11000, 21000],
    National: [51000, 100001]
  };

  /* Sanatan Seva Network runs on its own scale */
  var NETWORK = {
    Local: [251, 751],
    District: [2001, 5001],
    State: [7501, 15001],
    National: [31000, 61000]
  };

  var NOTICE = 'यह सेवा एवं संगठनात्मक सहभागिता केवल सनातनी प्रेमियों, नागरिकों एवं श्रद्धालुओं के लिए है। कृपया वही व्यक्ति आवेदन करें जो सनातन प्रेम, संस्कृति, सेवा, सदाचार एवं संगठनात्मक अनुशासन के प्रति श्रद्धा और समर्पण रखते हों।';

  var TIME_OPTIONS = ['प्रतिदिन', 'साप्ताहिक', 'मासिक', 'आवश्यकता अनुसार'];

  var NETWORK_RULE = 'Membership को सक्रिय एवं निरंतर बनाए रखने हेतु District 5, State 10 तथा National 20 सक्रिय सदस्य जोड़ना आवश्यक होगा।';

  var PLEDGE = 'मैं सनातन धर्म, संस्कृति और मानव कल्याण के उद्देश्यों के प्रति अपनी आस्था व्यक्त करते हुए Sanatan Dharm Manav Kalyan Foundation के नियमों एवं मर्यादाओं का पालन करने का संकल्प लेता / लेती हूँ।';

  var CATEGORIES = [
    {
      id: 'sena',
      badge: '#1 Volunteers & Mission Cadre',
      en: 'SANATANI SENA',
      hi: 'सनातनी सेना',
      img: '/img/sanatani_sena.jpeg',
      card: 'समाज सेवा, जनजागरण, आयोजन, राहत कार्य, धार्मिक-सांस्कृतिक अभियान एवं जनसंपर्क कार्यों में सक्रिय स्वयंसेवक के रूप में जुड़ें।',
      formTitle: 'सनातनी सेना पंजीकरण प्रपत्र',
      about: '',
      roles: [],
      interests: ['सभी सेवा कार्यों में सहयोग', 'सेवा कार्यक्रमों में सहयोग', 'धार्मिक / सांस्कृतिक आयोजन सहयोग', 'जनजागरण एवं प्रचार सेवा', 'सोशल मीडिया / डिजिटल सेवा', 'शिक्षा / संस्कार सेवा', 'चिकित्सा / राहत सेवा', 'पर्यावरण / वृक्षारोपण सेवा', 'गौ सेवा / पशु सेवा', 'प्रशासनिक / संगठनात्मक सहयोग'],
      skills: ['प्रबंधन', 'शिक्षण', 'कंप्यूटर / डिजिटल', 'मीडिया / फोटोग्राफी', 'लेखन / प्रचार', 'सामाजिक सेवा'],
      declaration: 'मैं स्वेच्छा से सनातनी सेना से जुड़ रहा / रही हूँ। मुझ पर किसी प्रकार का दबाव नहीं है तथा मैं संगठन की नियमावली, नीति, सेवा शर्तें एवं अन्य सभी Terms & Conditions से सहमत हूँ।',
      fees: STANDARD,
      networkRule: false,
      pledge: false
    },
    {
      id: 'general',
      badge: '#2 General & Associate Member',
      en: 'GENERAL MEMBER',
      hi: 'सामान्य सदस्य',
      img: '/img/active_member.jpeg',
      card: 'फाउंडेशन के सक्रिय सदस्य के रूप में जुड़कर सेवा कार्यों, कार्यक्रमों और सामाजिक अभियानों में भाग लें।',
      formTitle: 'सामान्य सदस्य पंजीकरण प्रपत्र',
      aboutTitle: 'सामान्य सदस्य क्या है?',
      about: 'सामान्य सदस्य संगठन का आधारभूत सहयोगी सदस्य होता है, जो सेवा, संस्कार, सांस्कृतिक गतिविधियों, जनजागरण एवं सामाजिक कल्याण कार्यों में सहभागिता करता है। यह सदस्य संगठन के कार्यक्रमों, अभियानों एवं सेवा गतिविधियों से नियमित रूप से जुड़कर समाजहित कार्यों को समर्थन प्रदान करता है।',
      roles: ['सेवा कार्यक्रमों में सहयोग', 'सांस्कृतिक एवं धार्मिक आयोजनों में सहभागिता', 'जनजागरण एवं समाजहित संदेश प्रसार', 'स्थानीय सेवा गतिविधियों में सहयोग', 'संगठनात्मक कार्यक्रमों में उपस्थिति एवं सहयोग', 'सामाजिक सद्भाव एवं संस्कार जागरण में सहभागिता'],
      interests: ['सभी सेवा कार्यों में सहयोग', 'सेवा कार्यक्रमों में सहयोग', 'धार्मिक / सांस्कृतिक आयोजन सहयोग', 'जनजागरण एवं प्रचार सेवा', 'सोशल मीडिया / डिजिटल सेवा', 'शिक्षा / संस्कार सेवा', 'चिकित्सा / राहत सेवा', 'पर्यावरण / वृक्षारोपण सेवा', 'गौ सेवा / पशु सेवा', 'संगठनात्मक सहयोग'],
      skills: ['प्रबंधन', 'शिक्षण', 'कंप्यूटर / डिजिटल', 'मीडिया / फोटोग्राफी', 'लेखन / प्रचार', 'सामाजिक सेवा'],
      declaration: 'मैं स्वेच्छा से सामान्य सदस्य के रूप में संगठन से जुड़ रहा / रही हूँ। मुझ पर किसी प्रकार का दबाव नहीं है तथा मैं संगठन की नियमावली, नीति, सेवा शर्तें एवं अन्य सभी Terms & Conditions से सहमत हूँ।',
      fees: STANDARD,
      networkRule: true,
      pledge: true
    },
    {
      id: 'vigilance',
      badge: '#3 Integrity & Vigilance Wing',
      en: 'VIGILANCE DEPARTMENT',
      hi: 'सतर्कता विभाग',
      img: '/img/vigilance_department.jpeg',
      card: 'जागरूकता, सत्यापन, अनुशासन, सहायता, Fraud Awareness और सामाजिक सुरक्षा से जुड़े कार्यों में योगदान दें।',
      formTitle: 'सतर्कता विभाग पंजीकरण प्रपत्र',
      aboutTitle: 'सतर्कता विभाग क्या है?',
      about: 'सतर्कता विभाग संगठन की अनुशासन, पारदर्शिता, सुरक्षा जागरूकता एवं सामाजिक उत्तरदायित्व से जुड़ी सेवा इकाई है। इसका उद्देश्य सेवा कार्यों में नैतिकता, अनुशासन, शिकायत सहायता, जनजागरण तथा सामाजिक सुरक्षा जागरूकता को सुदृढ़ करना है।',
      roles: ['सेवा गतिविधियों में अनुशासन एवं समन्वय सहयोग', 'शिकायत एवं सहायता संबंधी मार्गदर्शन', 'सामाजिक सुरक्षा एवं जागरूकता अभियान', 'जनहित सूचना एवं सतर्कता सहयोग', 'संगठनात्मक पारदर्शिता एवं उत्तरदायित्व में सहयोग', 'समाजहित एवं नैतिक मूल्यों के संरक्षण में सहभागिता'],
      interests: ['सभी सेवा कार्यों में सहयोग', 'शिकायत सहायता एवं मार्गदर्शन', 'सामाजिक सुरक्षा जागरूकता अभियान', 'जनजागरण एवं प्रचार सेवा', 'महिला सुरक्षा एवं सम्मान जागरूकता', 'डिजिटल जागरूकता एवं साइबर सतर्कता', 'संगठनात्मक अनुशासन सहयोग', 'सेवा कार्यक्रम समन्वय', 'प्रशासनिक / प्रबंधन सहयोग'],
      skills: ['प्रशासन / प्रबंधन', 'विधिक / कानूनी जागरूकता', 'कंप्यूटर / डिजिटल', 'साइबर सुरक्षा जागरूकता', 'मीडिया / संचार', 'सामाजिक सेवा'],
      declaration: 'मैं स्वेच्छा से सतर्कता विभाग से जुड़ रहा / रही हूँ। मुझ पर किसी प्रकार का दबाव नहीं है तथा मैं संगठन की नियमावली, नीति, सेवा शर्तें एवं अन्य सभी Terms & Conditions से सहमत हूँ।',
      fees: STANDARD,
      networkRule: true,
      pledge: true
    },
    {
      id: 'network',
      badge: '#4 Professionals & Seva Network',
      en: 'SANATAN SEVA NETWORK',
      hi: 'सनातन सेवा नेटवर्क',
      img: '/img/seva_network.jpeg',
      card: 'Doctor, Advocate, Teacher, Businessman, Technical Expert या अन्य Professional अपनी सेवा, सलाह या सहयोग समाजहित में दे सकते हैं।',
      formTitle: 'सनातन सेवा नेटवर्क पंजीकरण प्रपत्र',
      aboutTitle: 'सनातन सेवा नेटवर्क क्या है?',
      about: 'सनातन सेवा नेटवर्क समाजहित, सेवा, सहयोग एवं जनकल्याण से जुड़े व्यक्तियों, स्वयंसेवकों, पेशेवरों और सामाजिक सहयोगियों का समन्वित सेवा मंच है। इसका उद्देश्य विभिन्न क्षेत्रों के लोगों को जोड़कर सेवा कार्यों, सहायता अभियानों, जनजागरण तथा मानवीय सहयोग को मजबूत बनाना है।',
      roles: ['सेवा अभियानों में सक्रिय सहयोग', 'जरूरतमंदों की सहायता एवं मार्गदर्शन', 'स्वास्थ्य, शिक्षा एवं सामाजिक सेवा गतिविधियों में सहयोग', 'आपदा एवं राहत कार्यों में सहभागिता', 'जनजागरण एवं सामाजिक जागरूकता अभियान', 'स्थानीय सेवा नेटवर्क निर्माण एवं समन्वय', 'समाजहित परियोजनाओं में सहयोग'],
      interests: ['सभी सेवा कार्यों में सहयोग', 'भोजन / अन्न सेवा', 'चिकित्सा सहायता सेवा', 'शिक्षा एवं संस्कार सेवा', 'महिला एवं परिवार सहायता सेवा', 'वरिष्ठ नागरिक सहायता सेवा', 'आपदा राहत एवं आपात सहायता', 'पर्यावरण / वृक्षारोपण सेवा', 'गौ सेवा / पशु सेवा', 'जनजागरण एवं प्रचार सेवा', 'संगठनात्मक / नेटवर्क समन्वय'],
      skills: ['चिकित्सा / स्वास्थ्य', 'शिक्षण / प्रशिक्षण', 'प्रबंधन / समन्वय', 'कंप्यूटर / डिजिटल सेवा', 'मीडिया / संचार', 'सामाजिक सेवा'],
      declaration: 'मैं स्वेच्छा से सनातन सेवा नेटवर्क से जुड़ रहा / रही हूँ। मुझ पर किसी प्रकार का दबाव नहीं है तथा मैं संगठन की नियमावली, नीति, सेवा शर्तें एवं अन्य सभी Terms & Conditions से सहमत हूँ।',
      fees: NETWORK,
      networkRule: true,
      pledge: true
    },
    {
      id: 'patron',
      badge: '#5 Supporting & Patron Member',
      en: 'SUPPORTING / PATRON MEMBER',
      hi: 'सहयोगी / संरक्षक सदस्य',
      img: '/img/supporting_member.jpeg',
      card: 'फाउंडेशन के कार्यों को आर्थिक, सामाजिक एवं मार्गदर्शक सहयोग देने हेतु विशेष सदस्य के रूप में जुड़ें।',
      formTitle: 'सहयोगी / संरक्षक सदस्य पंजीकरण प्रपत्र',
      aboutTitle: 'सहयोगी / संरक्षक सदस्य क्या है?',
      about: 'सहयोगी / संरक्षक सदस्य वे श्रद्धालु एवं समर्थक होते हैं जो संगठन के सेवा, संस्कार, जनकल्याण, सांस्कृतिक संरक्षण एवं मानवीय अभियानों को नैतिक, सामाजिक एवं सहयोगात्मक समर्थन प्रदान करते हैं। यह श्रेणी संगठन के दीर्घकालिक सेवा कार्यों, विकास योजनाओं एवं समाजहित परियोजनाओं को स्थिरता एवं शक्ति प्रदान करने हेतु बनाई गई है।',
      roles: ['सेवा एवं जनकल्याण अभियानों का समर्थन', 'सांस्कृतिक एवं धार्मिक संरक्षण गतिविधियों में सहयोग', 'समाजहित परियोजनाओं को प्रोत्साहन', 'संगठनात्मक विकास एवं विस्तार में सहयोग', 'जनजागरण एवं संस्कार प्रसार में सहभागिता', 'प्रेरक, मार्गदर्शक एवं संरक्षक सहयोग'],
      interests: ['सभी सेवा कार्यों में सहयोग', 'अन्न / भोजन सेवा सहयोग', 'चिकित्सा सहायता सहयोग', 'शिक्षा एवं संस्कार सहयोग', 'महिला एवं परिवार सहायता सहयोग', 'गौ सेवा सहयोग', 'पर्यावरण एवं वृक्षारोपण सहयोग', 'आपदा राहत सहयोग', 'सांस्कृतिक संरक्षण सहयोग', 'संगठनात्मक विकास सहयोग', 'विशेष परियोजना सहयोग'],
      skills: ['मार्गदर्शन / मेंटरशिप', 'प्रबंधन / नेतृत्व', 'वित्तीय / प्रशासनिक अनुभव', 'शिक्षा / प्रशिक्षण', 'डिजिटल / तकनीकी सहयोग', 'मीडिया / संचार', 'सामाजिक सेवा'],
      declaration: 'मैं स्वेच्छा से सहयोगी / संरक्षक सदस्य के रूप में संगठन से जुड़ रहा / रही हूँ। मुझ पर किसी प्रकार का दबाव नहीं है तथा मैं संगठन की नियमावली, नीति, सेवा शर्तें एवं अन्य सभी Terms & Conditions से सहमत हूँ।',
      fees: STANDARD,
      networkRule: true,
      pledge: true
    }
  ];

  var BASIC = [
    { id: 'name', label: 'पूरा नाम', en: 'Full Name', req: true },
    { id: 'guardian', label: 'पिता / पति का नाम', en: "Father's / Husband's Name", req: true },
    { id: 'dob', label: 'जन्मतिथि', en: 'Date of Birth', type: 'date', req: true },
    { id: 'mobile', label: 'मोबाइल नंबर', en: 'Mobile Number', type: 'tel', req: true },
    { id: 'whatsapp', label: 'WhatsApp नंबर', en: 'WhatsApp Number', type: 'tel', req: true },
    { id: 'email', label: 'ईमेल (वैकल्पिक)', en: 'Email (optional)', type: 'email', req: false },
    { id: 'house', label: 'फ्लैट / मकान / भवन / ग्राम', en: 'House / Village', req: true },
    { id: 'post', label: 'पोस्ट / क्षेत्र / ब्लॉक', en: 'Post / Area / Block', req: true },
    { id: 'city', label: 'शहर / तहसील', en: 'City / Tehsil', req: true },
    { id: 'district', label: 'जिला', en: 'District', req: true },
    { id: 'state', label: 'राज्य', en: 'State', req: true },
    { id: 'pin', label: 'पिनकोड', en: 'PIN Code', req: true }
  ];

  var esc = function (s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };
  var money = function (n) { return '₹' + Number(n).toLocaleString('en-IN'); };

  function checkGroup(name, items, cols) {
    return '<div class="sd-mem-checks' + (cols ? ' sd-mem-checks--' + cols : '') + '">' +
      items.map(function (it, i) {
        return '<label class="sd-mem-check"><input type="checkbox" name="' + name + '" value="' + esc(it) + '"><span>' + esc(it) + '</span></label>';
      }).join('') +
      '<label class="sd-mem-check sd-mem-check--other"><input type="checkbox" name="' + name + '" value="अन्य"><span>अन्य</span>' +
      '<input type="text" class="sd-mem-otherinput" placeholder="विवरण लिखें" aria-label="अन्य विवरण"></label>' +
      '</div>';
  }

  function init() {
    var root = document.querySelector('[data-sd-mem]');
    if (!root || root.dataset.sdInit === '1') return;
    root.dataset.sdInit = '1';

    var body = root.querySelector('[data-sd-mem-body]');
    var dots = root.querySelectorAll('[data-sd-mem-dot]');
    var state = { cat: null, step: 1, data: {}, level: 'Local', idCard: false, appNo: '' };
    var mounted = false;

    function setStep(n) {
      state.step = n;
      Array.prototype.forEach.call(dots, function (d) {
        var i = Number(d.getAttribute('data-sd-mem-dot'));
        d.classList.toggle('is-active', i === n);
        d.classList.toggle('is-done', i < n);
      });
      /* never yank the page on first paint — only when the visitor moves a step */
      if (mounted) root.scrollIntoView({ behavior: 'smooth', block: 'start' });
      mounted = true;
    }

    /* ---------- step 1: categories ---------- */
    function renderCategories() {
      body.innerHTML =
        '<div class="sd-mem-head"><span class="sd-mem-eyebrow">Step 1 of 4 · Category Selection</span>' +
        '<h2 class="sd-mem-title deva">सदस्यता की 5 श्रेणियाँ <span>(Membership Categories)</span></h2>' +
        '<p class="sd-mem-sub deva">सनातन धर्म मानव कल्याण फाउंडेशन में जुड़ने हेतु अपनी रुचि, योग्यता, स्थान एवं उपलब्ध समय के अनुसार नीचे दी गई 5 श्रेणियों में से किसी एक का चयन करें।</p></div>' +
        '<div class="sd-mem-grid">' +
        CATEGORIES.map(function (c) {
          return '<article class="sd-mem-card">' +
            '<div class="sd-mem-card-img"><img src="' + c.img + '" alt="' + esc(c.en) + '" loading="lazy">' +
            '<span class="sd-mem-badge">' + esc(c.badge) + '</span></div>' +
            '<div class="sd-mem-card-body">' +
            '<h3 class="sd-mem-card-en">' + esc(c.en) + '</h3>' +
            '<p class="sd-mem-card-hi deva">' + esc(c.hi) + '</p>' +
            '<p class="sd-mem-card-text deva">' + esc(c.card) + '</p>' +
            '<button type="button" class="sd-mem-cta" data-sd-pick="' + c.id + '">View Details</button>' +
            '</div></article>';
        }).join('') +
        '</div>';
      setStep(1);
    }

    /* ---------- step 2: category details ---------- */
    function renderDetails() {
      var c = state.cat;
      var fees = c.fees;
      body.innerHTML =
        '<div class="sd-mem-head"><span class="sd-mem-eyebrow">Step 2 of 4 · Category Details</span>' +
        '<h2 class="sd-mem-title">' + esc(c.en) + ' <span class="deva">| ' + esc(c.hi) + '</span></h2></div>' +
        '<div class="sd-mem-panel">' +
        '<div class="sd-mem-notice"><strong>महत्वपूर्ण सूचना</strong><p class="deva">' + esc(NOTICE) + '</p></div>' +
        (c.about ? '<h3 class="sd-mem-h3 deva">' + esc(c.aboutTitle) + '</h3><p class="sd-mem-p deva">' + esc(c.about) + '</p>' : '<p class="sd-mem-p deva">' + esc(c.card) + '</p>') +
        (c.roles.length ? '<h3 class="sd-mem-h3 deva">संभावित भूमिका एवं दायित्व</h3><ul class="sd-mem-list deva">' + c.roles.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>' : '') +
        '<h3 class="sd-mem-h3 deva">सेवा सहयोग राशि</h3>' +
        '<div class="sd-mem-fees">' +
        Object.keys(fees).map(function (k) {
          return '<div class="sd-mem-fee"><span>' + k + '</span><strong>' + money(fees[k][0]) + '</strong>' +
            '<em>With ID Card ' + money(fees[k][1]) + '</em></div>';
        }).join('') + '</div>' +
        (c.networkRule ? '<p class="sd-mem-note deva">' + esc(NETWORK_RULE) + '</p>' : '') +
        '</div>' +
        '<div class="sd-mem-actions"><button type="button" class="sd-mem-back" data-sd-mem-go="1">&larr; अन्य श्रेणी देखें</button>' +
        '<button type="button" class="sd-mem-cta sd-mem-cta--wide" data-sd-mem-go="3">आवेदन प्रपत्र भरें | Fill Registration Form</button></div>';
      setStep(2);
    }

    /* ---------- step 3: registration form ---------- */
    function renderForm() {
      var c = state.cat;
      body.innerHTML =
        '<div class="sd-mem-head"><span class="sd-mem-eyebrow">Step 3 of 4 · Registration Form</span>' +
        '<h2 class="sd-mem-title">' + esc(c.en) + ' <span class="deva">| ' + esc(c.hi) + '</span></h2>' +
        '<p class="sd-mem-sub deva">' + esc(c.formTitle) + '</p></div>' +
        '<form class="sd-mem-form" data-sd-mem-form novalidate>' +

        '<div class="sd-mem-formtop">' +
        '<div class="sd-mem-formtitle">' + esc(c.en) + '<span class="deva"> | ' + esc(c.hi) + '</span></div>' +
        '<fieldset class="sd-mem-gender"><legend class="sd-mem-sronly">लिंग</legend>' +
        '<label><input type="radio" name="gender" value="पुरुष" checked><span>पुरुष (Male)</span></label>' +
        '<label><input type="radio" name="gender" value="महिला"><span>महिला (Female)</span></label>' +
        '</fieldset></div>' +

        '<div class="sd-mem-notice sd-mem-notice--sm"><strong>महत्वपूर्ण सूचना</strong><p class="deva">' + esc(NOTICE) + '</p></div>' +

        '<h3 class="sd-mem-h3 deva">मूल जानकारी <span>| Basic Information</span></h3>' +
        '<div class="sd-mem-grid2">' +
        BASIC.map(function (f) {
          return '<div class="sd-mem-field"><label for="mem-' + f.id + '">' + esc(f.label) + (f.req ? ' *' : '') +
            '<em>' + esc(f.en) + '</em></label>' +
            '<input id="mem-' + f.id + '" name="' + f.id + '" type="' + (f.type || 'text') + '"' +
            (f.req ? ' data-sd-req' : '') + (f.id === 'pin' ? ' inputmode="numeric" maxlength="6"' : '') + '>' +
            '<p class="sd-mem-err" data-sd-err></p></div>';
        }).join('') + '</div>' +

        '<h3 class="sd-mem-h3 deva">सेवा रुचि <span>| Service Interest</span></h3>' +
        '<p class="sd-mem-hint deva">आप किस प्रकार की सेवा में सहयोग देना चाहते हैं? (एक या अधिक चुनें)</p>' +
        checkGroup('interest', c.interests, 2) +
        '<p class="sd-mem-err sd-mem-err--block" data-sd-err-interest></p>' +

        '<h3 class="sd-mem-h3 deva">उपलब्ध समय <span>| Availability</span></h3>' +
        checkGroup('availability', TIME_OPTIONS, 4) +

        '<h3 class="sd-mem-h3 deva">विशेष कौशल / अनुभव <span>| Skills (यदि कोई हो)</span></h3>' +
        checkGroup('skill', c.skills, 3) +

        '<h3 class="sd-mem-h3 deva">घोषणा <span>| Declaration</span></h3>' +
        '<label class="sd-mem-check sd-mem-check--decl"><input type="checkbox" data-sd-decl><span class="deva">' + esc(c.declaration) + '</span></label>' +
        '<p class="sd-mem-err sd-mem-err--block" data-sd-err-decl></p>' +

        '<div class="sd-mem-actions"><button type="button" class="sd-mem-back" data-sd-mem-go="2">&larr; पीछे</button>' +
        '<button type="button" class="sd-mem-cta sd-mem-cta--wide" data-sd-mem-next>Next | आगे बढ़ें</button></div>' +
        '</form>';
      setStep(3);
    }

    /* ---------- step 4: service level, contribution, payment ---------- */
    function renderPayment() {
      var c = state.cat;
      body.innerHTML =
        '<div class="sd-mem-head"><span class="sd-mem-eyebrow">Step 4 of 4 · Service Selection</span>' +
        '<h2 class="sd-mem-title deva">सेवा चयन <span>| Service Selection</span></h2></div>' +
        '<div class="sd-mem-panel sd-mem-panel--pay">' +
        '<div class="sd-mem-field"><label for="mem-level">सेवा स्तर चुनें <em>Service Level</em></label>' +
        '<select id="mem-level" data-sd-level>' +
        Object.keys(c.fees).map(function (k) { return '<option value="' + k + '">' + k + '</option>'; }).join('') +
        '</select></div>' +
        (c.networkRule ? '<p class="sd-mem-note deva">' + esc(NETWORK_RULE) + '</p>' : '<p class="sd-mem-note deva">चयनित सेवा स्तर के अनुसार सेवा सहयोग राशि नीचे स्वतः प्रदर्शित होगी।</p>') +

        '<h3 class="sd-mem-h3 deva">सेवा सहयोग राशि <span>| Service Contribution</span></h3>' +
        '<div class="sd-mem-amount"><span data-sd-amount>' + money(c.fees.Local[0]) + '</span>' +
        '<em class="deva" data-sd-amountnote>Local · बिना पहचान पत्र</em></div>' +

        '<label class="sd-mem-check sd-mem-check--box"><input type="checkbox" data-sd-idcard>' +
        '<span class="deva">मुझे संगठन का पहचान पत्र (ID Card) चाहिए। <em>चयन करने पर सेवा सहयोग राशि स्वतः अपडेट होगी।</em></span></label>' +

        '<div class="sd-mem-idextras" data-sd-idextras hidden>' +
        '<div class="sd-mem-grid2">' +
        '<div class="sd-mem-field"><label for="mem-photo">Upload Photo</label><input id="mem-photo" type="file" accept="image/*"></div>' +
        '<div class="sd-mem-field"><label for="mem-idproof">Upload ID Proof</label><input id="mem-idproof" type="file" accept="image/*,.pdf"></div>' +
        '</div></div>' +

        '<div class="sd-mem-field"><label for="mem-reason">Message / Reason for Joining</label><textarea id="mem-reason" rows="2"></textarea></div>' +

        (c.pledge ? '<label class="sd-mem-check sd-mem-check--decl"><input type="checkbox" data-sd-pledge><span class="deva">' + esc(PLEDGE) + '</span></label>' : '') +
        '<label class="sd-mem-check sd-mem-check--decl"><input type="checkbox" data-sd-terms><span>I agree to Terms &amp; Conditions and Foundation Rules.</span></label>' +
        '<p class="sd-mem-err sd-mem-err--block" data-sd-err-pay></p>' +

        '<h3 class="sd-mem-h3 deva">भुगतान माध्यम <span>| Payment Options</span></h3>' +
        '<div class="sd-mem-pay-modes"><span>Razorpay</span><span>UPI</span><span>QR Code</span><span>Bank Transfer</span></div>' +
        '<div class="sd-mem-paynote"><strong>Security Note</strong><p class="deva">भुगतान करते समय स्क्रीन पर <strong>"Sanatan Dharm Manav Kalyan Foundation"</strong> नाम दिखाई दे, तभी भुगतान करें।</p></div>' +
        '<div class="sd-mem-demo deva"><strong>Test mode.</strong> Razorpay अभी जुड़ा नहीं है — Pay Now दबाने पर आवेदन दर्ज होगा, किंतु कोई राशि नहीं ली जाएगी।</div>' +
        '</div>' +

        '<div class="sd-mem-actions"><button type="button" class="sd-mem-back" data-sd-mem-go="3">&larr; पीछे</button>' +
        '<button type="button" class="sd-mem-cta sd-mem-cta--wide" data-sd-pay>Pay Now</button></div>';
      setStep(4);
      syncAmount();
    }

    function syncAmount() {
      var c = state.cat;
      var sel = body.querySelector('[data-sd-level]');
      var idc = body.querySelector('[data-sd-idcard]');
      var out = body.querySelector('[data-sd-amount]');
      var note = body.querySelector('[data-sd-amountnote]');
      var extras = body.querySelector('[data-sd-idextras]');
      if (!sel || !out) return;
      state.level = sel.value;
      state.idCard = !!(idc && idc.checked);
      var pair = c.fees[state.level];
      out.textContent = money(state.idCard ? pair[1] : pair[0]);
      if (note) note.textContent = state.level + ' · ' + (state.idCard ? 'पहचान पत्र सहित' : 'बिना पहचान पत्र');
      if (extras) extras.hidden = !state.idCard;
    }

    /* ---------- success ---------- */
    function renderSuccess() {
      var c = state.cat;
      var st = (state.data.state || 'IN').replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase() || 'IN';
      var seq = String(Math.floor(Math.random() * 900000) + 100000);
      state.appNo = 'SDMKF-' + st + '-' + seq;
      var amount = state.cat.fees[state.level][state.idCard ? 1 : 0];

      body.innerHTML =
        '<div class="sd-mem-success">' +
        '<div class="sd-mem-tick"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg></div>' +
        '<h2 class="sd-mem-title deva">आवेदन सफल हुआ</h2>' +
        '<p class="sd-mem-sub deva">आपका आवेदन सफलतापूर्वक प्राप्त हो गया है। Verification के बाद आपकी Membership / Volunteer Registration सक्रिय की जाएगी।</p>' +
        '<div class="sd-mem-receipt">' +
        '<div><span>आवेदन संख्या</span><strong>' + state.appNo + '</strong></div>' +
        '<div><span>श्रेणी</span><strong>' + esc(c.en) + '</strong></div>' +
        '<div><span>सेवा स्तर</span><strong>' + state.level + (state.idCard ? ' + ID Card' : '') + '</strong></div>' +
        '<div><span>सेवा सहयोग राशि</span><strong>' + money(amount) + '</strong></div>' +
        '<div><span>आवेदक</span><strong>' + esc(state.data.name || '—') + '</strong></div>' +
        '</div>' +
        '<div class="sd-mem-actions sd-mem-actions--center">' +
        '<button type="button" class="sd-mem-cta" data-sd-receipt>डाउनलोड रसीद</button>' +
        '<a class="sd-mem-back sd-mem-back--btn" href="/">Return Home</a></div>' +
        '<p class="sd-mem-note deva">आगे की सूचना SMS / Email / WhatsApp द्वारा भेजी जाएगी।</p>' +
        '</div>';
      setStep(4);
    }

    function collect(form) {
      var d = {};
      BASIC.forEach(function (f) {
        var el = form.querySelector('#mem-' + f.id);
        if (el) d[f.id] = el.value.trim();
      });
      var g = form.querySelector('input[name="gender"]:checked');
      d.gender = g ? g.value : '';
      ['interest', 'availability', 'skill'].forEach(function (n) {
        d[n] = Array.prototype.map.call(form.querySelectorAll('input[name="' + n + '"]:checked'), function (i) { return i.value; });
      });
      return d;
    }

    function validateForm(form) {
      var firstBad = null;
      Array.prototype.forEach.call(form.querySelectorAll('[data-sd-req]'), function (input) {
        var v = input.value.trim();
        var msg = v ? '' : 'आवश्यक';
        if (!msg && input.type === 'tel' && !/^[0-9+\-\s]{10,15}$/.test(v)) msg = 'सही मोबाइल नंबर दर्ज करें';
        if (!msg && input.id === 'mem-pin' && !/^[0-9]{6}$/.test(v)) msg = '6 अंकों का पिनकोड';
        var field = input.closest('.sd-mem-field');
        if (field) {
          field.classList.toggle('has-error', !!msg);
          var slot = field.querySelector('[data-sd-err]');
          if (slot) slot.textContent = msg;
        }
        if (msg && !firstBad) firstBad = input;
      });

      var email = form.querySelector('#mem-email');
      if (email && email.value.trim() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
        var f2 = email.closest('.sd-mem-field');
        f2.classList.add('has-error');
        f2.querySelector('[data-sd-err]').textContent = 'सही ईमेल दर्ज करें';
        if (!firstBad) firstBad = email;
      }

      var interests = form.querySelectorAll('input[name="interest"]:checked').length;
      var iErr = form.querySelector('[data-sd-err-interest]');
      if (iErr) iErr.textContent = interests ? '' : 'कृपया कम से कम एक सेवा रुचि चुनें';
      if (!interests && !firstBad) firstBad = form.querySelector('input[name="interest"]');

      var decl = form.querySelector('[data-sd-decl]');
      var dErr = form.querySelector('[data-sd-err-decl]');
      if (dErr) dErr.textContent = decl && decl.checked ? '' : 'कृपया घोषणा स्वीकार करें';
      if (decl && !decl.checked && !firstBad) firstBad = decl;

      if (firstBad) { firstBad.focus(); return false; }
      return true;
    }

    /* ---------- events ---------- */
    body.addEventListener('click', function (e) {
      var pick = e.target.closest('[data-sd-pick]');
      if (pick) {
        var id = pick.getAttribute('data-sd-pick');
        state.cat = CATEGORIES.filter(function (c) { return c.id === id; })[0];
        renderDetails();
        return;
      }

      var go = e.target.closest('[data-sd-mem-go]');
      if (go) {
        var n = Number(go.getAttribute('data-sd-mem-go'));
        if (n === 1) renderCategories();
        else if (n === 2) renderDetails();
        else if (n === 3) renderForm();
        return;
      }

      if (e.target.closest('[data-sd-mem-next]')) {
        var form = body.querySelector('[data-sd-mem-form]');
        if (!validateForm(form)) return;
        state.data = collect(form);
        renderPayment();
        return;
      }

      var pay = e.target.closest('[data-sd-pay]');
      if (pay) {
        var terms = body.querySelector('[data-sd-terms]');
        var pledge = body.querySelector('[data-sd-pledge]');
        var err = body.querySelector('[data-sd-err-pay]');
        if (pledge && !pledge.checked) { err.textContent = 'कृपया संकल्प स्वीकार करें'; pledge.focus(); return; }
        if (terms && !terms.checked) { err.textContent = 'कृपया Terms & Conditions स्वीकार करें'; terms.focus(); return; }
        err.textContent = '';
        pay.disabled = true;
        pay.textContent = 'Processing…';
        window.setTimeout(renderSuccess, 900);
        return;
      }

      if (e.target.closest('[data-sd-receipt]')) {
        var amount = state.cat.fees[state.level][state.idCard ? 1 : 0];
        var lines = [
          'SANATAN DHARM MANAV KALYAN FOUNDATION',
          'Membership / Volunteer Registration — Acknowledgement',
          '',
          'Application No : ' + state.appNo,
          'Category       : ' + state.cat.en + ' | ' + state.cat.hi,
          'Applicant      : ' + (state.data.name || ''),
          'Mobile         : ' + (state.data.mobile || ''),
          'Service Level  : ' + state.level + (state.idCard ? ' (with ID Card)' : ''),
          'Contribution   : ' + money(amount),
          '',
          'Verification के बाद Membership / Volunteer Registration सक्रिय की जाएगी।',
          'आगे की सूचना SMS / Email / WhatsApp द्वारा भेजी जाएगी।'
        ].join('\n');
        var blob = new Blob([lines], { type: 'text/plain;charset=utf-8' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = state.appNo + '.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
      }
    });

    body.addEventListener('change', function (e) {
      if (e.target.matches('[data-sd-level], [data-sd-idcard]')) syncAmount();
    });

    renderCategories();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
