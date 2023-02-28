import React from "react";
import { Link } from "react-router-dom";
import "./MenuLink.css";

const PaymentReminders = () => {
  return (
    <Link to="/paymentReminders" className="menuLink">
      <span>Payment Reminders</span>
    </Link>
  );
};
export default PaymentReminders;
