import React, { useContext } from "react";
import { CountContext } from "../App";

function UseReducerComponentC() {
  const countContext = useContext(CountContext);
  return (
    <div>
      component C {countContext.countstate}
      <button
        onClick={() =>
          countContext.countdispatch({ type: "increment", value: 3 })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          countContext.countdispatch({ type: "decrement", value: 3 })
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

export default UseReducerComponentC;
