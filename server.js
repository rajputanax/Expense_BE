import dotenv from 'dotenv';

dotenv.config();

import express from 'express'
console.log(process.env)
const app = express();
const PORT = process.env.PORT;
import mongoose from 'mongoose';

import router from './routes/expenseRoute.js'


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/expense' ,router)












try {
   mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("Successfully Connected!");
} catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit process on failure
}















const serverPort = app.listen( PORT, ()=>{
    console.log(` Yes Server is Listening on ${PORT}`);
})

