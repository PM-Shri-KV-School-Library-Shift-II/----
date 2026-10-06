(function () {
  'use strict';

  var modal = document.getElementById('devModal');
  if (!modal) return;

  var lastFocused = null;

  function getFocusable() {
    return Array.prototype.slice.call(
      modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')
    ).filter(function (el) { return !el.disabled && el.offsetParent !== null; });
  }

  function openDevModal() {
    lastFocused = document.activeElement;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    var focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
    document.addEventListener('keydown', onKeydown, true);
  }

  function closeDevModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.removeEventListener('keydown', onKeydown, true);
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  function onKeydown(e) {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeDevModal();
      return;
    }
    if (e.key === 'Tab') {
      var focusable = getFocusable();
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeDevModal();
  });

  Array.prototype.forEach.call(modal.querySelectorAll('[data-modal-close]'), function (btn) {
    btn.addEventListener('click', closeDevModal);
  });

  window.openDevModal = openDevModal;
  window.closeDevModal = closeDevModal;
})();
