import React, { useState }  from "react";
import { Expenses } from "./Components/Expenses/Expenses";
import { NewExpenses } from "./Components/New-Expenses/NewExpenses";
import './App.css'


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
    <div className="main">
      <NewExpenses onAddExpense={addExpenseHandler} />
      <div className="divv"><Expenses items={expenses} /></div>
    </div>
  );
};

export default App;