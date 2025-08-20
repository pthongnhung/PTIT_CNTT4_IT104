import React, { Component } from "react";
import type { ChangeEvent } from "react";

type StateType = {
  value: string;
};

export default class Input extends Component<unknown, StateType> {
  state: StateType = {
    value: "",
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div >
        <h2>Dữ liệu: {this.state.value}</h2>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Nhập dữ liệu"
        />
      </div>
    );
  }
}
