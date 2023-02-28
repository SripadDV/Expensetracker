import React from "react";
import { useState } from "react";

const YearDropDown = (props) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const upliftYear = props.upliftYear;
  const years = [2022, 2023];
  const handleYearChange = (e) => {
    setYear(e.target.value);
    upliftYear(e.target.value);
  };
  return (
    <select
      value={year}
      onChange={handleYearChange}
      style={{ width: "100px", height: "25px", fontSize: "medium" }}
    >
      {years.map((year, index) => (
        <option key={index}>{year}</option>
      ))}
    </select>
  );
};

export default YearDropDown;
