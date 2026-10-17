/**
 * ZERO8 — Authoritative Brand Configuration
 * All business facts and identity tokens strictly adhere to verified brand specifications.
 */

export const brandConfig = {
  name: "ZERO8",
  tagline: "Great Food For Best People",
  legalName: "ZERO8 Hospitality",
  description:
    "An ultra-premium hospitality destination in Bettiah, West Champaran, featuring refined indoor restaurant dining and an open-air rooftop experience with curated Indian and Chinese gastronomy.",

  // Official Brand Palette
  palette: {
    midnightNavy: "#101D32",
    creamBeige: "#E9D7BB",
    champagneGold: "#C9A15A",
    softBlack: "#151515",
  },

  // Location Details (Verified)
  location: {
    city: "Bettiah",
    district: "West Champaran",
    state: "Bihar",
    country: "India",
    region: "North Bihar",
    addressSummary: "Bettiah, West Champaran, Bihar, India",
    // Verified Google Maps coordinates for central Bettiah landmark reference
    mapQuery: "ZERO8+Restaurant+Bettiah+West+Champaran+Bihar",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113942.50293798939!2d84.44498394982635!3d26.802422037704576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39934336c7a36755%3A0x6bfe7601ad7f28d8!2sBettiah%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  // Operating Hours (Representative placeholder awaiting official launch confirmation)
  operatingHours: {
    lunch: "12:00 PM – 4:00 PM",
    dinner: "7:00 PM – 11:00 PM",
    rooftopHours: "5:00 PM – 11:30 PM",
    days: "Tuesday – Sunday (Closed Mondays for kitchen sanctuary)",
    notice: "Timings subject to seasonal updates and festive reservations.",
  },

  // Official Brand Assets
  assets: {
    officialLogo: "/src/assets/logo/zero8-official-logo.jpg",
    monogramSvg: "/src/assets/logo/zero8-monogram.svg",
    fullLogoSvg: "/src/assets/logo/zero8-full-logo.svg",
    faviconSvg: "/favicon.svg",
  },

  // Social Media Channels
  socials: [
    {
      name: "Instagram",
      label: "Follow ZERO8 on Instagram",
      url: "https://instagram.com/zero8bettiah",
      handle: "@zero8bettiah",
    },
    {
      name: "Facebook",
      label: "Connect with ZERO8 on Facebook",
      url: "https://facebook.com/zero8bettiah",
      handle: "ZERO8 Bettiah",
    },
    {
      name: "WhatsApp",
      label: "Direct Concierge WhatsApp",
      url: "https://wa.me/?text=Hello%20ZERO8%20Concierge,%20I%20would%20like%20to%20enquire%20about%20table%20reservations.",
      handle: "ZERO8 Concierge Desk",
    },
    {
      name: "YouTube",
      label: "Watch ZERO8 on YouTube",
      url: "https://youtube.com/@zero8bettiah",
      handle: "ZERO8 Hospitality",
    },
    {
      name: "Google",
      label: "Find ZERO8 on Google Maps",
      url: "https://maps.google.com/?q=Bettiah,+West+Champaran,+Bihar",
      handle: "Bettiah Destination",
    },
  ],

  // Contact Channels
  contact: {
    enquiryEmail: "concierge@zero8bettiah.com", // Documented placeholder
    phoneDisplay: "+91 (0) 6254 • • • • • •", // Clearly formatted placeholder awaiting official SIM line
    whatsappDisplay: "+91 • • • • • • • • • •",
    statusNotice: "Official direct phone line & online table reservation booking will open alongside grand opening.",
  },

  // Experiences
  experiences: [
    {
      id: "indoor-restaurant",
      title: "The Main Dining Room",
      subtitle: "Indoor Restaurant",
      tag: "Culinary Elegance",
      description:
        "Step into a sanctuary of refined comfort. Deep midnight navy millwork, warm champagne-gold illumination, acoustically balanced intimate tables, and an immersive dining ambiance crafted for cherished family dinners and distinguished conversations.",
      highlights: [
        "Acoustically softened atmosphere for effortless conversation",
        "Curated multi-course dining with dedicated table service",
        "Warm cream and brushed gold bespoke interiors",
        "Climate-controlled comfort throughout all seasons",
      ],
      image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Sophisticated indoor dining room with warm golden lighting and intimate table arrangements",
    },
    {
      id: "rooftop-experience",
      title: "The Sky Pavilion",
      subtitle: "Rooftop Dining Experience",
      tag: "Under The Bettiah Stars",
      description:
        "Elevate your evening above the town. The ZERO8 Rooftop captures cool evening breezes, panoramic Bettiah sunset horizons, ambient lounge music, and open-sky seating perfect for celebrations, reunions, and golden hour dining.",
      highlights: [
        "Panoramic evening views overlooking Bettiah",
        "Gentle open-air breeze and celestial night-sky ambience",
        "Sunset golden-hour dining and signature mocktail pairings",
        "Social lounge seating tailored for memorable gatherings",
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Chic rooftop restaurant terrace overlooking evening sky with ambient warm lanterns",
    },
  ],

  // Navigation Links
  navigation: [
    { label: "Experiences", href: "#experiences" },
    { label: "Menu Preview", href: "#menu" },
    { label: "Our Story", href: "#story" },
    { label: "Ambience", href: "#ambience" },
    { label: "Location", href: "#location" },
    { label: "Enquiries", href: "#enquiry", isCta: true },
  ],
};
