import React from "react";
import "./ShowAddedExpensePage.css";

const ShowAddedExpensePage = (props) => {
  const setExpenseAdded = props.setExpenseAdded;
  const handleCancel = props.handleCancel;

  const handleUpdateExpense = (e) => {
    e.preventDefault();
    setExpenseAdded(false);
  };

  const addNewExpense = () => {
    setExpenseAdded(false);
    handleCancel();
  };

  const addedExpense = props.expense;
  return (
    <div>
      <div>
        {" "}
        <h3> Expense Details </h3>
      </div>
      <div>
        <table>
          <tr>
            <th>Specific</th>
            <th>Details</th>
          </tr>
          <tr>
            <td>
              <strong>Title</strong>
            </td>
            <td>{addedExpense.title}</td>
          </tr>
          <tr>
            <td>
              <strong>Amount</strong>
            </td>
            <td>{addedExpense.amount}</td>
          </tr>
          <tr>
            <td>
              <strong>Date</strong>
            </td>
            <td>
              {new Date(addedExpense.date)
                .toISOString()
                .replace(/T.*/, "")
                .split("-")
                .reverse()
                .join("-")}
            </td>
          </tr>
          <tr>
            <td>
              <strong>Category</strong>
            </td>
            <td>{addedExpense.category}</td>
          </tr>
          <tr>
            <td>
              <strong>Tag</strong>
            </td>
            <td>{addedExpense.tag}</td>
          </tr>
          <tr>
            <td>
              <strong>Payment Channel</strong>
            </td>
            <td>{addedExpense.paymentChannel}</td>
          </tr>
        </table>
      </div>

      <div style={{ margin: "20px 0px" }}>
        <button
          type="submit"
          style={{ margin: "20px", backgroundColor: "gold", width: "200px" }}
          onClick={handleUpdateExpense}
        >
          {" "}
          Edit Expense{" "}
        </button>
        <button
          type="reset"
          style={{ margin: "20px", backgroundColor: "beige", width: "200px" }}
        >
          {" "}
          Add New Expense{" "}
        </button>
      </div>
    </div>
  );
};

export default ShowAddedExpensePage;
