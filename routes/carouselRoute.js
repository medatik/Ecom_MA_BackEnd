const express = require('express');
const router = express.Router();
const {get_active_carousels_by_name} = require('../controllers/carouselController');

// Define the route for getting active carousels
router.get('/carousels-by-name', get_active_carousels_by_name);

// Export the router
module.exports = router;