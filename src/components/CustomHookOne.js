import React, { useState } from "react";
import useDocument from "./useDocument";

function CustomHookOne() {
  const [count, setCount] = useState(0);
  useDocument(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  );
}

export default CustomHookOne;
