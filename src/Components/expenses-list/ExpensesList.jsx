import { ExpenseItem } from '../expenses-item/ExpensesItem'
import './ExpensesList.css'

export const ExpensesList = props => {
  if (props.items.length === 0) {
      return <h2 className="fallback">Затрат не было.</h2>
  }

  return  <ul className="expenses-list">
      {props.items.map((expense) => (
      <ExpenseItem
        title={expense.title}
        price={expense.price}
        date={expense.date}
        key={expense.id}
      />
    ))};
  </ul>
}