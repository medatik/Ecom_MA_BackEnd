const express = require("express");
const router = express.Router();
const { addToCart } = require("../controllers/cartController");
const requireAuth = require("../middleware/auth");

router.post("/add-to-cart", requireAuth, addToCart);

module.exports = router;
