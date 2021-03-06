import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux';

const Counter = () => {
  const toggleCounterHandler = () => {};

  const counter = useSelector((state)=> state.counter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({type:'INCREMENT'});
  }
  const decrementHandler = () => {
    dispatch({type:"DECREMENT"});
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
