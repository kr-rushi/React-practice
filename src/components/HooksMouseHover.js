import React, { useEffect, useState } from "react";

function HooksMouseHover() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logposition = (e) => {
    console.log("event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useeffect called");
    window.addEventListener("mousemove", logposition);
    return () => {
      console.log("unmount");
      window.removeEventListener("mousemove", logposition);
    };
  }, []);
  return (
    <div>
      {x} {y}
    </div>
  );
}

export default HooksMouseHover;
