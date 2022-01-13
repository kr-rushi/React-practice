import React, { Component } from "react";
import ComponentE from "./ComponentE";
import UserContext, { UserConsumer } from "./UserContext";
export class ComponentD extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        <UserConsumer>
          {(userName) => {
            return <div>Hello hi {userName}</div>;
          }}
        </UserConsumer>
        <ComponentE />
        hgfgdg{this.context}
      </div>
    );
  }
}

//line number 22 has same work as line number 5
//ComponentD.contextType = UserContext;
export default ComponentD;
