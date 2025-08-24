import React, { Component } from 'react';

type State = {
  email: string;
  password: string;
  message: string;
  errors: {
    email?: string;
    password?: string;
  };
};

export default class LoginForm extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
      errors: {},
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      errors: {
        ...this.state.errors,
        [name]: '',
      },
    } as unknown as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = this.state;
    let errors: State['errors'] = {};

    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (!cleanEmail) errors.email = 'Email không được để trống';
    if (!cleanPassword) errors.password = 'Mật khẩu không được để trống';

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const matchedUser = users.find(
      (user: any) => user.email === cleanEmail && user.password === cleanPassword
    );

    if (matchedUser) {
      this.setState({
        message: 'Đăng nhập thành công!',
        email: '',
        password: '',
        errors: {},
      });
    } else {
      this.setState({
        message: 'Đăng nhập thất bại!',
      });
    }
  };

  render() {
    const { email, password, message, errors } = this.state;
    return (
      <div >
        <h2 >Đăng nhập tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          /> <br />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={this.handleChange}
          /> <br />
          {errors.password && <p style={errorStyle}>{errors.password}</p>}

          <button>
            Đăng nhập
          </button>
        </form>

        {message && (
          <p>
            {message}
          </p>
        )}

        <p>
          Form đăng nhập tài khoản
        </p>
      </div>
    );
  }
}