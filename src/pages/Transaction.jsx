import React from "react";
import ExpenseForm from "../components/Transaction/ExpenseForm";

export const Transaction = () => {
  return (
    <div className="grid md:grid-cols-2 p-10">
      <ExpenseForm />
    </div>
  );
};
