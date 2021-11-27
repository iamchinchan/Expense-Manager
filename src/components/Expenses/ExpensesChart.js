import React from "react";
import Chart from "../chart/Chart";
import ChartBar from "../chart/ChartBar";

const ExpensesChart = (props) => {
  let filteredDataPoints = [
    {
      value: 0,
      label: "Jan",
    },
    {
      value: 0,
      label: "Feb",
    },
    {
      value: 0,
      label: "Mar",
    },
    {
      value: 0,
      label: "Apr",
    },
    {
      value: 0,
      label: "May",
    },
    {
      value: 0,
      label: "Jun",
    },
    {
      value: 0,
      label: "Jul",
    },
    {
      value: 0,
      label: "Aug",
    },
    {
      value: 0,
      label: "Sep",
    },
    {
      value: 0,
      label: "Oct",
    },

    {
      value: 0,
      label: "Nov",
    },
    {
      value: 0,
      label: "Dec",
    },
  ];

  for(const expense of props.expenses){
      let expenseMonth = expense.date.getMonth(); // index start from 0: jan=>0
      filteredDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={filteredDataPoints}/>;
};
export default ExpensesChart;
