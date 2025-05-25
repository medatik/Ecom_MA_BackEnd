const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a promotion name'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['discount', 'fixed_amount', 'buy_x_get_y', 'free_shipping']
    },
    value: {
        type: Number,
        required: function() {
            return ['discount', 'fixed_amount'].includes(this.type);
        },
        min: [0, 'Value cannot be negative'],
        validate: {
            validator: function(v) {
                // If type is "discount", value must be ≤ 100
                if (this.type === 'discount') {
                    return v <= 100;
                }
                return true; // no max for other types
            },
            message: props => `Value for discount cannot exceed 100. Received: ${props.value}`
        }
    },
    code: {
        type: String,
        unique: true,
        required: true,
        uppercase: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    endDate: {
        type: Date,
        required: true
    },
    minimumPurchase: {
        type: Number,
        min: [0, 'Minimum purchase amount cannot be negative']
    },
    maximumDiscount: {
        type: Number,
        min: [0, 'Maximum discount amount cannot be negative']
    },
    usageLimit: {
        type: Number,
        min: [0, 'Usage limit cannot be negative']
    },
    usedCount: {
        type: Number,
        default: 0
    },
    applicableProducts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    applicableCategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

// Ensure endDate is after startDate
promotionSchema.pre('save', function(next) {
    if (this.endDate <= this.startDate) {
        next(new Error('End date must be after start date'));
    }
    next();
});

// Check if promotion is valid
promotionSchema.methods.isValid = function() {
    const now = new Date();
    return (
        this.isActive &&
        now >= this.startDate &&
        now <= this.endDate &&
        (!this.usageLimit || this.usedCount < this.usageLimit)
    );
};

// ✅ Indexes for performance
promotionSchema.index({ code: 1, isActive: 1 });
promotionSchema.index({isActive: 1, startDate: 1, endDate: 1 });
promotionSchema.index({ applicableProducts: 1 });
promotionSchema.index({ applicableCategories: 1 });


const Promotion = mongoose.model('Promotion', promotionSchema);
module.exports = Promotion; 