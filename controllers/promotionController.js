const Promotion = require('../models/Promotion');

// @desc    Get all promotions with remaining time
// @route   GET /api/promotions
// @access  Public
exports.getAllPromotions = async (req, res) => {
    try {
        const promotions = await Promotion.find({ isActive: true })
            .lean();

        const currentDate = new Date();

        // Enhance promotions with remaining time
        const enhancedPromotions = promotions.map(promotion => {
            const endDate = new Date(promotion.endDate);
            const timeDiff = endDate - currentDate;

            // Calculate remaining time components
            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            // Format remaining time
            const remainingTime = timeDiff > 0 
                ? `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
                : 'Expired';

            // Check if promotion is still valid
            const isValid = timeDiff > 0 && promotion.isActive && 
                (!promotion.usageLimit || promotion.usedCount < promotion.usageLimit);

            return {
                ...promotion,
                remainingTime,
                isValid,
                status: isValid ? 'Active' : 'Expired'
            };
        });

        res.status(200).json({
            success: true,
            count: enhancedPromotions.length,
            data: enhancedPromotions.sort((a, b) => {
                // Sort by validity (active first) and then by remaining time
                if (a.isValid !== b.isValid) return b.isValid - a.isValid;
                if (a.remainingTime === 'Expired') return 1;
                if (b.remainingTime === 'Expired') return -1;
                return new Date(a.endDate) - new Date(b.endDate);
            })
        });
    } catch (error) {
        console.error('Error fetching promotions:', error);
        res.status(500).json({
            success: false,
            error: 'Server Error',
            message: error.message
        });
    }
}; 