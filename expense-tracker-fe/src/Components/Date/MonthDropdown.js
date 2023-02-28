import React, { useState } from "react";

const MonthDropdown = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [month, setMonth] = useState(new Date().getMonth());

  const upliftMonth = props.upliftMonth;
  const handleMonth = (e) => {
    upliftMonth(Number(e.target.value));
    setMonth(e.target.value);
    console.log("Month", e.target.value);
  };

  return (
    <select
      value={month}
      onChange={handleMonth}
      style={{ width: "150px", height: "25px", fontSize: "medium" }}
    >
      {months.map((month, index) => (
        <option key={index} value={index}>
          {month}
        </option>
      ))}
    </select>
  );
};

export default MonthDropdown;
