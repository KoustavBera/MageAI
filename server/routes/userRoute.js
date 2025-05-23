import express from "express";
import {
  registerUser,
  loginUser,
  userCredits,
  paymentRazorpay,
  verifyRazorpay,
} from "../controllers/userControllers.js";
import userAuth from "../middleware/auth.js";

const userRouter = express.Router();
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/credits", userAuth, userCredits);
userRouter.post("/razorpay", userAuth, paymentRazorpay);
userRouter.post("/verify-razorpay", verifyRazorpay);

export default userRouter;

//localhost:4000/api/user/register
