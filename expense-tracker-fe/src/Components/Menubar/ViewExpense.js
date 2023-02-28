import React from "react";
import "./MenuLink.css";

import { Link } from "react-router-dom";

const ViewExpense = () => {
  return (
    <Link to="/viewExpense" className="menuLink">
      <span>View Expense</span>
    </Link>
  );
};

export default ViewExpense;
