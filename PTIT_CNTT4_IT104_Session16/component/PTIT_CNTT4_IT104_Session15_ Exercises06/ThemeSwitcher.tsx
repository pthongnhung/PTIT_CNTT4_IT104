import React, { Component } from 'react'
type StateType = {
    isDark: boolean
    value:string
}
export default class ThemeSwitcher extends Component<object, StateType> {
    constructor(props:object) {
        super(props);
        this.state = {
            isDark: false,
            value:"sang"
        }
    }
    handleChange=()=>{
        this.setState((prev)=>({isDark:!prev.isDark,value:"toi"}))
    }
  render() {
    return (
      <div style={{ background: this.state.isDark ? "black" : "white", color: this.state.isDark ? "white" : "black" }}>
            <p > che do { this.state.value} dang bat</p>
            <button onClick={this.handleChange}>chuyen theme</button>
      </div>
    )
  }
}
