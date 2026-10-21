// Small progressive enhancements — the site works fine without this file.
(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');

  // footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // header border once the page scrolls
  var header = document.querySelector('.site-header');
  var onScroll = function () { header && header.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // reveal-on-scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el, i) {
      el.style.transitionDelay = (i % 4) * 70 + 'ms';
      io.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // stories: open the story named in the URL (#story-2), keep the URL in sync
  var openFromHash = function () {
    var target = location.hash && document.getElementById(location.hash.slice(1));
    if (target && target.tagName === 'DETAILS') {
      target.open = true;
      target.classList.add('in');
      setTimeout(function () { target.scrollIntoView({ block: 'start' }); }, 50);
    }
  };
  openFromHash();
  window.addEventListener('hashchange', openFromHash);
  document.querySelectorAll('details.story').forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open && history.replaceState) history.replaceState(null, '', '#' + d.id);
    });
  });
})();
