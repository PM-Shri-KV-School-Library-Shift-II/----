(function () {
  'use strict';

  var videos = document.querySelectorAll('.video-element');
  if (!videos.length) return;

  function setLoading(video, show) {
    var container = video.closest('.video-container');
    var loader = container ? container.querySelector('.video-loader') : null;
    if (loader) loader.style.display = show ? 'block' : 'none';
  }

  function showFallback(video) {
    var container = video.closest('.video-container');
    if (!container) return;
    if (container.querySelector('.video-error')) return;

    setLoading(video, false);

    var source = video.querySelector('source');
    var errEl = document.createElement('div');
    errEl.className = 'video-error';
    errEl.style.display = 'block';

    var icon = document.createElement('i');
    icon.className = 'fas fa-exclamation-triangle';
    errEl.appendChild(icon);
    errEl.appendChild(document.createTextNode(' Video could not be loaded. '));

    if (source && source.src) {
      var link = document.createElement('a');
      link.href = source.src;
      link.style.color = '#60a5fa';
      link.setAttribute('download', '');
      link.textContent = 'Download';
      errEl.appendChild(link);
      errEl.appendChild(document.createTextNode(' instead.'));
    } else {
      errEl.appendChild(document.createTextNode('Please try again later.'));
    }

    container.appendChild(errEl);
  }

  videos.forEach(function (video) {
    video.addEventListener('error', function () { showFallback(video); }, true);
    video.addEventListener('loadeddata', function () { setLoading(video, false); });
    video.addEventListener('waiting', function () { setLoading(video, true); });
    video.addEventListener('canplay', function () { setLoading(video, false); });
    video.addEventListener('stalled', function () { setLoading(video, false); });

    var source = video.querySelector('source');
    if (source) source.addEventListener('error', function () { showFallback(video); });
  });
})();
