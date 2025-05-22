const carouselData = [
    {
        title: "iPhone 15 Pro Max - Now Available",
        description: "Experience the most advanced iPhone ever with titanium design, A17 Pro chip, and professional camera system. Limited time offer with free shipping!",
        image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200",
        link: "/products/iphone-15-pro-max",
        buttonText: "Shop Now",
        order: 1,
        isActive: true,
        startDate: new Date('2024-01-15'),
        endDate: new Date('2024-12-31')
    },
    {
        title: "Gaming Desktop Sale - Up to 30% Off",
        description: "Build your dream gaming setup with our high-performance gaming desktops featuring NVIDIA RTX 4080 and Intel i7 processors. Don't miss out!",
        image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=1200",
        link: "/products/gaming-desktop-rtx-4080",
        buttonText: "Get Deal",
        order: 2,
        isActive: true,
        startDate: new Date('2024-02-01'),
        endDate: new Date('2024-06-30')
    },
    {
        title: "MacBook Pro M3 Max - Creative Powerhouse",
        description: "Ultimate creative powerhouse with M3 Max chip, Liquid Retina XDR display, and all-day battery life. Perfect for professionals and creators.",
        image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=1200",
        link: "/products/macbook-pro-16-m3-max",
        buttonText: "Learn More",
        order: 3,
        isActive: true,
        startDate: new Date('2024-03-01'),
        endDate: new Date('2024-08-31')
    },
    {
        title: "Summer Fashion Collection",
        description: "Discover our latest summer collection featuring floral maxi dresses, premium cotton polo shirts, and stylish casual wear for the perfect summer look.",
        image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200",
        link: "/categories/clothing-fashion",
        buttonText: "Shop Collection",
        order: 4,
        isActive: true,
        startDate: new Date('2024-04-15'),
        endDate: new Date('2024-09-15')
    },
    {
        title: "Audio Excellence - Premium Headphones",
        description: "Immerse yourself in superior sound quality with our selection of premium headphones including Sony WH-1000XM5 and AirPods Pro 2nd Generation.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200",
        link: "/categories/audio-devices",
        buttonText: "Explore Audio",
        order: 5,
        isActive: true,
        startDate: new Date('2024-05-01'),
        endDate: new Date('2024-10-31')
    },
    {
        title: "Black Friday Mega Sale - 50% Off",
        description: "Biggest sale of the year! Get up to 50% off on electronics, fashion, home & garden items. Limited time offer - shop now before it's gone!",
        image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200",
        link: "/sale/black-friday",
        buttonText: "Shop Sale",
        order: 6,
        isActive: false,
        startDate: new Date('2023-11-20'),
        endDate: new Date('2023-11-30')
    },
    {
        title: "Holiday Gift Guide 2023",
        description: "Find the perfect gifts for your loved ones with our curated holiday collection. From tech gadgets to fashion accessories, we have it all!",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200",
        link: "/gift-guide",
        buttonText: "View Gifts",
        order: 7,
        isActive: false,
        startDate: new Date('2023-12-01'),
        endDate: new Date('2024-01-05')
    },
    {
        title: "Back to School Essentials",
        description: "Get ready for the new school year with our back-to-school collection featuring laptops, backpacks, and study accessories at great prices.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200",
        link: "/back-to-school",
        buttonText: "Shop Essentials",
        order: 8,
        isActive: false,
        startDate: new Date('2023-09-01'),
        endDate: new Date('2023-09-15')
    }
];

module.exports = carouselData;