import React, { Component } from 'react'
import './Header.css'
type Product={
    id: number,
    name: string,
    image: string,
    price: number,
    quantity: number
}
type Props={
    cart: Product[]
}
type State={
    cartIsShowing: boolean
}
export default class Header extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state={
            cartIsShowing: false
        }
    }
  render() {
    return (
      <div className='container'>
        <div className='head'>
            <p>Trang chu</p>
            <p>Danh sach san pham</p>
        </div>
        <p onClick={()=>this.setState({cartIsShowing: !this.state.cartIsShowing})}>Gio hang<p>({this.props.cart.length})</p></p>
        <div className={this.state.cartIsShowing ? "show user-cart" : "user-cart"}>
            <h1>Cart</h1> 
            <hr />
            {this.props.cart.map((item, index)=>{
                return <div className='card' key={index}>
                    <img src={item.image} alt="" />
                    <div>{item.name}</div>
                    <div>+</div>
                    <div>{item.quantity}</div>
                    <div>-</div>
                    <div>Xoa</div>
                </div>
            })}
            <div className='total'>
                <hr />
                <div>Tong tien: {this.props.cart.reduce((sum, current)=> sum+current.price, 0).toLocaleString()}đ</div>
            </div>
        </div>
      </div>
    )
  }
}