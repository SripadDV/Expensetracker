import React from "react";
import { useState } from "react";

const YearDropDown = (props) => {
  const upliftYear = props.upliftYear;
  const initialYear = props.initialYear;
  const [year, setYear] = useState(initialYear ?? new Date().getFullYear());

  const years = [2022, 2023];
  const handleYearChange = (e) => {
    setYear(e.target.value);
    upliftYear(e.target.value);
  };
  return (
    <label>
      Year: {"  "}
      <select
        value={year}
        onChange={handleYearChange}
        style={{ width: "100px", height: "25px", fontSize: "medium" }}
      >
        {years.map((year, index) => (
          <option key={index}> {year}</option>
        ))}
      </select>
    </label>
  );
};

export default YearDropDown;
