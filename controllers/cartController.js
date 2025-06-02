const mongoose = require('mongoose');
const Cart = require('../models/cartModel');

exports.addToCart = async (req, res) => {
    console.log("Adding to cart");
    console.log("userId:", req.user_id);
}