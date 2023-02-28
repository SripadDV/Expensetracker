import React from "react";
import { Link } from "react-router-dom";
import "./MenuLink.css";

const AddExpense = () => {
  return (
    <Link to="/addExpense" className="menuLink">
      <span>Add Expense</span>
    </Link>
  );
};
export default AddExpense;
