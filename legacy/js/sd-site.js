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

  /* Donate page — Scan & Pay tabs, QR sub-tabs and copy-to-clipboard. */
  function initPayPanel() {
    var root = document.querySelector('[data-sd-pay]');
    if (!root || root.dataset.sdInit === '1') return;
    root.dataset.sdInit = '1';

    function switchGroup(buttons, panels, key, attr) {
      Array.prototype.forEach.call(buttons, function (b) {
        var on = b.getAttribute(attr) === key;
        b.classList.toggle('is-active', on);
        if (b.hasAttribute('role')) b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      Array.prototype.forEach.call(panels, function (p) {
        p.classList.toggle('is-active', p.getAttribute(p.hasAttribute('data-sd-panel') ? 'data-sd-panel' : 'data-sd-qrpane') === key);
      });
    }

    var tabs = root.querySelectorAll('[data-sd-tab]');
    var panels = root.querySelectorAll('[data-sd-panel]');
    Array.prototype.forEach.call(tabs, function (tab) {
      tab.addEventListener('click', function () {
        switchGroup(tabs, panels, tab.getAttribute('data-sd-tab'), 'data-sd-tab');
      });
    });

    var subs = root.querySelectorAll('[data-sd-qr]');
    var panes = root.querySelectorAll('[data-sd-qrpane]');
    Array.prototype.forEach.call(subs, function (sub) {
      sub.addEventListener('click', function () {
        switchGroup(subs, panes, sub.getAttribute('data-sd-qr'), 'data-sd-qr');
      });
    });

    Array.prototype.forEach.call(root.querySelectorAll('[data-sd-copy]'), function (btn) {
      btn.addEventListener('click', function () {
        var text = btn.getAttribute('data-sd-copy');
        function done() {
          btn.classList.add('is-copied');
          window.setTimeout(function () { btn.classList.remove('is-copied'); }, 1400);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, function () {});
        } else {
          var ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'absolute';
          ta.style.left = '-9999px';
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); done(); } catch (e) {}
          document.body.removeChild(ta);
        }
      });
    });
  }

  /* Payment Confirmation — three steps: details, payment, proof + 80G. */
  function initPaymentForm() {
    var form = document.querySelector('[data-sd-pcf]');
    if (!form || form.dataset.sdInit === '1') return;
    form.dataset.sdInit = '1';

    var panes = form.querySelectorAll('[data-sd-step]');
    var dots = form.querySelectorAll('[data-sd-dot]');
    var backBtn = form.querySelector('[data-sd-back]');
    var nextBtn = form.querySelector('[data-sd-next]');
    var submitBtn = form.querySelector('[data-sd-submit]');
    var formErr = form.querySelector('[data-sd-formerr]');
    var claim80g = form.querySelector('[data-sd-80g]');
    var fields80g = form.querySelector('[data-sd-80gfields]');
    var fileInput = form.querySelector('[data-sd-file]');
    var fileName = form.querySelector('[data-sd-filename]');
    var decl = form.querySelector('[data-sd-decl]');
    var done = form.querySelector('[data-sd-done]');
    var steps = form.querySelector('.sd-pcf-steps');
    var total = panes.length;
    var current = 1;

    function setError(input, message) {
      var field = input.closest('.sd-pcf-field');
      if (!field) return;
      field.classList.toggle('has-error', !!message);
      var slot = field.querySelector('[data-sd-err]');
      if (slot) slot.textContent = message || '';
    }

    function validate(input) {
      var value = (input.value || '').trim();
      if (!value) return 'यह जानकारी आवश्यक है / This field is required';
      if (input.type === 'tel' && !/^[0-9+\-\s]{10,15}$/.test(value)) return 'Enter a valid mobile number';
      if (input.type === 'email' && value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) return 'Enter a valid email address';
      if (input.type === 'number' && (isNaN(Number(value)) || Number(value) <= 0)) return 'Enter a valid amount';
      return '';
    }

    function checkStep(step) {
      var pane = form.querySelector('[data-sd-step="' + step + '"]');
      var inputs = pane.querySelectorAll('[data-sd-req]');
      var firstBad = null;

      Array.prototype.forEach.call(inputs, function (input) {
        var msg = validate(input);
        setError(input, msg);
        if (msg && !firstBad) firstBad = input;
      });

      /* the optional email still has to be well formed if filled in */
      var email = pane.querySelector('input[type="email"]');
      if (email && email.value.trim()) {
        var emsg = validate(email);
        setError(email, emsg);
        if (emsg && !firstBad) firstBad = email;
      }

      if (firstBad) { firstBad.focus(); return false; }
      return true;
    }

    function show(step) {
      current = step;
      Array.prototype.forEach.call(panes, function (p) {
        p.classList.toggle('is-active', p.getAttribute('data-sd-step') === String(step));
      });
      Array.prototype.forEach.call(dots, function (d) {
        var n = Number(d.getAttribute('data-sd-dot'));
        d.classList.toggle('is-active', n === step);
        d.classList.toggle('is-done', n < step);
      });
      backBtn.hidden = step === 1;
      nextBtn.hidden = step === total;
      submitBtn.hidden = step !== total;
      if (formErr) { formErr.textContent = ''; formErr.classList.remove('is-shown'); }
    }

    nextBtn.addEventListener('click', function () {
      if (!checkStep(current)) return;
      if (current < total) show(current + 1);
    });

    backBtn.addEventListener('click', function () {
      if (current > 1) show(current - 1);
    });

    if (claim80g && fields80g) {
      claim80g.addEventListener('change', function () {
        fields80g.hidden = !claim80g.checked;
      });
    }

    if (fileInput && fileName) {
      fileInput.addEventListener('change', function () {
        var f = fileInput.files && fileInput.files[0];
        fileName.textContent = f ? f.name : 'Click to upload screenshot (PNG / JPG / PDF)';
      });
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!checkStep(current)) return;

      if (claim80g && claim80g.checked) {
        var missing = null;
        Array.prototype.forEach.call(fields80g.querySelectorAll('input'), function (input) {
          var msg = input.value.trim() ? '' : 'यह जानकारी आवश्यक है / This field is required';
          setError(input, msg);
          if (msg && !missing) missing = input;
        });
        if (missing) { missing.focus(); return; }
      }

      if (decl && !decl.checked) {
        if (formErr) {
          formErr.textContent = 'कृपया घोषणा स्वीकार करें / Please accept the declaration';
          formErr.classList.add('is-shown');
        }
        decl.focus();
        return;
      }

      Array.prototype.forEach.call(panes, function (p) { p.classList.remove('is-active'); });
      if (steps) steps.hidden = true;
      form.querySelector('.sd-pcf-actions').hidden = true;
      if (done) done.hidden = false;
      done.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    show(1);
  }

  /* Our Missions — View All reveals the rest of the campaigns in place. */
  function initMissionsToggle() {
    var btn = document.querySelector('[data-sd-missions-toggle]');
    if (!btn || btn.dataset.sdInit === '1') return;
    btn.dataset.sdInit = '1';

    var extra = document.querySelectorAll('.sd-mis-more');
    if (!extra.length) return;

    var label = btn.querySelector('span');
    var open = false;

    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function () {
      open = !open;
      Array.prototype.forEach.call(extra, function (card) { card.hidden = !open; });
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (label) label.textContent = open ? 'Show Less' : 'View All';
      if (!open) btn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* Donation Hub — amount -> donor details -> payment -> receipt.
     No Razorpay key is connected yet, so the payment step completes the flow
     without charging anything; the notice on that step says so plainly. */
  function initDonateFlow() {
    var form = document.querySelector('[data-sd-donate]');
    if (!form || form.dataset.sdInit === '1') return;
    form.dataset.sdInit = '1';

    var steps = form.querySelectorAll('[data-sd-dstep]');
    var amountBtns = form.querySelectorAll('[data-sd-amount]');
    var typeBtns = form.querySelectorAll('[data-sd-ctype]');
    var customBtn = form.querySelector('[data-sd-custom]');
    var customWrap = form.querySelector('[data-sd-customwrap]');
    var customInput = form.querySelector('[data-sd-customamt]');
    var customErr = form.querySelector('[data-sd-customerr]');
    var currentEl = form.querySelector('[data-sd-current]');
    var claim80g = form.querySelector('[data-sd-d80g]');
    var panWrap = form.querySelector('[data-sd-panwrap]');
    var formErr = form.querySelector('[data-sd-dformerr]');

    var state = { amount: 501, type: 'Monthly', txn: '' };

    var ON = 'px-2 py-3 text-center transition-all bg-[#FF6F00] text-white border-[#FF6F00] shadow-[0_6px_18px_-6px_rgba(255,111,0,0.55)]';
    var OFF = 'px-2 py-3 text-center transition-all bg-white border-[#0D1B2A]/10 text-[#0D1B2A] hover:border-[#FF6F00]/40';

    function fmt(n) { return '₹' + Number(n).toLocaleString('en-IN'); }

    function paintAmounts(active) {
      Array.prototype.forEach.call(amountBtns, function (b) {
        var on = Number(b.getAttribute('data-sd-amount')) === Number(active);
        b.className = 'relative rounded-xl border ' + (on ? ON : OFF) + (on ? ' is-amt-on' : ' is-amt-off');
        /* the sub-label carries its own colour, so it has to follow the state
           or it ends up white-on-white when the card is deselected */
        var sub = b.querySelector('div:last-of-type');
        if (sub && !sub.classList.contains('font-bold')) {
          sub.className = 'text-[10px] mt-0.5 leading-tight ' + (on ? 'text-white/90' : 'text-[#0D1B2A]/60');
        }
      });
    }

    function setAmount(v) {
      state.amount = Number(v) || 0;
      if (currentEl) currentEl.textContent = fmt(state.amount);
      var echo = form.querySelector('[data-sd-amtecho]');
      if (echo) echo.textContent = fmt(state.amount);
    }

    Array.prototype.forEach.call(amountBtns, function (b) {
      b.addEventListener('click', function () {
        if (customWrap) customWrap.hidden = true;
        if (customErr) customErr.textContent = '';
        paintAmounts(b.getAttribute('data-sd-amount'));
        setAmount(b.getAttribute('data-sd-amount'));
      });
    });

    Array.prototype.forEach.call(typeBtns, function (b) {
      b.addEventListener('click', function () {
        state.type = b.getAttribute('data-sd-ctype');
        Array.prototype.forEach.call(typeBtns, function (o) {
          var on = o === b;
          o.className = 'px-4 py-2 rounded-full text-[12.5px] font-semibold border transition-all ' +
            (on ? 'bg-[#FF6F00] text-white border-[#FF6F00] shadow-[0_6px_18px_-6px_rgba(255,111,0,0.55)]'
                : 'bg-white text-[#0D1B2A] border-[#0D1B2A]/15 hover:border-[#FF6F00]/40');
        });
      });
    });

    if (customBtn && customWrap && customInput) {
      customBtn.addEventListener('click', function () {
        customWrap.hidden = false;
        paintAmounts(null);
        customInput.focus();
      });
      customInput.addEventListener('input', function () {
        var v = Number(customInput.value);
        if (customErr) customErr.textContent = '';
        if (v > 0) setAmount(v);
      });
    }

    function show(n) {
      Array.prototype.forEach.call(steps, function (s) {
        s.hidden = s.getAttribute('data-sd-dstep') !== String(n);
      });
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function setErr(input, msg) {
      var field = input.closest('.sd-pcf-field');
      if (!field) return;
      field.classList.toggle('has-error', !!msg);
      var slot = field.querySelector('[data-sd-err]');
      if (slot) slot.textContent = msg || '';
    }

    /* step 1 -> 2 */
    var proceed = form.querySelector('[data-sd-proceed]');
    if (proceed) {
      proceed.addEventListener('click', function () {
        if (!(state.amount > 0)) {
          if (customErr) customErr.textContent = 'कृपया राशि दर्ज करें / Please enter an amount';
          if (customInput) customInput.focus();
          return;
        }
        show(2);
      });
    }

    /* back links */
    Array.prototype.forEach.call(form.querySelectorAll('[data-sd-dback]'), function (b) {
      b.addEventListener('click', function () { show(Number(b.getAttribute('data-sd-dback'))); });
    });

    if (claim80g && panWrap) {
      claim80g.addEventListener('change', function () { panWrap.hidden = !claim80g.checked; });
    }

    /* step 2 -> 3 */
    var toPay = form.querySelector('[data-sd-dnext]');
    if (toPay) {
      toPay.addEventListener('click', function () {
        var firstBad = null;
        Array.prototype.forEach.call(form.querySelectorAll('[data-sd-dreq]'), function (input) {
          var v = (input.value || '').trim();
          var msg = v ? '' : 'यह जानकारी आवश्यक है / This field is required';
          if (!msg && input.type === 'tel' && !/^[0-9+\-\s]{10,15}$/.test(v)) msg = 'Enter a valid mobile number';
          setErr(input, msg);
          if (msg && !firstBad) firstBad = input;
        });
        var email = form.querySelector('#dn-email');
        if (email && email.value.trim() && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
          setErr(email, 'Enter a valid email address');
          if (!firstBad) firstBad = email;
        }
        var pan = form.querySelector('#dn-pan');
        if (claim80g && claim80g.checked && pan) {
          var pmsg = pan.value.trim() ? '' : 'PAN is required for the 80G benefit';
          setErr(pan, pmsg);
          if (pmsg && !firstBad) firstBad = pan;
        }
        if (firstBad) { firstBad.focus(); return; }

        var decl = form.querySelector('[data-sd-ddecl]');
        if (decl && !decl.checked) {
          if (formErr) { formErr.textContent = 'कृपया पुष्टि करें / Please confirm the declaration'; formErr.classList.add('is-shown'); }
          decl.focus();
          return;
        }
        if (formErr) { formErr.textContent = ''; formErr.classList.remove('is-shown'); }

        var name = form.querySelector('#dn-name').value.trim();
        var purpose = form.querySelector('#dn-purpose').value;
        var set = function (sel, val) { var el = form.querySelector(sel); if (el) el.textContent = val; };
        set('[data-sd-sumname]', name);
        set('[data-sd-sumpurpose]', purpose);
        set('[data-sd-sumamount]', fmt(state.amount) + ' · ' + state.type);
        show(3);
      });
    }

    /* step 3 -> 4 */
    var payBtn = form.querySelector('[data-sd-dpay]');
    if (payBtn) {
      payBtn.addEventListener('click', function () {
        payBtn.disabled = true;
        payBtn.querySelector('span').textContent = 'Processing…';
        window.setTimeout(function () {
          state.txn = 'SDMKF' + Date.now().toString().slice(-8);
          var name = form.querySelector('#dn-name').value.trim();
          var purpose = form.querySelector('#dn-purpose').value;
          var set = function (sel, val) { var el = form.querySelector(sel); if (el) el.textContent = val; };
          set('[data-sd-txn]', state.txn);
          set('[data-sd-rcptamount]', fmt(state.amount) + ' · ' + state.type);
          set('[data-sd-rcptname]', name);
          set('[data-sd-rcptpurpose]', purpose);
          var row = form.querySelector('[data-sd-rcpt80grow]');
          if (row && claim80g && claim80g.checked) {
            row.hidden = false;
            set('[data-sd-rcpt80g]', 'Yes — PAN ' + (form.querySelector('#dn-pan').value.trim() || '—'));
          }
          payBtn.disabled = false;
          payBtn.querySelector('span').textContent = 'Pay Now';
          show(4);
        }, 900);
      });
    }

    /* receipt download — built in the browser, no server needed */
    var dl = form.querySelector('[data-sd-download]');
    if (dl) {
      dl.addEventListener('click', function () {
        var name = form.querySelector('#dn-name').value.trim();
        var lines = [
          'SANATAN DHARM MANAV KALYAN FOUNDATION',
          'Donation Acknowledgement',
          '',
          'Transaction ID : ' + state.txn,
          'Donor          : ' + name,
          'Mobile         : ' + form.querySelector('#dn-mobile').value.trim(),
          'Amount         : ' + fmt(state.amount) + ' (' + state.type + ')',
          'Purpose        : ' + form.querySelector('#dn-purpose').value,
          'City / State   : ' + form.querySelector('#dn-city').value.trim() + ', ' + form.querySelector('#dn-state').value.trim(),
          '80G Claim      : ' + (claim80g && claim80g.checked ? 'Yes (PAN ' + form.querySelector('#dn-pan').value.trim() + ')' : 'No'),
          '80G Reg. No.   : ABTCS1749KF20261',
          '',
          'This acknowledgement is generated from the website. The stamped 80G',
          'receipt is issued by the foundation after verification.'
        ].join('\n');
        var blob = new Blob([lines], { type: 'text/plain;charset=utf-8' });
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'donation-' + state.txn + '.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(a.href);
      });
    }

    var share = form.querySelector('[data-sd-share]');
    if (share) {
      share.addEventListener('click', function () {
        var text = 'मैंने सनातन धर्म मानव कल्याण फाउंडेशन के सेवा कार्यों में सहयोग किया है।';
        if (navigator.share) {
          navigator.share({ title: 'Sanatan Dharm Manav Kalyan Foundation', text: text, url: window.location.origin }).catch(function () {});
        } else if (navigator.clipboard) {
          navigator.clipboard.writeText(text + ' ' + window.location.origin).then(function () {
            share.querySelector('span').textContent = 'Link Copied';
            window.setTimeout(function () { share.querySelector('span').textContent = 'Share'; }, 1600);
          }, function () {});
        }
      });
    }

    setAmount(state.amount);
  }

  function init() {
    initCommitmentBox();
    initMobileNav();
    initPeopleSliders();
    initPeopleFilter();
    initPayPanel();
    initPaymentForm();
    initMissionsToggle();
    initDonateFlow();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
