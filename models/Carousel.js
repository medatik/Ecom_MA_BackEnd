const mongoose = require('mongoose');

const carouselSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        required: [true, 'Please provide an image'],
    },
    link: {
        type: String,
        trim: true
    },
    buttonText: {
        type: String,
        trim: true,
        default: 'View More'
    },
    order: {
        type: Number,
        default: 0
    },
    isActive: {
        type: Boolean,
        default: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date
    }
}, {
    timestamps: true
});

// Ensure endDate is after startDate
carouselSchema.pre('save', function(next) {
    if (this.endDate && this.startDate && this.endDate <= this.startDate) {
        return next(new Error('End date must be after start date'));
    }
    return next();
});

// ✅ Indexes for performance
carouselSchema.index({ isActive: 1 });

// Optional compound index if you query active carousels within date ranges
carouselSchema.index({ isActive: 1, startDate: 1, endDate: 1 });

carouselSchema.index({ order: 1 });

const Carousel = mongoose.model('Carousel', carouselSchema);
module.exports = Carousel; 