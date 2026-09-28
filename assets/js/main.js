(function () {
  'use strict';

  // ─── Performance Mode Detection ───
  (function () {
    var isLowEnd = /Android 4\.|Android 5\.|iPhone OS 9|iPhone OS 10/i.test(navigator.userAgent);
    var hasLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
    var prefersReduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    var isMobile = 'ontouchstart' in window;
    var noBackdrop = !(window.CSS && CSS.supports && CSS.supports('backdrop-filter', 'blur(10px)'));

    if (isLowEnd || hasLowMemory || prefersReduced || (isMobile && noBackdrop)) {
      document.documentElement.classList.add('performance-mode');
    }

    if (prefersReduced || isLowEnd) {
      document.documentElement.classList.add('reduced-animation');
    }
  })();

  // ─── Navbar scroll effect ───
  var navbar = document.querySelector('.navbar');
  var navLinksContainer = document.querySelector('.nav-links');
  var hamburger = document.querySelector('.hamburger');
  var scrollContainer = document.querySelector('.scroll-container') || window;

  function getScrollTop() {
    return scrollContainer === window ? window.scrollY : scrollContainer.scrollTop;
  }

  function scrollToTop(top) {
    if (scrollContainer === window) {
      window.scrollTo({ top: top, behavior: 'smooth' });
    } else {
      scrollContainer.scrollTo({ top: top, behavior: 'smooth' });
    }
  }

  if (navbar) {
    var lastScrollTop = 0;
    var onScroll = function () {
      var st = getScrollTop();
      navbar.classList.toggle('scrolled', st > 20);
      if (st > 50) {
        if (st > lastScrollTop) {
          navbar.classList.add('nav-hidden');
        } else {
          navbar.classList.remove('nav-hidden');
        }
      } else {
        navbar.classList.remove('nav-hidden');
      }
      lastScrollTop = st;
    };
    (scrollContainer === window ? window : scrollContainer).addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ─── Mobile hamburger with scroll lock ───
  if (hamburger && navLinksContainer) {
    hamburger.addEventListener('click', function () {
      var isOpen = navLinksContainer.classList.toggle('open');
      document.body.classList.toggle('menu-open', isOpen);
      if (scrollContainer !== window) {
        scrollContainer.style.overflow = isOpen ? 'hidden' : '';
      }
    });

    function closeMenu() {
      navLinksContainer.classList.remove('open');
      document.body.classList.remove('menu-open');
      if (scrollContainer !== window) {
        scrollContainer.style.overflow = '';
      }
    }

    navLinksContainer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        setTimeout(closeMenu, 300);
      });
    });

    document.addEventListener('click', function (e) {
      if (!navLinksContainer.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
      }
    });
  }

  // ─── Active nav link on scroll ───
  (function () {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a');
    if (!sections.length || !navLinks.length) return;

    var observerOpts = { threshold: 0.3, rootMargin: '0px 0px -100px 0px' };
    if (scrollContainer !== window) {
      observerOpts.root = scrollContainer;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            var href = link.getAttribute('href');
            if (href && href.substring(1) === entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOpts);

    sections.forEach(function (s) { observer.observe(s); });
  })();

  // ─── Scroll-Reveal: IntersectionObserver ───
  (function () {
    if (!window.IntersectionObserver) {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .blur-reveal, .stack-reveal')
        .forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    var revealClasses = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .blur-reveal, .stack-reveal';

    if (document.documentElement.classList.contains('performance-mode') ||
        document.documentElement.classList.contains('reduced-animation')) {
      document.querySelectorAll(revealClasses).forEach(function (el) {
        if (el.classList.contains('blur-reveal')) {
          el.style.filter = 'none';
          el.style.opacity = '1';
        }
        el.classList.add('visible');
      });
      return;
    }

    var revealOpts = { threshold: 0, rootMargin: '0px 0px -50px 0px' };
    if (scrollContainer !== window) {
      revealOpts.root = scrollContainer;
    }

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, revealOpts);

    document.querySelectorAll(revealClasses)
      .forEach(function (el) { revealObserver.observe(el); });
  })();

  // ─── Smooth scroll for anchor links ───
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        scrollToTop(0);
        return;
      }
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var navH = navbar ? navbar.offsetHeight : 0;
      var scrollTop = scrollContainer === window ? window.scrollY : scrollContainer.scrollTop;
      var top = target.getBoundingClientRect().top + scrollTop - navH - 16;
      try {
        if (scrollContainer === window) {
          window.scrollTo({ top: top, behavior: 'smooth' });
        } else {
          scrollContainer.scrollTo({ top: top, behavior: 'smooth' });
        }
      } catch (_) {
        if (scrollContainer === window) {
          window.scrollTo(0, top);
        } else {
          scrollContainer.scrollTo(0, top);
        }
      }
    });
  });

  // ─── Resource tabs with ARIA and keyboard ───
  document.querySelectorAll('.resource-tabs').forEach(function (tabGroup) {
    var btns = tabGroup.querySelectorAll('.tab-btn');
    var container = tabGroup.parentElement;

    tabGroup.setAttribute('role', 'tablist');

    btns.forEach(function (btn, idx) {
      btn.setAttribute('role', 'tab');
      var tabId = btn.getAttribute('data-tab');
      var panel = container.querySelector('#' + tabId);
      if (panel) {
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', 'tab-' + tabId);
      }
      btn.id = 'tab-' + tabId;
      btn.setAttribute('aria-selected', btn.classList.contains('active') ? 'true' : 'false');
      btn.setAttribute('tabindex', btn.classList.contains('active') ? '0' : '-1');

      btn.addEventListener('click', function () {
        activateTab(btn, idx);
      });

      btn.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          var next = (idx + 1) % btns.length;
          activateTab(btns[next], next);
          btns[next].focus();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          var prev = (idx - 1 + btns.length) % btns.length;
          activateTab(btns[prev], prev);
          btns[prev].focus();
        } else if (e.key === 'Home') {
          e.preventDefault();
          activateTab(btns[0], 0);
          btns[0].focus();
        } else if (e.key === 'End') {
          e.preventDefault();
          activateTab(btns[btns.length - 1], btns.length - 1);
          btns[btns.length - 1].focus();
        }
      });
    });

    function activateTab(btn, idx) {
      btns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
        b.setAttribute('tabindex', '-1');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      btn.setAttribute('tabindex', '0');

      var id = btn.getAttribute('data-tab');
      container.querySelectorAll('.tab-content').forEach(function (c) {
        c.classList.remove('active');
        c.setAttribute('aria-hidden', 'true');
      });
      var target = container.querySelector('#' + id);
      if (target) {
        target.classList.add('active');
        target.setAttribute('aria-hidden', 'false');
      }
    }
  });

})();
