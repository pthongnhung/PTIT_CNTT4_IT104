import React, { Component } from 'react'
type StateType = {
    sologan:string
}
export default class Slogan extends
    Component {
    state: StateType = {
        sologan:"Hoc code de di lam"
    }
    handleChange = () => {
        this.setState({sologan:"Hoc code se thanh cong. Co len!!!"})
    }
    shouldComponentUpdate(): boolean {
        return false;
    }
  render() {
    return (
      <div>
            <h2>{this.state.sologan}</h2>
            <button onClick={this.handleChange}>Change State</button>
      </div>
    )
  }
}
