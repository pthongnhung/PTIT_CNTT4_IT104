import React, { Component } from 'react'
import Children_Comp from "./Children_Comp"

type StateType = {
    fullName:string
}
export default class Parent_Comp extends Component<unknown, StateType> {
    state: StateType = {
        fullName:"Pham Thi Hong Nhung"
    }
  render() {
    return (
      <div>
            <p>Ho va ten ben components cha {this.state.fullName}</p>
            <Children_Comp fullName={this.state.fullName}></Children_Comp>
      </div>
    )
  }
}
