const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product name"],
      trim: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Please provide a product description"],
    },
    oldPrice: {
      type: Number,
      min: [0, "Price cannot be negative"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price"],
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    images: [
      {
        type: String,
        required: [true, "Please provide at least one image"],
      },
    ],
    stock: {
      type: Number,
      min: [0, "Stock cannot be negative"],
      default: 0,
    },
    stockShortage: {
      type: Number,
      min: [0, "Stock shortage cannot be negative"],
      default: 0,
    },
    stockStatus: {
      type: String,
      enum: ["In Stock", "Out of Stock", "Low Stock"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    specifications: {
      type: Map,
      of: String,
    },
  },
  {
    timestamps: true,
  }
);

// Create slug from name before saving
productSchema.pre("save", function (next) {
  this.slug =
    this.name.toLowerCase().replace(/[^a-zA-Z0-9&)]/g, "-") + "-" + this._id;
  next();
});

productSchema.pre("save", function (next) {
  if (this.stock === 0) {
    this.stockStatus = "Out of Stock";
  } else if (this.stock <= this.stockShortage) {
    this.stockStatus = "Low Stock";
  } else if (this.stock >= this.stockShortage) {
    this.stockStatus = "In Stock";
  }
  next();
});

// ✅ Indexes for performance
productSchema.index({ name: 1 });
productSchema.index({ slug: 1 }, { unique: true });
productSchema.index({ category: 1 });
productSchema.index({ isActive: 1 });
productSchema.index({ stockStatus: 1 });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
