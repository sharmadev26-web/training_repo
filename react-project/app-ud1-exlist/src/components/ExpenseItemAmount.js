import './ExpenseItemAmount.css'
const ExpenseItemAmount = (props) =>{
return(
  <div className="expense-amount">
    {props.itemPrice}
  </div>
)
}

export default ExpenseItemAmount;