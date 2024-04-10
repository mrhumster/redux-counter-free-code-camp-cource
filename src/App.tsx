import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { actions } from "./store";

interface CounterIFace {
  counter: number
}

function App() {
  const counter = useSelector((state: CounterIFace) => state.counter);
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(actions.increment(1))
  }
  const decrement = () => {
    dispatch(actions.decrement(1))
  }
  const addBy = () => {
    dispatch(actions.addBy(10))
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment counter</button>
      <button onClick={decrement}>Decrement counter</button>
      <button onClick={addBy}> Add by 10</button>
    </div>
  );
}

export default App;
