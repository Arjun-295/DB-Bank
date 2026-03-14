import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router";

function Dashboard() {
  return (
    <div className="min-h-screen pt-20 pb-10">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Welcome back to DB Bank
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Manage your finances securely and efficiently with our newly designed portal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Check Balance */}
          <Link
            to="/check-balance"
            className="group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
            </div>
            <h2 className="relative z-10 text-2xl font-bold text-slate-800 mb-2">Check Balance</h2>
            <p className="relative z-10 text-slate-500">View your current available balance safely.</p>
          </Link>

          {/* Card 2: Add Money */}
          <Link
            to="/add-money"
            className="group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </div>
            <h2 className="relative z-10 text-2xl font-bold text-slate-800 mb-2">Deposit Money</h2>
            <p className="relative z-10 text-slate-500">Add funds to your account instantly.</p>
          </Link>

          {/* Card 3: Withdraw Money */}
          <Link
            to="/withdraw"
            className="group relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="relative z-10 w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            </div>
            <h2 className="relative z-10 text-2xl font-bold text-slate-800 mb-2">Withdraw</h2>
            <p className="relative z-10 text-slate-500">Securely withdraw funds from your account.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
