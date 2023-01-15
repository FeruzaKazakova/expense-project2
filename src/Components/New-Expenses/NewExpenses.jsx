import React, { useState } from "react";
import styled from "styled-components";
import { ExpenseForm } from "../ExpensesForm/ExpensesForm";
// import "./NewExpenses.css";

const NewExpensesContainer =styled.div`
background-color: #a892ee;
padding: 1rem;
margin: 2rem auto;
width: 50rem;
max-width: 95%;
border-radius: 12px;
text-align: center;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`
const Button = styled.button`
font: inherit;
cursor: pointer;
padding: 1rem 2rem;
border: 1px solid #40005d;
background-color: #40005d;
color: white;
border-radius: 12px;
margin-right: 1rem;

&:hover,
&:active {
    background-color: #510674;
    border-color: #510674;
}
`

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
        <NewExpensesContainer>
            {!isEditing && <Button onClick={editingHandler}>Добавить новые расходы</Button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onReset={cancelHandler}/>}
        </NewExpensesContainer>
    );
};
