import React,{useState} from 'react';
import '../css/NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{
    const [addNewExpenseButton,setAddNewExpenseButton]=useState(true);
    const onSaveExpenseDataHandler =(enteredExpenseData)=>{
        const expenseData= {
            ...enteredExpenseData,
            id:Math.random().toString(),
        } ;
        console.log("expenseData; ",expenseData);
        props.addExpenseData(expenseData);
    }
    const newExpenseButtonHandler=()=>{
        setAddNewExpenseButton(false);
    }
    const cancelHandler=()=>{
        setAddNewExpenseButton(true);
    }
    return(
        <div className="new-expense">
            {addNewExpenseButton && <button onClick={newExpenseButtonHandler}>Add New Expense</button>}
            {!addNewExpenseButton && <ExpenseForm onCancelOrSubmit={cancelHandler} onSaveExpenseData={onSaveExpenseDataHandler} />}
            
        </div>
    );
}

export default NewExpense;