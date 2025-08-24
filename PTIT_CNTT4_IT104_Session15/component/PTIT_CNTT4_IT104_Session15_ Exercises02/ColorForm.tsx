import React, { Component } from "react";

type State = {
  color: string;
  submitted: string;
};

export default class ColorForm extends Component<object, State> {
  state: State = { color: "#000000", submitted: "" };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ color: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submitted: this.state.color });
  };

  render() {
    return (
      <div>
        <h2>Color: {this.state.submitted}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Màu sắc</label><br />
          <input
            type="color"
            value={this.state.color}
            onChange={this.handleChange}
          /><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
