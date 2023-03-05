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

  const upliftMonth = props.upliftMonth;
  const initialMonth = props.initialMonth;
  const [month, setMonth] = useState(initialMonth ?? new Date().getMonth());

  const handleMonth = (e) => {
    upliftMonth(Number(e.target.value));
    setMonth(e.target.value);
    console.log("Month", e.target.value);
  };

  return (
    <label>
      Month: {"   "}
      <select
        value={month}
        onChange={handleMonth}
        style={{ width: "110px", height: "25px", fontSize: "medium" }}
      >
        {months.map((month, index) => (
          <option key={index} value={index}>
            {month}
          </option>
        ))}
      </select>
    </label>
  );
};

export default MonthDropdown;
