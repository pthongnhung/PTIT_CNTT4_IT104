import React, { Component } from 'react'
import Header from './Header'
import {products} from './product.data'
import ProductCard from './ProductCard'
type Product={
    id: number,
    name: string,
    image: string,
    price: number,
    quantity: number
}
type State={
  cart: Product[]
}
export default class ShoppingCart extends Component<object, State> {
  constructor(props: object){
    super(props);
    this.state={cart: JSON.parse(localStorage.getItem("cart") || "[]")}
  }
  render() {
    return (
      <div>
        <Header cart={this.state.cart}></Header>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {products.map((item, index)=>{
            return <ProductCard key={index} product={item}></ProductCard>
          })}
        </div>
      </div>
    )
  }
}