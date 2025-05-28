const express = require('express');
const router = express.Router();
const { 
    get_all_active_categories,
} = require('../controllers/categoryController');

// GET /api/categories
router.get('/categories', get_all_active_categories);

module.exports = router; 