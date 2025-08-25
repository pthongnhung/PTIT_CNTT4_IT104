import React, { Component } from 'react'

type User = {
  name: string,
  email: string,
  age: string
};

type StateType = {
  user: User;
  error: string;
  checkEmail: boolean;
  checkAge: boolean;
};

export default class UserForm extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      user: { name: "", email: "", age: "" },
      error: "",
      checkEmail: false,
      checkAge: false,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      user: { ...this.state.user, [name]: value },
      // reset lỗi và check khi nhập lại
      error: "",
      checkEmail: name === 'email' ? false : this.state.checkEmail,
      checkAge: name === 'age' ? false : this.state.checkAge,
    });
  };

  handleSubmitted = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, age } = this.state.user;

    let error = "";
    let emailOk = false;
    let ageOk = false;

    if (!email.includes('@')) {
      error = "Email khong hop le";
      emailOk = false;
    } else {
      emailOk = true;
    }

    if (Number(age) < 0) {
      error = "Tuoi khong duoc am";
      ageOk = false;
    } else {
      ageOk = true;
    }

    this.setState({
      error,
      checkEmail: emailOk,
      checkAge: ageOk,
    });
  };

  ResetForm = () => {
    this.setState({
      user: { name: "", email: "", age: "" },
      error: "",
      checkEmail: false,
      checkAge: false,
    });
  };

  render() {
    const { name, email, age } = this.state.user;
    const { error, checkEmail, checkAge } = this.state;

    return (
      <div>
        <h2>Nhap thong tin nguoi dung</h2>
        <form onSubmit={this.handleSubmitted}>
          <input
            placeholder="Ho ten"
            name="name"
            value={name}
            onChange={this.handleChange}
            type="text"
          />
          <br />

          <input
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
            type="text"
          />
          <br />

          <input
            placeholder="Tuoi"
            name="age"
            value={age}
            onChange={this.handleChange}
            type="number"
          />
          <br />

          {error && <p style={{ color: "red" }}>{error}</p>}

          {checkEmail && checkAge && (
            <p style={{ color: 'green' }}>
              Ho ten: {name}, Email: {email}, Tuoi: {age}
            </p>
          )}

          <button type="submit">Gui</button>
          <button type="button" onClick={this.ResetForm}>Xoa</button>
        </form>
      </div>
    );
  }
}
