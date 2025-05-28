const mongoose = require("mongoose");
const Product = require("./Product");
const ProductSale = require("./ProductSale");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
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
        price: {
          type: Number,
        },
      },
    ],
    totalAmount: {
      type: Number,
    },
    shippingAddress: [
      {
        country: String,
        city: String,
        address: String,
      },
    ],
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ["credit_card", "debit_card", "paypal", "cash_on_delivery"],
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

// Get the price of the product from the product model
orderSchema.pre("save", async function (next) {
  if (this.items && this.items.length > 0) {
    for (const item of this.items) {
      if (!item.price || item.price === 0) {
        const product = await Product.findById(item.product);
        if (!product) {
          return next(new Error("Product not found"));
        }
        item.price = product.price;
      }
    }
  }
  next();
});

// Calculate total amount before saving
orderSchema.pre("save", function (next) {
  if (this.items && this.items.length > 0) {
    this.totalAmount = this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
  next();
});

// insert the sales history into the ProductSales
// orderSchema.post("save", async function (doc) {
//   if (doc.items && doc.items.length > 0) {
//     for (const item of doc.items) {
//       try {
//         let productSale = await ProductSale.findOneAndUpdate(
//           { product: item.product },
//           { $inc: { totalSales: item.quantity } },
//           { upsert: true, new: true }
//         );

//         if (!productSale) {
//           productSale = await ProductSale.findOne({ product: item.product });
//           if (!productSale) {
//             console.error(`ProductSale not found or created for product ID ${item.product}`);
//             continue;
//           }
//         }

//         // Recalculate totalRevenue after totalSales update
//         const product = await Product.findById(item.product).select('price');
//         if (!product) {
//           console.error(`Product not found for ID ${item.product}`);
//           continue;
//         }

//         productSale.totalRevenue = product.price * productSale.totalSales;
//         await productSale.save();
//       } catch (error) {
//         console.error("Error updating product sale:", error);
//       }
//     }
//   }
// });

orderSchema.pre("save", async function (next){
  if (!this.isModified("items")) return next();
  if (!this.isNew) {
    const existiongOrder = await this.constructor.findById(this._id).select("items").lean();
    if (existiongOrder) {
      this._originalItems = existiongOrder.items; //_originalItems is a temporary variable to store the original items
    }
  }
  next();
});

orderSchema.post("save", async function (doc) {
  try{

    const prevItemsMap = {};
    if (this._originalItems && this._originalItems.length > 0) {
      for (const item of this._originalItems) {
        prevItemsMap[item.product.toString()] = item.quantity;
      }
    }

    for (const item of doc.items) {
      const productId = item.product.toString();
      const prevQuantity = prevItemsMap[productId] || 0;
      const quantityDiff = item.quantity - prevQuantity;

      if (quantityDiff == 0) continue; // No change in quantity

      let productSale = await ProductSale.findOneAndUpdate(
        { product: item.product },
        { $inc: { totalSales: quantityDiff } },
        { upsert: true, new: true }
      );

      if (!productSale) {
        productSale = await ProductSale.findOne({ product: item.product });
        if (!productSale) {
          console.error(`ProductSale not found for product ID ${productId}`);
          continue;
        }
      }

      const product = await Product.findById(item.product).select("price isActive");
      if (!product) {
        console.error(`Product not found for ID ${productId}`);
        continue;
      }

      productSale.totalRevenue = product.price * productSale.totalSales;
      productSale.isActive = product.isActive; // Ensure isActive is updated
      await productSale.save();
    }
  }
  catch (error) {
    console.error("Error in post save hook 'updating product sale' :", error);
  }
});

orderSchema.pre('findOneAndUpdate', async function (next) {
  const docToUpdate = await this.model.findOne(this.getQuery()).select('items').lean();
  if (docToUpdate) {
    this._originalItems = docToUpdate.items;
  }
  next();
});

orderSchema.post('findOneAndUpdate', async function (res) {
  try {
    if (!res) return;

    const prevItemsMap = {};
    if (this._originalItems) {
      for (const item of this._originalItems) {
        prevItemsMap[item.product.toString()] = item.quantity;
      }
    }

    for (const item of res.items) {
      const productId = item.product.toString();
      const prevQuantity = prevItemsMap[productId] || 0;
      const quantityDiff = item.quantity - prevQuantity;

      if (quantityDiff === 0) continue;

      let productSale = await ProductSale.findOneAndUpdate(
        { product: item.product },
        { $inc: { totalSales: quantityDiff } },
        { upsert: true, new: true }
      );

      const product = await Product.findById(item.product).select("price isActive");
      if (!product || !productSale) continue;

      productSale.totalRevenue = product.price * productSale.totalSales;
      productSale.isActive = product.isActive; // Ensure isActive is updated
      await productSale.save();
    }
  } catch (error) {
    console.error("Error in post findOneAndUpdate hook:", error);
  }
});

// ✅ Indexes for performance
orderSchema.index({ "items.product": 1 });
orderSchema.index({ user: 1 });
orderSchema.index({ createdAt: -1 });
orderSchema.index({ status: 1 }); // Optional, if you filter a lot by status

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
