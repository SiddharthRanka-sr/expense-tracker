const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    amount: {   // Budget amount set for this category
        type: Number,
        required: true
    },
    month: {
        type: String,
        required: true   // like 'April 2025'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Budget', BudgetSchema);
