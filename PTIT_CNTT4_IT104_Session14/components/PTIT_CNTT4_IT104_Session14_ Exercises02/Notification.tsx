import React, { Component } from 'react'

export default class Notification extends Component {
  componentDidMount(): void {
    console.log("Component da duoc mount");
  }
  render() {
    return (
      <div>
        <p>xem thong bao o console</p>
      </div>
    )
  }
}
