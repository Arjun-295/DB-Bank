import express from "express";
import {
  getBalance,
  addMoney,
  withdrawMoney,
} from "../controller/bankAccountController.js";
import authMiddleware from "../auth/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.get("/balance", getBalance);
router.post("/add-money", addMoney);
router.post("/withdraw-money", withdrawMoney);

export default router;
