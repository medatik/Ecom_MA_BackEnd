const mongoose = require('mongoose');

const productSaleSchema = new mongoose.Schema({
    product: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    totalSales: {
        type: Number,
        default:0,
        min: [0, "Total sales cannot be negative"]
    },
    totalRevenue: {
        type: Number,
        default: 0,
        min: [0, "Total revenue cannot be negative"]
    },
    isActive: {
        type: Boolean,
        default: true
    },
},{
    timestamps: true
});

// ✅ Indexes for performance
productSaleSchema.index({ product: 1 }, { unique: true });

const ProductSale = mongoose.model('ProductSale', productSaleSchema);
module.exports = ProductSale;