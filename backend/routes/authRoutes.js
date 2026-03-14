import express from "express";
import { register, login, logout, verifyAuth } from "../controller/auth.js";
import authMiddleware from "../auth/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/verify", authMiddleware, verifyAuth);

export default router;
