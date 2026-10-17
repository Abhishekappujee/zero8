/**
 * Navigation Module
 * Header elevation on scroll, active section spy, and accessible mobile drawer with focus trap.
 */

export function initNavigation() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.getElementById('mobileToggleBtn');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = drawer ? drawer.querySelectorAll('a') : [];
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  // 1. Header scroll listener
  function updateHeaderOnScroll() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('site-header--scrolled');
    } else {
      header.classList.remove('site-header--scrolled');
    }
  }

  window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
  updateHeaderOnScroll();

  // 2. Active link scroll spy
  function updateActiveNavLink() {
    if (!sections.length || !navLinks.length) return;
    const scrollPos = window.scrollY + 160;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  // 3. Mobile Drawer Controls & Focus Trap
  if (!toggleBtn || !drawer || !backdrop) return;

  let previousActiveElement = null;

  function openDrawer() {
    previousActiveElement = document.activeElement;
    drawer.classList.add('is-active');
    backdrop.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';

    // Focus close button inside drawer
    if (closeBtn) closeBtn.focus();
  }

  function closeDrawer() {
    drawer.classList.remove('is-active');
    backdrop.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Restore focus to toggle button
    if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
      previousActiveElement.focus();
    }
  }

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  backdrop.addEventListener('click', closeDrawer);

  // Close drawer when any internal link is clicked
  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // Keyboard navigation: Escape key closes drawer
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-active')) {
      closeDrawer();
    }
  });

  // Focus trapping within drawer when open
  drawer.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;

    const focusable = drawer.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}
