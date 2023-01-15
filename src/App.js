import React, { useState }  from "react";
import styled from "styled-components";
import { Expenses } from "./Components/Expenses/Expenses";
import { NewExpenses } from "./Components/New-Expenses/NewExpenses";
// import './App.css'

const MainContainer = styled.div`
margin: 0;
background-color: #3f3f3f;
`

const expensess = [
  {
    id: "rr",
    title: "Туалетная бумага",
    price: 90.00,
    date: new Date(2022, 2, 27),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(expensess);

  const addExpenseHandler = (expense) => {
    setExpenses((previousArray) => {
      return [expense, ...previousArray]
    });
  };

  return (
    <MainContainer>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <div><Expenses items={expenses} /></div>
    </MainContainer>
  );
};

export default App;