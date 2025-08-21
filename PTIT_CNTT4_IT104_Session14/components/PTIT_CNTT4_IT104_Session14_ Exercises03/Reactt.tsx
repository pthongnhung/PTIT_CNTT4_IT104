import React, { Component } from 'react'
type StateType = {
  company:string
}
export default class Reactt extends Component {
  state: StateType = {
    company:"Rikkei Academy"
  }
  handleChange = () => {
    this.setState({company:"Rikkei Sort"})
  }
  render() {
    return (
      <div>
        <h2>Cong ty: {this.state.company}</h2>
        <button onClick={this.handleChange}>change state</button>
      </div>
    )
  }
}
