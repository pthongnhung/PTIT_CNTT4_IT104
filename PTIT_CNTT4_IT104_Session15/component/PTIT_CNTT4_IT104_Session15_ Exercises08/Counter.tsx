import React, { Component } from "react";

type StateType = {
  count: number;
};

export default class Counter extends Component<object, StateType> {
  private timerId: number | undefined;

  constructor(props: object) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState((prev) => ({
        count: prev.count === 10 ? 0 : prev.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) clearInterval(this.timerId);
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <h2>Giá trị count: {this.state.count}</h2>
      </div>
    );
  }
}
