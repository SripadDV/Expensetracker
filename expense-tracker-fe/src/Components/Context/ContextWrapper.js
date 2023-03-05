import React from "react";
import { useContext } from "react";

import expenseTrackerContext from "./CreateContext";

export const ContextWrapper = (props) => {
  const [monthlyExpense, setMonthlyExpense] = props.monthlyExpense;
  return (
    <expenseTrackerContext.Provider value={monthlyExpense}>
      {props.children}
    </expenseTrackerContext.Provider>
  );
};

export default useExpenseTrackerContext = useContext(expenseTrackerContext);
