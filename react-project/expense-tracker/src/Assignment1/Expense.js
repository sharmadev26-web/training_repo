import React from 'react';

import ExpenseItem from './ExpenseItem'
const Expense = (props) => {
return (
    <div>
        {props.expenses.map((item) => <ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount}></ExpenseItem>)}
    </div>
)
}
export default Expense;