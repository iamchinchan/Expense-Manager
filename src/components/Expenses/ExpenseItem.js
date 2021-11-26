import React from "react";
import "../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  // const [expenseTitle, setExpenseTitle]=useState(props.expenseTitle);
  //per component instance basis

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={props.expenseDate} />
        <div className="expense-item__description">
          <h2>{props.expenseTitle}</h2>
          <div className="expense-item__price">${props.expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
