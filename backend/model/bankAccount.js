import mongoose from "mongoose";

const bankAccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
});

const BankAccount = mongoose.model("BankAccount", bankAccountSchema);
export default BankAccount;
