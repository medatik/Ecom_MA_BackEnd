const express = require('express');
const router = express.Router();
const { 
    get_all_active_categories,
    get_products_by_category_id
} = require('../controllers/categoryController');

// GET /api/categories
router.get('/', get_all_active_categories);

// GET /api/categories/:slug
router.get('/:id', get_products_by_category_id);

module.exports = router; 