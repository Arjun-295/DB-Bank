import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import AddMoney from "./pages/AddMoney";
import CheckBalance from "./pages/CheckBalance";
import DepositMoney from "./pages/DepositMoney";

function App() {
  return (
    <Routes>
      <Route path="/add-money" element={<AddMoney />} />
      <Route path="/check-balance" element={<CheckBalance />} />
      <Route path="/deposit-money" element={<DepositMoney />} />
    </Routes>
  );
}

export default App;
