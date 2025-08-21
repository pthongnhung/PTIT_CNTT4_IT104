import React, { Component, createRef } from 'react';

type State = {
  name: string;
  email: string;
  password: string;
  address: string;
  message: string;
};

export default class RegisterForm extends Component<object, State> {
  nameInputRef = createRef<HTMLInputElement>();

  constructor(props: object) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      address: '',
      message: '',
    };
  }

  componentDidMount() {
 
    this.nameInputRef.current?.focus();
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    const { name, email, password, address } = this.state;

    
    if (!name || !email || !password) {
      this.setState({ message: 'Vui lòng điền đầy đủ Tên, Email và Mật khẩu!' });
      return;
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');

    const emailExists = users.some((user: any) => user.email === email);
    if (emailExists) {
      this.setState({ message: 'Email đã tồn tại!' });
      return;
    }

    const newUser = { name, email, password, address };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    this.setState({
      name: '',
      email: '',
      password: '',
      address: '',
      message: 'Đăng ký tài khoản thành công!',
    });

    setTimeout(() => {
      this.nameInputRef.current?.focus();
    }, 100);
  };

  render() {
    const { name, email, password, address, message } = this.state;

    return (
      <div >
        <h2>Đăng ký tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            ref={this.nameInputRef}
            type="text"
            name="name"
            placeholder="Tên sinh viên"
            value={name}
            onChange={this.handleChange} 
       
          /> <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange} 
                />
                <br />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={this.handleChange}
                />
                <br />
          <input
            type="text"
            name="address"
            placeholder="Địa chỉ"
            value={address}
            onChange={this.handleChange}
                />
                <br />
          <button
            type="submit"
          >
            Đăng ký
          </button>
        </form>
        {message && (
          <p>
            {message}
          </p>
        )}
        <p >Form đăng ký tài khoản</p>
      </div>
    );
  }
}