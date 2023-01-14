import React from "react";
import "./ExpensesItem.css";
import { ExpenseDate } from "../expense-date/ExpenseDate";

export const ExpenseItem = (props) => {
  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="description">
          <h2>{props.title}</h2>
        </div>
        <div className="price">${props.price}</div>
      </div>
    </li>
  );
}