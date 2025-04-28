const BudgetSchema = require('../models/BudgetModel');

// Add new Budget
exports.addBudget = async (req, res) => {
    const { category, amount, month } = req.body;

    try {
        if (!category || !amount || !month) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const budget = BudgetSchema({
            category,
            amount,
            month
        });

        await budget.save();
        res.status(200).json({ message: 'Budget added successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all Budgets
exports.getBudgets = async (req, res) => {
    try {
        const budgets = await BudgetSchema.find().sort({ createdAt: -1 });
        res.status(200).json(budgets);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete Budget
exports.deleteBudget = async (req, res) => {
    const { id } = req.params;
    try {
        await BudgetSchema.findByIdAndDelete(id);
        res.status(200).json({ message: 'Budget deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
