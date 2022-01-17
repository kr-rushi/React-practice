import React, { useContext } from "react";
import { ChannelContext } from "../App";
import { UserContext } from "../App";

function HooksContext() {
  const user = useContext(UserContext);
  const name = useContext(ChannelContext);
  return (
    <div>
      {user} {name}
    </div>
  );
}

export default HooksContext;
