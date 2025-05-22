const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a product name'],
        trim: true
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true
    },
    description: {
        type: String,
        required: [true, 'Please provide a product description']
    },
    oldPrice: {
        type: Number,
        min: [0, 'Price cannot be negative']
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price'],
        min: [0, 'Price cannot be negative']
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Please provide a category']
    },
    images: [{
        type: String,
        required: [true, 'Please provide at least one image']
    }],
    stock: {
        type: Number,
        min: [0, 'Stock cannot be negative'],
        default: 0
    },
    stockShortage: {
        type: Number,
        default: 0,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    specifications: {
        type: Map,
        of: String
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

// Create slug from name before saving
productSchema.pre('save', function(next) {
    this.slug = this.name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '-') + '-' + this._id;
    next();
});

productSchema.pre('save', function(next) {
    if (this.stock > 0) {
        this.stockShortage = this.stock * 0.25;
    }
    next();
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product; 