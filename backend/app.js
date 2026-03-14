import express from "express";
import cors from "cors";
import bankAccountRoutes from "./routes/bankAccount.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/bank-account", bankAccountRoutes);
app.use("/api/auth", authRoutes);

export default app;
