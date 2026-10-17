/**
 * ZERO8 — Culinary Menu Showcase
 * 
 * NOTE ON ACCURACY (ANTI-HALLUCINATION SPECIFICATION):
 * The items below represent a curated preview showcase designed to illustrate
 * ZERO8's culinary vision in Indian and Chinese gastronomy.
 * As official kitchen prices and final launch menus are finalized, this file
 * provides the exact structured schema to plug in production items.
 */

export const menuNotice = {
  isSamplePreview: true,
  badge: "Culinary Preview & Concept",
  disclaimer:
    "The dishes and pairings displayed below illustrate ZERO8's upcoming culinary direction across authentic North Indian clay-oven cooking and contemporary Chinese wok mastery. Final dishes and launch pricing will be officially unveiled with the grand opening.",
};

export const menuCategories = [
  { id: "all", label: "Full Preview" },
  { id: "indian", label: "Indian Clay-Oven & Curries" },
  { id: "chinese", label: "Chinese Wok & Dim Sum" },
  { id: "beverages", label: "Elixirs & Refreshments" },
];

export const menuItems = [
  // --- Indian Offerings ---
  {
    id: "ind-1",
    category: "indian",
    name: "Dal ZERO8 Royale",
    tagline: "Slow-simmered 24-Hour Black Lentils",
    description:
      "Urad lentils simmered overnight over slow charcoal embers with vine-ripened tomatoes, organic churned butter, and aromatic fenugreek. Velvety, smoky, and comforting.",
    dietary: "veg",
    dietaryLabel: "Vegetarian",
    badge: "Signature Concept",
    estimatedPrice: "₹385",
    priceNote: "Preview",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Rich, creamy slow-simmered black lentil dal garnished with fresh cream and coriander",
  },
  {
    id: "ind-2",
    category: "indian",
    name: "Kashmiri Saffron Paneer Tikka",
    tagline: "Clay-Oven Charred Cottage Cheese",
    description:
      "Hand-pressed malai paneer steeped in crushed Kashmiri saffron, hung curd, yellow mustard oil, and crushed royal cumin, delicately smoked in the tandoor.",
    dietary: "veg",
    dietaryLabel: "Vegetarian",
    badge: "Chef's Cut",
    estimatedPrice: "₹420",
    priceNote: "Preview",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Golden charred paneer cubes marinated in rich yellow spices skewered with crisp peppers",
  },
  {
    id: "ind-3",
    category: "indian",
    name: "Awadhi Murgh Dum Biryani",
    tagline: "Slow-Sealed Fragrant Rice",
    description:
      "Long-grain aged basmati layered with tender chicken cuts, steeped saffron milk, whole green cardamom, and caramelized shallots, sealed under purdah.",
    dietary: "non-veg",
    dietaryLabel: "Non-Vegetarian",
    badge: "House Classic",
    estimatedPrice: "₹495",
    priceNote: "Preview",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Aromatic Awadhi chicken biryani garnished with browned onions, mint, and saffron threads",
  },
  {
    id: "ind-4",
    category: "indian",
    name: "Tandoori Peshawari Seekh",
    tagline: "Smoked Spiced Minced Skewers",
    description:
      "Finely minced cutlets infused with toasted coriander seeds, fresh mint, royal cumin, and crushed green chillies, roasted to juicy tenderness over coals.",
    dietary: "non-veg",
    dietaryLabel: "Non-Vegetarian",
    badge: "Tandoor Special",
    estimatedPrice: "₹525",
    priceNote: "Preview",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Succulent charcoal-grilled seekh kebabs served with mint chutney and lemon wedges",
  },

  // --- Chinese Offerings ---
  {
    id: "chn-1",
    category: "chinese",
    name: "Crispy Lotus Stem in Honey Chilli",
    tagline: "Wok-Tossed Tangy Glaze",
    description:
      "Wafer-thin lotus root crisps flash-fried and tossed in crushed red mountain chillies, wild wildflower honey, and toasted sesame seeds.",
    dietary: "veg",
    dietaryLabel: "Vegetarian",
    badge: "Crowd Favorite",
    estimatedPrice: "₹360",
    priceNote: "Preview",
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Glistening honey chilli lotus stem slices coated with sesame seeds in a dark artisanal bowl",
  },
  {
    id: "chn-2",
    category: "chinese",
    name: "Cantonese Dim Sum Basket",
    tagline: "Crystal Steamed Envelopes",
    description:
      "Handmade translucent parcels filled with water chestnuts, shiitake mushrooms, and tender scallions, served with Sichuan chilli oil crisp.",
    dietary: "veg",
    dietaryLabel: "Vegetarian",
    badge: "Hand-Rolled",
    estimatedPrice: "₹395",
    priceNote: "Preview",
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Steaming bamboo basket of delicate Cantonese dumplings with dipping sauce",
  },
  {
    id: "chn-3",
    category: "chinese",
    name: "Sichuan Wok-Fired Chicken",
    tagline: "Fiery Peppercorn & Scallion Reduction",
    description:
      "Tender diced chicken breast stir-fried in high-heat wok heat with roasted dried red chillies, cracked Sichuan peppercorns, roasted peanuts, and spring scallions.",
    dietary: "non-veg",
    dietaryLabel: "Non-Vegetarian",
    badge: "Wok Mastery",
    estimatedPrice: "₹465",
    priceNote: "Preview",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Vibrant Sichuan spicy wok chicken with dried chillies and fresh scallions",
  },
  {
    id: "chn-4",
    category: "chinese",
    name: "Classic Burnt Garlic & Egg Fried Rice",
    tagline: "Aromatic Jasmine Grains",
    description:
      "Individual grains of fragrant jasmine rice tossed with golden crisp garlic crisps, farm-fresh eggs, sweet corn, and micro-chopped French beans.",
    dietary: "non-veg",
    dietaryLabel: "Contains Egg",
    badge: "Wok Staple",
    estimatedPrice: "₹340",
    priceNote: "Preview",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Fragrant wok-tossed garlic fried rice with scrambled egg and scallions",
  },

  // --- Artisan Refreshments ---
  {
    id: "bev-1",
    category: "beverages",
    name: "Champaran Citrus & Kaffir Cooler",
    tagline: "Botanical Citrus Cooler",
    description:
      "Hand-pressed local seasonal lime, muddled bruised kaffir lime leaves, sparkling Himalayan spring water, and organic cane reduction.",
    dietary: "veg",
    dietaryLabel: "Non-Alcoholic",
    badge: "Rooftop Signature",
    estimatedPrice: "₹240",
    priceNote: "Preview",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Frosty botanical cooler in fine crystal glass garnished with citrus wheels and mint",
  },
  {
    id: "bev-2",
    category: "beverages",
    name: "Royal Saffron Shahi Phirni",
    tagline: "Clay-Pot Rice Pudding",
    description:
      "Ground rice cooked with whole milk, crushed saffron stigmas, and slivered Iranian pistachios, chilled in porous earthen pots for an earthy finish.",
    dietary: "veg",
    dietaryLabel: "Vegetarian",
    badge: "Dessert Grandeur",
    estimatedPrice: "₹260",
    priceNote: "Preview",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Traditional saffron phirni dessert served in an authentic earthen pot garnished with pistachios",
  },
];
