import BankAccount from "../model/bankAccount.js";

export const getBalance = async (req, res) => {
  try {
    const userId = req.user.id;
    let bankAccount = await BankAccount.findOne({ userId });
    
    // Auto-create account for new users if not found
    if (!bankAccount) {
      bankAccount = await BankAccount.create({ userId, balance: 10000 });
    }
    
    res.status(200).json({ balance: bankAccount.balance });
  } catch (error) {
    console.error("Get balance error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addMoney = async (req, res) => {
  try {
    const userId = req.user.id;
    const amount = Number(req.body.amount);
    
    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    let bankAccount = await BankAccount.findOne({ userId });
    if (!bankAccount) {
      bankAccount = await BankAccount.create({ userId, balance: 10000 });
    }

    bankAccount.balance += amount;
    await bankAccount.save();
    res.status(200).json({ balance: bankAccount.balance });
  } catch (error) {
    console.error("Add money error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const withdrawMoney = async (req, res) => {
  try {
    const userId = req.user.id;
    const amount = Number(req.body.amount);

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    let bankAccount = await BankAccount.findOne({ userId });
    if (!bankAccount) {
      bankAccount = await BankAccount.create({ userId, balance: 10000 });
    }

    if (bankAccount.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    bankAccount.balance -= amount;
    await bankAccount.save();
    res.status(200).json({ balance: bankAccount.balance });
  } catch (error) {
    console.error("Withdraw error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
