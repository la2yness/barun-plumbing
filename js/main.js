(function () {
  'use strict';

  const header = document.getElementById('site-header');
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  // Sticky header shadow on scroll
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  // Mobile nav toggle
  navToggle.addEventListener('click', function () {
    const isOpen = mainNav.classList.toggle('mobile-open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile nav when a link is clicked
  mainNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('mobile-open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Smooth-scroll offset for fixed header
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = header.offsetHeight + 8;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // Simple fade-in on scroll for section-head elements
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.section-head, .service-card, .feature-item, .process-step').forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });

  // Review scroll arrows
  var reviewScroll = document.querySelector('.review-scroll');
  if (reviewScroll) {
    var cardStep = 274; // 260px card + 14px gap
    document.querySelector('.review-arrow-prev').addEventListener('click', function () {
      reviewScroll.scrollBy({ left: -cardStep, behavior: 'smooth' });
    });
    document.querySelector('.review-arrow-next').addEventListener('click', function () {
      reviewScroll.scrollBy({ left: cardStep, behavior: 'smooth' });
    });
  }

  // Desktop: copy phone number to clipboard on click
  if (window.matchMedia('(pointer: fine)').matches) {
    var toast = document.createElement('div');
    toast.textContent = '☎  010-5864-6422  번호가 복사되었습니다';
    toast.style.cssText = 'position:fixed;bottom:88px;left:50%;transform:translateX(-50%) translateY(10px);background:#111827;color:#fff;padding:11px 22px;border-radius:8px;font-size:14px;font-weight:500;font-family:inherit;opacity:0;transition:opacity .22s ease,transform .22s ease;pointer-events:none;z-index:9999;white-space:nowrap;box-shadow:0 4px 20px rgba(0,0,0,.3)';
    document.body.appendChild(toast);

    var toastTimer;
    function showToast() {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(-50%) translateY(0)';
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(10px)';
      }, 2500);
    }

    document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        var num = this.getAttribute('href').replace('tel:', '');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(num).then(showToast);
        } else {
          var tmp = document.createElement('input');
          tmp.value = num;
          document.body.appendChild(tmp);
          tmp.select();
          document.execCommand('copy');
          document.body.removeChild(tmp);
          showToast();
        }
      });
    });
  }
})();
