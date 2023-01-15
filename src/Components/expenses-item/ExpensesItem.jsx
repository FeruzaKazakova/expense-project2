import React from "react";
import styled from "styled-components";
// import "./ExpensesItem.css";
import { ExpenseDate } from "../expense-date/ExpenseDate";

const ExpenseItemContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem;
margin: 1.3rem 1rem;
background-color: #4b4b4b;
border-radius: 12px;
box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`
const Description = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
align-items: flex-start;
flex-flow: column-reverse;
justify-content: flex-start;
flex: 1;
`
const Title = styled.h2`
color: #3a3a3a;
font-size: 1rem;
flex: 1;
margin: 0 1rem;
color: white;
`
const Price = styled.div`
font-size: 1rem;
font-weight: bold;
color: white;
background-color: #40005d;
border: 1px solid white;
padding: 0.5rem;
border-radius: 12px;
`

export const ExpenseItem = (props) => {
  return (
    <li>
      <ExpenseItemContainer>
        <ExpenseDate date={props.date} />
        <Description>
          <Title>{props.title}</Title>
        </Description>
        <Price>${props.price}</Price>
      </ExpenseItemContainer>
    </li>
  );
}