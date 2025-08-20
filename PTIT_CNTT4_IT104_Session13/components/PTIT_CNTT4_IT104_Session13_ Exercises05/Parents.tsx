import React, { Component } from 'react'
import Children from "./Children"
type product = {
    id: number;
    name: string;
    price: string;
    quantity: number;
}
export default class Parents extends Component <object,product> {
    constructor(props: object) {
        super(props);
        this.state = {
            id: 1,
            name: "Buoi ba roi",
            price: "12.000VND",
            quantity:6
        }
    }
  render() {
    return (
      <div>
        <Children product={this.state}></Children>
      </div>
    )
  }
}
