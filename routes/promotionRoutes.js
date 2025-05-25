const express = require('express');
const router = express.Router();
const {get_all_active_promotions} = require('../controllers/promotionController');

// Route to get all active promotions
router.get('/active-promotions', get_all_active_promotions);

module.exports = router; 