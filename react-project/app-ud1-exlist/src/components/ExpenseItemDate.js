import './ExpenseItemDate.css';
const ExpenseItemDate = (props) => {
let monthMap = ['Jan','Feb','March','April','May','June', 'July', 'August','Sep','Oct', 'Nov', 'Dec'];

 let itemDate = props.itemDate;
 let date =  new Date(itemDate);
 let m = date.getMonth();
 let d = date.getDate();
 let y = date.getFullYear();
 d = (Number(d)<10) ? "0"+d : d;
 return(
     <div className="expense-date-container">
         <div className="expense-date-container-item-month">{monthMap[m]}</div>
         <div className="expense-date-container-item-year">{y}</div>
         <div className="expense-date-container-item-date">{d}</div>
     </div>
 )
}

export default ExpenseItemDate;