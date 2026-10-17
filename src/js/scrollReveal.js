/**
 * Scroll Reveal & Parallax Motion Engine
 * Performance-conscious, unobserves visible targets, respects prefers-reduced-motion.
 */

export function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (prefersReduced) {
    revealElements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  // Safely mark JS enabled so elements start hidden and reveal smoothly
  document.documentElement.classList.add('js-enabled');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.12,
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target); // Release memory once animated
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => revealObserver.observe(el));

  // Subtle Hero Parallax for desktop only (pointer: fine)
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  const watermark = document.querySelector('.hero-watermark');

  if (isFinePointer && watermark) {
    let ticking = false;

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            if (scrollY < window.innerHeight) {
              const offset = scrollY * 0.18;
              watermark.style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
            }
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  }
}
