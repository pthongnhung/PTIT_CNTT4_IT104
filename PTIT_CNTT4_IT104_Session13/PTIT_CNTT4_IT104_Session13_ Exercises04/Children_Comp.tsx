import React, { Component } from 'react'
type PropsType  = {
    fullName: string;
}
export default class Children_Comp extends Component<PropsType > {
  render() {
    return (
      <div>
            <p>Ho va ten components con { this.props.fullName}</p>
      </div>
    )
  }
}
