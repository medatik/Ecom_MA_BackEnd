const Category = require('../models/Category');
const Product = require('../models/Product');

// Get all active categories
exports.get_all_active_categories = async (req, res) => {
    try {
        const categories = await Category.find({ isActive: true })
            .select('name description image slug')
            .lean();

        if (!categories || categories.length === 0) {
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: 'No categories found'
            });
        }

        res.status(200).json({
            success: true,
            count: categories.length,
            itmes: categories
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

exports.get_products_by_category_id = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the category
        const category = await Category.findOne({ 
            _id: id,
            isActive: true 
        }).select('name slug').lean();

        if (!category) {
            return res.status(404).json({
                success: false,
                error: 'Not Found',
                message: 'Category not found'
            });
        }

        // Find active products in this category
        const products = await Product.find({ 
            category: id,
            isActive: true
        }).select('-stock -stockShortage -isActive -__v -stockStatus -updatedAt -createdAt -category').lean();

        // Enhance products with additional information
        const enhancedProducts = products.map(product => {
            // Calculate discount percentage if oldPrice exists
            const discountPercentage = product.oldPrice 
                ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
                : 0;

            return {
                ...product,
                discountPercentage: `${discountPercentage}%`
            };
        });

        res.status(200).json({
            success: true,
            data: {
                category : category,
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

