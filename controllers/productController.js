const Product = require('../models/Product');
const Category = require('../models/Category');

// @desc    Get all products with filters
// @route   GET /api/products
// @access  Public
exports.getAllProducts = async (req, res) => {
    try {
        const { category, minPrice, maxPrice } = req.query;
        
        // Build filter object
        const filter = { isActive: true };
        
        // Add category filter if provided (using category name)
        if (category) {
            // First find the category by name
            const categoryDoc = await Category.findOne({ 
                name: { $regex: new RegExp(category, 'i') }, // Case insensitive search
                isActive: true 
            });
            
            if (categoryDoc) {
                filter.category = categoryDoc._id;
            }
        }
        
        // Add price range filter if provided
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = Number(minPrice);
            if (maxPrice) filter.price.$lte = Number(maxPrice);
        }

        const products = await Product.find(filter)
            .populate({
                path: 'category',
                select: 'name slug',
                model: Category
            })
            .select('name description oldPrice price category images specifications slug')
            .lean();

        // Enhance products with additional information
        const enhancedProducts = products.map(product => {
            // Calculate discount percentage if oldPrice exists
            const discountPercentage = product.oldPrice 
                ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
                : 0;

            return {
                ...product,
                discountPercentage: discountPercentage ? `${discountPercentage}%` : '0%',
                category: {
                    name: product.category.name,
                    path: `/api/categories/${product.category.slug}`
                },
                path: `/api/products/${product.slug}`
            };
        });

        res.status(200).json({
            success: true,
            count: enhancedProducts.length,
            data: enhancedProducts
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
};

// @desc    Get product by slug
// @route   GET /api/products/:slug
// @access  Public
exports.getProductBySlug = async (req, res) => {
    try {
        const { slug } = req.params;

        const product = await Product.findOne({ 
            slug: slug,
            isActive: true 
        })
        .populate({
            path: 'category',
            select: 'name slug',
            model: Category
        })
        .select('name description oldPrice price category images specifications slug')
        .lean();

        if (!product) {
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: 'Product not found'
            });
        }

        // Calculate discount percentage if oldPrice exists
        const discountPercentage = product.oldPrice 
            ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
            : 0;

        // Enhance product with additional information
        const enhancedProduct = {
            ...product,
            discountPercentage: discountPercentage ? `${discountPercentage}%` : '0%',
            category: {
                name: product.category.name,
                path: `/api/categories/${product.category.slug}`
            },
            path: `/api/products/${product.slug}`
        };

        res.status(200).json({
            success: true,
            data: enhancedProduct
        });
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
}; 