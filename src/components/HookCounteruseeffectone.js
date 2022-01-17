import React, { useEffect, useState } from "react";

function HookCounteruseeffectone() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("updating");
    document.title = `clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((prev) => prev + 1)}>
        click {count}
      </button>
    </div>
  );
}

export default HookCounteruseeffectone;
