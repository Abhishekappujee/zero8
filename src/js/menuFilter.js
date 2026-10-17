/**
 * Menu Showcase Filter Module
 * Renders data-driven Indian and Chinese dishes with interactive category tabs.
 */

import { menuCategories, menuItems, menuNotice } from '../data/menuData.js';

export function initMenuFilter() {
  const tabsContainer = document.getElementById('menuTabs');
  const gridContainer = document.getElementById('menuGrid');

  if (!tabsContainer || !gridContainer) return;

  // 1. Render Category Tabs
  tabsContainer.innerHTML = menuCategories
    .map(
      (cat, index) => `
      <button 
        type="button" 
        class="menu-tab-btn ${index === 0 ? 'is-active' : ''}" 
        data-category="${cat.id}"
        role="tab"
        aria-selected="${index === 0 ? 'true' : 'false'}"
        aria-controls="menuGrid"
      >
        ${cat.label}
      </button>
    `
    )
    .join('');

  // 2. Render Dish Cards
  function renderDishes(categoryId = 'all') {
    const filtered =
      categoryId === 'all'
        ? menuItems
        : menuItems.filter((item) => item.category === categoryId);

    if (!filtered.length) {
      gridContainer.innerHTML = `
        <div class="menu-empty-state" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
          <p class="body-text">No dishes currently scheduled in this preview category.</p>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filtered
      .map(
        (dish) => `
      <article class="menu-item-card reveal-on-scroll is-revealed" data-category="${dish.category}">
        <div class="menu-item-thumb-box">
          <img 
            src="${dish.image}" 
            alt="${dish.imageAlt}" 
            class="menu-item-thumb" 
            loading="lazy" 
            width="220" 
            height="220" 
          />
        </div>
        <div class="menu-item-info">
          <div class="menu-item-header">
            <h3 class="menu-item-name">${dish.name}</h3>
            <span class="chef-badge">${dish.badge}</span>
          </div>
          <div class="menu-item-meta">
            <span class="diet-badge diet-badge--${dish.dietary === 'veg' ? 'veg' : 'non-veg'}">
              ● ${dish.dietaryLabel}
            </span>
            <span class="caption-text" style="color: var(--color-gold-light);">${dish.tagline}</span>
          </div>
          <p class="menu-item-desc">${dish.description}</p>
          <div class="menu-item-price-box">
            <span class="menu-item-price">${dish.estimatedPrice}</span>
            <span class="price-tag-sub">(${dish.priceNote})</span>
          </div>
        </div>
      </article>
    `
      )
      .join('');
  }

  // Initial render
  renderDishes('all');

  // 3. Tab Click Events
  tabsContainer.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.menu-tab-btn');
    if (!tabBtn) return;

    tabsContainer.querySelectorAll('.menu-tab-btn').forEach((btn) => {
      btn.classList.remove('is-active');
      btn.setAttribute('aria-selected', 'false');
    });

    tabBtn.classList.add('is-active');
    tabBtn.setAttribute('aria-selected', 'true');

    const catId = tabBtn.getAttribute('data-category');
    renderDishes(catId);
  });
}
