import React,{useState} from "react";
import "../css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const ExpenseItem = (props) => {

  const [expenseTitle, setExpenseTitle]=useState(props.expenseTitle);
  //per component instance basis
  const clickHandler = () => {
    setExpenseTitle("updated!");
    console.log(expenseTitle);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${props.expenseAmount}</div>
      </div>
      <button onClick={clickHandler}> change title</button>
    </Card>
  );
};

export default ExpenseItem;
