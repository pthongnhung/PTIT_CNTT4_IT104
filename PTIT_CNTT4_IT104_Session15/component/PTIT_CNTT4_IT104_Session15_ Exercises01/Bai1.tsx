import React, { Component } from "react";

type State = {
  email: string;
  submitted: string;
};

export default class EmailForm extends Component<object, State> {
  state: State = { email: "", submitted: "" };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      this.setState({ submitted: this.state.email });
      console.log({ submitted: this.state.submitted });

      
  };

  render() {
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>{" "}
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Nhập email..."
          />
          <button type="submit">Submit</button>
        </form>

        
      </div>
    );
  }
}
