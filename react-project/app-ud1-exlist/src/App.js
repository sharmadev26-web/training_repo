import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const data =[{
    id:'1',
    itemName:"Pencil",
    itemPrice:"$ 500.69",
    itemDate:"01-02-1998"
  },
  {
    id:'2',
    itemName:"Rubber",
    itemPrice:"$ 800.00",
    itemDate:"05-07-2002"
  },
  {
    id:'3',
    itemName:"Pen",
    itemPrice:"$ 1000.99",
    itemDate:"01-02-2019"
  }];
  return (
    <div>
       <h1> Expense Lets get started...</h1>

      <div>
         {data.map((item)=> <ExpenseItem key={item.id} data={item}></ExpenseItem>)}
      </div>
    </div>
  );
}

export default App;
