const Category = require('../models/Category');
const Product = require('../models/Product');

// @desc    Get all active categories with selected fields
// @route   GET /api/categories
// @access  Public
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find({ isActive: true })
            .select('name description image slug')
            .lean();

        // Add URL-friendly path using slug
        const enhancedCategories = categories.map(category => ({
            ...category,
            path: `/api/categories/${category.slug}`
        }));

        res.status(200).json({
            success: true,
            count: enhancedCategories.length,
            data: enhancedCategories
        });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
};

// @desc    Get category by slug with its products
// @route   GET /api/categories/:slug
// @access  Public
exports.getCategoryBySlug = async (req, res) => {
    try {
        const { slug } = req.params;

        // Find the category
        const category = await Category.findOne({ 
            slug: slug,
            isActive: true 
        }).select('name description image slug').lean();

        if (!category) {
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: 'Category not found'
            });
        }

        // Find active products in this category
        const products = await Product.find({ 
            category: category._id,
            isActive: true
        }).lean();

        // Enhance products with additional information
        const enhancedProducts = products.map(product => {
            // Calculate discount percentage if oldPrice exists
            const discountPercentage = product.oldPrice 
                ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
                : 0;

            // Determine stock status message
            const stockStatus = product.stock < 35 
                ? 'Stock is running out!' 
                : 'Stock is available';

            return {
                ...product,
                discountPercentage: discountPercentage ? `${discountPercentage}%` : '0%',
                stockStatus,
                path: `/api/products/${product.slug}`
            };
        });

        res.status(200).json({
            success: true,
            data: {
                ...category,
                path: `/api/categories/${category.slug}`,
                productsCount: enhancedProducts.length,
                products: enhancedProducts
            }
        });
    } catch (error) {
        console.error('Error fetching category:', error);
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
}; 