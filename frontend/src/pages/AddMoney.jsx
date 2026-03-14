import React from "react";
import Navbar from "../components/Navbar";

function AddMoney() {
  return (
    <>
      <Navbar />
      <div className="mx-3xl w-auto flex flex-row gap-5">
        <div className="w-3xl h-[50vh] mx-auto bg-blue-100 text-center p-4 text-2xl font-bold mt-5">
          Total Balance
        </div>
        <div className="w-3xl h-[50vh] mx-auto bg-blue-100 text-center p-4 text-2xl font-bold mt-5">
          Add Money
        </div>
      </div>
    </>
  );
}

export default AddMoney;
