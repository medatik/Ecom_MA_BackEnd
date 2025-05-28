const express = require('express');
const router = express.Router();
const { 
    getAllProducts,
    getProductBySlugOrId,
    getProductFeatures
} = require('../controllers/productController');
const { ClerkExpressWithAuth } = require('@clerk/clerk-sdk-node');

const requireAuth = ClerkExpressWithAuth();

// GET /api/products
router.get('/products', requireAuth, getAllProducts);
 
// GET /api/products/:slug-id
router.get('/products/:slugOrId', requireAuth, getProductBySlugOrId);

// GET /api/product-features
router.get('/product-features', getProductFeatures);

module.exports = router; 