import express from 'express';
const userRouter = express.Router();
import { getAllUser , register, login , logout } from '../controllers/userController.js';
import {checkRegistrationData , v_logInput}  from '../middleware/validationMiddleware.js'


userRouter.route('/user').get(getAllUser);
userRouter.route('/register').post(checkRegistrationData, register);
userRouter.route('/login').post(v_logInput , login);
userRouter.route('/logout').post( logout);



export default userRouter;