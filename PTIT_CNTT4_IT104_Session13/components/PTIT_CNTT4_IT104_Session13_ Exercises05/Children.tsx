import React, { Component } from 'react'
type Product = {
    id: number,
    name: string,
    price: string,
    quantity:number
}
type PropsType = {
  product: Product;
};
export default class Children extends Component<PropsType> {
    render() {
        const { id, name, price, quantity } = this.props.product;
    return (
      <div>
            <h2>Du lieu trong component con</h2>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>price: {price}</p>
            <p>quantity: {quantity}</p>
      </div>
    )
  }
}
