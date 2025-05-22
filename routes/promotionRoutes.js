const express = require('express');
const router = express.Router();
const { getAllPromotions } = require('../controllers/promotionController');

// @route   GET /api/promotions
// @desc    Get all promotions with remaining time
// @access  Public
router.get('/', getAllPromotions);

module.exports = router; 