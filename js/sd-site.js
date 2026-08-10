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

  /* Inspiration sliders: one endless row per group.
     The set of cards is cloned until it comfortably overfills the viewport,
     then the row drifts continuously and the scroll position is wrapped by one
     set-width whenever it crosses a boundary. Because the clone is identical,
     the jump is invisible and the row never has a first or last card.
     Native scrolling is left intact, so touch momentum still works. */
  var PPL_SPEED = 38; /* px per second */

  function initPeopleSliders() {
    var sliders = document.querySelectorAll('[data-sd-ppl]');

    Array.prototype.forEach.call(sliders, function (slider) {
      if (slider.dataset.sdInit === '1') return;
      slider.dataset.sdInit = '1';

      var track = slider.querySelector('.sd-ppl__track');
      var prev = slider.querySelector('.sd-ppl__nav--prev');
      var next = slider.querySelector('.sd-ppl__nav--next');
      if (!track) return;

      var originals = Array.prototype.slice.call(track.querySelectorAll('.sd-ppl__item'));
      if (!originals.length) return;

      var setWidth = 0;
      var looping = false;
      var paused = false;
      var dragging = false;
      var resumeTimer = null;
      var rafId = null;
      var lastFrame = 0;
      var carry = 0;

      var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      function gap() {
        return parseFloat(getComputedStyle(track).columnGap || '20') || 20;
      }

      function shown() {
        return originals.filter(function (it) { return !it.hasAttribute("data-sd-hidden"); });
      }

      function measureSet() {
        var g = gap();
        var w = 0;
        shown().forEach(function (item) { w += item.getBoundingClientRect().width + g; });
        return w;
      }

      function clearClones() {
        Array.prototype.forEach.call(track.querySelectorAll('[data-sd-clone]'), function (c) {
          track.removeChild(c);
        });
      }

      /* Lay out enough copies that a wrap always lands on identical content. */
      function build() {
        clearClones();
        track.scrollLeft = 0;
        setWidth = measureSet();

        var viewport = track.clientWidth;
        /* measureSet() counts a trailing gap; ignore it, otherwise a group that
           exactly fills the row would loop and visibly repeat the same faces. */
        looping = (setWidth - gap()) > viewport + 8;
        slider.classList.toggle('is-static', !looping);
        slider.classList.toggle('is-loop', looping);

        if (!looping) {
          slider.classList.remove('can-prev', 'can-next');
          return;
        }

        var needed = viewport * 2 + setWidth;
        var total = setWidth;
        while (total < needed) {
          shown().forEach(function (item) {
            var clone = item.cloneNode(true);
            clone.setAttribute('data-sd-clone', '');
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
          });
          total += setWidth;
        }

        slider.classList.add('can-prev', 'can-next');
      }

      /* Keep the offset inside [0, setWidth) — the visual result is identical. */
      function wrap() {
        if (!looping || !setWidth) return;
        if (track.scrollLeft >= setWidth) track.scrollLeft -= setWidth;
        else if (track.scrollLeft < 0) track.scrollLeft += setWidth;
      }

      function frame(now) {
        rafId = window.requestAnimationFrame(frame);
        if (!looping || paused || dragging) { lastFrame = now; return; }
        if (!lastFrame) { lastFrame = now; return; }
        var dt = Math.min(now - lastFrame, 64) / 1000;
        lastFrame = now;

        /* scrollLeft is integral in most engines, so bank the remainder */
        carry += PPL_SPEED * dt;
        var whole = Math.floor(carry);
        if (whole > 0) {
          carry -= whole;
          track.scrollLeft += whole;
          wrap();
        }
      }

      function pause() { paused = true; }
      function resume() { paused = false; lastFrame = 0; }

      function nudge(dir) {
        var item = track.querySelector('.sd-ppl__item');
        var stepPx = item ? item.getBoundingClientRect().width + gap() : track.clientWidth;
        pause();
        track.style.scrollBehavior = 'smooth';
        track.scrollLeft += dir * stepPx;
        window.setTimeout(function () {
          track.style.scrollBehavior = '';
          wrap();
          scheduleResume();
        }, 420);
      }

      function scheduleResume() {
        if (resumeTimer) window.clearTimeout(resumeTimer);
        resumeTimer = window.setTimeout(resume, 1200);
      }

      if (prev) prev.addEventListener('click', function () { nudge(-1); });
      if (next) next.addEventListener('click', function () { nudge(1); });

      /* Hovering to read should not fight the drift */
      slider.addEventListener('mouseenter', pause);
      slider.addEventListener('mouseleave', resume);
      slider.addEventListener('focusin', pause);
      slider.addEventListener('focusout', resume);

      track.addEventListener('scroll', function () { wrap(); }, { passive: true });

      /* Drag / swipe: hand the row to the user, then drift again */
      var startX = 0, startScroll = 0, moved = false;
      track.addEventListener('pointerdown', function (e) {
        dragging = true;
        moved = false;
        startX = e.clientX;
        startScroll = track.scrollLeft;
        slider.classList.add('is-dragging');
        if (e.pointerType === 'mouse') e.preventDefault();
      });
      track.addEventListener('pointermove', function (e) {
        if (!dragging) return;
        var dx = e.clientX - startX;
        if (Math.abs(dx) > 3) moved = true;
        if (e.pointerType === 'mouse') {
          track.scrollLeft = startScroll - dx;
          wrap();
        }
      });
      function endDrag() {
        if (!dragging) return;
        dragging = false;
        slider.classList.remove('is-dragging');
        scheduleResume();
      }
      track.addEventListener('pointerup', endDrag);
      track.addEventListener('pointercancel', endDrag);
      track.addEventListener('pointerleave', endDrag);
      track.addEventListener('click', function (e) {
        if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
      }, true);

      document.addEventListener('visibilitychange', function () {
        if (document.hidden) pause();
        else resume();
      });

      var resizeTimer = null;
      window.addEventListener('resize', function () {
        if (resizeTimer) window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(build, 200);
      });

      slider.sdRebuild = build;
      build();
      /* Images settle late and change the measured width, so measure again. */
      window.addEventListener('load', build);

      if (!reduceMotion) {
        rafId = window.requestAnimationFrame(frame);
      }
    });
  }

  /* Category pills above the inspirations row. Choosing one hides the cards
     from other categories and rebuilds the loop from what is left, so the
     endless row only ever cycles the selected category. */
  var PILL_ON = 'px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all bg-[#e35300] text-white shadow-md';
  var PILL_OFF = 'px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all bg-white text-slate-700 border border-slate-200 hover:bg-saffron-50';

  function initPeopleFilter() {
    var pills = document.querySelectorAll('[data-sd-filter]');
    if (!pills.length) return;

    var slider = document.querySelector('[data-sd-ppl]');
    var track = slider && slider.querySelector('.sd-ppl__track');
    var countEl = document.querySelector('[data-sd-count]');
    if (!slider || !track) return;

    function apply(cat) {
      var items = track.querySelectorAll('.sd-ppl__item:not([data-sd-clone])');
      var visible = 0;

      Array.prototype.forEach.call(items, function (item) {
        var match = cat === 'all' || item.getAttribute('data-sd-cat') === cat;
        if (match) { item.removeAttribute('data-sd-hidden'); visible++; }
        else { item.setAttribute('data-sd-hidden', ''); }
      });

      if (countEl) countEl.textContent = visible + ' प्रेरणा स्रोत';
      if (typeof slider.sdRebuild === 'function') slider.sdRebuild();
    }

    Array.prototype.forEach.call(pills, function (pill) {
      pill.addEventListener('click', function () {
        Array.prototype.forEach.call(pills, function (other) {
          var on = other === pill;
          other.className = on ? PILL_ON : PILL_OFF;
          other.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        apply(pill.getAttribute('data-sd-filter'));
      });
    });
  }

  function init() {
    initCommitmentBox();
    initMobileNav();
    initPeopleSliders();
    initPeopleFilter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
