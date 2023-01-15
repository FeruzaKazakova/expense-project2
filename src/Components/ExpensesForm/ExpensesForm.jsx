// import "./ExpensesForm.css";
import { useState } from "react";
import styled from "styled-components";

const NewExpenseControls = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
margin-bottom: 1rem;
text-align: left;
`
const NewExpenseAction = styled.div`
text-align: right;
`
const NewExpenseLabel = styled.label`
font-weight: bold;
margin-bottom: 0.5rem;
display: block;
`
const NewExpenseInput = styled.input`
font: inherit;
padding: 0.5rem;
border-radius: 6px;
border: 1px solid #ccc;
width: 20rem;
max-width: 100%;
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

export const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const priceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            price: +enteredPrice,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredPrice('');
        setEnteredDate('');
        props.onReset()
    };

    const resetHandler = () => {
        props.onReset()
    }

    return (
        <form onSubmit={submitHandler}>
            <NewExpenseControls>
                <div>
                    <NewExpenseLabel>Наименование</NewExpenseLabel>
                    <NewExpenseInput
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div>
                    <NewExpenseLabel>Количество денег</NewExpenseLabel>
                    <NewExpenseInput
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredPrice}
                        onChange={priceChangeHandler}
                    />
                </div>
                <div>
                    <NewExpenseLabel>Дата</NewExpenseLabel>
                    <NewExpenseInput
                        type='date'
                        min='2019-01-01'
                        max='2023-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </NewExpenseControls>
            <NewExpenseAction>
                <Button type='reset' onClick={resetHandler}>Отмена</Button>
                <Button type='submit'>Сохранить</Button>
            </NewExpenseAction>
        </form>
    );
};
