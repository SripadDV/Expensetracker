import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AddExpensePage.css";
import CurrencyInput from "react-currency-input-field";
import ShowAddedExpensePage from "./ShowAddedExpensePage";

const AddExpensePage = (props) => {
  const [title, setTitle] = useState(props.title);
  const [titleEmpty, setTitleEmpty] = useState(false);

  const [amount, setAmount] = useState(props.amount);
  const [amountEmpty, setAmountEmpty] = useState(false);

  const [date, setDate] = useState(props.date);
  const [dateEmpty, setDateEmpty] = useState();

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(props.category);
  const [categoryEmpty, setCategoryEmpty] = useState(false);

  const [tag, setTag] = useState(props.tag);

  const [paymentChannels, setPaymentChannels] = useState([]);
  const [paymentChannel, setPaymentChannel] = useState(props.paymentChannel);
  const [paymentChannelEmpty, setPaymentChannelEmpty] = useState(false);

  const [expenseAdded, setExpenseAdded] = useState(false);
  const [expenseResponse, setExpenseResponse] = useState({});
  const [expense, setExpense] = useState({});

  const getAllCategories = () => {
    axios
      .get("http://localhost:8080/category/getAllCategories")
      .then((response) => {
        setCategories(response.data);
        console.log("Categories");
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getAllPaymentChannels = () => {
    axios
      .get("http://localhost:8080/paymentChannels/getAllPaymentChannels")
      .then((response) => {
        setPaymentChannels(response.data);
        console.log("PaymentChannels");
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //const submitExpense = () => {
  useEffect(() => {
    console.log("Expense object");
    console.log(expense);
    console.log("Expense Id: ");
    console.log(expense.id);

    if (expense.id) {
      axios
        .put("http://localhost:8080/expenses/updateExpense", expense)
        .then((response) => {
          console.log("Expense updated");
          setExpenseAdded(true);
          setExpenseResponse(response.data);
          //setExpense(response.data);
          //expense = { ...expense, id: response.data.id };
          console.log("Expense updated response");
          console.log(expense);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else if (Object.keys(expense).length > 0) {
      axios
        .post("http://localhost:8080/expenses/addExpense", expense)
        .then((response) => {
          console.log("Expense added");
          setExpenseAdded(true);
          setExpenseResponse(response.data);
          //setExpense(response.data);
          //expense = { ...expense, id: response.data.id };
          console.log("Expense added response");
          console.log(expense);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("Doing nothing");
    }
  }, [expense]);

  useEffect(() => {
    getAllCategories();
    getAllPaymentChannels();
  }, []);

  const handleTitle = (e) => {
    setTitle(e.target.value);
    console.log(e.target.value.trim());
    if (e.target.value.trim() == "") {
      setTitleEmpty(true);
    } else {
      setTitleEmpty(false);
    }
  };

  const handleAmount = (val) => {
    console.log(val);
    setAmount(val);
    if (val > 0) {
      setAmountEmpty(false);
    } else {
      setAmountEmpty(true);
    }
  };

  const handleDate = (e) => {
    setDate(e.target.value);
    console.log();
    if (e.target.value == "") {
      setDateEmpty(true);
    } else {
      setDateEmpty(false);
    }
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
    if (e.target.value == "") {
      setCategoryEmpty(true);
    } else {
      setCategoryEmpty(false);
    }
  };

  const handleTag = (e) => {
    setTag(e.target.value);
  };

  const handlePaymentChannel = (e) => {
    setPaymentChannel(e.target.value);
    if (e.target.value == "") {
      setPaymentChannelEmpty(true);
    } else {
      setPaymentChannelEmpty(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title != "" &&
      amount != "" &&
      date != "" &&
      category != "" &&
      paymentChannel != ""
    ) {
      console.log("before");
      console.log(expense);
      setExpense({
        ...expenseResponse,
        title: title,
        amount: amount,
        date: date,
        category: category,
        tag: tag,
        paymentChannel: paymentChannel,
      });

      /*
      setExpense((prevExpense) => {
        return { ...prevExpense, amount: amount };
      });
      setExpense((prevExpense) => {
        return { ...prevExpense, date: date };
      });
      setExpense((prevExpense) => {
        return { ...prevExpense, category: category };
      });
      setExpense((prevExpense) => {
        return { ...prevExpense, tag: tag };
      });
      setExpense((prevExpense) => {
        return { ...prevExpense, paymentChannel: paymentChannel };
      });
      */
      //submitExpense();
    } else {
      if (title == "") {
        setTitleEmpty(true);
      }
      if (amount == "") {
        setAmountEmpty(true);
      }
      if (date == "") {
        setDateEmpty(true);
      }
      if (category == "") {
        setCategoryEmpty(true);
      }
      if (paymentChannel == "") {
        setPaymentChannelEmpty(true);
      }
    }
  };

  const resetInputs = () => {
    setTitle(null);
    setTitleEmpty(false);
    setAmount(null);
    setAmountEmpty(false);
    setDate("");
    setDateEmpty(false);
    setCategory();
    setCategoryEmpty(false);
    setTag();
    setPaymentChannel();
    setPaymentChannelEmpty(false);
  };
  const handleCancel = (e) => {
    //e.preventDefault();
    resetInputs();
  };

  return (
    <div className="addExpense">
      <div
        style={{ textAlign: "center", margin: "10px 0px", border: "1px solid" }}
      >
        {" "}
        {!expenseAdded ? <h2>Expense Details </h2> : <h2> Expense Added</h2>}
      </div>
      {expenseAdded ? (
        <ShowAddedExpensePage
          expense={expenseResponse}
          setExpenseAdded={setExpenseAdded}
          handleCancel={handleCancel}
        />
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "grid",
            gridTemplateColumns: "33% 33% 33%",
            gridTemplateRowss: "auto auto auto",
          }}
        >
          <div
            style={{
              margin: "30px 0px",
            }}
          >
            <div
              style={{
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              <label>Title {"  "}</label>
              {titleEmpty ? (
                <span
                  style={{
                    fontSize: "small",
                    color: "red",
                    fontWeight: "normal",
                  }}
                >
                  required
                </span>
              ) : (
                <></>
              )}
            </div>
            <input
              type="text"
              placeholder="Title"
              required
              style={{ height: "25px", width: "300px", fontSize: "large" }}
              onChange={handleTitle}
              value={title}
            ></input>
          </div>

          <div
            style={{
              margin: "30px 0px",
            }}
          >
            <div
              style={{
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              <label>Amount {"  "}</label>
              {amountEmpty ? (
                <span
                  style={{
                    fontSize: "small",
                    color: "red",
                    fontWeight: "normal",
                  }}
                >
                  required
                </span>
              ) : (
                <></>
              )}
            </div>
            <CurrencyInput
              /*step="0.01"*/
              prefix="Rs. "
              placeholder="Rs. "
              decimalsLimit={2}
              allowNegativeValue={false}
              required
              style={{ height: "25px", width: "300px", fontSize: "large" }}
              onValueChange={handleAmount}
              value={amount}
            ></CurrencyInput>
          </div>

          <div
            style={{
              margin: "30px 0px",
            }}
          >
            <div
              style={{
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              <label>Date {"  "}</label>
              {dateEmpty ? (
                <span
                  style={{
                    fontSize: "small",
                    color: "red",
                    fontWeight: "normal",
                  }}
                >
                  required
                </span>
              ) : (
                <></>
              )}
            </div>
            <input
              type="date"
              style={{ height: "25px", width: "300px", fontSize: "large" }}
              onChange={handleDate}
              value={date}
            ></input>
          </div>

          <div
            style={{
              margin: "30px 0px",
            }}
          >
            <div
              style={{
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              <label>Category {"  "}</label>
              {categoryEmpty ? (
                <span
                  style={{
                    fontSize: "small",
                    color: "red",
                    fontWeight: "normal",
                  }}
                >
                  required
                </span>
              ) : (
                <></>
              )}
            </div>
            <input
              type="text"
              placeholder="Category"
              required
              style={{ height: "25px", width: "300px", fontSize: "large" }}
              onChange={handleCategory}
              value={category}
              list="categories"
            />
            <datalist id="categories">
              {categories.map((category) => {
                return <option key={category.id}>{category.category}</option>;
              })}
            </datalist>
          </div>

          <div
            style={{
              margin: "30px 0px",
            }}
          >
            <div
              style={{
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              <label>Tag {"  "}</label>
            </div>
            <input
              type="text"
              placeholder="Tag"
              style={{ height: "25px", width: "300px", fontSize: "large" }}
              onChange={handleTag}
              value={tag}
            ></input>
          </div>

          <div
            style={{
              margin: "30px 0px",
            }}
          >
            <div
              style={{
                fontSize: "large",
                fontWeight: "bold",
              }}
            >
              <label>Payment Channel {"  "}</label>
              {paymentChannelEmpty ? (
                <span
                  style={{
                    fontSize: "small",
                    color: "red",
                    fontWeight: "normal",
                  }}
                >
                  required
                </span>
              ) : (
                <></>
              )}
            </div>
            <input
              type="text"
              placeholder="Payment Channel"
              required
              style={{ height: "25px", width: "300px", fontSize: "large" }}
              onChange={handlePaymentChannel}
              value={paymentChannel}
              list="paymentChannels"
            />
            <datalist id="paymentChannels">
              {paymentChannels.map((pc) => {
                return <option key={pc.id}>{pc.paymentChannel}</option>;
              })}
            </datalist>
          </div>

          <div
            style={{
              margin: "30px 0px",
            }}
          >
            <button
              type="submit"
              style={{
                height: "25px",
                width: "300px",
                fontSize: "large",
                backgroundColor: "#c9df8a",
              }}
              className="submit"
              on={handleSubmit}
            >
              Add Expense
            </button>
          </div>

          <div
            style={{
              margin: "30px 0px",
            }}
          >
            <button
              type="reset"
              style={{
                height: "25px",
                width: "300px",
                fontSize: "large",
                backgroundColor: "#e00000",
              }}
              className="submit"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddExpensePage;
