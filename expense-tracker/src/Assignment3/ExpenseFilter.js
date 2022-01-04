import React from 'react';

import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
 const yearChangeHandler = (event) => {
     let selectedValue = event.target.value;
 }
 return (
     <div className="filter-conatiner">
         <p>Filter by year</p>
         <div className="filter-dropdown-conatiner">
             <select onChange={yearChangeHandler}>
                 <option value="2020">2020</option>
                 <option value="2021">2021</option>
                 <option value="2022">2022</option>
             </select>
         </div>
     </div>
 )
}

export default ExpenseFilter;