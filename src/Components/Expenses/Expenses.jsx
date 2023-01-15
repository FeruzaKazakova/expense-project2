import React, {useState} from "react";
import { ExpensesFilter } from "../expenses-filter/ExpensesFilter";
import { ExpensesMonths } from "../Expense-months/ExpensesMonths";
import { ExpensesList } from "../expenses-list/ExpensesList";
import styled from "styled-components";

const Container = styled.div`
background-color: rgb(31, 31, 31);
margin: 2rem auto;
width: 50rem;
max-width: 95%;
border-radius: 12px;
`

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (date) => {
    setFilteredYear(date);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
      <Container>
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}/>

        <ExpensesMonths expenses={filteredExpenses} />
        
        <ExpensesList items={filteredExpenses} />
      </Container>
  );
};