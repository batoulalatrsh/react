import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  //this func will be execute by react-redux
  //useSelector will select slice of state
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function incrementHandler(){
    
  }

  function decrementHandle(){

  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
