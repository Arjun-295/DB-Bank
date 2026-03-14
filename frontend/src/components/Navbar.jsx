import React from "react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              DB
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">
              DB Bank
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/check-balance" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Balance</Link>
            <Link to="/add-money" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Deposit</Link>
            <Link to="/withdraw" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Withdraw</Link>
            
            {user && (
              <div className="flex items-center gap-4 pl-8 border-l border-slate-200">
                <div className="flex flex-col items-end">
                  <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Member</span>
                  <span className="text-sm font-bold text-slate-700">{user.username}</span>
                </div>
                <button 
                  onClick={logout}
                  className="px-4 py-2 text-sm font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-md shadow-slate-900/10 hover:shadow-slate-900/20 active:scale-95"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
