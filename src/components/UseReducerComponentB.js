import React, { useContext } from "react";
import { CountContext } from "../App";
function UseReducerComponentB() {
  const countContext = useContext(CountContext);
  return (
    <div>
      component C {countContext.countstate}
      <button
        onClick={() =>
          countContext.countdispatch({ type: "increment", value: 2 })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          countContext.countdispatch({ type: "decrement", value: 2 })
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

export default UseReducerComponentB;
