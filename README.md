# ZERO8 — Ultra-Premium Hospitality Website

Official production-grade web experience for **ZERO8**, an ultra-premium hospitality brand featuring an indoor restaurant sanctuary and an open-air rooftop dining experience in **Bettiah, West Champaran, Bihar, India**.

> **Tagline:** *Great Food For Best People*

---

## 1. Brand Identity Specifications

- **Brand Name:** ZERO8
- **Tagline:** Great Food For Best People
- **Location:** Bettiah, West Champaran, Bihar, India
- **Approved Palette:**
  - **Midnight Navy:** `#101D32` (Primary deep luxury canvas)
  - **Cream Beige:** `#E9D7BB` (Warm editorial typography & surfaces)
  - **Champagne Gold:** `#C9A15A` (Sophisticated metallic accentuation)
  - **Soft Black:** `#151515` (Deep shadows & contrast)
- **Official Monogram:** Intertwined Champagne-Gold `08` Monogram positioned above the spaced uppercase `ZERO8` wordmark.

---

## 2. Information Architecture

1. **A. Premium Navigation:** Fixed header with smooth transparent-to-solid transition on scroll, active section spy, accessible mobile drawer with keyboard focus trap and Escape key dismissal.
2. **B. Cinematic Hero:** Editorial typography, ambient gold glow, subtle background monogram watermark with desktop parallax, dual CTAs, and an animated scroll cue.
3. **C & D. Two Signature Experiences:**
   - **The Main Dining Room:** Indoor restaurant featuring acoustic comfort, deep navy millwork, brushed gold fixtures, and climate-controlled elegance.
   - **The Sky Pavilion:** Rooftop dining terrace offering open-air starlight, cool evening breezes, panoramic Bettiah sunset horizons, and social lounge seating.
4. **E. Signature Menu Showcase:** Data-driven presentation of North Indian clay-oven curries and contemporary Chinese wok mastery, featuring category tabs, dietary indicators (Vegetarian / Non-Veg), and a transparent pre-launch concept notice.
5. **G. Brand Story & Pillars:** The ZERO8 philosophy, material palette (*Navy & Brass, Patient Craft, Bettiah Pride*), and commitment to elevating hospitality in North Bihar.
6. **F. Ambience & Gallery:** Asymmetric editorial masonry grid paired with a native HTML5 `<dialog>` lightbox adhering to modern scroll containment (`overscroll-behavior: contain`), keyboard arrow navigation, and touch gestures.
7. **H. Table Reservation & Enquiry:** Full interactive form with live field validation, date picker minimum constraints, guest count selectors, venue preference radio cards, and simulated priority submission feedback with reference identifiers.
8. **I. Location & Operating Hours:** Verified Bettiah geographic coordinates, planned lunch/dinner operating hours, and dark-themed interactive map frame.
9. **J. Editorial Footer:** Official logo lockup, verified destination facts, quick navigation, and copyright notice.

---

## 3. Technology Stack

- **Bundler & Dev Server:** [Vite](https://vitejs.dev/) (fast ES modules, zero runtime bloat)
- **Markup:** Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`) with Open Graph, Twitter Cards, and schema.org `Restaurant` JSON-LD
- **Styles:** Modular CSS with CSS Custom Properties, fluid typography (`clamp()`), and responsive CSS Grid / Flexbox
- **Interactivity:** Vanilla ES Modules with `IntersectionObserver` scroll reveals, keyboard focus management, and `prefers-reduced-motion` compliance

---

## 4. Local Development & Build Commands

### Install Dependencies
```bash
npm install
```

### Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### Build for Production
```bash
npm run build
```
Generates optimized, minified assets into the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 5. Connecting a Live Production Backend

The website is engineered with a strict separation between presentation and data:
- **Brand Information:** Edit `src/data/brandConfig.js` to update confirmed contact phone numbers, social media URLs, and exact street addresses.
- **Menu Items:** Edit `src/data/menuData.js` to plug in live kitchen menus, prices, and seasonal specialties.
- **Reservation Form:** To connect the enquiry form to a live backend (Firebase Cloud Functions, Supabase, EmailJS, or custom REST endpoint), update the submission handler in `src/js/reservationForm.js`.

---

## 6. Deployment Guide

### Firebase Hosting
```bash
# 1. Install Firebase CLI if not already present
npm install -g firebase-tools

# 2. Login to Firebase
firebase login

# 3. Initialize hosting (set public directory to "dist")
firebase init hosting

# 4. Build and deploy
npm run build
firebase deploy --only hosting
```

### Vercel / Netlify
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
