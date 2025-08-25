import React, { Component } from 'react'
type State = { isLoggedIn: boolean };
export default class LoginStatus extends Component<object,State> {
    state: State = { isLoggedIn: false }
    handleToggle = () => {
        this.setState((prev) => ({ isLoggedIn: !prev.isLoggedIn }))
        
    }
    render() {
        const {isLoggedIn} = this.state;
    return (
      <div>
            <h3>{isLoggedIn ? "xin chao user" : "vui long dang nhap de tiep tuc"}</h3>
            <button onClick={this.handleToggle}> { isLoggedIn ? "Dang xuat" : "Dang nhap"}</button>
      </div>
    )
  }
}
