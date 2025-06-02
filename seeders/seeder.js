const mongoose = require("mongoose");
const Category = require("../models/Category");
const Product = require("../models/Product");
const User = require("../models/User");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const Carousel = require("../models/Carousel");
const Promotion = require("../models/Promotion");
const ProductSale = require("../models/ProductSale");
const Role = require("../models/Role");

const dotenv = require("dotenv");
dotenv.config();

const categorieData = require("./data/categories");
const productData = require("./data/products");
const userData = require("./data/users");
const cartData = require("./data/carts");
const orderData = require("./data/orders");
const carouselData = require("./data/carousels");
const promotionData = require("./data/promotions");
const rolesData = require("./data/roles");

const URL = process.env.MONGODB_URL;

const deleteData = async () => {
    const start = new Date();
    console.log(`Deleting all data from the database...`);
    await Category.deleteMany();
    console.log("Deleted all categories");

    await Product.deleteMany();
    console.log("Deleted all products");
    
    // await User.deleteMany();
    // console.log("Deleted all users");
    
    await Cart.deleteMany();
    console.log("Deleted all carts");
    
    await Order.deleteMany();
    console.log("Deleted all orders");
    
    await Carousel.deleteMany();
    console.log("Deleted all carousels");
    
    await Promotion.deleteMany();
    console.log("Deleted all promotions");

    await ProductSale.deleteMany();
    console.log("Deleted all product sales");

    await Role.deleteMany();
    console.log("Deleted all roles");

    const end = new Date();
    const duration = (end - start) / 1000; 
    console.log(`All data deleted successfully in ${duration} seconds`);
    console.log("--------------------------------------------------");
}

const insertCategories = async () => {
    const start = new Date();
    console.log(`Inserting categories...`);
    let i = 0;
    for (const data of categorieData) {
    const category = new Category(data);
    await category.save(); // This triggers the pre-save hook and generates slug properly
    i++;
    }
    const end = new Date();
    const duration = (end - start) / 1000; 
    console.log(`Inserted ${i} categories successfully in ${duration} seconds`);
    console.log("--------------------------------------------------");
}

const insertProducts = async () => {
    const start = new Date();
    console.log(`Inserting products...`);
    let i = 0;
    for (const data of productData) {
    const product = new Product(data);
    product.category = await Category.findOne({ name: data.category }).select(
        "_id"
    );
    await product.save();
    i++;
    }
    const end = new Date();
    const duration = (end - start) / 1000;
    console.log(`Inserted ${i} products successfully in ${duration} seconds`);
    console.log("--------------------------------------------------");
}

const insertUsers = async () => {
    const start = new Date();
    console.log(`Inserting users...`);
    let i = 0;
    for (const data of userData) {
        const user = new User(data);
        await user.save();
        i++;
        }
    const end = new Date();
    const duration = (end - start) / 1000;
    console.log(`Inserted ${i} users successfully in ${duration} seconds`);
    console.log("--------------------------------------------------");
}

const insertCarts = async () => {
    const start = new Date();
    console.log(`Inserting carts...`);
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
    const end = new Date();
    const duration = (end - start) / 1000;
    console.log(`Inserted ${i} carts successfully in ${duration} seconds`);
    console.log("--------------------------------------------------");
}

const insertOrders = async () => {
    const start = new Date();
    console.log(`Inserting orders...`);

    let i = 0;
    for (const data of orderData) {
        // Find the user ObjectId
        const userDoc = await User.findOne({}).select("_id");
        if (!userDoc) {
            console.log(`User not found: ${data.user}`);
            continue;
        }

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
    const end = new Date();
    const duration = (end - start) / 1000;
        console.log(`Inserted ${i} orders successfully in ${duration} seconds`);
    console.log("--------------------------------------------------");
}

const insertCarousels = async () => {
    const start = new Date();
    console.log(`Inserting carousels...`);
    let i = 0;
    for (const data of carouselData) {
    const carousel = new Carousel(data);
    await carousel.save();
    i++;
    }
    const end = new Date();
    const duration = (end - start) / 1000;
    console.log(`Inserted ${i} carousels successfully in ${duration} seconds`);
    console.log("--------------------------------------------------");
}

const insertPromotions = async () => {
    const start = new Date();
    console.log(`Inserting promotions...`);
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
    const end = new Date();
    const duration = (end - start) / 1000;
    console.log(`Inserted ${i} promotions successfully in ${duration} seconds`);
    console.log("--------------------------------------------------");
}

const insertRoles = async () => {
    const start = new Date();
    console.log(`Inserting roles...`);
    let i = 0;
    for (const role of rolesData) {
        const newRole = new Role(role);
        await newRole.save();
        i++;
    }
    const end = new Date();
    const duration = (end - start) / 1000;
    console.log(`Inserted ${i} roles successfully in ${duration} seconds`);
    console.log("--------------------------------------------------");
}

const seedData = async () => {
    try {

        await mongoose.connect(URL);
        console.log("Connected to MongoDB");

        await deleteData();

        await insertCategories();

        await insertProducts();

        await insertOrders();

        await insertCarousels();

        await insertPromotions();

        await insertRoles();
        

        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");

    } catch (error) {
        
        console.log("Error seeding categories", error);
        await mongoose.disconnect();
    }
};

seedData();
