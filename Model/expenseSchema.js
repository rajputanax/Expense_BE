import mongoose from "mongoose";
import {currency} from '../Utils/constant.js'

const expenseSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    merchant: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,// Explicitly define type
      enum: Object.values(currency), // Convert enum object to an array
      default: currency.USD, // Set default correctly
      required: true,
    },
    reimbursable: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    employee: {
      type: String,
      required: true,
    },
    new : String,
    addToReport: {
      type: Boolean,
      default: false,
    },
    status : {
      type:Boolean,
      enum:["save" , "draft"],
      default :  "draft"
    }
  },
  { timestamps: true }
);

export default mongoose.model("expense", expenseSchema);
