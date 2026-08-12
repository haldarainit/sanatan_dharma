export type Person = {
  category: string
  name: string
  img: string
  title: string
  role: string
}

export type PeopleFilter = { id: string; label: string }

/* Inspiration figures, lifted from the About page during the Next.js
   rebuild. Order is preserved from the original markup. */
export const PEOPLE: Person[] = [
  {
    "category": "saints",
    "name": "जगद्गुरु रामभद्राचार्य जी महाराज",
    "img": "/people/ram_bhadra_charya.jpeg",
    "title": "जगद्गुरु रामभद्राचार्य जी महाराज",
    "role": "प्रख्यात संत, धर्माचार्य, श्रीराम भक्ति, भारतीय संस्कृति एवं सनातन चेतना के संरक्षण, संवर्धन और जागरण के प्रेरणास्रोत।"
  },
  {
    "category": "saints",
    "name": "धीरेंद्र कृष्ण शास्त्री जी महाराज",
    "img": "/people/dhirendra_shashtry.jpeg",
    "title": "धीरेंद्र कृष्ण शास्त्री जी महाराज",
    "role": "सनातन जागरण, हिन्दू एकता एवं धर्म-संस्कृति के संरक्षण के लिए समर्पित आध्यात्मिक प्रेरणास्रोत।"
  },
  {
    "category": "saints",
    "name": "देवकीनंदन ठाकुर जी महाराज",
    "img": "/people/devki_nandan.jpeg",
    "title": "देवकीनंदन ठाकुर जी महाराज",
    "role": "कथावाचक, आध्यात्मिक वक्ता एवं सनातन धर्म के प्रचार-प्रसार तथा जनजागरण के प्रेरणास्रोत।"
  },
  {
    "category": "saints",
    "name": "स्वामी गोविंद देव गिरी जी महाराज",
    "img": "/people/govind_devgiri.jpeg",
    "title": "स्वामी गोविंद देव गिरी जी महाराज",
    "role": "वैदिक परंपरा, धर्मशिक्षा, भारतीय संस्कृति एवं सनातन मूल्यों के संरक्षण और प्रसार के प्रेरणास्रोत।"
  },
  {
    "category": "justice",
    "name": "अधिवक्ता हरिशंकर जैन जी एवं अधिवक्ता विष्णु शंकर जैन जी",
    "img": "/people/hari_shankar_jain_and_vishnu_shankar_jain.jpeg",
    "title": "अधिवक्ता हरिशंकर जैन जी एवं अधिवक्ता विष्णु शंकर जैन जी",
    "role": "सनातन धर्म, धार्मिक अधिकारों एवं सांस्कृतिक विरासत के संरक्षण हेतु न्यायिक संघर्ष, वैचारिक प्रतिबद्धता और जनजागरण के प्रेरणास्रोत।"
  },
  {
    "category": "justice",
    "name": "अधिवक्ता अश्विनी उपाध्याय जी",
    "img": "/people/ashwini_upadhyaya.jpeg",
    "title": "अधिवक्ता अश्विनी उपाध्याय जी",
    "role": "संवैधानिक मूल्यों, जनहित, समान नागरिक संहिता एवं राष्ट्रीय हित से जुड़े विषयों पर वैचारिक एवं न्यायिक प्रयासों के प्रेरणास्रोत।"
  },
  {
    "category": "nation",
    "name": "योगी आदित्यनाथ जी",
    "img": "/people/yogi_adithanath.jpeg",
    "title": "योगी आदित्यनाथ जी",
    "role": "मुख्यमंत्री, उत्तर प्रदेश"
  },
  {
    "category": "nation",
    "name": "पुष्कर सिंह धामी जी",
    "img": "/people/pushkar_singh_dhami.jpeg",
    "title": "पुष्कर सिंह धामी जी",
    "role": "मुख्यमंत्री, उत्तराखंड"
  },
  {
    "category": "nation",
    "name": "हिमंत बिस्व सरमा जी",
    "img": "/people/hemanta_biswa_sharma.jpeg",
    "title": "हिमंत बिस्व सरमा जी",
    "role": "मुख्यमंत्री, असम"
  },
  {
    "category": "nation",
    "name": "सुवेन्दु अधिकारी जी",
    "img": "/people/suvendu_adhikary.jpeg",
    "title": "सुवेन्दु अधिकारी जी",
    "role": "जननेता, पश्चिम बंगाल"
  },
  {
    "category": "nation",
    "name": "स्वर्गीय बालासाहेब ठाकरे जी",
    "img": "/people/bala_thackrey.jpeg",
    "title": "स्वर्गीय बालासाहेब ठाकरे जी",
    "role": "हिन्दुत्व, सनातन अस्मिता, सांस्कृतिक स्वाभिमान एवं राष्ट्रहित के लिए निर्भीक नेतृत्व के प्रेरणास्रोत।"
  },
  {
    "category": "nation",
    "name": "राजा भैया (रघुराज प्रताप सिंह जी)",
    "img": "/people/raja_bhaiya.jpeg",
    "title": "राजा भैया (रघुराज प्रताप सिंह जी)",
    "role": "सनातन संस्कृति, सामाजिक समरसता, जनसेवा एवं भारतीय परंपराओं के संरक्षण के लिए समर्पित नेतृत्व के प्रेरणास्रोत।"
  },
  {
    "category": "nation",
    "name": "टी. राजा सिंह जी",
    "img": "/people/t_raja.jpeg",
    "title": "टी. राजा सिंह जी",
    "role": "विधायक, तेलंगाना"
  },
  {
    "category": "nation",
    "name": "स्वर्गीय अशोक सिंघल जी",
    "img": "/people/ashok_singhal.jpeg",
    "title": "स्वर्गीय अशोक सिंघल जी",
    "role": "सनातन जागरण, श्रीराम जन्मभूमि आंदोलन, हिन्दुत्व एवं सांस्कृतिक राष्ट्रचेतना के लिए समर्पित संगठनात्मक नेतृत्व के प्रेरणास्रोत।"
  }
]

export const PEOPLE_FILTERS: PeopleFilter[] = [
  {
    "id": "all",
    "label": "सभी (All Inspirations)"
  },
  {
    "id": "saints",
    "label": "संत एवं धर्माचार्य"
  },
  {
    "id": "justice",
    "label": "न्याय एवं वैचारिक नेतृत्व"
  },
  {
    "id": "nation",
    "label": "राष्ट्र एवं जननेतृत्व"
  }
]
