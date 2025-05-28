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


