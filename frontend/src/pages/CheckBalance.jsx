import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router";

function CheckBalance() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/bank-account/balance", {
          credentials: "include"
        });
        const res = await response.json();
        if (res.balance !== undefined) {
          setBalance(res.balance);
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };
    fetchBalance();
  }, []);

  return (
    <div className="min-h-screen pt-20 pb-10 flex flex-col items-center justify-center">
      <Navbar />
      <div className="w-full max-w-md px-4 mt-10">
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-full blur-3xl -mr-24 -mt-24"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
            </div>
            
            <h1 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">Total Available Balance</h1>
            <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 mb-10 tracking-tight">
              <span className="text-3xl font-medium text-slate-400 mr-2">Rs.</span>
              {balance !== null ? balance : "..."}
            </p>
            
            <Link
              to="/"
              className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-semibold text-indigo-600 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors duration-200"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckBalance;
