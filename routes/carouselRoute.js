const express = require('express');
const router = express.Router();
const {get_all_active_carousels} = require('../controllers/carouselController');

// Define the route for getting active carousels
router.get('/active-carousels', get_all_active_carousels);

// Export the router
module.exports = router;