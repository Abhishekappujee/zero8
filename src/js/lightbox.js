/**
 * Ambience Gallery & Accessible Lightbox Module
 * Supports native HTML5 <dialog> modal, keyboard navigation, touch gestures, and focus return.
 */

import { galleryCategories, galleryItems } from '../data/galleryData.js';

export function initGalleryLightbox() {
  const tabsContainer = document.getElementById('galleryTabs');
  const gridContainer = document.getElementById('galleryGrid');
  const dialog = document.getElementById('galleryLightbox');

  if (!gridContainer || !dialog) return;

  let currentCategory = 'all';
  let activeIndex = 0;
  let visibleItems = [...galleryItems];
  let triggerElement = null;

  // Modal elements
  const lightboxImg = dialog.querySelector('.lightbox-img');
  const lightboxTitle = dialog.querySelector('.lightbox-title');
  const lightboxDesc = dialog.querySelector('.lightbox-desc');
  const closeBtn = dialog.querySelector('.lightbox-close-btn');
  const prevBtn = dialog.querySelector('.lightbox-prev-btn');
  const nextBtn = dialog.querySelector('.lightbox-next-btn');

  // 1. Render Gallery Filter Tabs
  if (tabsContainer) {
    tabsContainer.innerHTML = galleryCategories
      .map(
        (cat, i) => `
        <button 
          type="button" 
          class="gallery-tab-btn ${i === 0 ? 'is-active' : ''}" 
          data-cat="${cat.id}"
          role="tab"
          aria-selected="${i === 0 ? 'true' : 'false'}"
        >
          ${cat.label}
        </button>
      `
      )
      .join('');

    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.gallery-tab-btn');
      if (!btn) return;

      tabsContainer.querySelectorAll('.gallery-tab-btn').forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      currentCategory = btn.getAttribute('data-cat');
      renderGallery();
    });
  }

  // 2. Render Gallery Grid
  function renderGallery() {
    visibleItems =
      currentCategory === 'all'
        ? galleryItems
        : galleryItems.filter((item) => item.category === currentCategory);

    gridContainer.innerHTML = visibleItems
      .map(
        (item, idx) => `
      <article 
        class="gallery-card size-${item.size} reveal-on-scroll is-revealed" 
        data-index="${idx}"
        tabindex="0"
        role="button"
        aria-label="View larger image: ${item.title}"
      >
        <img 
          src="${item.thumb}" 
          alt="${item.alt}" 
          class="gallery-image" 
          loading="lazy" 
          width="700" 
          height="500" 
        />
        <div class="gallery-overlay">
          <span class="gallery-item-subtitle">${item.subtitle}</span>
          <h3 class="gallery-item-title">${item.title}</h3>
          <span class="gallery-expand-hint">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
            Enlarge View
          </span>
        </div>
      </article>
    `
      )
      .join('');
  }

  renderGallery();

  // 3. Lightbox State & Display
  function updateLightboxContent() {
    const item = visibleItems[activeIndex];
    if (!item) return;

    lightboxImg.src = item.src;
    lightboxImg.alt = item.alt;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.caption;
  }

  function openLightbox(index, targetEl) {
    triggerElement = targetEl;
    activeIndex = index;
    updateLightboxContent();

    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }

    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    if (typeof dialog.close === 'function') {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }

    if (triggerElement && typeof triggerElement.focus === 'function') {
      triggerElement.focus();
    }
  }

  function showNext() {
    activeIndex = (activeIndex + 1) % visibleItems.length;
    updateLightboxContent();
  }

  function showPrev() {
    activeIndex = (activeIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightboxContent();
  }

  // Card Clicks & Enter Key
  gridContainer.addEventListener('click', (e) => {
    const card = e.target.closest('.gallery-card');
    if (!card) return;
    const index = parseInt(card.getAttribute('data-index'), 10);
    openLightbox(index, card);
  });

  gridContainer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.gallery-card');
      if (card) {
        e.preventDefault();
        const index = parseInt(card.getAttribute('data-index'), 10);
        openLightbox(index, card);
      }
    }
  });

  // Lightbox Controls
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  // Close when clicking directly on the native backdrop
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      closeLightbox();
    }
  });

  // Keyboard navigation inside lightbox
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      showNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      showPrev();
    } else if (e.key === 'Escape') {
      closeLightbox();
    }
  });

  // Touch Swipe Support
  let touchStartX = 0;
  dialog.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  dialog.addEventListener(
    'touchend',
    (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const diffX = touchEndX - touchStartX;
      if (diffX < -50) {
        showNext();
      } else if (diffX > 50) {
        showPrev();
      }
    },
    { passive: true }
  );
}
