import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function UseReducerCounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [counttwo, dispatchtwo] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        count {count}
        <button onClick={() => dispatch("increment")}>Increment</button>
        <button onClick={() => dispatch("decrement")}>Decrement</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
      </div>
      <div>
        count {counttwo}
        <button onClick={() => dispatchtwo("increment")}>Increment</button>
        <button onClick={() => dispatchtwo("decrement")}>Decrement</button>
        <button onClick={() => dispatchtwo("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default UseReducerCounterThree;
