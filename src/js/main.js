/**
 * ZERO8 — Application Entrypoint
 * Bootstraps navigation, scroll motion, menu filtering, gallery lightbox, and reservations.
 */

import '../styles/main.css';
import { initNavigation } from './navigation.js';
import { initScrollReveal } from './scrollReveal.js';
import { initMenuFilter } from './menuFilter.js';
import { initGalleryLightbox } from './lightbox.js';
import { initReservationForm } from './reservationForm.js';

function bootstrap() {
  initNavigation();
  initScrollReveal();
  initMenuFilter();
  initGalleryLightbox();
  initReservationForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
