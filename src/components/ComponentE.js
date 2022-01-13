import React, { Component } from "react";
import UserContext, { UserConsumer } from "./UserContext";

export class ComponentE extends Component {
  render() {
    return (
      <UserConsumer>
        {(userName) => {
          return <div>Hello {userName}</div>;
        }}
      </UserConsumer>
    );
  }
}

export default ComponentE;
