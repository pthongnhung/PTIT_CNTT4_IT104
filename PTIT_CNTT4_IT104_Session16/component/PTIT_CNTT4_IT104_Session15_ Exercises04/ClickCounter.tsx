import React, { Component } from "react";

type State = {
  count: number;
};

export default class ClickCounter extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state= {
      count:0
    }
 }

  handleClick = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Số lần click: {this.state.count}</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
