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

  function init() {
    initCommitmentBox();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
