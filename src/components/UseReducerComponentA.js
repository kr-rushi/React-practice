import React, { useContext } from "react";
import { CountContext } from "../App";
function UseReducerComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      component A {countContext.countstate}
      <button
        onClick={() =>
          countContext.countdispatch({ type: "increment", value: 5 })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          countContext.countdispatch({ type: "decrement", value: 5 })
        }
      >
        Decrement
      </button>
      <button onClick={() => countContext.countdispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default UseReducerComponentA;
