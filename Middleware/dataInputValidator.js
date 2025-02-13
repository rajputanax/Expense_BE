

import { body , validationResult} from "express-validator";

import { currency } from "../Utils/constant.js";

const dataValidator = (validate_data) => {
/*
validate_data is an argument and having all the stuff which user has in his request
which we are getting body() method provided by expresss validator and comparing it with another express validator method 
*/


 return [
    validate_data , (req,_res,next) => {
        const compareValidation = validationResult(req);
        console.log('validation through express_validator ....' , compareValidation)
        if(!compareValidation.isEmpty() ){
            const errorMsg = errors.array().map((err) => err.msg);
            if (errorMsg[0].startsWith('no')) {
                throw new Error(errorMsg);
            }
            if (errorMsg[0].startsWith('not authorized')) {
                throw new Error('not authorized to access this route');
            }
            throw new Error(errorMsg);
        }
    
    next();
    }
    

 ]
}
//........................................................................................................................................................



export const checkExpenseData = dataValidator([
    body("subject").notEmpty().withMessage("Subject is missing"),
    body("merchant").notEmpty().withMessage("Merchant is missing"),
    body("date").notEmpty().isISO8601().withMessage("Date should not be empty and must be a valid date"),
    body("total").notEmpty().isNumeric().withMessage("Total amount is missing or invalid"),
    body("currency").isIn(Object.values(currency)).withMessage("Invalid currency"),
    body("reimbursable").optional().isBoolean().withMessage("Reimbursable must be a boolean"),
    body("category").notEmpty().withMessage("Category is required"),
    body("description").optional().isString().withMessage("Description must be a string"),
    body("employee").notEmpty().withMessage("Employee is required"),
    body("new").optional().isString().withMessage("New must be a string"),
    body("addToReport").optional().isBoolean().withMessage("addToReport must be a boolean"),
    
])


//........................................................................................................................................................
// export const checkRegistrationData = dataValidator([
//     body(name).notEmpty().withMessage("your name should be there"),
//     body().notEmpty.withMessage().custom(
//         async()=>{

//         }
//     )
// ])