import React from 'react';
import '../css/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{
    const onSaveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseData= {
            ...enteredExpenseData,
            id:Math.random().toString(),
        } ;
        console.log("expenseData; ",expenseData);
        props.addExpenseData(expenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;