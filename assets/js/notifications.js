(function () {
  'use strict';

  var notif = document.getElementById('event-notification');
  if (!notif) return;

  var closeBtn = document.getElementById('notif-close-btn');
  var notifBody = document.getElementById('notif-body');
  var notifHeadline = document.getElementById('notif-headline');
  var notifSub = document.getElementById('notif-sub');
  var progressBar = document.getElementById('notif-progress-bar');
  var autoHideTimer = null;
  var isAnimating = false;
  var isPaused = false;
  var remainingTime = 10000;
  var pauseStartedAt = 0;

  function getOnCards() {
    return Array.prototype.slice.call(
      document.querySelectorAll('.event-card[data-notification="ON"]')
    );
  }

  function showNotification() {
    var onCards = getOnCards();
    if (!onCards.length) return;
    var count = onCards.length;

    if (count === 1) {
      var title = onCards[0].querySelector('.event-title');
      notifHeadline.textContent = 'New school event announced';
      notifSub.textContent = title ? title.textContent : 'A new event has been announced.';
    } else {
      notifHeadline.textContent = count + ' new events for you';
      notifSub.textContent = 'Tap to view all new school events.';
    }

    notif.style.display = 'block';
    notif.offsetHeight;
    notif.classList.add('notif-visible');
    notif.classList.remove('notif-hide');

    resetProgressBar();
    startAutoHide(10000);
  }

  function resetProgressBar() {
    if (progressBar) {
      progressBar.style.animation = 'none';
      progressBar.offsetHeight;
      progressBar.style.animation = '';
      progressBar.classList.remove('paused');
    }
  }

  function startAutoHide(duration) {
    clearTimeout(autoHideTimer);
    remainingTime = duration;
    autoHideTimer = setTimeout(hideNotification, duration);
  }

  function pauseAutoHide() {
    if (isPaused) return;
    isPaused = true;
    pauseStartedAt = Date.now();
    clearTimeout(autoHideTimer);
    if (progressBar) progressBar.classList.add('paused');
  }

  function resumeAutoHide() {
    if (!isPaused) return;
    isPaused = false;
    var elapsed = Date.now() - pauseStartedAt;
    remainingTime = Math.max(0, remainingTime - elapsed);
    if (remainingTime <= 0) {
      hideNotification();
      return;
    }
    if (progressBar) {
      progressBar.classList.remove('paused');
      var currentWidth = (remainingTime / 10000) * 100;
      progressBar.style.animation = 'none';
      progressBar.offsetHeight;
      progressBar.style.animation = 'notifCountdown ' + remainingTime + 'ms linear forwards';
    }
    autoHideTimer = setTimeout(hideNotification, remainingTime);
  }

  function hideNotification() {
    clearTimeout(autoHideTimer);
    isPaused = false;
    notif.classList.add('notif-hide');
    notif.classList.remove('notif-visible');
    setTimeout(function () {
      notif.style.display = 'none';
      notif.classList.remove('notif-hide');
    }, 400);
  }

  function getScrollContainer() {
    var el = document.querySelector('.scroll-container');
    return el || window;
  }

  function getScrollTop(container) {
    return container === window ? window.scrollY : container.scrollTop;
  }

  function doScrollTo(container, top) {
    var behavior = (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) ? 'auto' : 'smooth';
    try {
      if (container === window) {
        window.scrollTo({ top: top, behavior: behavior });
      } else {
        container.scrollTo({ top: top, behavior: behavior });
      }
    } catch (e) {
      if (container === window) {
        window.scrollTo(0, top);
      } else {
        container.scrollTo(0, top);
      }
    }
  }

  function scrollAndHighlight() {
    if (isAnimating) return;
    isAnimating = true;
    hideNotification();

    var eventsSection = document.getElementById('events');
    if (!eventsSection) {
      isAnimating = false;
      return;
    }
    var navH = 64;
    var container = getScrollContainer();
    var scrollTop = getScrollTop(container);
    var top = eventsSection.getBoundingClientRect().top + scrollTop - navH - 20;

    doScrollTo(container, top);

    var onCards = getOnCards();

    var scrollCheck = setInterval(function () {
      var currentScroll = getScrollTop(container);
      if (Math.abs(currentScroll - top) < 5) {
        clearInterval(scrollCheck);
        applyHighlight(onCards);
        isAnimating = false;
      }
    }, 100);

    setTimeout(function () {
      clearInterval(scrollCheck);
      if (!onCards.some(function (c) { return c.classList.contains('notif-highlight'); })) {
        applyHighlight(onCards);
      }
      isAnimating = false;
    }, 1200);
  }

  function applyHighlight(cards) {
    cards.forEach(function (card) {
      card.classList.remove('notif-highlight');
      card.offsetHeight;
      card.classList.add('notif-highlight');
    });

    var highlightOpts = { threshold: 0.1 };
    var c = getScrollContainer();
    if (c !== window) highlightOpts.root = c;
    var highlightObserver = new IntersectionObserver(function (entries) {
      var anyVisible = entries.some(function (e) { return e.isIntersecting; });
      if (!anyVisible) {
        cards.forEach(function (c) { c.classList.remove('notif-highlight'); });
        highlightObserver.disconnect();
      }
    }, highlightOpts);

    cards.forEach(function (c) { highlightObserver.observe(c); });

    setTimeout(function () {
      cards.forEach(function (c) { c.classList.remove('notif-highlight'); });
      highlightObserver.disconnect();
    }, 8000);
  }

  // ─── Hover/touch pause ───
  notif.addEventListener('mouseenter', pauseAutoHide);
  notif.addEventListener('mouseleave', resumeAutoHide);
  notif.addEventListener('touchstart', pauseAutoHide, { passive: true });
  notif.addEventListener('touchend', resumeAutoHide, { passive: true });

  if (closeBtn) {
    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      hideNotification();
    });
  }

  if (notifBody) {
    notifBody.addEventListener('click', scrollAndHighlight);
  }

  notif.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { hideNotification(); return; }
    if ((e.key === 'Enter' || e.key === ' ') && e.target !== closeBtn) {
      e.preventDefault();
      scrollAndHighlight();
    }
  });

  // ─── Show after page load ───
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(showNotification, 800);
    });
  } else {
    setTimeout(showNotification, 800);
  }

})();
