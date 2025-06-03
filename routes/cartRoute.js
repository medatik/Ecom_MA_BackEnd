const express = require("express");
const router = express.Router();
const {
  addToCart,
  getCart,
  updateCart,
  clearCart,
  removeFromCart,
} = require("../controllers/cartController");
const requireAuth = require("../middleware/auth");

router.get("/get-cart", requireAuth, getCart);

router.post("/add-to-cart", requireAuth, addToCart);

router.put("/update-cart", requireAuth, updateCart);

router.put("/clear-cart", requireAuth, clearCart);

router.put("/remove-from-cart", requireAuth, removeFromCart);

module.exports = router;
