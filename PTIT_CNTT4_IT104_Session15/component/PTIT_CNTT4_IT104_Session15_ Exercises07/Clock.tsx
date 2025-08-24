import React, { Component } from "react";

type StateType = {
  now: Date;
};

export default class Clock extends Component<object, StateType> {
  private timerId: number | undefined;

  constructor(props: object) {
    super(props);
    this.state = {
      now: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ now: new Date() });
    }, 1000);
  }

  
  componentWillUnmount() {
    if (this.timerId) clearInterval(this.timerId);
  }

  formatTime(date: Date) {
    const h = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");
    const s = String(date.getSeconds()).padStart(2, "0");
    return `${h} : ${m} : ${s}`;
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: 30 }}>
        <h2>Thời gian hiện tại: {this.formatTime(this.state.now)}</h2>
      </div>
    );
  }
}
