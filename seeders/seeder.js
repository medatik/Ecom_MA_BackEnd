const mongoose = require("mongoose");
const Category = require("../models/Category");
const Product = require("../models/Product");
const User = require("../models/User");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Carousel = require("../models/Carousel");
const Promotion = require("../models/Promotion");

const dotenv = require("dotenv");
dotenv.config();

const categorieData = require("./data/categories");
const productData = require("./data/products");
const userData = require("./data/users");
const cartData = require("./data/carts");
const orderData = require("./data/orders");
const carouselData = require("./data/carousels");
const promotionData = require("./data/promotions");

const URL = process.env.MONGODB_URL;

const deleteData = async () => {

    await Category.deleteMany();
    console.log("Deleted all categories");

    await Product.deleteMany();
    console.log("Deleted all products");
    
    await User.deleteMany();
    console.log("Deleted all users");
    
    await Cart.deleteMany();
    console.log("Deleted all carts");
    
    await Order.deleteMany();
    console.log("Deleted all orders");
    
    await Carousel.deleteMany();
    console.log("Deleted all carousels");
    
    await Promotion.deleteMany();
    console.log("Deleted all promotions");
}

const insertCategories = async () => {
    let i = 0;
    for (const data of categorieData) {
    const category = new Category(data);
    await category.save(); // This triggers the pre-save hook and generates slug properly
    i++;
    }
    console.log(`Inserted ${i} categories successfully`);
}

const insertProducts = async () => {
    let i = 0;
    for (const data of productData) {
    const product = new Product(data);
    product.category = await Category.findOne({ name: data.category }).select(
        "_id"
    );
    await product.save();
    i++;
    }
    console.log(`Inserted ${i} products successfully`);
}

const insertUsers = async () => {
    let i = 0;
    for (const data of userData) {
        const user = new User(data);
        await user.save();
        i++;
        }
        console.log(`Inserted ${i} users successfully`);
}

const insertCarts = async () => {
    let i = 0;
    for (const data of cartData) {
        // Find the user ObjectId
        const userDoc = await User.findOne({ name: data.user }).select("_id");
        if (!userDoc) {
            console.log(`User not found: ${data.user}`);
            continue;
        }

        // Create cart items with product ObjectIds
        const cartItems = [];
        for (const item of data.items) {
            const productDoc = await Product.findOne({ name: item.product }).select(
            "_id"
            );
            if (!productDoc) {
            console.log(`Product not found: ${item.product}`);
            continue;
            }
            cartItems.push({
            product: productDoc._id,
            quantity: item.quantity,
            });
        }

        // Create cart with proper ObjectIds
        const cart = new Cart({
            user: userDoc._id,
            items: cartItems,
        });

        await cart.save();
        i++;
        }
        console.log(`Inserted ${i} carts successfully`);
}

const insertOrders = async () => {
    let i = 0;
    for (const data of orderData) {
        // Find the user ObjectId
        const userDoc = await User.findOne({ name: data.user }).select("_id");
        if (!userDoc) {
            console.log(`User not found: ${data.user}`);
            continue;
        }

        // Create cart items with product ObjectIds
        const orderItems = [];
        for (const item of data.items) {
            const productDoc = await Product.findOne({ name: item.product }).select(
            "_id"
            );
            if (!productDoc) {
            console.log(`Product not found: ${item.product}`);
            continue;
            }
            orderItems.push({
            product: productDoc._id,
            quantity: item.quantity,
            });
        }

        // Create order with proper ObjectIds
        const order = new Order({
            ...data,
            user: userDoc._id,
            items: orderItems,
        });

        await order.save();
        i++;
        }
        console.log(`Inserted ${i} orders successfully`);
}

const insertCarousels = async () => {
    let i = 0;
    for (const data of carouselData) {
    const carousel = new Carousel(data);
    await carousel.save();
    i++;
    }
    console.log(`Inserted ${i} carousels successfully`);
}

const insertPromotions = async () => {
    let i = 0;
    for (const promo of promotionData) {
        const promoDoc = { ...promo };
    
        // Resolve product names to ObjectIds
        if (promo.applicableProducts && promo.applicableProducts.length > 0) {
            const productDocs = await Product.find({ name: { $in: promo.applicableProducts } }).select("_id");
            promoDoc.applicableProducts = productDocs.map(p => p._id);
        }
    
        // Resolve category names to ObjectIds
        if (promo.applicableCategories && promo.applicableCategories.length > 0) {
            const categoryDocs = await Category.find({ name: { $in: promo.applicableCategories } }).select("_id");
            promoDoc.applicableCategories = categoryDocs.map(c => c._id);
        }
    
        const promotion = new Promotion(promoDoc);
        await promotion.save();
        i++;
    }
    console.log(`Inserted ${i} promotions successfully`);
}

const seedData = async () => {
    try {

        await mongoose.connect(URL);
        console.log("Connected to MongoDB");

        await deleteData();

        await insertCategories();

        await insertProducts();

        // This code is used to drop the index on the email field to avoid duplicate email error
        // await mongoose.connect(URL);
        // await mongoose.connection.collection("users").dropIndex("email_1");

        await insertUsers();

        await insertCarts();

        await insertOrders();

        await insertCarousels();

        await insertPromotions();
        

        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");

    } catch (error) {
        
        console.log("Error seeding categories", error);
        await mongoose.disconnect();
    }
};

seedData();
