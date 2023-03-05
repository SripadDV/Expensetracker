import React from "react";
import { Table, Pagination } from "antd";
import PaymentChannel from "../PaymentChannel/PaymentChannel";
import "./ExpenseTable.css";

const ExpenseTable = (props) => {
  const data = props.dataSource;
  const columns = props.columns;
  const categoryFilter = props.filter.category;
  const tagFilter = props.filter.tag;
  const paymentChannelFilter = props.filter.paymentChannel;
  //console.log("Category Filter");
  //console.log(categoryFilter);
  const categoryFilteredData =
    categoryFilter == "Category"
      ? data
      : data.filter((expense) => expense.category == categoryFilter);
  const tagFilteredData =
    tagFilter == ""
      ? categoryFilteredData
      : categoryFilteredData.filter((expense) =>
          expense.tag.toLowerCase().includes(tagFilter)
        );
  const paymentChannelFilteredData =
    paymentChannelFilter == "Payment Channel"
      ? tagFilteredData
      : tagFilteredData.filter(
          (expense) => expense.paymentChannel == paymentChannelFilter
        );
  return (
    <>
      <div style={{ margin: "20px 0px", fontWeight: "bold" }}>
        {" "}
        Total Expenditure Rs.
        {paymentChannelFilteredData
          .reduce((acc, o) => acc + parseInt(o.amount), 0)
          .toLocaleString()}{" "}
      </div>
      <div
        style={{
          /*border: "1px solid",*/
          height: "90%",
          margin: "20px 0px",
          overflowY: "auto",
        }}
      >
        <Table
          dataSource={paymentChannelFilteredData}
          columns={columns}
          style={{
            /*border: "1px solid red",*/
            height: "100%",
          }}
          //pagination={{ pageSize: 3 }}
          pagination={{ pageSize: 5, position: "bottom" }}
        />
      </div>
    </>
  );
};

export default ExpenseTable;
