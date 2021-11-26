import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "../css/Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.expenses .filter(
    (expenseItem) => expenseItem.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expenseItem, index) => {
        return (
          <ExpenseItem
            key={expenseItem.id}
            expenseTitle={expenseItem.title}
            expenseDate={expenseItem.date}
            expenseAmount={expenseItem.amount}
          />
        );
      })}
    </Card>
  );
};
export default Expenses;
