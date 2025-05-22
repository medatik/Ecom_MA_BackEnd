const productData = [
    {
        name: "iPhone 15 Pro Max",
        description:
        "The most advanced iPhone ever with titanium design, A17 Pro chip, and professional camera system",
        oldPrice: 1299.99,
        price: 1199.99,
        category: "Electronics",
        images: [
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        ],
        stock: 45,
        isActive: true,
        specifications: new Map([
        ["Storage", "256GB"],
        ["Color", "Natural Titanium"],
        ["Display", "6.7-inch Super Retina XDR"],
        ["Camera", "48MP Main + 12MP Ultra Wide + 12MP Telephoto"],
        ["Battery", "Up to 29 hours video playback"],
        ["Connectivity", "5G, Wi-Fi 6E, Bluetooth 5.3"],
        ]),
    },
    {
        name: "Samsung Galaxy S24 Ultra",
        description:
        "Premium Android smartphone with S Pen, advanced AI features, and professional-grade camera",
        oldPrice: 1399.99,
        price: 1299.99,
        category: "Electronics",
        images: [
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500",
        ],
        stock: 38,
        isActive: true,
        specifications: new Map([
        ["Storage", "512GB"],
        ["Color", "Titanium Black"],
        ["Display", "6.8-inch Dynamic AMOLED 2X"],
        ["Camera", "200MP Main + 50MP Periscope + 12MP Ultra Wide"],
        ["RAM", "12GB"],
        ["S Pen", "Included"],
        ]),
    },
    {
        name: "Google Pixel 8 Pro",
        description:
        "AI-powered smartphone with exceptional computational photography and pure Android experience",
        price: 999.99,
        category: "Electronics",
        images: [
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500",
        ],
        stock: 52,
        isActive: false,
        specifications: new Map([
        ["Storage", "128GB"],
        ["Color", "Obsidian"],
        ["Display", "6.7-inch LTPO OLED"],
        ["Processor", "Google Tensor G3"],
        ["Camera", "50MP Main + 48MP Ultra Wide + 48MP Telephoto"],
        ["AI Features", "Magic Eraser, Face Unblur, Live Translate"],
        ]),
    },

    {
        name: "MacBook Pro 16-inch M3 Max",
        description:
        "Ultimate creative powerhouse with M3 Max chip, Liquid Retina XDR display, and all-day battery life",
        oldPrice: 3999.99,
        price: 3799.99,
        category: "Electronics",
        images: [
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
        ],
        stock: 18,
        isActive: true,
        specifications: new Map([
        ["Processor", "Apple M3 Max"],
        ["Memory", "36GB Unified Memory"],
        ["Storage", "1TB SSD"],
        ["Display", "16.2-inch Liquid Retina XDR"],
        ["Graphics", "40-core GPU"],
        ["Ports", "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3"],
        ]),
    },
    {
        name: "Dell XPS 13 Plus",
        description:
        "Premium ultrabook with InfinityEdge display, haptic touchpad, and cutting-edge design",
        price: 1499.99,
        category: "Electronics",
        images: [
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        ],
        stock: 25,
        isActive: true,
        specifications: new Map([
        ["Processor", "Intel Core i7-1360P"],
        ["Memory", "16GB LPDDR5"],
        ["Storage", "512GB PCIe NVMe SSD"],
        ["Display", "13.4-inch OLED 3.5K"],
        ["Weight", "2.73 lbs"],
        ["Battery", "Up to 12 hours"],
        ]),
    },
    {
        name: "Gaming Desktop PC - RTX 4080",
        description:
        "High-performance gaming desktop with NVIDIA RTX 4080, Intel i7, and liquid cooling",
        oldPrice: 2899.99,
        price: 2599.99,
        category: "Electronics",
        images: [
        "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=500",
        ],
        stock: 12,
        isActive: true,
        specifications: new Map([
        ["Processor", "Intel Core i7-13700KF"],
        ["Graphics", "NVIDIA GeForce RTX 4080"],
        ["Memory", "32GB DDR5"],
        ["Storage", "1TB NVMe SSD + 2TB HDD"],
        ["Cooling", "Liquid CPU Cooler"],
        ["Case", "Tempered Glass RGB"],
        ]),
    },

    {
        name: "AirPods Pro 2nd Generation",
        description:
        "Revolutionary wireless earbuds with next-level Active Noise Cancellation and Spatial Audio",
        oldPrice: 279.99,
        price: 249.99,
        category: "Electronics",
        images: [
        "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=500",
        ],
        stock: 85,
        isActive: true,
        specifications: new Map([
        ["Noise Cancellation", "Active Noise Cancellation"],
        ["Battery Life", "6 hours + 24 hours with case"],
        ["Connectivity", "Bluetooth 5.3"],
        ["Water Resistance", "IPX4"],
        ["Spatial Audio", "Yes"],
        ["Charging", "Lightning, Wireless, MagSafe"],
        ]),
    },
    {
        name: "Sony WH-1000XM5 Headphones",
        description:
        "Industry-leading noise canceling headphones with exceptional sound quality and comfort",
        price: 399.99,
        category: "Electronics",
        images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        ],
        stock: 42,
        isActive: true,
        specifications: new Map([
        ["Noise Cancellation", "Industry Leading"],
        ["Battery Life", "30 hours"],
        ["Connectivity", "Bluetooth 5.2, NFC"],
        ["Quick Charge", "3 min = 3 hours playback"],
        ["Voice Assistant", "Alexa, Google Assistant"],
        ["Weight", "250g"],
        ]),
    },
    {
        name: "Marshall Acton III Bluetooth Speaker",
        description:
        "Iconic Marshall design meets modern connectivity with rich, clear sound",
        price: 279.99,
        category: "Electronics",
        images: [
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
        ],
        stock: 28,
        isActive: true,
        specifications: new Map([
        ["Connectivity", "Bluetooth 5.2"],
        ["Power", "30W Class D Amplifier"],
        ["Controls", "Analog knobs"],
        ["Design", "Classic Marshall"],
        ["Dimensions", "260 x 160 x 140mm"],
        ["Weight", "2.85kg"],
        ]),
    },

    {
        name: "Premium Cotton Polo Shirt",
        description:
        "Classic fit polo shirt made from premium Pima cotton with moisture-wicking properties",
        oldPrice: 89.99,
        price: 69.99,
        category: "Clothing & Fashion",
        images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        ],
        stock: 65,
        isActive: true,
        specifications: new Map([
        ["Material", "100% Pima Cotton"],
        ["Fit", "Classic Fit"],
        ["Care", "Machine Washable"],
        ["Colors Available", "Navy, White, Black, Gray"],
        ["Sizes", "S, M, L, XL, XXL"],
        ["Features", "Moisture-wicking, Wrinkle-resistant"],
        ]),
    },
    {
        name: "Slim Fit Denim Jeans",
        description:
        "Modern slim-fit jeans with stretch denim for comfort and style",
        price: 119.99,
        category: "Clothing & Fashion",
        images: ["https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"],
        stock: 48,
        isActive: false,
        specifications: new Map([
        ["Material", "98% Cotton, 2% Elastane"],
        ["Fit", "Slim Fit"],
        ["Wash", "Dark Indigo"],
        ["Rise", "Mid Rise"],
        ["Leg Opening", "14 inches"],
        ["Features", "Stretch denim, Fade-resistant"],
        ]),
    },

    {
        name: "Floral Maxi Dress",
        description:
        "Elegant floral maxi dress perfect for summer occasions with flowing silhouette",
        oldPrice: 149.99,
        price: 119.99,
        category: "Clothing & Fashion",
        images: [
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500",
        ],
        stock: 35,
        isActive: true,
        specifications: new Map([
        ["Material", "Chiffon Blend"],
        ["Length", "Maxi (Floor Length)"],
        ["Sleeves", "Short Sleeves"],
        ["Pattern", "Floral Print"],
        ["Occasion", "Casual, Semi-formal"],
        ["Care", "Hand wash recommended"],
        ]),
    },
    {
        name: "Cashmere Blend Sweater",
        description: "Luxurious cashmere blend sweater with ribbed cuffs and hem",
        price: 189.99,
        category: "Clothing & Fashion",
        images: ["https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=500"],
        stock: 29,
        isActive: true,
        specifications: new Map([
        ["Material", "70% Cashmere, 30% Wool"],
        ["Fit", "Regular Fit"],
        ["Neckline", "Crew Neck"],
        ["Sleeve Length", "Long Sleeve"],
        ["Care", "Dry Clean Only"],
        ["Colors", "Beige, Navy, Charcoal"],
        ]),
    },

    {
        name: "Air Max Running Shoes",
        description:
        "High-performance running shoes with air cushioning and breathable mesh upper",
        oldPrice: 179.99,
        price: 149.99,
        category: "Clothing & Fashion",
        images: ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"],
        stock: 72,
        isActive: true,
        specifications: new Map([
        ["Type", "Running Shoes"],
        ["Sole", "Air Max cushioning"],
        ["Upper", "Breathable mesh"],
        ["Support", "Arch support"],
        ["Closure", "Lace-up"],
        ["Suitable for", "Running, Training, Casual"],
        ]),
    },
    {
        name: "Leather Oxford Dress Shoes",
        description:
        "Classic leather oxford shoes perfect for formal occasions and business wear",
        price: 249.99,
        category: "Clothing & Fashion",
        images: ["https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"],
        stock: 33,
        isActive: true,
        specifications: new Map([
        ["Material", "Genuine Leather"],
        ["Style", "Oxford"],
        ["Sole", "Leather with rubber heel"],
        ["Color", "Black, Brown"],
        ["Occasion", "Formal, Business"],
        ["Care", "Leather conditioner recommended"],
        ]),
    },

    {
        name: "Ergonomic Executive Office Chair",
        description:
        "Premium executive chair with lumbar support, memory foam, and adjustable features",
        oldPrice: 599.99,
        price: 449.99,
        category: "Home & Garden",
        images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
        ],
        stock: 22,
        isActive: true,
        specifications: new Map([
        ["Material", "Leather and Mesh"],
        ["Weight Capacity", "300 lbs"],
        ["Adjustments", "Height, Tilt, Armrests"],
        ["Features", "Lumbar Support, Memory Foam"],
        ["Base", "5-star aluminum base"],
        ["Warranty", "5 years"],
        ]),
    },
    {
        name: "Modern Coffee Table",
        description:
        "Sleek modern coffee table with tempered glass top and wooden legs",
        price: 329.99,
        category: "Home & Garden",
        images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500"],
        stock: 15,
        isActive: true,
        specifications: new Map([
        ["Material", "Tempered Glass + Oak Wood"],
        ["Dimensions", '48" L x 24" W x 16" H'],
        ["Shape", "Rectangular"],
        ["Style", "Modern/Contemporary"],
        ["Assembly", "Required"],
        ["Weight", "65 lbs"],
        ]),
    },

    {
        name: "Professional Stand Mixer",
        description:
        "Heavy-duty stand mixer with multiple attachments for all your baking needs",
        oldPrice: 399.99,
        price: 349.99,
        category: "Home & Garden",
        images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
        ],
        stock: 18,
        isActive: true,
        specifications: new Map([
        ["Capacity", "6 Quart Bowl"],
        ["Power", "575 Watts"],
        ["Speeds", "10 Speeds"],
        ["Attachments", "Dough Hook, Wire Whip, Flat Beater"],
        ["Material", "Die-cast Metal"],
        ["Colors", "White, Black, Red, Silver"],
        ]),
    },
    {
        name: "Smart Coffee Maker",
        description:
        "WiFi-enabled coffee maker with app control and programmable brewing",
        price: 199.99,
        category: "Home & Garden",
        images: [
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
        ],
        stock: 31,
        isActive: false,
        specifications: new Map([
        ["Capacity", "12 cups"],
        ["Connectivity", "WiFi enabled"],
        ["Features", "Programmable, Auto shut-off"],
        ["Filter", "Permanent gold-tone filter"],
        ["Control", "App control + Manual"],
        ["Warranty", "3 years"],
        ]),
    },

    {
        name: "Adjustable Dumbbell Set",
        description:
        "Complete adjustable dumbbell set with quick-change weight system",
        oldPrice: 899.99,
        price: 749.99,
        category: "Sports & Outdoors",
        images: [
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
        ],
        stock: 14,
        isActive: true,
        specifications: new Map([
        ["Weight Range", "10-90 lbs per dumbbell"],
        ["Adjustment", "Quick-change dial system"],
        ["Space Saving", "Replaces 34 dumbbells"],
        ["Material", "Cast iron with rubber coating"],
        ["Warranty", "2 years"],
        ["Dimensions", '16.9" L x 8.3" W x 9" H'],
        ]),
    },
    {
        name: "Yoga Mat Premium",
        description:
        "Extra thick yoga mat with superior grip and cushioning for all yoga practices",
        price: 79.99,
        category: "Sports & Outdoors",
        images: [
        "https://images.unsplash.com/photo-1506629905607-ced3fdc74db6?w=500",
        ],
        stock: 58,
        isActive: true,
        specifications: new Map([
        ["Thickness", "6mm"],
        ["Material", "TPE (Eco-friendly)"],
        ["Dimensions", '72" L x 24" W'],
        ["Features", "Non-slip, Sweat-resistant"],
        ["Colors", "Purple, Blue, Green, Pink"],
        ["Care", "Easy to clean"],
        ]),
    },

    {
        name: "Wireless Bluetooth Headphones",
        description:
        "Over-ear wireless headphones with active noise cancellation and long battery life",
        oldPrice: 199.99,
        price: 159.99,
        category: "Books & Media",
        images: [
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
        ],
        stock: 41,
        isActive: false,
        specifications: new Map([
        ["Battery Life", "40 hours"],
        ["Noise Cancellation", "Active ANC"],
        ["Connectivity", "Bluetooth 5.0"],
        ["Charging", "USB-C fast charging"],
        ["Weight", "280g"],
        ["Comfort", "Memory foam ear cushions"],
        ]),
    },
];

module.exports = productData;
