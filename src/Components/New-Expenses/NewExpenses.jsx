import React, { useState } from "react";
import { ExpenseForm } from "../ExpensesForm/ExpensesForm";
import "./NewExpenses.css";

export const NewExpenses = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const editingHandler = (event) => {
        event.preventDefault();

        setIsEditing(true);
    }

    const cancelHandler = () => {
        setIsEditing(false);
    }


    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={editingHandler}>Добавить новые расходы</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onReset={cancelHandler}/>}
        </div>
    );
};
