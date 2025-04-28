const ExpenseSchema= require("../models/ExpenseModel")

exports.addExpense = async (req,res) => {
    const {title, amount, category, description, date} = req.body

    const income = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        if(!title || !category || !description || !date){
            return res.status(400).json({message: "all fiels are required for this one"})
        }
        if(amount<=0 || !amount==='number'){
            return res.status(400).json({message: "amount must be positive"})
        }
        await income.save()
        res.status(200).json({message: "Expense added"})
    } catch (error) {
        res.status(500).json({message: "server error"})
    }

    console.log(income)
}

exports.getExpenses = async (req,res) =>{
    try {
        const incomes=await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'server erorrr'})
    }
}

exports.deleteExpense = async (req,res) =>{
    const {id}=req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({message: 'Expense Del'})
        })
        .catch((err)=>{
            res.status(500).json({message:'server err'})
        })
}

exports.editExpense = async (req, res) => {
    const { id } = req.params;
    const { amount, description, date } = req.body;

    try {
        if (!amount || !description || !date) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const updatedExpense = await ExpenseSchema.findByIdAndUpdate(
            id,
            { amount, description, date },
            { new: true }
        );

        res.status(200).json({ message: 'Expense updated', updatedExpense });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};