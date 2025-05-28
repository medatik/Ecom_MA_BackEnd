const Carousel = require("../models/Carousel");

exports.get_active_carousels_by_name = async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ message: "Name query parameter is required" });
        }
        // Fetch all active carousels with the specified name
        const carousels = await Carousel.find({ isActive: true, name: name, groupActive: true }).sort({
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
