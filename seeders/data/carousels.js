const carouselData = [
  {
    name: "main-page",
    title: "iPhone 15 Pro Max - Now Available",
    description:
      "Experience the most advanced iPhone ever with titanium design, A17 Pro chip, and professional camera system. Limited time offer with free shipping!",
    image:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200",
    link: "/products/iphone-15-pro-max",
    buttonText: "Shop Now",
    order: 1,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-01-15"),
    endDate: new Date("2024-12-31"),
  },
  {
    name: "main-page",
    title: "Gaming Desktop Sale - Up to 30% Off",
    description:
      "Build your dream gaming setup with our high-performance gaming desktops featuring NVIDIA RTX 4080 and Intel i7 processors. Don't miss out!",
    image:
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=1200",
    link: "/products/gaming-desktop-rtx-4080",
    buttonText: "Get Deal",
    order: 2,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-06-30"),
  },
  {
    name: "main-page",
    title: "MacBook Pro M3 Max - Creative Powerhouse",
    description:
      "Ultimate creative powerhouse with M3 Max chip, Liquid Retina XDR display, and all-day battery life. Perfect for professionals and creators.",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1200",
    link: "/products/macbook-pro-16-m3-max",
    buttonText: "Learn More",
    order: 3,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-08-31"),
  },
  {
    name: "main-page",
    title: "Summer Fashion Collection",
    description:
      "Discover our latest summer collection featuring floral maxi dresses, premium cotton polo shirts, and stylish casual wear for the perfect summer look.",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200",
    link: "/categories/clothing-fashion",
    buttonText: "Shop Collection",
    order: 4,
    isActive: false,
    groupActive: true,
    startDate: new Date("2024-04-15"),
    endDate: new Date("2024-09-15"),
  },
  {
    name: "main-page",
    title: "Audio Excellence - Premium Headphones",
    description:
      "Immerse yourself in superior sound quality with our selection of premium headphones including Sony WH-1000XM5 and AirPods Pro 2nd Generation.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200",
    link: "/categories/audio-devices",
    buttonText: "Explore Audio",
    order: 5,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-10-31"),
  },
  {
    name: "main-page",
    title: "Black Friday Mega Sale - 50% Off",
    description:
      "Biggest sale of the year! Get up to 50% off on electronics, fashion, home & garden items. Limited time offer - shop now before it's gone!",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200",
    link: "/sale/black-friday",
    buttonText: "Shop Sale",
    order: 6,
    isActive: false,
    groupActive: true,
    startDate: new Date("2023-11-20"),
    endDate: new Date("2023-11-30"),
  },
  {
    name: "main-page",
    title: "Holiday Gift Guide 2023",
    description:
      "Find the perfect gifts for your loved ones with our curated holiday collection. From tech gadgets to fashion accessories, we have it all!",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200",
    link: "/gift-guide",
    buttonText: "View Gifts",
    order: 7,
    isActive: false,
    groupActive: true,
    startDate: new Date("2023-12-01"),
    endDate: new Date("2024-01-05"),
  },
  {
    name: "main-page",
    title: "Back to School Essentials",
    description:
      "Get ready for the new school year with our back-to-school collection featuring laptops, backpacks, and study accessories at great prices.",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200",
    link: "/back-to-school",
    buttonText: "Shop Essentials",
    order: 8,
    isActive: true,
    groupActive: true,
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-09-15"),
  },

  // Promotions page carousels
  {
    name: "promotions-page",
    title: "Flash Sale - 24 Hours Only",
    description:
      "Lightning deals on selected items! Up to 70% off on electronics, home appliances, and more. Timer is ticking!",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
    link: "/flash-sale",
    buttonText: "Shop Flash Sale",
    order: 1,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-05-26"),
    endDate: new Date("2024-05-27"),
  },
  {
    name: "promotions-page",
    title: "Member Exclusive - 20% Extra Off",
    description:
      "VIP members get an additional 20% off on already discounted items. Join our membership program and save more!",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200",
    link: "/member-deals",
    buttonText: "Join & Save",
    order: 2,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-12-31"),
  },
  {
    name: "promotions-page",
    title: "Clearance Event - Final Markdowns",
    description:
      "Last chance to grab these deals! Clearance items up to 80% off. Limited quantities available while supplies last.",
    image:
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200",
    link: "/clearance",
    buttonText: "Shop Clearance",
    order: 3,
    isActive: false,
    groupActive: true,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-03-31"),
  },
  {
    name: "promotions-page",
    title: "Weekend Special - Buy 2 Get 1 Free",
    description:
      "Perfect weekend offer! Buy any 2 items from selected categories and get the lowest priced item absolutely free.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200",
    link: "/weekend-special",
    buttonText: "Get Free Item",
    order: 4,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-05-25"),
    endDate: new Date("2024-05-26"),
  },
  {
    name: "promotions-page",
    title: "Student Discount - 15% Off",
    description:
      "Students save 15% on laptops, tablets, and study materials. Verify your student status and start saving today!",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=1200",
    link: "/student-discount",
    buttonText: "Verify & Save",
    order: 5,
    isActive: false,
    groupActive: true,
    startDate: new Date("2024-01-15"),
    endDate: new Date("2024-12-15"),
  },

  // Category page carousels
  {
    name: "category-page",
    title: "Smart Home Revolution",
    description:
      "Transform your home with cutting-edge smart devices. From voice assistants to smart thermostats and security systems.",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200",
    link: "/categories/smart-home",
    buttonText: "Explore Smart Home",
    order: 1,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-03-15"),
    endDate: new Date("2024-10-15"),
  },
  {
    name: "category-page",
    title: "Fitness & Wellness Zone",
    description:
      "Achieve your fitness goals with our premium exercise equipment, smartwatches, and wellness products for a healthier lifestyle.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200",
    link: "/categories/fitness-wellness",
    buttonText: "Get Fit Now",
    order: 2,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
  },
  {
    name: "category-page",
    title: "Professional Photography Gear",
    description:
      "Capture life's moments with professional cameras, lenses, and accessories from top brands like Canon, Nikon, and Sony.",
    image:
      "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=1200",
    link: "/categories/photography",
    buttonText: "Browse Cameras",
    order: 3,
    isActive: false,
    groupActive: true,
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-08-01"),
  },
  {
    name: "category-page",
    title: "Kitchen Appliances & Cookware",
    description:
      "Upgrade your culinary experience with premium kitchen appliances, professional cookware, and innovative cooking gadgets.",
    image:
      "https://images.unsplash.com/photo-1556909114-4106b2158f0e?w=1200",
    link: "/categories/kitchen",
    buttonText: "Cook Better",
    order: 4,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-11-30"),
  },
  {
    name: "category-page",
    title: "Outdoor Adventure Gear",
    description:
      "Gear up for your next adventure with camping equipment, hiking gear, and outdoor essentials from trusted brands.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200",
    link: "/categories/outdoor",
    buttonText: "Start Adventure",
    order: 5,
    isActive: false,
    groupActive: true,
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-09-30"),
  },

  // Product page carousels
  {
    name: "product-page",
    title: "Related Products You'll Love",
    description:
      "Discover similar products that complement your selection. Handpicked recommendations based on your browsing history.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200",
    link: "/recommended",
    buttonText: "View Similar",
    order: 1,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
  },
  {
    name: "product-page",
    title: "Customers Also Bought",
    description:
      "See what other customers purchased along with this item. Perfect combinations and bundle deals available.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200",
    link: "/frequently-bought-together",
    buttonText: "Add Bundle",
    order: 2,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
  },
  {
    name: "product-page",
    title: "Extended Warranty Available",
    description:
      "Protect your investment with our comprehensive extended warranty plans. Coverage up to 3 years with accidental damage protection.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200",
    link: "/warranty-plans",
    buttonText: "Get Protection",
    order: 3,
    isActive: false,
    groupActive: true,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
  },

  // Special events page carousels
  {
    name: "special-events",
    title: "Valentine's Day Collection",
    description:
      "Show your love with our romantic Valentine's Day collection. Perfect gifts for your special someone with free gift wrapping.",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1200",
    link: "/valentines-day",
    buttonText: "Shop Romance",
    order: 1,
    isActive: false,
    groupActive: true,
    startDate: new Date("2024-01-20"),
    endDate: new Date("2024-02-15"),
  },
  {
    name: "special-events",
    title: "Mother's Day Special",
    description:
      "Celebrate Mom with our curated collection of beauty, fashion, and home items. Express shipping available for last-minute shoppers.",
    image:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=1200",
    link: "/mothers-day",
    buttonText: "Honor Mom",
    order: 2,
    isActive: true,
    groupActive: false, // This group is inactive
    startDate: new Date("2024-04-15"),
    endDate: new Date("2024-05-15"),
  },
  {
    name: "special-events",
    title: "Graduation Gifts 2024",
    description:
      "Congratulate the graduate with meaningful gifts. Tech gadgets, professional accessories, and milestone keepsakes.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=1200",
    link: "/graduation-gifts",
    buttonText: "Celebrate Success",
    order: 3,
    isActive: true,
    groupActive: false, // This group is inactive
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-06-30"),
  },
  {
    name: "special-events",
    title: "Summer Wedding Season",
    description:
      "Find the perfect wedding guest attire and gifts for the upcoming wedding season. Elegant dresses, suits, and gift ideas.",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=1200",
    link: "/wedding-season",
    buttonText: "Wedding Shop",
    order: 4,
    isActive: false,
    groupActive: false, // This group is inactive
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-09-30"),
  },

  // Brand showcase carousels
  {
    name: "brand-showcase",
    title: "Apple Premium Experience",
    description:
      "Discover the complete Apple ecosystem. iPhones, MacBooks, iPads, and accessories with exclusive store benefits and AppleCare+.",
    image:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200",
    link: "/brands/apple",
    buttonText: "Explore Apple",
    order: 1,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
  },
  {
    name: "brand-showcase",
    title: "Samsung Innovation Hub",
    description:
      "Experience Samsung's cutting-edge technology. Galaxy smartphones, QLED TVs, home appliances, and smart devices.",
    image:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=1200",
    link: "/brands/samsung",
    buttonText: "Samsung Store",
    order: 2,
    isActive: true,
    groupActive: true,
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
  },
  {
    name: "brand-showcase",
    title: "Nike Athletic Performance",
    description:
      "Just Do It with Nike's latest athletic wear, running shoes, and sports equipment. Performance gear for every athlete.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200",
    link: "/brands/nike",
    buttonText: "Shop Nike",
    order: 3,
    isActive: false,
    groupActive: true,
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-10-31"),
  },

  // Seasonal carousels
  {
    name: "seasonal",
    title: "Spring Cleaning Essentials",
    description:
      "Refresh your home this spring with cleaning supplies, organization solutions, and home improvement tools.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200",
    link: "/spring-cleaning",
    buttonText: "Clean & Organize",
    order: 1,
    isActive: false,
    groupActive: true,
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-05-31"),
  },
  {
    name: "seasonal",
    title: "Winter Clearance - Last Call",
    description:
      "Final opportunity to save on winter items! Coats, boots, heaters, and seasonal decor at rock-bottom prices.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200",
    link: "/winter-clearance",
    buttonText: "Final Sale",
    order: 2,
    isActive: false,
    groupActive: true,
    startDate: new Date("2024-02-15"),
    endDate: new Date("2024-03-15"),
  }
];

module.exports = carouselData;
