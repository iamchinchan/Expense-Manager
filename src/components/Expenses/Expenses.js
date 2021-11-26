import React from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      <ExpenseItem
        expenseTitle={expenses[0].title}
        expenseDate={expenses[0].date}
        expenseAmount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        expenseTitle={expenses[1].title}
        expenseDate={expenses[1].date}
        expenseAmount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        expenseTitle={expenses[2].title}
        expenseDate={expenses[2].date}
        expenseAmount={expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        expenseTitle={expenses[3].title}
        expenseDate={expenses[3].date}
        expenseAmount={expenses[3].amount}
      ></ExpenseItem>
    </Card>
  );
};
export default Expenses;
