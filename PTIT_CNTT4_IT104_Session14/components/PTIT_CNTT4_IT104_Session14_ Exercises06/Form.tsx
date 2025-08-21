import React, { Component } from "react";

type StateType = {
  gender: string;
  submitResult: string;
};

export default class Form extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      gender: "",
      submitResult: "",
    };
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submitResult: this.state.gender });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: e.target.value });
  };

  render() {
    const { gender, submitResult } = this.state;

    return (
      <div>
        <h2>Chọn giới tính</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={gender === "Nam"}
              onChange={this.handleChange}
            />
            Nam
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={gender === "Nữ"}
              onChange={this.handleChange}
            />
            Nữ
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={gender === "Khác"}
              onChange={this.handleChange}
            />
            Khác
          </label>

          <br />
          <br />
          <button type="submit">Submit</button>
        </form>

        {submitResult && (
          <p>Kết quả đã chọn: <b>{submitResult}</b></p>
        )}
      </div>
    );
  }
}
