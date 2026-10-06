(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var desktopEmailLink = document.getElementById('desktopEmailLink');
    var gmailLink = document.getElementById('gmailLink');
    var copyBtn = document.getElementById('copyBtn');
    var platformHint = document.getElementById('platformHint');
    if (!desktopEmailLink || !gmailLink || !copyBtn || !platformHint) return;

    var notificationTimeout = null;
    var hintTimeout = null;

    var ua = navigator.userAgent;
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    var isWindows = /Windows/i.test(ua);

    function setLinkLabel(iconClass, label) {
      while (desktopEmailLink.firstChild) desktopEmailLink.removeChild(desktopEmailLink.firstChild);
      var icon = document.createElement('i');
      icon.className = iconClass;
      icon.setAttribute('aria-hidden', 'true');
      desktopEmailLink.appendChild(icon);
      desktopEmailLink.appendChild(document.createTextNode(' ' + label));
    }

    if (isWindows) {
      platformHint.textContent = 'Recommended for mobile devices';
      setLinkLabel('fas fa-envelope-open-text', 'Open in Email App');
    } else if (isMobile) {
      platformHint.textContent = "If first button doesn't work, try Gmail or copy the address";
      setLinkLabel('fas fa-envelope-open-text', 'Open Email');
    } else {
      platformHint.textContent = 'Choose your preferred option';
    }

    function showNotification(message) {
      if (notificationTimeout) clearTimeout(notificationTimeout);
      var existing = document.querySelector('.email-notification');
      if (existing && existing.parentNode) existing.parentNode.removeChild(existing);

      ensureStyles();

      var notification = document.createElement('div');
      notification.className = 'email-notification';
      notification.setAttribute('role', 'status');
      notification.style.cssText = 'position:fixed;bottom:24px;right:24px;background:var(--gray-800);color:white;padding:14px 20px;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.15);z-index:10000;font-size:0.9rem;animation:notifIn 0.35s ease-out;';
      notification.textContent = message;

      document.body.appendChild(notification);
      notificationTimeout = setTimeout(function () {
        notification.style.animation = 'notifOut 0.3s ease-out';
        setTimeout(function () {
          if (notification.parentNode) notification.parentNode.removeChild(notification);
        }, 300);
      }, 3000);
    }

    function ensureStyles() {
      if (document.getElementById('notif-styles')) return;
      var s = document.createElement('style');
      s.id = 'notif-styles';
      s.textContent = '@keyframes notifIn{from{transform:translateX(100%);opacity:0}}@keyframes notifOut{from{transform:translateX(0);opacity:1}to{transform:translateX(100%);opacity:0}}';
      document.head.appendChild(s);
    }

    desktopEmailLink.addEventListener('click', function () {
      if (isMobile) {
        showNotification('Opening your email app...');
      } else if (isWindows) {
        showNotification('Attempting to open your default email client...');
        clearTimeout(hintTimeout);
        hintTimeout = setTimeout(function () {
          if (!document.hidden) showNotification('If nothing happened, try the Gmail option below');
        }, 1500);
      } else {
        showNotification('Opening your default email client...');
      }
    });

    gmailLink.addEventListener('click', function () {
      showNotification('Opening Gmail in your browser...');
    });

    function markCopied() {
      copyBtn.textContent = 'Copied!';
      copyBtn.classList.add('copied');
      showNotification('Email address copied to clipboard!');
      setTimeout(function () {
        copyBtn.textContent = 'Copy';
        copyBtn.classList.remove('copied');
      }, 2000);
    }

    function legacyCopy(text) {
      var textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.setAttribute('readonly', '');
      textArea.style.cssText = 'position:fixed;top:0;left:-9999px;';
      document.body.appendChild(textArea);
      textArea.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(textArea);
      return ok;
    }

    copyBtn.addEventListener('click', function () {
      var email = 'librarykvas2@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(markCopied).catch(function () {
          if (legacyCopy(email)) markCopied();
          else showNotification('Copy failed - please select the address manually');
        });
      } else if (legacyCopy(email)) {
        markCopied();
      } else {
        showNotification('Copy failed - please select the address manually');
      }
    });
  });
})();
