import React, { useEffect, useState } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount((prevcount) => prevcount + 1);
  };
  useEffect(() => {
    console.log("called");
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{count}</div>;
}

export default IntervalHookCounter;
