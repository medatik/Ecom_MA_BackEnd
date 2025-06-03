const mongoose = require("mongoose");
const Cart = require("../models/Cart");
const Product = require("../models/Product");

// function areOptionsEqual(a, b) {
//   const aKeys = Object.keys(a);
//   const bKeys = Object.keys(b);
//   if (aKeys.length !== bKeys.length) return false;

//   for (const key of aKeys) {
//     if (a[key] !== b[key]) return false;
//   }

//   return true;
// }

// exports.addToCart = async (req, res) => {
//   try {
//     const userId = req.userId;
//     const { productId, quantity = 1 } = req.body;

//     const product_id = new mongoose.Types.ObjectId(productId);
//     const clerkId = userId;

//     if (
//       !clerkId ||
//       !product_id ||
//       quantity < 1 ||
//       !Number.isInteger(quantity)
//     ) {
//       return res.status(400).json({ message: "Invalid request data" });
//     }

//     // Validate product existence
//     const product = await Product.findById(product_id).lean();
//     if (!product || !product.isActive)
//       return res.status(404).json({ message: "Product not found" });

//     // Check if cart exists
//     let cart = await Cart.findOne({ user: clerkId });
//     if (!cart) {
//       // Create new cart
//       cart = new Cart({
//         user: clerkId,
//         items: [
//           {
//             product: product_id,
//             quantity,
//           },
//         ],
//       });
//     } else if (cart && cart.items.length === 0) {
//       // If cart exists but is empty, add the item
//       cart.items.push({ product: product_id, quantity });

//     } else {
//       // Check if same product with same selectedOptions exists
//       const existingItemIndex = cart.items.findIndex(
//         (item) => item.product.toString() === product_id.toString()
//       );

//       if (existingItemIndex !== -1) {
//         // Update quantity
//         cart.items[existingItemIndex].quantity += quantity;
//       } else {
//         // Add new item
//         cart.items.push({ product: product_id, quantity });
//       }
//     }
//     await cart.save();
//     cart = await Cart.findById(cart._id)
//     .populate({
//       path :"items.product",
//       select: "name price oldPrice images slug",
//       model: Product,
//     })
//     .lean();

//     res.status(200).json({ message: "Item added to cart", cart });
//   } catch (error) {
//     console.error("Add to cart error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };


exports.getCart = async (req, res) => {
  try {
    const userId = req.userId;
  
    const cart = await Cart.findOne({ user: userId })
      .populate({
        path: "items.product",
        select: "name price oldPrice images slug",
        model: Product,
      })
      .lean();

    if (!cart) {
      return res.status(200).json({ message: "Cart Is Empty", cart: [] });
    }

    res.status(200).json({ message: "Cart retrieved successfully", cart });

  } catch (error) {
    console.error("Get cart error:", error);
    res.status(500).json({ message: "Server error" });
  }
}

exports.addToCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId, quantity = 1 } = req.body;

    const product_id = new mongoose.Types.ObjectId(productId);

    if (!userId || !product_id || quantity < 1 || !Number.isInteger(quantity)) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    // Validate product
    const product = await Product.findById(product_id).lean();
    if (!product || !product.isActive) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Find or create cart (NO .lean())
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        items: [{ product: product_id, quantity }],
      });
    } else {
      // Ensure items array exists
      if (!Array.isArray(cart.items)) {
        cart.items = [];
      }

      // Check if product already exists in cart
      const existingItemIndex = cart.items.findIndex(
        (item) => item.product.toString() === product_id.toString()
      );

      if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: product_id, quantity });
      }
    }

    await cart.save();

    // Re-fetch the updated cart with populated products
    const populatedCart = await Cart.findById(cart._id)
      .populate({
        path: "items.product",
        select: "name price oldPrice images slug",
        model: Product,
      })
      .lean();

    res.status(200).json({ message: "Item added to cart", cart: populatedCart });
  } catch (error) {
    console.error("Add to cart error:", error);
    res.status(500).json({ message: "Server error" });
  }
};


exports.updateCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId, quantity } = req.body;
    const product_id = new mongoose.Types.ObjectId(productId);

    if (!userId || !product_id || quantity < 0 || !Number.isInteger(quantity)) {
      return res.status(400).json({ message: "Invalid request data" });

    }else if (quantity === 0) {
      // If quantity is 0, remove the item from the cart
      const cart = await Cart.findOneAndUpdate(
        { user: userId },
        { $pull: { items: { product: product_id } } },
        { new: true }
      )
      .populate({
        path :"items.product",
        select: "name price oldPrice images slug",
        model: Product,
      })
      .lean();

      if (!cart) {
        return res.status(404).json({ message: "Cart Is Empty", cart: [] });
      }

      return res.status(200).json({ message: "Item removed from cart", cart });
    } else if (quantity > 0) {
      // If quantity is greater than 0, update the item quantity
      const cart = await Cart.findOneAndUpdate(
        { user: userId, "items.product": product_id },
        { $set: { "items.$.quantity": quantity } },
        { new: true }
      )
      .populate({
        path :"items.product",
        select: "name price oldPrice images slug",
        model: Product,
      })
      .lean();

      if (!cart) {
        return res.status(404).json({ message: "Cart not found" });
      }

      return res.status(200).json({ message: "Item quantity updated", cart });
    }

  }catch (error) {
    console.error("Update cart error:", error);
    res.status(500).json({ message: "Server error" });
  }
}

exports.removeFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.body;
    const product_id = new mongoose.Types.ObjectId(productId);

    if (!userId || !product_id) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    // Remove the item from the cart
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { product: product_id } } },
      { new: true }
    )
    .populate({
      path :"items.product",
      select: "name price oldPrice images slug",
      model: Product,
    })
    .lean();

    if (!cart) {
      return res.status(404).json({ message: "Cart Is Empty", cart: [] });
    }

    res.status(200).json({ message: "Item removed from cart", cart });
  } catch (error) {
    console.error("Remove from cart error:", error);
    res.status(500).json({ message: "Server error" });
  }
}

exports.clearCart = async (req, res) => {
  try {
    const userId = req.userId;

    // Clear the cart for the user
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { items: [], totalAmount: 0 },
      { new: true }
    )
    .lean();

    if (!cart) {
      return res.status(404).json({ message: "Cart Is Empty", cart: [] });
    }

    res.status(200).json({ message: "Cart cleared successfully", cart });
  } catch (error) {
    console.error("Clear cart error:", error);
    res.status(500).json({ message: "Server error" });
  }
}
