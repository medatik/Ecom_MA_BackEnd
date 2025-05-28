const express = require('express');
const router = express.Router();
const { 
    getAllProducts,
    getProductBySlugOrId,
    getProductFeatures
} = require('../controllers/productController');

// GET /api/products
router.get('/products', getAllProducts);

// GET /api/products/:slug-id
router.get('/products/:slugOrId', getProductBySlugOrId);

// GET /api/product-features
router.get('/product-features', getProductFeatures);

module.exports = router; 