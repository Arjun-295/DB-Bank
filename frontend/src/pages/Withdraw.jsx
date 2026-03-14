import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router";

function Withdraw() {
  const [amount, setAmount] = useState(0);
  const [inputAmt, setInputAmt] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  const fetchBalance = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/bank-account/balance", {
        credentials: "include"
      });
      const res = await response.json();
      if (res.balance !== undefined) {
        setAmount(res.balance);
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
    }
  };

  useEffect(() => {
    fetchBalance();
  }, []);

  const withdrawMoney = async () => {
    if (!inputAmt || isNaN(inputAmt) || Number(inputAmt) <= 0) return;
    
    if (Number(inputAmt) > amount) {
      setMessage({ text: "Insufficient Balance", type: "error" });
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
      return;
    }
    
    try {
      const response = await fetch("http://localhost:3000/api/bank-account/withdraw-money", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: Number(inputAmt) }),
        credentials: "include"
      });
      const res = await response.json();
      
      if (response.ok) {
        setAmount(res.balance);
        setMessage({ text: "Rs. " + inputAmt + " Withdrawn Successfully", type: "success" });
        setInputAmt("");
      } else {
        setMessage({ text: res.message || "Withdrawal failed", type: "error" });
      }
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    } catch (error) {
      console.error("Error withdrawing money:", error);
      setMessage({ text: "Internal server error", type: "error" });
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-8">
        <div className="flex justify-between items-center mb-6">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Dashboard
          </Link>
          
          {message.text && (
            <div className={`px-4 py-2 rounded-full text-sm font-medium animate-fade-in-down ${
              message.type === 'error' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'
            }`}>
              {message.text}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Balance Card Sidebar */}
          <div className="bg-gradient-to-br from-indigo-900 to-indigo-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 opacity-20 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <svg className="w-6 h-6 text-indigo-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
              </div>
              <h2 className="text-indigo-200 text-sm font-medium tracking-wider uppercase mb-1">Available Balance</h2>
              <div className="text-5xl font-bold tracking-tight">
                <span className="text-3xl font-medium text-indigo-300 mr-1">Rs.</span>{amount}
              </div>
            </div>
            
            <div className="relative z-10 mt-8 pt-6 border-t border-indigo-500/30">
              <p className="text-indigo-200 text-sm">Ensure sufficient funds before initiating a withdrawal.</p>
            </div>
          </div>

          {/* Action Form Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Withdraw Funds</h2>
              <p className="text-slate-500">Enter the amount you wish to withdraw from your account.</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-slate-700 mb-2">
                  Amount
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-slate-400 font-medium">Rs.</span>
                  </div>
                  <input
                    type="number"
                    id="amount"
                    className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl text-lg font-medium text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                    placeholder="0.00"
                    value={inputAmt}
                    onChange={(e) => setInputAmt(e.target.value)}
                  />
                </div>
              </div>
              
              <button
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                onClick={withdrawMoney}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                Confirm Withdrawal
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
