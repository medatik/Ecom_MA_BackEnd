const Carousel = require("../models/Carousel");

exports.get_all_active_carousels = async (req, res) => {
    try {
        // Fetch all active carousels
        const carousels = await Carousel.find({ isActive: true }).sort({
        order: 1,
        }).select('title description image link buttonText order startDate endDate').lean();

        // Check if any carousels were found
        if (!carousels || carousels.length === 0)
        return res.status(404).json({ message: "Not Found" });
        
        return res.status(200).json({
        count: carousels.length,
        items: carousels,
        });

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
};
