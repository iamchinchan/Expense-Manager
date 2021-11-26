import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/ExpensesList.css";
const ExpensesList = (props) => {
  if (props.expensesContent.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expensesContent.map((expenseItem, index) => {
        return (
          <ExpenseItem
            key={expenseItem.id}
            expenseTitle={expenseItem.title}
            expenseDate={expenseItem.date}
            expenseAmount={expenseItem.amount}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
