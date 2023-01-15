import styled from 'styled-components'
import { ExpenseItem } from '../expenses-item/ExpensesItem'
// import './ExpensesList.css'

const ExpensesListContainer = styled.ul`
list-style: none;
padding: 0;
`
const Fallback = styled.h2`
color: white;
text-align: center;
padding-bottom: 1rem;
`

export const ExpensesList = props => {
  if (props.items.length === 0) {
      return <Fallback>Затрат не было.</Fallback>
  }

  return  <ExpensesListContainer>
      {props.items.map((expense) => (
      <ExpenseItem
        title={expense.title}
        price={expense.price}
        date={expense.date}
        key={expense.id}
      />
    ))}.
  </ExpensesListContainer>
}