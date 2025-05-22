const express = require('express');
const router = express.Router();
const { 
    getAllCategories,
    getCategoryBySlug
} = require('../controllers/categoryController');

// @route   GET /api/categories
// @desc    Get all active categories
// @access  Public
router.get('/', getAllCategories);

// @route   GET /api/categories/:slug
// @desc    Get category by slug with its products
// @access  Public
router.get('/:slug', getCategoryBySlug);

module.exports = router; 