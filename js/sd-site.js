/* Site behaviour — Sanatan Dharm Manav Kalyan Foundation */
(function () {
  'use strict';

  /* Long-Term Commitment box: Know More opens the panel, the cross closes it. */
  function initCommitmentBox() {
    var boxes = document.querySelectorAll('.sd-commitment-box');

    Array.prototype.forEach.call(boxes, function (box) {
      if (box.dataset.sdInit === '1') return;
      box.dataset.sdInit = '1';

      var toggle = box.querySelector('.sd-commitment-toggle');
      var closeBtn = box.querySelector('.sd-commitment-close');
      var panel = box.querySelector('.sd-commitment-panel');
      if (!toggle || !panel) return;

      var label = toggle.querySelector('[data-sd-label]');
      var caret = toggle.querySelector('[data-sd-caret]');

      function setOpen(open) {
        if (open) box.classList.add('is-open');
        else box.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (label) label.textContent = open ? 'Show Less' : 'Know More';
        if (caret) caret.textContent = open ? '▲' : '▼';
      }

      toggle.addEventListener('click', function () {
        setOpen(!box.classList.contains('is-open'));
      });

      if (closeBtn) {
        closeBtn.addEventListener('click', function () {
          setOpen(false);
          box.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && box.classList.contains('is-open')) setOpen(false);
      });

      setOpen(false);
    });
  }

  /* Mobile navigation drawer.
     The header's hamburger is inert on its own — the React bundle that used to
     wire it up is stripped before the page is served — so build the panel here. */
  var MOBILE_NAV = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Activities', items: [
      { label: 'Current Activities', href: '/activities' },
      { label: 'Future Missions', href: '/future-activities' },
      { label: 'Festival Calendar', href: '/festival-calendar' }
    ] },
    { label: 'Donation', items: [
      { label: 'Donate Now', href: '/donate' },
      { label: 'Start Fundraiser', href: '/start-fundraiser' },
      { label: 'View Fundraisers', href: '/view-fundraisers' }
    ] },
    { label: 'Join Us', href: '/membership' },
    { label: 'Media', items: [
      { label: 'News & Events', href: '/media/news-and-events' },
      { label: 'Photo Gallery', href: '/media/photo-gallery' },
      { label: 'Video Gallery', href: '/media/video-gallery' }
    ] },
    { label: 'Portal', items: [
      { label: 'Portal Sign In', href: '/portal/login' },
      { label: 'My Profile', href: '/portal/profile' },
      { label: 'Verification Center', href: '/portal/verification' },
      { label: 'Announcements', href: '/portal/announcements' }
    ] },
    { label: 'Partners', items: [
      { label: 'Become a CSR Partner', href: '/csr-partner' },
      { label: 'Become a Seva Partner', href: '/seva-partner' }
    ] },
    { label: 'More', items: [
      { label: 'Need Help', href: '/need-help' },
      { label: 'Raise a Complaint', href: '/raise-complaint' },
      { label: 'FAQ', href: '/about#faq' },
      { label: 'Community Voices', href: '/about#voices' },
      { label: 'Legal Documents', href: '/legal-documents' },
      { label: 'Contact Us', href: '/contact' }
    ] }
  ];

  var CARET = '<svg class="sd-mnav__caret" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg>';

  function initMobileNav() {
    var trigger = document.querySelector('header button[aria-label="Open Menu"]');
    if (!trigger || trigger.dataset.sdInit === '1') return;
    trigger.dataset.sdInit = '1';

    var here = window.location.pathname.replace(/\/$/, '') || '/';

    var root = document.createElement('div');
    root.className = 'sd-mnav';
    root.id = 'sd-mobile-nav';

    var html = '<div class="sd-mnav__backdrop" data-sd-close></div>' +
      '<div class="sd-mnav__panel" role="dialog" aria-modal="true" aria-label="Site menu">' +
      '<div class="sd-mnav__top"><p class="sd-mnav__title">Menu</p>' +
      '<button type="button" class="sd-mnav__close" aria-label="Close menu" data-sd-close>&times;</button></div>' +
      '<nav class="sd-mnav__list">';

    MOBILE_NAV.forEach(function (entry, i) {
      if (entry.items) {
        html += '<div class="sd-mnav__group" data-sd-group>' +
          '<button type="button" class="sd-mnav__toggle" aria-expanded="false" aria-controls="sd-mnav-sub-' + i + '">' +
          '<span>' + entry.label + '</span>' + CARET + '</button>' +
          '<div class="sd-mnav__sub" id="sd-mnav-sub-' + i + '"><div class="sd-mnav__subinner">';
        entry.items.forEach(function (item) {
          html += '<a class="sd-mnav__sublink" href="' + item.href + '">' + item.label + '</a>';
        });
        html += '</div></div></div>';
      } else {
        var current = here === entry.href.replace(/\/$/, '');
        html += '<a class="sd-mnav__link" href="' + entry.href + '"' +
          (current ? ' aria-current="page" style="color:#FF6F00"' : '') + '>' +
          '<span>' + entry.label + '</span></a>';
      }
    });

    html += '</nav><div class="sd-mnav__foot">' +
      '<a class="sd-btn sd-btn--donate-now" href="/donate">Donate Now</a>' +
      '<a class="sd-btn sd-btn--join-mission" href="/membership">Join Us</a>' +
      '</div></div>';

    root.innerHTML = html;
    document.body.appendChild(root);

    function setOpen(open) {
      root.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('sd-mnav-open', open);
      if (open) {
        var close = root.querySelector('.sd-mnav__close');
        if (close) close.focus();
      } else {
        trigger.focus();
      }
    }

    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', 'sd-mobile-nav');
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      setOpen(!root.classList.contains('is-open'));
    });

    Array.prototype.forEach.call(root.querySelectorAll('[data-sd-close]'), function (el) {
      el.addEventListener('click', function () { setOpen(false); });
    });

    /* Accordions: one section open at a time keeps the list short. */
    Array.prototype.forEach.call(root.querySelectorAll('[data-sd-group]'), function (group) {
      var toggle = group.querySelector('.sd-mnav__toggle');
      toggle.addEventListener('click', function () {
        var willOpen = !group.classList.contains('is-open');
        Array.prototype.forEach.call(root.querySelectorAll('[data-sd-group]'), function (other) {
          other.classList.remove('is-open');
          var t = other.querySelector('.sd-mnav__toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
        group.classList.toggle('is-open', willOpen);
        toggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      });
    });

    /* Following a link should leave the drawer closed behind it. */
    Array.prototype.forEach.call(root.querySelectorAll('a[href]'), function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('is-open')) setOpen(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024 && root.classList.contains('is-open')) setOpen(false);
    });
  }

  /* Inspiration sliders: one row per group, arrows scroll by a whole card.
     The scrolling itself is native scroll-snap, so touch and trackpad already
     feel right without JS; this only adds the buttons and their state. */
  function initPeopleSliders() {
    var sliders = document.querySelectorAll('[data-sd-ppl]');

    Array.prototype.forEach.call(sliders, function (slider) {
      if (slider.dataset.sdInit === '1') return;
      slider.dataset.sdInit = '1';

      var track = slider.querySelector('.sd-ppl__track');
      var prev = slider.querySelector('.sd-ppl__nav--prev');
      var next = slider.querySelector('.sd-ppl__nav--next');
      if (!track) return;

      function step() {
        var item = track.querySelector('.sd-ppl__item');
        if (!item) return track.clientWidth;
        var gap = parseFloat(getComputedStyle(track).columnGap || '20') || 20;
        return item.getBoundingClientRect().width + gap;
      }

      function sync() {
        var slack = track.scrollWidth - track.clientWidth;
        var isStatic = slack < 8;
        slider.classList.toggle('is-static', isStatic);
        if (isStatic) {
          slider.classList.remove('can-prev', 'can-next');
          return;
        }
        var x = track.scrollLeft;
        slider.classList.toggle('can-prev', x > 4);
        slider.classList.toggle('can-next', x < slack - 4);
        if (prev) prev.disabled = x <= 4;
        if (next) next.disabled = x >= slack - 4;
      }

      if (prev) prev.addEventListener('click', function () { track.scrollBy({ left: -step(), behavior: 'smooth' }); });
      if (next) next.addEventListener('click', function () { track.scrollBy({ left: step(), behavior: 'smooth' }); });

      var ticking = false;
      track.addEventListener('scroll', function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () { sync(); ticking = false; });
      }, { passive: true });

      window.addEventListener('resize', sync);

      /* Pointer drag, for mouse users who expect to be able to throw the row */
      var down = false, startX = 0, startScroll = 0, moved = false;
      track.addEventListener('pointerdown', function (e) {
        if (e.pointerType !== 'mouse') return;
        down = true; moved = false;
        startX = e.clientX;
        startScroll = track.scrollLeft;
        track.style.scrollBehavior = 'auto';
      });
      track.addEventListener('pointermove', function (e) {
        if (!down) return;
        var dx = e.clientX - startX;
        if (Math.abs(dx) > 3) moved = true;
        track.scrollLeft = startScroll - dx;
      });
      function endDrag() {
        if (!down) return;
        down = false;
        track.style.scrollBehavior = '';
      }
      track.addEventListener('pointerup', endDrag);
      track.addEventListener('pointercancel', endDrag);
      track.addEventListener('pointerleave', endDrag);
      track.addEventListener('click', function (e) {
        if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
      }, true);

      sync();
      /* Images settle late and change scrollWidth, so re-check once loaded. */
      window.addEventListener('load', sync);
    });
  }

  function init() {
    initCommitmentBox();
    initMobileNav();
    initPeopleSliders();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
