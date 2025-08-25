import React, { Component } from 'react'
import './ProductCard.css'
type Product={
    id: number,
    name: string,
    image: string,
    price: number,
    quantity: number
}
type Props={
    product: Product
}
export default class ProductCard extends Component<Props> {
    addToCart=()=>{
        const cart: Product[]=JSON.parse(localStorage.getItem("cart")||'[]');
        if(cart.findIndex((item) => item.id==this.props.product.id)!=-1){
            cart[cart.findIndex((item) => item.id==this.props.product.id)].quantity+=1;
        }else{
            cart.push(this.props.product);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload();
    }
  render() {
    return (
      <div className='card-container'>
        <img src={this.props.product.image} alt="" />
        <b>{this.props.product.name}</b>
        <p>{this.props.product.price.toLocaleString()}đ</p>
        <button onClick={this.addToCart}>Them vao gio hang</button>
      </div>
    )
  }
}