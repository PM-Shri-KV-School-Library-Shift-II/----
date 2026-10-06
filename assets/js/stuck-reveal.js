(function () {
  'use strict';

  var SEL = '.stack-reveal, .reveal, .reveal-left, .reveal-right, .reveal-scale, .blur-reveal';

  window.addEventListener('load', function () {
    setTimeout(function () {
      var els = document.querySelectorAll(SEL);
      if (!els.length) return;

      var vh = window.innerHeight || document.documentElement.clientHeight;
      for (var i = 0; i < els.length; i++) {
        if (els[i].classList.contains('visible')) continue;
        var r = els[i].getBoundingClientRect();
        // Hidden elements (inactive tabs, collapsed panels) report a zero rect;
        // only a laid-out element that is on screen counts as "stuck".
        if (r.top < vh && (r.width > 0 || r.height > 0)) {
          for (var j = 0; j < els.length; j++) els[j].classList.add('visible');
          break;
        }
      }
    }, 2500);
  });
})();
