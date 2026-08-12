export type HeroSlide = {
  img: string
  imgMobile?: string
  alt: string
  line1?: string
  line2?: string
  cta?: { label: string; href: string }
  noOverlay?: boolean
}

/* Hero slides, lifted from the old server-injected slider during the
   Next.js rebuild. */
export const HERO_SLIDES: HeroSlide[] = [
  {
    "img": "/img/slide-ganga-aarti.jpg",
    "alt": "Ganga Aarti at sunset",
    "line1": "सनातन, संस्कार और समाज के लिए आगे बढ़िए...",
    "line2": "अगर हम नहीं, तो कौन?",
    "cta": {
      "label": "Join Us",
      "href": "/membership"
    }
  },
  {
    "img": "/img/slide-family.jpg",
    "alt": "Family reading scriptures together",
    "line1": "विरासत को आने वाली पीढ़ियों तक पहुँचाइए...",
    "line2": "सनातन बचेगा तो संस्कृति बचेगी...",
    "cta": {
      "label": "Join The Mission",
      "href": "/membership"
    }
  },
  {
    "img": "/img/slide-volunteers.jpg",
    "alt": "Volunteers serving the community",
    "line1": "आपकी छोटी सी सेवा किसी की बड़ी उम्मीद बन सकती है...",
    "line2": "अब समय केवल सोचने का नहीं, कुछ करने का है...",
    "cta": {
      "label": "Donate Now",
      "href": "/donate"
    }
  },
  {
    "img": "/img/slide-flood.jpg",
    "alt": "Flood relief and rescue operations",
    "line1": "आपका एक कदम समाज में सकारात्मक बदलाव ला सकता है...",
    "line2": "परिवर्तन आपकी प्रतीक्षा में है...",
    "cta": {
      "label": "Become A Volunteer",
      "href": "/membership"
    }
  },
  {
    "img": "/img/slide-india-gate.jpg",
    "alt": "Massive gathering at India Gate at sunset",
    "line1": "सेवा, सुरक्षा और जागरूकता से समाज को सशक्त बनाइए...",
    "line2": "इतिहास दर्शकों को नहीं, योगदान देने वालों को याद रखता है...",
    "cta": {
      "label": "Join Now",
      "href": "/membership"
    }
  },
  {
    "img": "/img/slide-dharmo-desktop.jpg",
    "imgMobile": "/img/slide-dharmo-mobile.jpg",
    "alt": "धर्मो रक्षति रक्षितः — जो धर्म की रक्षा करता है, धर्म उसकी रक्षा करता है",
    "noOverlay": true
  }
]
