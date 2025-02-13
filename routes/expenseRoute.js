import express from 'express';
import {allExpenses, addExpenses , getSingleExpense , deleteExpense  , editExpense} from '../Controllers/expenseController.js'
import {checkExpenseData} from '../Middleware/dataInputValidator.js'
const router = express.Router();

router.route('/get').get(allExpenses);
router.route('/add').post( checkExpenseData , addExpenses);
router.route('/:id').patch(editExpense).delete(deleteExpense).get(getSingleExpense) ;


export default router;