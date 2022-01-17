import React, { useState } from "react";
import HooksMouseHover from "./HooksMouseHover";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>change</button>
      {display && <HooksMouseHover />}
    </div>
  );
}

export default MouseContainer;
