const orderData = [      
    {
        user: "Charlie Green",
        items: [
        {
            product: "iPhone 15 Pro Max",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "United States",
            city: "New York",
            address: "123 Broadway Ave, Apt 4B",
        },
        ],
        status: "delivered",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234567",
        notes: "Leave at front door",
    },
    {
        user: "Charlie Chaplen",
        items: [
        {
            product: "Samsung Galaxy S24 Ultra",
            quantity: 1,
        },
        {
            product: "AirPods Pro 2nd Generation",
            quantity: 2,
        },
        ],
        shippingAddress: [
        {
            country: "Canada",
            city: "Toronto",
            address: "456 Queen Street West",
        },
        ],
        status: "shipped",
        paymentMethod: "paypal",
        paymentStatus: "completed",
        trackingNumber: "TRK001234568",
        notes: "Fragile items",
    },
    {
        user: "Larry kane",
        items: [
        {
            product: "MacBook Pro 16-inch M3 Max",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "United Kingdom",
            city: "London",
            address: "789 Oxford Street",
        },
        ],
        status: "processing",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234569",
        notes: "Business purchase",
    },
    {
        user: "harry kane",
        items: [
        {
            product: "Gaming Desktop PC - RTX 4080",
            quantity: 1,
        },
        {
            product: "Ergonomic Executive Office Chair",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Australia",
            city: "Sydney",
            address: "321 George Street",
        },
        ],
        status: "pending",
        paymentMethod: "debit_card",
        paymentStatus: "pending",
        trackingNumber: "",
        notes: "Gaming setup",
    },
    {
        user: "Jhon Cena",
        items: [
        {
            product: "Sony WH-1000XM5 Headphones",
            quantity: 1,
        },
        {
            product: "Marshall Acton III Bluetooth Speaker",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "United States",
            city: "Los Angeles",
            address: "654 Hollywood Blvd",
        },
        ],
        status: "delivered",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234570",
        notes: "Audio equipment",
    },
    {
        user: "Charlie Green",
        items: [
        {
            product: "Premium Cotton Polo Shirt",
            quantity: 3,
        },
        {
            product: "Slim Fit Denim Jeans",
            quantity: 2,
        },
        ],
        shippingAddress: [
        {
            country: "United States",
            city: "Chicago",
            address: "987 Michigan Avenue",
        },
        ],
        status: "shipped",
        paymentMethod: "paypal",
        paymentStatus: "completed",
        trackingNumber: "TRK001234571",
        notes: "Clothing order",
    },
    {
        user: "Charlie Chaplen",
        items: [
        {
            product: "Floral Maxi Dress",
            quantity: 1,
        },
        {
            product: "Cashmere Blend Sweater",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "France",
            city: "Paris",
            address: "123 Champs-Élysées",
        },
        ],
        status: "delivered",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234572",
        notes: "Gift for wife",
    },
    {
        user: "Larry kane",
        items: [
        {
            product: "Air Max Running Shoes",
            quantity: 2,
        },
        {
            product: "Yoga Mat Premium",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Germany",
            city: "Berlin",
            address: "456 Alexanderplatz",
        },
        ],
        status: "processing",
        paymentMethod: "debit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234573",
        notes: "Fitness gear",
    },
    {
        user: "harry kane",
        items: [
        {
            product: "Leather Oxford Dress Shoes",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Italy",
            city: "Rome",
            address: "789 Via del Corso",
        },
        ],
        status: "cancelled",
        paymentMethod: "credit_card",
        paymentStatus: "refunded",
        trackingNumber: "",
        notes: "Customer requested cancellation",
    },
    {
        user: "Jhon Cena",
        items: [
        {
            product: "Modern Coffee Table",
            quantity: 1,
        },
        {
            product: "Professional Stand Mixer",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Japan",
            city: "Tokyo",
            address: "321 Shibuya Crossing",
        },
        ],
        status: "pending",
        paymentMethod: "cash_on_delivery",
        paymentStatus: "pending",
        trackingNumber: "",
        notes: "Home improvement",
    },
    {
        user: "Charlie Green",
        items: [
        {
            product: "Adjustable Dumbbell Set",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "United States",
            city: "Miami",
            address: "654 Ocean Drive",
        },
        ],
        status: "shipped",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234574",
        notes: "Home gym setup",
    },
    {
        user: "Charlie Chaplen",
        items: [
        {
            product: "Dell XPS 13 Plus",
            quantity: 1,
        },
        {
            product: "Wireless Bluetooth Headphones",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Spain",
            city: "Madrid",
            address: "987 Gran Vía",
        },
        ],
        status: "delivered",
        paymentMethod: "paypal",
        paymentStatus: "completed",
        trackingNumber: "TRK001234575",
        notes: "Work laptop",
    },
    {
        user: "Larry kane",
        items: [
        {
            product: "Smart Coffee Maker",
            quantity: 1,
        },
        {
            product: "Premium Cotton Polo Shirt",
            quantity: 2,
        },
        ],
        shippingAddress: [
        {
            country: "Netherlands",
            city: "Amsterdam",
            address: "123 Dam Square",
        },
        ],
        status: "processing",
        paymentMethod: "debit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234576",
        notes: "Kitchen upgrade",
    },
    {
        user: "harry kane",
        items: [
        {
            product: "Google Pixel 8 Pro",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Brazil",
            city: "São Paulo",
            address: "456 Avenida Paulista",
        },
        ],
        status: "shipped",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234577",
        notes: "Phone upgrade",
    },
    {
        user: "Jhon Cena",
        items: [
        {
            product: "Floral Maxi Dress",
            quantity: 2,
        },
        {
            product: "Air Max Running Shoes",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Mexico",
            city: "Mexico City",
            address: "789 Zócalo",
        },
        ],
        status: "delivered",
        paymentMethod: "paypal",
        paymentStatus: "completed",
        trackingNumber: "TRK001234578",
        notes: "Family order",
    },
    {
        user: "Charlie Green",
        items: [
        {
            product: "Cashmere Blend Sweater",
            quantity: 1,
        },
        {
            product: "Leather Oxford Dress Shoes",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "South Korea",
            city: "Seoul",
            address: "321 Gangnam District",
        },
        ],
        status: "pending",
        paymentMethod: "credit_card",
        paymentStatus: "pending",
        trackingNumber: "",
        notes: "Formal wear",
    },
    {
        user: "Charlie Chaplen",
        items: [
        {
            product: "Ergonomic Executive Office Chair",
            quantity: 1,
        },
        {
            product: "Modern Coffee Table",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Singapore",
            city: "Singapore",
            address: "654 Orchard Road",
        },
        ],
        status: "processing",
        paymentMethod: "debit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234579",
        notes: "Office furniture",
    },
    {
        user: "Larry kane",
        items: [
        {
            product: "Professional Stand Mixer",
            quantity: 1,
        },
        {
            product: "Yoga Mat Premium",
            quantity: 3,
        },
        ],
        shippingAddress: [
        {
            country: "New Zealand",
            city: "Auckland",
            address: "987 Queen Street",
        },
        ],
        status: "delivered",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234580",
        notes: "Kitchen and yoga equipment",
    },
    {
        user: "harry kane",
        items: [
        {
            product: "Marshall Acton III Bluetooth Speaker",
            quantity: 2,
        },
        ],
        shippingAddress: [
        {
            country: "Sweden",
            city: "Stockholm",
            address: "123 Gamla Stan",
        },
        ],
        status: "shipped",
        paymentMethod: "paypal",
        paymentStatus: "completed",
        trackingNumber: "TRK001234581",
        notes: "Audio system",
    },
    {
        user: "Jhon Cena",
        items: [
        {
            product: "Smart Coffee Maker",
            quantity: 1,
        },
        {
            product: "Adjustable Dumbbell Set",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Norway",
            city: "Oslo",
            address: "456 Karl Johans gate",
        },
        ],
        status: "cancelled",
        paymentMethod: "credit_card",
        paymentStatus: "refunded",
        trackingNumber: "",
        notes: "Order cancelled by customer",
    },
    {
        user: "Charlie Green",
        items: [
        {
            product: "Slim Fit Denim Jeans",
            quantity: 1,
        },
        {
            product: "Premium Cotton Polo Shirt",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Denmark",
            city: "Copenhagen",
            address: "789 Strøget",
        },
        ],
        status: "processing",
        paymentMethod: "debit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234582",
        notes: "Casual wear",
    },
    {
        user: "Charlie Chaplen",
        items: [
        {
            product: "Samsung Galaxy S24 Ultra",
            quantity: 1,
        },
        {
            product: "Sony WH-1000XM5 Headphones",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Finland",
            city: "Helsinki",
            address: "321 Esplanadi",
        },
        ],
        status: "delivered",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234583",
        notes: "Tech bundle",
    },
    {
        user: "Larry kane",
        items: [
        {
            product: "iPhone 15 Pro Max",
            quantity: 1,
        },
        {
            product: "AirPods Pro 2nd Generation",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Belgium",
            city: "Brussels",
            address: "654 Grand Place",
        },
        ],
        status: "shipped",
        paymentMethod: "paypal",
        paymentStatus: "completed",
        trackingNumber: "TRK001234584",
        notes: "Apple ecosystem",
    },
    {
        user: "harry kane",
        items: [
        {
            product: "Gaming Desktop PC - RTX 4080",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Austria",
            city: "Vienna",
            address: "987 Ringstraße",
        },
        ],
        status: "pending",
        paymentMethod: "cash_on_delivery",
        paymentStatus: "pending",
        trackingNumber: "",
        notes: "Gaming PC build",
    },
    {
        user: "Jhon Cena",
        items: [
        {
            product: "Dell XPS 13 Plus",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Switzerland",
            city: "Zurich",
            address: "123 Bahnhofstrasse",
        },
        ],
        status: "processing",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234585",
        notes: "Business laptop",
    },
    {
        user: "Charlie Green",
        items: [
        {
            product: "Floral Maxi Dress",
            quantity: 1,
        },
        {
            product: "Cashmere Blend Sweater",
            quantity: 2,
        },
        ],
        shippingAddress: [
        {
            country: "Portugal",
            city: "Lisbon",
            address: "456 Rua Augusta",
        },
        ],
        status: "delivered",
        paymentMethod: "debit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234586",
        notes: "Fashion items",
    },
    {
        user: "Charlie Chaplen",
        items: [
        {
            product: "Air Max Running Shoes",
            quantity: 1,
        },
        {
            product: "Yoga Mat Premium",
            quantity: 2,
        },
        ],
        shippingAddress: [
        {
            country: "Greece",
            city: "Athens",
            address: "789 Syntagma Square",
        },
        ],
        status: "shipped",
        paymentMethod: "paypal",
        paymentStatus: "completed",
        trackingNumber: "TRK001234587",
        notes: "Fitness equipment",
    },
    {
        user: "Larry kane",
        items: [
        {
            product: "Leather Oxford Dress Shoes",
            quantity: 2,
        },
        ],
        shippingAddress: [
        {
            country: "Czech Republic",
            city: "Prague",
            address: "321 Wenceslas Square",
        },
        ],
        status: "cancelled",
        paymentMethod: "credit_card",
        paymentStatus: "refunded",
        trackingNumber: "",
        notes: "Size issue - cancelled",
    },
    {
        user: "harry kane",
        items: [
        {
            product: "Ergonomic Executive Office Chair",
            quantity: 2,
        },
        {
            product: "Modern Coffee Table",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Poland",
            city: "Warsaw",
            address: "654 Market Square",
        },
        ],
        status: "processing",
        paymentMethod: "debit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234588",
        notes: "Office setup",
    },
    {
        user: "Jhon Cena",
        items: [
        {
            product: "Professional Stand Mixer",
            quantity: 1,
        },
        {
            product: "Smart Coffee Maker",
            quantity: 1,
        },
        ],
        shippingAddress: [
        {
            country: "Hungary",
            city: "Budapest",
            address: "987 Váci Street",
        },
        ],
        status: "delivered",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234589",
        notes: "Kitchen appliances",
    },
    {
        user: "Charlie Green",
        items: [
        {
            product: "Marshall Acton III Bluetooth Speaker",
            quantity: 1,
        },
        {
            product: "Wireless Bluetooth Headphones",
            quantity: 1,
        },
        ],
        totalAmount: 439.98,
        shippingAddress: [
        {
            country: "Romania",
            city: "Bucharest",
            address: "123 Calea Victoriei",
        },
        ],
        status: "shipped",
        paymentMethod: "paypal",
        paymentStatus: "completed",
        trackingNumber: "TRK001234590",
        notes: "Audio devices",
    },
    {
        user: "Charlie Chaplen",
        items: [
        {
            product: "Adjustable Dumbbell Set",
            quantity: 1,
        },
        {
            product: "Yoga Mat Premium",
            quantity: 1,
        },
        ],
        totalAmount: 829.98,
        shippingAddress: [
        {
            country: "Bulgaria",
            city: "Sofia",
            address: "456 Vitosha Boulevard",
        },
        ],
        status: "pending",
        paymentMethod: "cash_on_delivery",
        paymentStatus: "pending",
        trackingNumber: "",
        notes: "Home gym equipment",
    },
    {
        user: "Larry kane",
        items: [
        {
            product: "Google Pixel 8 Pro",
            quantity: 1,
        },
        {
            product: "AirPods Pro 2nd Generation",
            quantity: 1,
        },
        ],
        totalAmount: 1249.98,
        shippingAddress: [
        {
            country: "Croatia",
            city: "Zagreb",
            address: "789 Ban Jelačić Square",
        },
        ],
        status: "processing",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234591",
        notes: "Mobile tech",
    },
    {
        user: "harry kane",
        items: [
        {
            product: "Premium Cotton Polo Shirt",
            quantity: 4,
        },
        {
            product: "Slim Fit Denim Jeans",
            quantity: 2,
        },
        ],
        totalAmount: 519.94,
        shippingAddress: [
        {
            country: "Serbia",
            city: "Belgrade",
            address: "321 Knez Mihailova",
        },
        ],
        status: "delivered",
        paymentMethod: "debit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234592",
        notes: "Clothing bulk order",
    },
    {
        user: "Jhon Cena",
        items: [
        {
            product: "MacBook Pro 16-inch M3 Max",
            quantity: 1,
        },
        {
            product: "Sony WH-1000XM5 Headphones",
            quantity: 1,
        },
        ],
        totalAmount: 4199.98,
        shippingAddress: [
        {
            country: "Slovenia",
            city: "Ljubljana",
            address: "654 Prešeren Square",
        },
        ],
        status: "shipped",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234593",
        notes: "Premium work setup",
    },
    {
        user: "Charlie Green",
        items: [
        {
            product: "Floral Maxi Dress",
            quantity: 3,
        },
        ],
        totalAmount: 359.97,
        shippingAddress: [
        {
            country: "Slovakia",
            city: "Bratislava",
            address: "987 Old Town Square",
        },
        ],
        status: "cancelled",
        paymentMethod: "paypal",
        paymentStatus: "refunded",
        trackingNumber: "",
        notes: "Customer changed mind",
    },
    {
        user: "Charlie Chaplen",
        items: [
        {
            product: "Gaming Desktop PC - RTX 4080",
            quantity: 1,
        },
        {
            product: "Ergonomic Executive Office Chair",
            quantity: 1,
        },
        ],
        totalAmount: 3049.98,
        shippingAddress: [
        {
            country: "Estonia",
            city: "Tallinn",
            address: "123 Town Hall Square",
        },
        ],
        status: "processing",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234594",
        notes: "Gaming and office setup",
    },
    {
        user: "Larry kane",
        items: [
        {
            product: "Dell XPS 13 Plus",
            quantity: 1,
        },
        {
            product: "Modern Coffee Table",
            quantity: 1,
        },
        ],
        totalAmount: 1829.98,
        shippingAddress: [
        {
            country: "Latvia",
            city: "Riga",
            address: "456 Freedom Monument",
        },
        ],
        status: "delivered",
        paymentMethod: "debit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234595",
        notes: "Work and home items",
    },
    {
        user: "harry kane",
        items: [
        {
            product: "iPhone 15 Pro Max",
            quantity: 2,
        },
        ],
        totalAmount: 2399.98,
        shippingAddress: [
        {
            country: "Lithuania",
            city: "Vilnius",
            address: "789 Cathedral Square",
        },
        ],
        status: "shipped",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234596",
        notes: "Family phones",
    },
    {
        user: "Jhon Cena",
        items: [
        {
            product: "Professional Stand Mixer",
            quantity: 1,
        },
        {
            product: "Cashmere Blend Sweater",
            quantity: 1,
        },
        {
            product: "Air Max Running Shoes",
            quantity: 1,
        },
        ],
        totalAmount: 689.97,
        shippingAddress: [
        {
            country: "Malta",
            city: "Valletta",
            address: "321 Republic Street",
        },
        ],
        status: "pending",
        paymentMethod: "cash_on_delivery",
        paymentStatus: "pending",
        trackingNumber: "",
        notes: "Mixed order",
    },
    {
        user: "Charlie Green",
        items: [
        {
            product: "Samsung Galaxy S24 Ultra",
            quantity: 1,
        },
        {
            product: "Marshall Acton III Bluetooth Speaker",
            quantity: 1,
        },
        ],
        totalAmount: 1579.98,
        shippingAddress: [
        {
            country: "Cyprus",
            city: "Nicosia",
            address: "654 Ledra Street",
        },
        ],
        status: "processing",
        paymentMethod: "paypal",
        paymentStatus: "completed",
        trackingNumber: "TRK001234597",
        notes: "Tech combo",
    },
    {
        user: "Charlie Chaplen",
        items: [
        {
            product: "Leather Oxford Dress Shoes",
            quantity: 1,
        },
        {
            product: "Premium Cotton Polo Shirt",
            quantity: 2,
        },
        ],
        totalAmount: 389.97,
        shippingAddress: [
        {
            country: "Luxembourg",
            city: "Luxembourg City",
            address: "987 Place d'Armes",
        },
        ],
        status: "delivered",
        paymentMethod: "credit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234598",
        notes: "Business attire",
    },
    {
        user: "Larry kane",
        items: [
        {
            product: "Adjustable Dumbbell Set",
            quantity: 1,
        },
        {
            product: "Yoga Mat Premium",
            quantity: 2,
        },
        ],
        totalAmount: 909.97,
        shippingAddress: [
        {
            country: "Iceland",
            city: "Reykjavik",
            address: "123 Laugavegur",
        },
        ],
        status: "shipped",
        paymentMethod: "debit_card",
        paymentStatus: "completed",
        trackingNumber: "TRK001234599",
        notes: "Complete fitness setup",
    },
    {
        user: "harry kane",
        items: [
        {
            product: "Smart Coffee Maker",
            quantity: 2,
        },
        {
            product: "Wireless Bluetooth Headphones",
            quantity: 1,
        },
        ],
        totalAmount: 559.97,
        shippingAddress: [
        {
            country: "Ireland",
            city: "Dublin",
            address: "456 Grafton Street",
        },
        ],
        status: "cancelled",
        paymentMethod: "credit_card",
        paymentStatus: "refunded",
        trackingNumber: "",
        notes: "Duplicate order - cancelled",
    },
    {
        user: "Jhon Cena",
        items: [
        {
            product: "Google Pixel 8 Pro",
            quantity: 1,
        },
        {
            product: "Sony WH-1000XM5 Headphones",
            quantity: 1,
        },
        {
            product: "Modern Coffee Table",
            quantity: 1,
        },
        ],
        totalAmount: 1729.97,
        shippingAddress: [
        {
            country: "United States",
            city: "Boston",
            address: "789 Newbury Street",
        },
        ],
        status: "processing",
        paymentMethod: "paypal",
        paymentStatus: "completed",
        trackingNumber: "TRK001234600",
        notes: "Tech and furniture combo",
    },
];

module.exports = orderData;
