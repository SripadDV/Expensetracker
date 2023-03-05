import React, { useEffect } from "react";
import { useState } from "react";
import "./ViewExpensePage.css";
import MonthDropdown from "../Date/MonthDropdown";
import YearDropDown from "../Date/YearDropDown";
import Switch from "react-switch";
import ExpenseTable from "../Table/ExpenseTable";
import Category from "../Category/Category";
import Tag from "../Tag/Tag.js";
import PaymentChannel from "../PaymentChannel/PaymentChannel";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewExpensePage = (props) => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const [fromDate, setFromDate] = useState(new Date(year, month, 2));
  const [toDate, setToDate] = useState(new Date());

  const [customPeriod, setCustomPeriod] = useState(false);
  const [category, setCategory] = useState("Category");
  const [tag, setTag] = useState("");
  const [paymentChannel, setPaymentChannel] = useState("Payment Channel");

  const [monthData, setMonthData] = useState([]);
  const [columns, setColumns] = useState();
  const [customPeriodData, setCustomPeriodData] = useState(0);

  const handleCustomDate = (toggled) => {
    console.log(toggled);
    setCustomPeriod(toggled);
  };

  const handleFromDate = (e) => {
    setFromDate(new Date(e.target.value));
  };

  const handleToDate = (e) => {
    setToDate(new Date(e.target.value));
  };

  const getMonthlyExpense = () => {
    axios
      .get("http://localhost:8080/expenses/monthlyExpense", {
        params: {
          month: month + 1,
          year: year,
        },
      })
      .then((response) => {
        console.log("response");
        console.log(response.data);
        setMonthData(response.data);

        Object.keys(response.data[0]).map((value) => {
          console.log({ key: value, dataIndex: value, title: value });
        });

        setColumns([
          {
            key: "Title",
            dataIndex: "title",
            title: "Title",
            className: "title",
            render: (text, record) => <Link to={"/addExpense/"}>{text}</Link>,
            /*render: (text, record) => {
              return {
                props: {
                  style: { width: "50px" },
                },
                children: <div>{text}</div>,
              };
            },*/
          },
          {
            key: "Amount",
            dataIndex: "amount",
            title: "Amount",
            className: "amount",
            render: (text, record, index) => {
              return (
                <div>
                  {"Rs. "}
                  {Number(text).toLocaleString("hi-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              );
            },
          },
          {
            key: "Date",
            dataIndex: "date",
            title: "Date",
            className: "date",
            render: (text, record, index) => {
              return (
                <span>
                  {" "}
                  {new Date(text)
                    .toISOString()
                    .replace(/T.*/, "")
                    .split("-")
                    .reverse()
                    .join("-")}
                </span>
              );
            },
          },
          {
            key: "Category",
            dataIndex: "category",
            title: "Category",
            className: "category",
          },
          {
            key: "Tag",
            dataIndex: "tag",
            title: "Tag",
            className: "tag",
          },
          {
            key: "Payment Channel",
            dataIndex: "paymentChannel",
            title: "Payment Channel",
            className: "paymentChannel",
          },
        ]);
        console.log();
        console.log("Columns");
        console.log(columns);
        if (customPeriodData == 0) {
          setCustomPeriodData(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const getCustomPeriodExpense = () => {
    axios
      .get("http://localhost:8080/expenses/customPeriodExpense", {
        params: {
          fromDate: fromDate.toDateString(),
          toDate: toDate.toDateString(),
        },
      })
      .then((response) => {
        console.log("response");
        console.log(response.data);
        setCustomPeriodData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  const getExpense = () => {
    if (!customPeriod) {
      getMonthlyExpense();
    } else {
      getCustomPeriodExpense();
    }
  };

  // useEffect(() => {
  //   getExpense();
  // }, []);

  useEffect(() => {
    console.log("Month year use effect");
    getExpense();
  }, [month, year]);

  useEffect(() => {
    console.log("from date to date use effect");
    if (customPeriod) {
      console.log("get custom period data");
      getExpense();
    }
  }, [fromDate, toDate]);

  useEffect(() => {
    // console.log("Custom period effect");

    // const temp = data;
    // if (prevData != 0) {
    //   setData(prevData);
    //   console.log(prevData);
    //   console.log("data set to prev");
    // }
    // setPrevData(temp);
    console.log(customPeriodData);

    setCategory("Category");
    setTag("");
    setPaymentChannel("Payment Channel");
  }, [customPeriod]);

  /*const data = [
    {
      Title: "Devaru",
      Date: "01-02-2023",
      Category: "Home",
      Tag: "Devaru",
      "Payment Mode": "Cash",
    },
    {
      Title: "Amma",
      Date: "01-02-2023",
      Category: "Home",
      Tag: "Amma",
      "Payment Mode": "Cash",
    },
    {
      Title: "Kadamba",
      Date: "02-02-2023",
      Category: "Eat Out",
      Tag: "Restaurant",
      "Payment Mode": "PhonePe",
    },
  ];
  */

  return (
    <div className="viewExpense">
      <div className="viewFilters">
        <div style={{ width: "370px" }}>
          {!customPeriod ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                /*border: "1px solid",*/
                justifyContent: "space-between",
                width: "350px",
              }}
            >
              <MonthDropdown upliftMonth={setMonth} initialMonth={month} />
              <YearDropDown upliftYear={setYear} initialYear={year} />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                /*border: "1px solid",*/
                justifyContent: "space-between",
                width: "350px",
                fontSize: "medium",
              }}
            >
              <label>
                From: {"   "}
                <input
                  type="date"
                  value={fromDate.toISOString().slice(0, 10)}
                  onChange={handleFromDate}
                  style={{
                    height: "21px",
                    width: "120px",
                    alignItems: "end",
                    fontSize: "15px",
                  }}
                ></input>
              </label>
              <label>
                {"  "}
                To:{" "}
                <input
                  type="date"
                  value={toDate.toISOString().slice(0, 10)}
                  onChange={handleToDate}
                  style={{
                    height: "21px",
                    width: "120px",
                    alignItems: "end",
                    fontSize: "15px",
                  }}
                ></input>
              </label>
            </div>
          )}
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <Switch
            onChange={handleCustomDate}
            checked={customPeriod}
            height={25}
            handleDiameter={15}
            uncheckedIcon={<span></span>}
            checkedIcon={<span></span>}
          />
        </div>
        {
          <Category
            categories={
              !customPeriod
                ? [
                    ...new Set(monthData.map((expense) => expense.category)),
                  ] ?? ["Category"]
                : [
                    ...new Set(
                      customPeriodData.map((expense) => expense.category)
                    ),
                  ]
            }
            category={category}
            upliftCategory={setCategory}
          />
        }
        {<Tag tag={tag} upliftTag={setTag} />}
        {
          <PaymentChannel
            paymentChannels={
              !customPeriod
                ? [
                    ...new Set(
                      monthData.map((expense) => expense.paymentChannel)
                    ),
                  ] ?? ["Payment Channel"]
                : [
                    ...new Set(
                      customPeriodData.map((expense) => expense.paymentChannel)
                    ),
                  ]
            }
            paymentChannel={paymentChannel}
            upliftPaymentChannel={setPaymentChannel}
          />
        }
      </div>
      <ExpenseTable
        dataSource={!customPeriod ? monthData : customPeriodData}
        columns={columns}
        filter={{
          category: category,
          tag: tag,
          paymentChannel: paymentChannel,
        }}
      />
    </div>
  );
};

export default ViewExpensePage;
