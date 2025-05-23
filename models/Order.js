const mongoose = require('mongoose');
const Product = require('./Product');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity cannot be less than 1']
        },
        price: {
            type: Number,
        }
    }],
    totalAmount: {
        type: Number,
    },
    shippingAddress: [{
        country:  String,
        city: String,
        address: String,
    }],
    status: {
        type: String,
        enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
        default: 'pending'
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: ['credit_card', 'debit_card', 'paypal', 'cash_on_delivery']
    },
    paymentStatus: {
        type: String,
        enum: ['pending', 'completed', 'failed', 'refunded'],
        default: 'pending'
    },
}, {
    timestamps: true
});

// Get the price of the product from the product model
orderSchema.pre('save', async function (next) {
    if (this.items && this.items.length > 0) {
        for (const item of this.items) {
            if (!item.price || item.price === 0) {
            const product = await Product.findById(item.product);
            if (!product) {
                return next(new Error('Product not found'));
            }
            item.price = product.price;
            }
        }
    }
    next();
});

// Calculate total amount before saving
orderSchema.pre('save', function(next) {
    if (this.items && this.items.length > 0) {
        this.totalAmount = this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }
    next();
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order; 