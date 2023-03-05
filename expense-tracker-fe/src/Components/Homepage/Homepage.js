import React, { useEffect, useState } from "react";
import "./Homepage.css";
import MonthDropdown from "../Date/MonthDropdown";
import YearDropDown from "../Date/YearDropDown";
import PieChartView from "../Chart/PieChartView";
import axios from "axios";

const Homepage = () => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  // const years = [2022, 2023];
  const [data, setData] = useState([]);
  /*const getMonthlyExpenditure = () => {};*/

  useEffect(() => {
    console.log("month ", month);
    axios
      .get("http://localhost:8080/expenses/monthlyCategoryExpenses", {
        params: {
          month: month + 1,
          year: year,
        },
      })
      .then((response) => {
        console.log("response");
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [month, year]);

  /*const data = [
    {
      title: "Food",
      value: 20,
      color: "#E38627",
      year: 2022,
      month: "December",
    },
    {
      title: "Transport",
      value: 15,
      color: "#C13C37",
      year: 2022,
      month: "December",
    },
    {
      title: "Clothes",
      value: 10,
      color: "#6A2135",
      year: 2022,
      month: "December",
    },
    {
      title: "EMI",
      value: 30,
      color: "#E38627",
      year: 2023,
      month: "December",
    },
    {
      title: "Home",
      value: 15,
      color: "#C13C37",
      year: 2023,
      month: "December",
    },
    {
      title: "Personal",
      value: 20,
      color: "#6A2135",
      year: 2023,
      month: "December",
    },
  ];
  */

  return (
    <div className="homepage">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          /*border: "1px solid",*/
          justifyContent: "space-between",
          width: "350px",
        }}
      >
        <MonthDropdown upliftMonth={setMonth} />
        <YearDropDown upliftYear={setYear} />
      </div>
      {data.length > 0 ? (
        <div>
          <PieChartView dataPoints={data} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Homepage;
