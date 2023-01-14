import React, {useState} from "react";
import "./Expenses.css";
import { ExpensesFilter } from "../expenses-filter/ExpensesFilter";
import { ExpensesMonths } from "../Expense-months/ExpensesMonths";
import { ExpensesList } from "../expenses-list/ExpensesList";
import {Container} from '../UI/Container';

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (date) => {
    setFilteredYear(date);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
      <Container className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}/>

        <ExpensesMonths expenses={filteredExpenses} />
        
        <ExpensesList items={filteredExpenses} />
      </Container>
  );
};