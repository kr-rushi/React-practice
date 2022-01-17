import React, { useState } from "react";

function HookCounterTwo() {
  const Initialcount = 0;
  const [count, setCount] = useState(Initialcount);
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(Initialcount)}>Reset</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount((prev) => prev + 5)}>Increment</button>
    </div>
  );
}

export default HookCounterTwo;
