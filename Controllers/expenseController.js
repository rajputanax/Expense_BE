import expense from '../Model/expenseSchema.js'
import mongoose from 'mongoose';











/*-------------- [CONTROLLERS]  for expense -------------- */




export const allExpenses =  async (req,res )=> {
    try {
        console.log(req.body)
        const expenses = await expense.find({})
        res.status(200).json({expenses});
        
    } catch (error) {
        console.log("got this while getting expense",error)
        res.status(500).json({ message: "Internal Server Error", error });
    }

};


export const addExpenses =  async (req,res )=> {
    try {
        console.log(req.body)
        const expenses = await expense.create(req.body)
 res.status(200).json({expenses});
        
    } catch (error) {
        console.log("got this while adding expense",error)
        res.status(500).json({ message: "Internal Server Error", error });
    }

};


export const editExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const update = req.body;

        const updatedExpense = await expense.findByIdAndUpdate(
            id, 
            update, 
            { new: true, runValidators: true }
        );

        if (!updatedExpense) {
            return res.status(404).json({ message: "Expense not found" });
        }

        res.status(200).json({ updatedExpense });
    } catch (error) {
        console.error("Error while updating expense:", error);
        res.status(500).json({ message: "Internal Server Error", error });
    }
};


export const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        await expense.findByIdAndDelete(id)
        res.status(200).json({ msg: "deleted succefully!" });

    } catch (error) {
        console.log("got this while deleting expense", error)
        res.status(500).json({ message: "Internal Server Error", error });
    }

};

export const getSingleExpense =  (_req,res )=> {

 res.status(200).json({msg:"Welcome note"});
};