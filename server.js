
const READ_MORE_NAVIGATION_SCRIPT = `
<script>
(function() {
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('button, a, .sd-btn');
    if (!btn) return;
    const text = (btn.innerText || btn.textContent || '').trim();
    if (text.includes('Read More') || text.includes('Detail')) {
      const card = btn.closest('.bg-white, .rounded-2xl, div[class*="border"], div[class*="shadow"]');
      if (card) {
        const cardText = card.innerText || card.textContent || '';
        let targetUrl = '';
        if (cardText.includes('सनातन हेल्प सेंटर') || cardText.includes('Help Center')) {
          targetUrl = '/future-activities/sanatan-help-center';
        } else if (cardText.includes('भोजनालय') || cardText.includes('Bhojanalaya')) {
          targetUrl = '/future-activities/sanatan-bhojanalaya';
        } else if (cardText.includes('कौशल') || cardText.includes('Skill')) {
          targetUrl = '/future-activities/skill-development';
        } else if (cardText.includes('शेल्टर') || cardText.includes('आश्रय') || cardText.includes('Shelter')) {
          targetUrl = '/future-activities/ashray-dham';
        } else if (cardText.includes('गुरुकुल') || cardText.includes('Gurukul')) {
          targetUrl = '/future-activities/gurukul-sansar-kendra';
        }

        if (targetUrl) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = targetUrl;
        }
      }
    }
  }, true);
})();
</script>
`;
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

const DROPDOWN_SCRIPT = `
<style>
  .nav-dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    min-width: 220px;
    background: #ffffff;
    border: 1px solid #f1f5f9;
    border-radius: 16px;
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 10px;
    z-index: 1000;
  }
  .relative.group:hover .nav-dropdown-menu,
  .relative.group:focus-within .nav-dropdown-menu,
  .nav-dropdown-menu.active {
    display: block !important;
  }
  .nav-dropdown-item {
    display: block;
    padding: 9px 14px;
    font-size: 13.5px;
    font-weight: 500;
    color: #0d1b2a;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.15s ease;
  }
  .nav-dropdown-item:hover {
    background-color: #fff7ed;
    color: #ff6f00;
    font-weight: 600;
  }
</style>
<script>
(function() {
  function initNav() {
    const dropdownsData = {
      'Activities': [
        { label: 'Current Activities', href: '/activities' },
        { label: 'Future Missions', href: '/future-activities' },
        { label: 'Festival Calendar', href: '/festival-calendar' }
      ],
      'Donation': [
        { label: 'Donate Now', href: '/donate' },
        { label: 'Start Fundraiser', href: '/start-fundraiser' },
        { label: 'View Fundraisers', href: '/view-fundraisers' }
      ],
      'Media': [
        { label: 'News & Events', href: '/media/news-and-events' },
        { label: 'Photo Gallery', href: '/media/photo-gallery' },
        { label: 'Video Gallery', href: '/media/video-gallery' }
      ],
      'Portal': [
        { label: 'Portal Sign In', href: '/portal/login' },
        { label: 'My Profile', href: '/portal/profile' },
        { label: 'Verification Center', href: '/portal/verification' },
        { label: 'Announcements', href: '/portal/announcements' }
      ],
      'Partners': [
        { label: 'Become a CSR Partner', href: '/csr-partner' },
        { label: 'Become a Seva Partner', href: '/seva-partner' }
      ],
      'More': [
        { label: 'Need Help', href: '/need-help' },
        { label: 'Raise a Complaint', href: '/raise-complaint' },
        { label: 'FAQ', href: '/about#faq' },
        { label: 'Community Voices', href: '/about#voices' },
        { label: 'Legal Documents', href: '/legal-documents' },
        { label: 'Contact Us', href: '/contact' }
      ]
    };

    const navGroups = document.querySelectorAll('header .relative.group');
    navGroups.forEach(group => {
      const btn = group.querySelector('button');
      if (!btn) return;
      const text = btn.innerText.trim();
      
      for (const [catName, items] of Object.entries(dropdownsData)) {
        if (text.toLowerCase().includes(catName.toLowerCase())) {
          if (!group.querySelector('.nav-dropdown-menu')) {
            const menuDiv = document.createElement('div');
            menuDiv.className = 'nav-dropdown-menu';
            items.forEach(item => {
              const a = document.createElement('a');
              a.className = 'nav-dropdown-item';
              a.href = item.href;
              a.textContent = item.label;
              menuDiv.appendChild(a);
            });
            group.appendChild(menuDiv);

            btn.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              menuDiv.classList.toggle('active');
            });
          }
          break;
        }
      }
    });

    document.addEventListener('click', () => {
      document.querySelectorAll('.nav-dropdown-menu').forEach(m => m.classList.remove('active'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
</script>
`;

const HERO_SLIDER_SCRIPT = `
<script>
(function() {
  const slidesData = [
    {
      img: "/img/slide-ganga-aarti.jpg",
      alt: "Ganga Aarti at sunset",
      line1: "सनातन, संस्कार और समाज के लिए आगे बढ़िए...",
      line2: "अगर हम नहीं, तो कौन?",
      cta: { label: "Join Us", href: "/membership" }
    },
    {
      img: "/img/slide-family.jpg",
      alt: "Family reading scriptures together",
      line1: "विरासत को आने वाली पीढ़ियों तक पहुँचाइए...",
      line2: "सनातन बचेगा तो संस्कृति बचेगी...",
      cta: { label: "Join The Mission", href: "/membership" }
    },
    {
      img: "/img/slide-volunteers.jpg",
      alt: "Volunteers serving the community",
      line1: "आपकी छोटी सी सेवा किसी की बड़ी उम्मीद बन सकती है...",
      line2: "अब समय केवल सोचने का नहीं, कुछ करने का है...",
      cta: { label: "Donate Now", href: "/donate" }
    },
    {
      img: "/img/slide-flood.jpg",
      alt: "Flood relief and rescue operations",
      line1: "आपका एक कदम समाज में सकारात्मक बदलाव ला सकता है...",
      line2: "परिवर्तन आपकी प्रतीक्षा में है...",
      cta: { label: "Become A Volunteer", href: "/membership" }
    },
    {
      img: "/img/slide-india-gate.jpg",
      alt: "Massive gathering at India Gate at sunset",
      line1: "सेवा, सुरक्षा और जागरूकता से समाज को सशक्त बनाइए...",
      line2: "इतिहास दर्शकों को नहीं, योगदान देने वालों को याद रखता है...",
      cta: { label: "Join Now", href: "/membership" }
    },
    {
      img: "/img/slide-dharmo-desktop.jpg",
      imgMobile: "/img/slide-dharmo-mobile.jpg",
      alt: "धर्मो रक्षति रक्षितः — जो धर्म की रक्षा करता है, धर्म उसकी रक्षा करता है",
      noOverlay: true
    }
  ];

  function initSlider() {
    const heroSection = document.querySelector('section');
    if (!heroSection) return;

    const imgEl = heroSection.querySelector('picture img');
    const slideContainer = heroSection.querySelector('div.animate-slideIn') || (imgEl ? imgEl.closest('div.absolute.inset-0') : null);
    const line1El = heroSection.querySelector('p.deva');
    const line2El = heroSection.querySelector('h2.deva');
    const ctaContainer = heroSection.querySelector('div.mt-5.flex');
    const gradientOverlay = heroSection.querySelector('div.bg-gradient-to-r');
    const dots = heroSection.querySelectorAll('div.mt-4 button');

    if (!imgEl || !line1El || !line2El) return;

    let currentSlide = 0;
    let typingTimer1 = null;
    let typingTimer2 = null;
    let autoSlideTimer = null;

    function renderSlide(index) {
      if (typingTimer1) clearInterval(typingTimer1);
      if (typingTimer2) clearInterval(typingTimer2);

      const slide = slidesData[index];
      if (!slide) return;
      currentSlide = index;

      if (slideContainer) {
        slideContainer.style.transition = 'none';
        slideContainer.style.transform = 'translateX(100%)';
        slideContainer.style.opacity = '0.4';
        
        void slideContainer.offsetWidth;

        slideContainer.style.transition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease';
        slideContainer.style.transform = 'translateX(0)';
        slideContainer.style.opacity = '1';
      }

      if (imgEl) {
        const isMobile = window.innerWidth < 640;
        imgEl.src = (isMobile && slide.imgMobile) ? slide.imgMobile : slide.img;
        imgEl.alt = slide.alt || '';
      }

      if (gradientOverlay) {
        gradientOverlay.style.display = slide.noOverlay ? 'none' : 'block';
      }

      if (slide.noOverlay) {
        if (line1El) line1El.textContent = '';
        if (line2El) line2El.textContent = '';
        if (ctaContainer) { ctaContainer.innerHTML = ''; ctaContainer.style.opacity = '0'; }
        return;
      }

      const fullLine1 = slide.line1 || '';
      const fullLine2 = slide.line2 || '';
      
      if (line1El) line1El.textContent = '';
      if (line2El) line2El.textContent = '';

      if (ctaContainer) {
        ctaContainer.style.opacity = '0';
        ctaContainer.style.transform = 'translateY(12px)';
        ctaContainer.style.transition = 'all 0.4s ease';
        if (slide.cta) {
          ctaContainer.innerHTML = '<a href="' + slide.cta.href + '" class="inline-flex items-center justify-center font-bold text-sm text-white h-11 px-6 rounded-full bg-[#FF9933] border border-orange-200/50 shadow-lg hover:bg-[#E6821B] transition-all cursor-pointer">' + slide.cta.label + '</a>';
        } else {
          ctaContainer.innerHTML = '';
        }
      }

      dots.forEach((dot, dIdx) => {
        if (dIdx === index) {
          dot.className = "h-2 rounded-full transition-all w-8 bg-[#FF6F00]";
        } else {
          dot.className = "h-2 rounded-full transition-all w-2 bg-[#0D1B2A]/20 hover:bg-[#0D1B2A]/40";
        }
      });

      let charIdx1 = 0;
      typingTimer1 = setInterval(() => {
        if (charIdx1 <= fullLine1.length) {
          line1El.textContent = fullLine1.substring(0, charIdx1) + (charIdx1 < fullLine1.length ? '|' : '');
          charIdx1++;
        } else {
          clearInterval(typingTimer1);
          line1El.textContent = fullLine1;

          let charIdx2 = 0;
          typingTimer2 = setInterval(() => {
            if (charIdx2 <= fullLine2.length) {
              line2El.textContent = fullLine2.substring(0, charIdx2) + (charIdx2 < fullLine2.length ? '|' : '');
              charIdx2++;
            } else {
              clearInterval(typingTimer2);
              line2El.textContent = fullLine2;

              setTimeout(() => {
                if (ctaContainer) {
                  ctaContainer.style.opacity = '1';
                  ctaContainer.style.transform = 'translateY(0)';
                }
              }, 150);
            }
          }, 28);
        }
      }, 28);
    }

    function startAutoSlide() {
      if (autoSlideTimer) clearInterval(autoSlideTimer);
      autoSlideTimer = setInterval(() => {
        renderSlide((currentSlide + 1) % slidesData.length);
      }, 6000);
    }

    renderSlide(0);
    startAutoSlide();

    dots.forEach((dot, dIdx) => {
      dot.addEventListener('click', () => {
        renderSlide(dIdx);
        startAutoSlide();
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlider);
  } else {
    initSlider();
  }
})();
</script>
`;

const FUTURE_MISSIONS_SCRIPT = `
<script>
(function() {
  const missionsData = [{ title: "सनातन हेल्प सेंटर", tagline: "सहायता • मार्गदर्शन • सहयोग", desc: "सनातन हेल्प सेंटर का उद्देश्य सनातनी समाज के प्रत्येक जरूरतमंद व्यक्ति एवं परिवार को मार्गदर्शन, सहायता एवं सहयोग उपलब्ध कराना है। सेवाएँ पूर्णतः निःशुल्क होंगी।", img: "/img/future-sahayata.jpg", detailUrl: "/future-activities/sanatan-help-center" },
    { title: "सनातनी भोजनालय", tagline: "अन्न सेवा • सम्मान • संतोष", desc: "सनातनी भोजनालय का उद्देश्य जरूरतमंद, श्रमिक, वृद्ध एवं असहाय लोगों तक सम्मानपूर्वक भोजन पहुँचाना है। यह सेवा करुणा और मानव सेवा का एक सतत प्रयास है।", img: "/img/future-bhojanalaya.jpg", detailUrl: "/future-activities/sanatan-bhojanalaya" },
    { title: "सनातनी स्किल डेवलपमेंट सेंटर", tagline: "कौशल • स्वावलंबन • सम्मान", desc: "युवाओं, महिलाओं एवं जरूरतमंद परिवारों को कौशल प्रशिक्षण देकर आत्मनिर्भर बनाना। कौशल विकास आत्मविश्वास, स्वाभिमान और सुरक्षित भविष्य का आधार है।", img: "/img/future-skill.jpg", detailUrl: "/future-activities/skill-development" },
    { title: "सनातनी आश्रय धाम", tagline: "आश्रय • सुरक्षा • करुणा", desc: "निराश्रित, असहाय, वृद्ध एवं बेसहारा व्यक्तियों को सुरक्षित आश्रय, संरक्षण और सम्मानपूर्ण जीवन उपलब्ध कराना — यही सनातनी आश्रय धाम का संकल्प है।", img: "/img/future-ashray.jpg", detailUrl: "/future-activities/ashray-dham" },
    { title: "सनातन गुरुकुल एवं संस्कार केंद्र", tagline: "शिक्षा • संस्कार • संस्कृति", desc: "बच्चों और युवाओं में शिक्षा, संस्कार, चरित्र निर्माण तथा सनातन सांस्कृतिक मूल्यों का विकास। संस्कारित पीढ़ी ही सशक्त समाज और सुदृढ़ राष्ट्र की आधारशिला होती है।", img: "/img/future-gurukul.png", detailUrl: "/future-activities/gurukul-sansar-kendra" }];

  function initMissions() {
    const allButtons = Array.from(document.querySelectorAll('button'));
    const sahayataBtn = allButtons.find(b => b.innerText.includes('सनातन हेल्प सेंटर'));
    if (!sahayataBtn) return;

    const tabContainer = sahayataBtn.parentElement;
    if (!tabContainer) return;

    const section = tabContainer.closest('section') || tabContainer.parentElement.parentElement;
    if (!section) return;

    const tabButtons = Array.from(tabContainer.children).filter(el => el.tagName === 'BUTTON');
    const imageTrack = section.querySelector('div.flex.w-full.h-full.transition-transform');
    const titleEl = section.querySelector('h3');
    const taglineEl = section.querySelector('.fm-card-tagline');
    const cardPanel = section.querySelector('div.lg\\:flex-1') || section.querySelector('div.bg-white.rounded-2xl.p-6') || section.querySelector('div.bg-white.rounded-2xl.p-8');
    const descEl = (cardPanel && cardPanel.querySelector('p')) || section.querySelector('#fm-card-desc') || null;
    const detailBtn = section.querySelector('.sd-btn--view-details');
    
    const prevBtn = allButtons.find(b => b.innerText.includes('Previous'));
    const nextBtn = allButtons.find(b => b.innerText.includes('Next'));
    const dotsContainer = prevBtn ? prevBtn.parentElement : null;
    const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('button')).filter(b => !b.innerText.includes('Previous') && !b.innerText.includes('Next')) : [];

    let activeIndex = 0;
    let autoSlideTimer = null;

    function startAutoSlide() {
      if (autoSlideTimer) clearInterval(autoSlideTimer);
      autoSlideTimer = setInterval(() => {
        setActiveTab((activeIndex + 1) % missionsData.length);
      }, 3000);
    }

    function setActiveTab(index) {
      if (index < 0) index = missionsData.length - 1;
      if (index >= missionsData.length) index = 0;
      activeIndex = index;

      const data = missionsData[index];

      if (imageTrack) {
        imageTrack.style.transform = 'translateX(-' + (index * 100) + '%)';
      }

      tabButtons.forEach((btn, idx) => {
        if (idx === index) {
          btn.className = "px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer bg-gradient-to-b from-orange-500 to-orange-600 text-white border-orange-600 shadow-lg shadow-orange-500/30 scale-[1.02]";
        } else {
          btn.className = "px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer bg-gradient-to-b from-white to-slate-50 text-slate-800 border-slate-200 hover:border-orange-300 hover:text-orange-600 shadow-sm";
        }
      });

      if (titleEl) titleEl.textContent = data.title;
      if (taglineEl) taglineEl.textContent = data.tagline || '';
      if (descEl) descEl.textContent = data.desc;
      if (detailBtn && data.detailUrl) detailBtn.href = data.detailUrl;

      if (dots && dots.length > 0) {
        dots.forEach((dot, dIdx) => {
          if (dIdx === index) {
            dot.className = "h-2 rounded-full transition-all w-8 bg-[#FF6F00]";
          } else {
            dot.className = "h-2 rounded-full transition-all w-2 bg-[#0D1B2A]/20 hover:bg-[#0D1B2A]/40";
          }
        });
      }
    }

    tabButtons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        setActiveTab(idx);
        startAutoSlide();
      });
    });

    if (prevBtn) prevBtn.addEventListener('click', () => {
      setActiveTab(activeIndex - 1);
      startAutoSlide();
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
      setActiveTab(activeIndex + 1);
      startAutoSlide();
    });

    if (dots && dots.length > 0) {
      dots.forEach((dot, dIdx) => {
        dot.addEventListener('click', () => {
          setActiveTab(dIdx);
          startAutoSlide();
        });
      });
    }

    setActiveTab(0);
    startAutoSlide();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMissions);
  } else {
    initMissions();
  }
})();
</script>
`;

const VOLUNTEER_CAROUSEL_SCRIPT = `
<script>
(function() {
  function initVolunteerCarousel() {
    const allHeadings = Array.from(document.querySelectorAll('h2'));
    const heading = allHeadings.find(h => h.innerText.includes('Volunteer') && h.innerText.includes('Ecosystem'));
    if (!heading) return;

    const container = heading.closest('div.max-w-7xl') || heading.parentElement.parentElement;
    if (!container) return;

    const track = container.querySelector('div.flex.gap-6');
    if (!track) return;

    const totalCards = track.children.length; // 5 cards
    let currentIndex = 0;
    let autoTimer = null;

    function getCardsPerPage() {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 768) return 2;
      return 3;
    }

    function slideTo(index) {
      const cardsPerPage = getCardsPerPage();
      const maxIndex = Math.max(0, totalCards - cardsPerPage);
      
      if (index < 0) index = maxIndex;
      if (index > maxIndex) index = 0;
      
      currentIndex = index;

      const gapPx = 24;
      if (cardsPerPage === 1) {
        track.style.transform = 'translateX(calc(-' + index + ' * (100% + ' + gapPx + 'px)))';
      } else if (cardsPerPage === 2) {
        track.style.transform = 'translateX(calc(-' + index + ' * (50% + ' + (gapPx / 2) + 'px)))';
      } else {
        track.style.transform = 'translateX(calc(-' + index + ' * (33.3333% + ' + (gapPx / 3) + 'px)))';
      }

      const dotsContainer = container.querySelector('div.flex.justify-center');
      const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('button')) : [];
      dots.forEach((dot, dIdx) => {
        if (dIdx === index) {
          dot.className = "h-2 rounded-full transition-all duration-300 cursor-pointer w-6 bg-orange-600";
        } else {
          dot.className = "h-2 rounded-full transition-all duration-300 cursor-pointer w-2 bg-gray-300 hover:bg-gray-400";
        }
      });
    }

    function startAutoSlide() {
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = setInterval(() => {
        const cardsPerPage = getCardsPerPage();
        const maxIndex = Math.max(0, totalCards - cardsPerPage);
        const nextIdx = (currentIndex >= maxIndex) ? 0 : currentIndex + 1;
        slideTo(nextIdx);
      }, 4000);
    }

    const allButtons = Array.from(container.querySelectorAll('button'));
    const prev = allButtons.find(b => b.getAttribute('aria-label') === 'Previous' || b.innerHTML.includes('chevron-left'));
    const next = allButtons.find(b => b.getAttribute('aria-label') === 'Next' || b.innerHTML.includes('chevron-right'));

    if (prev) {
      prev.addEventListener('click', (e) => {
        e.preventDefault();
        slideTo(currentIndex - 1);
        startAutoSlide();
      });
    }

    if (next) {
      next.addEventListener('click', (e) => {
        e.preventDefault();
        slideTo(currentIndex + 1);
        startAutoSlide();
      });
    }

    const dotsContainer = container.querySelector('div.flex.justify-center');
    const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('button')) : [];
    dots.forEach((dot, dIdx) => {
      dot.addEventListener('click', () => {
        slideTo(dIdx);
        startAutoSlide();
      });
    });

    slideTo(0);
    startAutoSlide();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVolunteerCarousel);
  } else {
    initVolunteerCarousel();
  }
})();
</script>
`;

function resolveFile(rawUrl) {
  const cleanUrl = rawUrl.split('?')[0].split('#')[0];
  const decodedPath = decodeURIComponent(cleanUrl);
  const pathSegments = decodedPath.split('/').filter(Boolean);

  const mainCandidate = path.join(PUBLIC_DIR, ...pathSegments);

  if (fs.existsSync(mainCandidate) && !fs.statSync(mainCandidate).isDirectory()) {
    return mainCandidate;
  }

  if (fs.existsSync(mainCandidate + '.html')) {
    return mainCandidate + '.html';
  }

  if (fs.existsSync(path.join(mainCandidate, 'index.html'))) {
    return path.join(mainCandidate, 'index.html');
  }

  const cleanRoute = pathSegments.join('-');
  if (cleanRoute) {
    const alt = path.join(PUBLIC_DIR, cleanRoute + '.html');
    if (fs.existsSync(alt)) {
      return alt;
    }
  }

  return path.join(PUBLIC_DIR, 'index.html');
}

const requestHandler = (req, res) => {
  const filePath = resolveFile(req.url);
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      if (ext === '.html') {
        let htmlStr = content.toString('utf-8');
        htmlStr = htmlStr.replace(/<script[^>]*src="\/_next\/static\/chunks\/(?:main-app|webpack|app\/%5B%5B\.\.\.slug%5D%5D)[^"]*"[^>]*><\/script>/gi, '');
        htmlStr = htmlStr.replace(/<script>(?:self\.__next_f|window\.__NEXT_DATA__).*?<\/script>/gi, '');
        
        htmlStr = htmlStr.replace(/style="[^"]*opacity\s*:\s*0[^"]*"/gi, 'style="opacity:1"');
        htmlStr = htmlStr.replace(/style="[^"]*height\s*:\s*0px[^"]*"/gi, 'style="opacity:1;height:auto"');
        htmlStr = htmlStr.replace(/style="transform:\s*translateX\(calc\(-5[^"]*\)"/gi, 'style="transform:translateX(0px)"');

        htmlStr = htmlStr.replace('</body>', DROPDOWN_SCRIPT + HERO_SLIDER_SCRIPT + FUTURE_MISSIONS_SCRIPT + VOLUNTEER_CAROUSEL_SCRIPT + READ_MORE_NAVIGATION_SCRIPT + '</body>');

        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache'
        });
        res.end(htmlStr);
      } else {
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache'
        });
        res.end(content);
      }
    }
  });
};

if (require.main === module) {
  const server = http.createServer(requestHandler);
  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
  });
}

module.exports = requestHandler;
