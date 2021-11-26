import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  
  const [filteredYear,setFilteredYear]= useState('2020');

  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  };

  const expenses = props.expenses;
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
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
