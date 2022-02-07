import React from 'react';

import Card from '../Ui/Card'

import './ExpenseItem.css';

const ExpenseItem = (props) => {
const monthMap = {'0':'January', '1': 'Febuary', '2': 'March', '3': 'April', '4': 'May', '5': 'June', '6': 'July', '7':'August', '8': 'September', '9':'October', '10':'November' ,'11':'December'};
let month = '';
let year = '';
let date = '';
if(props.date){
 month = monthMap[props.date.getMonth()];
 year = props.date.getFullYear();
 date = props.date.getDate();
}
return(
    <Card>
        <div className="item_date">
            <div className="item_date_month">{month}</div>
            <div className="item_date_year">{year}</div>
            <div className="item_date_date">{date}</div>
        </div>
        <div className="item_title">{props.title}</div>
        
        <div className="item_amount">{props.amount}</div>
    </Card>
)
}

export default ExpenseItem;