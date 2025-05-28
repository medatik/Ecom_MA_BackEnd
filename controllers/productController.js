const Product = require("../models/Product");
const Category = require("../models/Category");
const ProductSale = require("../models/ProductSale");
const mongoose = require("mongoose");

// Get all products with filters
exports.getAllProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, sort, search, inStock, bestSales } = req.query;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;

    // Build filter object
    const filter = { isActive: true };

    // Add category filter if provided, it takes an array [] as input
    if (category) {
      const categoryIds = category
        .split(",")
        .filter((id) => id) // ensure no empty values
        .map((id) => new mongoose.Types.ObjectId(id.trim()));

      if (categoryIds.length > 0) {
        filter.category = { $in: categoryIds };
      }
    }

    // Add price range filter if provided, it takes minPrice and maxPrice as input
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // Add search filter if provided, it searches in name and/or description
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    // Add inStock filter if provided, it takes a boolean value as input
    if (inStock === "true") {
      filter.stock = { $gt: 0 };
    } else if (inStock === "false") {
      filter.stock = 0;
    }

    // Add sorting if provided, it takes an array [] as input
    let sortOptions = {};
    if (sort) {
      const sortParams = sort.split(",");
      for (let param of sortParams) {
        switch (param) {
          case "price_asc":
            sortOptions.price = 1;
            break;
          case "price_desc":
            sortOptions.price = -1;
            break;
          case "newest":
            sortOptions.createdAt = -1;
            break;
          case "oldest":
            sortOptions.createdAt = 1;
            break;
        }
      }
    }

    if (bestSales === "true") {
      sortOptions.totalSales = -1; // Sort by total sales in descending order
      const products = await ProductSale.find({ isActive: true })
        .populate({
          path: "product",
          select: "name description oldPrice price category images specifications slug",
          model: Product,
        }).sort(sortOptions)
        .limit(limit)
        .skip(skip);

      res.status(200).json({
        success: true,
        totalCount: await ProductSale.countDocuments({ isActive: true }),
        page: parseInt(page),
        limit: parseInt(limit),
        data: products,
    });
    }else {
      const products = await Product.find(filter)
        .populate({
          path: "category",
          select: "name",
          model: Category,
        })
        .select(
          "name description oldPrice price category images specifications slug"
        )
        .sort(sortOptions)
        .limit(limit)
        .skip(skip);

      res.status(200).json({
        success: true,
        totalCount: await Product.countDocuments(filter),
        page: parseInt(page),
        limit: parseInt(limit),
        data: products,
      });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      error: "Server Error",
      message: error.message,
    });
  }
};

// Get product by slug or ID
exports.getProductBySlugOrId = async (req, res) => {
  try {
    const { slugOrId } = req.params;
    console.log("slugOrId:", slugOrId);

    const isValidObjectId = mongoose.Types.ObjectId.isValid(slugOrId);
    const filter = isValidObjectId ? { _id: new mongoose.Types.ObjectId(slugOrId) } : { slug: slugOrId };
    filter.isActive = true;
    console.log("filter:", filter);

    const product = await Product.findOne(
      filter
    )
    .populate({
        path: "category",
        select: "name",
        model: Category,
      })
      .select(
        "name description oldPrice price category images specifications slug"
      )
      .lean();

    console.log("product:", product);

    if (!product) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: product,
    });

  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({
      success: false,
      error: "Server Error",
      message: error.message,
    });
  }
};

// Get product features
exports.getProductFeatures = async (req, res) => {
  try {
    // Fetch latest products
    const latest = await Product.find({ isActive: true}).sort({ createdAt: -1 }).limit(4);

    // Fetch most saled products
    const mostSaled = await ProductSale.find({isActive: true}).sort({ totalSales: -1 }).limit(4)
    .populate({
      path: "product",
      select: "name description oldPrice price category images specifications slug",
      model: Product,
    });

    // Fetch featured products
    const featured = await Product.aggregate([
      { $match: { isActive: true, stock: { $gt: 0 } }},
      { $sample: { size: 4 } }
    ]);

    if (!latest && !mostSaled && !featured) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
        message: "No products found",
      });
    }

    res.status(200).json({
      success: true,
      data: {
        latest: latest,
        mostSaled: mostSaled,
        featured: featured,
      },
    });

  } catch (error) {
    console.error("Error fetching product features:", error);
    res.status(500).json({
      success: false,
      error: "Server Error",
      message: error.message,
    });
  }
}