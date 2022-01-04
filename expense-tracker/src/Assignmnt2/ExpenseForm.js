import React, {useState} from 'react';

import './ExpenseForm.css';

let INITIAL_VALUE = {
    title:'',
    amount: '',
    date:'',
    id:Math.random()
}

const ExpenseForm = (props) => {
    const [expense, setExpense] = useState(INITIAL_VALUE);
    const titleChangeHandler = (event) => {
        setExpense({...expense,'title':event.target.value});
    }
    const amountChangeHandler = (event) => {
        setExpense({...expense,'amount':event.target.value});
    }
    const dateChangeHandler = (event) => {
        setExpense({...expense,'date':new Date(event.target.value)});
    }
    const submitDataHanlder = () => {
        props.updateFormData(expense);
        setExpense(INITIAL_VALUE);
    }
    const cancelDataHanlder = () => {
        props.addExpenseHandler(false);
    }
   return (
       <div className="expense_form">
           <div className="expense_form_group_item">
               <label>Enter Title</label>
               <input type='text' value={expense.title} onChange={titleChangeHandler}></input>
           </div>
           <div className="expense_form_group_item">
               <label>Enter Amount</label>
               <input type='number' value={expense.amount} onChange={amountChangeHandler}></input>
           </div>
           <div className="expense_form_group_item">
               <label>Enter Date</label>
               <input type='date'  onChange={dateChangeHandler}></input>
           </div>
           <div className="expense_form_group_button">
               <input type="button" onClick={submitDataHanlder} value="Save Data"></input>
               <input type="button" onClick={cancelDataHanlder} value="Cancel"></input>
           </div>
       </div>
   )
}

export default ExpenseForm;