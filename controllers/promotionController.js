const Promotion = require("../models/Promotion");
const Product = require("../models/Product");

exports.get_all_active_promotions = async (req, res) => {
    try {
        const promotions = await Promotion.find({
        isActive: true,
        startDate: { $lte: new Date() },
        endDate: { $gte: new Date() },
        })
        .select("-__v -updatedAt -createdAt -isActive")
        .lean();


        if(!promotions || promotions.length === 0) {
            return res.status(404).json({
                success: false,
                error: "Not Found",
                message: "No active promotions found",
            });
        }

        const productsWithPromotion = await Promise.all(
            promotions.map(async (promo) => {
                let products = [];

                if (promo.applicableProducts && promo.applicableProducts.length > 0) {
                    products = await Product.find({
                        _id: { $in: promo.applicableProducts },
                        isActive: true,
                    }).select("name slug description image price oldPrice").limit(3).lean();
                }
                else if (promo.applicableCategories && promo.applicableCategories.length > 0) {
                    products = await Product.find({
                        category : { $in: promo.applicableCategories },
                        isActive: true,
                    }).select("name slug description image price oldPrice").limit(3).lean();
                }

                return {
                    ...promo,
                    products,
                };
            })
        );

        res.status(200).json({
        success: true,
        count: productsWithPromotion.length,
        items: productsWithPromotion,
        message: "Active promotions fetched successfully",
        });

    } catch (error) {
        console.error("Error fetching promotions:", error);
        return res.status(500).json({
        success: false,
        error: "Server Error",
        message: error.message,
        });
    }
};
