import "./ExpensesForm.css";
import { useState } from "react";

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
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Наименование</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Количество денег</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        value={enteredPrice}
                        onChange={priceChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Дата</label>
                    <input
                        type='date'
                        min='2019-01-01'
                        max='2023-12-31'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='reset' onClick={resetHandler}>Отмена</button>
                <button type='submit'>Сохранить</button>
            </div>
        </form>
    );
};
