import React from "react";
import { Link } from "react-router-dom";
import "./MenuLink.css";

const MonthlyTrends = () => {
  return (
    <Link to="/monthlyTrends" className="menuLink">
      <span>Monthly Trends</span>
    </Link>
  );
};
export default MonthlyTrends;
