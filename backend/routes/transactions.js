const { addExpense, getExpenses, deleteExpense, editExpense } = require('../controllers/expenses')
const { addIncome, deleteIncome, getIncomes } = require('../controllers/Income')
const { addBudget, getBudgets, deleteBudget } = require('../controllers/Budgets');
      
const router = require('express').Router()


router.post('/add-income', addIncome);
router.get('/get-incomes', getIncomes);
router.delete('/delete-income/:id', deleteIncome);

// Expense Routes
router.post('/add-expense', addExpense);
router.get('/get-expenses', getExpenses);
router.delete('/delete-expense/:id', deleteExpense);
router.put('/edit-expense/:id', editExpense);

// Budget Routes
router.post('/add-budget', addBudget);
router.get('/get-budgets', getBudgets);
router.delete('/delete-budget/:id', deleteBudget);

module.exports=router