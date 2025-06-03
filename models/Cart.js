const mongoose = require("mongoose");
const Product = require("./Product"); 

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity cannot be less than 1"],
        },
      },
    ],
    totalAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Calculate total amount before saving
cartSchema.pre("save", async function (next) {
  try {
    if (this.items && this.items.length > 0) {
      let total = 0;
      for (const item of this.items) {
        const product = await Product.findById(item.product);
        if (product) {
          total += product.price * item.quantity;
        }
      }
      this.totalAmount = total;
    } else {
      this.totalAmount = 0;
    }
    next();
  } catch (error) {
    next(error);
  }
});

// ✅ Indexes for performance
cartSchema.index({ user: 1 });
cartSchema.index({ "items.product": 1 });

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
