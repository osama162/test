import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, { counter: 1 });
  function increment() {
    dispatch({ type: "increment" });
  }
  function decrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <div className="App">
      <h1>Counter Using Reducer</h1>
      <button onClick={increment}>Increment</button>
      {state.counter}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default ReducerCounter;
