/* Need Help · Contact Us · Raise a Complaint
   Shared behaviour for the three request portals: OTP stubs, multi-step
   forms, status lookup and FAQ accordions. Submissions are not transmitted
   anywhere yet — each form says so where the visitor can see it. */
(function () {
  'use strict';

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function setErr(input, msg) {
    var field = input.closest('.sd-mem-field') || input.closest('.sd-fx-field');
    if (!field) return;
    field.classList.toggle('has-error', !!msg);
    var slot = field.querySelector('[data-sd-err]');
    if (slot) slot.textContent = msg || '';
  }

  function validate(scope) {
    var firstBad = null;
    Array.prototype.forEach.call(scope.querySelectorAll('[data-sd-req]'), function (input) {
      var v = (input.value || '').trim();
      var msg = v ? '' : 'यह जानकारी आवश्यक है / Required';
      if (!msg && input.type === 'tel' && !/^[0-9+\-\s]{10,15}$/.test(v)) msg = 'सही मोबाइल नंबर दर्ज करें';
      if (!msg && input.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) msg = 'सही ईमेल दर्ज करें';
      setErr(input, msg);
      if (msg && !firstBad) firstBad = input;
    });
    /* optional email still has to be well formed when filled */
    Array.prototype.forEach.call(scope.querySelectorAll('input[type="email"]:not([data-sd-req])'), function (input) {
      if (!input.value.trim()) { setErr(input, ''); return; }
      var ok = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(input.value.trim());
      setErr(input, ok ? '' : 'सही ईमेल दर्ज करें');
      if (!ok && !firstBad) firstBad = input;
    });
    if (firstBad) { firstBad.focus(); return false; }
    return true;
  }

  /* ---------- OTP stub: proves the flow without a gateway behind it ---------- */
  function wireOtp(root) {
    Array.prototype.forEach.call(root.querySelectorAll('[data-sd-otp]'), function (btn) {
      btn.addEventListener('click', function () {
        var targetSel = btn.getAttribute('data-sd-otp');
        var input = root.querySelector(targetSel);
        var box = btn.closest('.sd-fx-otp');
        if (!input) return;
        var v = input.value.trim();
        if (input.type === 'tel' ? !/^[0-9+\-\s]{10,15}$/.test(v) : !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) {
          setErr(input, input.type === 'tel' ? 'पहले सही मोबाइल नंबर दर्ज करें' : 'पहले सही ईमेल दर्ज करें');
          input.focus();
          return;
        }
        setErr(input, '');
        var note = box.querySelector('[data-sd-otpnote]');
        if (note) {
          note.hidden = false;
          note.textContent = 'OTP सेवा अभी सक्रिय नहीं है — सत्यापन चालू होने पर यहाँ कोड भेजा जाएगा।';
        }
        btn.disabled = true;
        btn.textContent = 'OTP Sent';
        window.setTimeout(function () { btn.disabled = false; btn.textContent = 'Send OTP'; }, 4000);
      });
    });
  }

  /* ---------- status lookup shared by Need Help and Complaint ---------- */
  function wireTracker(root) {
    var form = root.querySelector('[data-sd-track]');
    if (!form) return;
    var out = form.querySelector('[data-sd-trackout]');
    form.querySelector('[data-sd-trackgo]').addEventListener('click', function () {
      var id = form.querySelector('[data-sd-trackid]');
      var mob = form.querySelector('[data-sd-trackmobile]');
      var hasId = id && id.value.trim();
      var hasMob = mob && mob.value.trim();
      if (!hasId && !hasMob) {
        out.hidden = false;
        out.className = 'sd-fx-trackout is-warn';
        out.textContent = 'कृपया Request/Complaint ID अथवा पंजीकृत मोबाइल नंबर दर्ज करें।';
        return;
      }
      out.hidden = false;
      out.className = 'sd-fx-trackout';
      out.innerHTML = '<strong>ट्रैकिंग सेवा शीघ्र सक्रिय होगी।</strong>' +
        '<span>आपका अनुरोध ' + esc(hasId ? id.value.trim() : mob.value.trim()) +
        ' दर्ज है। स्थिति देखने की सुविधा जुड़ते ही यहाँ लाइव दिखाई देगी। तब तक हेल्पलाइन पर संपर्क करें।</span>';
    });
  }

  /* ---------- FAQ accordion ---------- */
  function wireFaq(root) {
    Array.prototype.forEach.call(root.querySelectorAll('[data-sd-faq]'), function (item) {
      var btn = item.querySelector('.sd-fx-faq-q');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var open = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  }

  /* ---------- generic multi-step submit ---------- */
  function wireSteps(root) {
    var form = root.querySelector('[data-sd-steps]');
    if (!form) return;
    var panes = form.querySelectorAll('[data-sd-pane]');
    var dots = root.querySelectorAll('[data-sd-fxdot]');
    var current = 1;
    var mounted = false;

    function show(n) {
      current = n;
      Array.prototype.forEach.call(panes, function (p) {
        p.hidden = p.getAttribute('data-sd-pane') !== String(n);
      });
      Array.prototype.forEach.call(dots, function (d) {
        var i = Number(d.getAttribute('data-sd-fxdot'));
        d.classList.toggle('is-active', i === n);
        d.classList.toggle('is-done', i < n);
      });
      /* the first paint must not drag the visitor past the page intro */
      if (mounted) form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      mounted = true;
    }

    form.addEventListener('click', function (e) {
      var next = e.target.closest('[data-sd-next]');
      if (next) {
        var pane = form.querySelector('[data-sd-pane="' + current + '"]');
        if (!validate(pane)) return;
        show(Number(next.getAttribute('data-sd-next')));
        return;
      }
      var back = e.target.closest('[data-sd-prev]');
      if (back) { show(Number(back.getAttribute('data-sd-prev'))); return; }

      var submit = e.target.closest('[data-sd-submit]');
      if (submit) {
        var pane2 = form.querySelector('[data-sd-pane="' + current + '"]');
        if (!validate(pane2)) return;
        var missing = null;
        Array.prototype.forEach.call(pane2.querySelectorAll('[data-sd-mustcheck]'), function (cb) {
          if (!cb.checked && !missing) missing = cb;
        });
        var err = form.querySelector('[data-sd-formerr]');
        if (missing) {
          if (err) err.textContent = 'कृपया सभी आवश्यक घोषणाएँ स्वीकार करें।';
          missing.focus();
          return;
        }
        if (err) err.textContent = '';

        var prefix = form.getAttribute('data-sd-idprefix') || 'SDMKF';
        var ref = prefix + '-' + (new Date()).getFullYear() + '-' + Math.floor(Math.random() * 90000 + 10000);
        var done = root.querySelector('[data-sd-done]');
        if (done) {
          form.hidden = true;
          done.hidden = false;
          var slot = done.querySelector('[data-sd-ref]');
          if (slot) slot.textContent = ref;
          done.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });

    show(1);
  }

  function init() {
    var root = document.querySelector('[data-sd-fx]');
    if (!root || root.dataset.sdInit === '1') return;
    root.dataset.sdInit = '1';
    wireOtp(root);
    wireSteps(root);
    wireTracker(root);
    wireFaq(root);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
