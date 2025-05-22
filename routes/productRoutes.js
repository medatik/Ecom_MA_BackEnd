const express = require('express');
const router = express.Router();
const { 
    getAllProducts,
    getProductBySlug
} = require('../controllers/productController');

// @route   GET /api/products
// @desc    Get all products with filters
// @access  Public
router.get('/', getAllProducts);

// @route   GET /api/products/:slug
// @desc    Get product by slug
// @access  Public
router.get('/:slug', getProductBySlug);

module.exports = router; 