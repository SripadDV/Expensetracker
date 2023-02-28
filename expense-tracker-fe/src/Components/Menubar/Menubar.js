import React from "react";
import "./Menubar.css";
import Menu from "./Menu";
import ViewExpense from "./ViewExpense";
import AddExpense from "./AddExpense";
import MonthlyTrends from "./MonthlyTrends";
import PaymentReminders from "./PaymentReminders";

const Menubar = () => {
  return (
    <div className="menubar">
      <Menu>
        <ViewExpense />
      </Menu>
      <Menu>
        <AddExpense />
      </Menu>
      <Menu>
        <MonthlyTrends />
      </Menu>
      <Menu>
        <PaymentReminders />
      </Menu>
    </div>
  );
};

export default Menubar;
