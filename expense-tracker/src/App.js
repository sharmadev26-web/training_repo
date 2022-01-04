import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import Expense from './Assignment1/Expense';
import ExpenseForm from './Assignmnt2/ExpenseForm';
import ExpenseFilter from './Assignment3/ExpenseFilter'

let INITIAL_VALUE = [
  {
    id:1,
    title: 'toilet paper',
    amount: 2000,
    date: new Date()
  },
  {
    id:2,
    title: 'tough paper',
    amount: 200,
    date: new Date()
  },
  {
    id:3,
    title: 'raw paper',
    amount: 100.99,
    date: new Date()
  }
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_VALUE);
  const [displayAddButon, setDisplayAddButon] = useState(false);
  const updateFormDataHanlder = (newExpense) => {
    
    setExpenses([newExpense, ...expenses]);
    console.log(expenses);
  }
  const addExpenseHandler = (value) => {
    if(value == false){
      setDisplayAddButon(false);
    } else{
      setDisplayAddButon(true);
    }
    
  }
  let formContent = (<div><button className="add_expense_button" onClick={addExpenseHandler}>Add Expenses</button></div>)
  if(displayAddButon){
    formContent = (<ExpenseForm updateFormData={updateFormDataHanlder} addExpenseHandler={addExpenseHandler}></ExpenseForm>)
  }
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      {formContent}
      <ExpenseFilter></ExpenseFilter>
      <Expense expenses={expenses}></Expense>
    </div>
  );
}

export default App;
