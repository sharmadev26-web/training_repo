import ExpenseItemDate from './ExpenseItemDate'
import ExpenseItemAmount from './ExpenseItemAmount'
import './ExpenseItem.css'
const ExpenseItem = (props) =>{
const {id,itemName,itemPrice,itemDate} = props.data;
console.log(props);
return(
    <div className="app-row">
        <div className="app-row-date">
        <ExpenseItemDate itemDate={itemDate}></ExpenseItemDate>
        </div>
        <div className="app-row-text">
            {itemName}
        </div>
        <div className="app-row-amount">
        <ExpenseItemAmount itemPrice={itemPrice}></ExpenseItemAmount>
        </div>
    </div>
)
}
export default ExpenseItem;