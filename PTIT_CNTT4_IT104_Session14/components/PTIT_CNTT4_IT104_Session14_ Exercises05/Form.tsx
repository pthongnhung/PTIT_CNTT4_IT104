import React, { Component } from 'react'
type Product = {
    id: string,
    title: string,
    price: number,
    quantity:number
}
type InitialState  = {
    product:Product
}
export default class Form extends Component<object, InitialState> {

    constructor(props: object) {
        super(props);
        this.state = {
            product: {
                id: "",
                title: "",
                price: 0,
                quantity:0
            }
        }
    }
    handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("gia tri cua o input",this.state.product);
        
        this.setState({
            product: {
                 id: "",
                title: "",
                price: 0,
                quantity:0
            }
        })
    }
    handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value,type } = e.target;
        this.setState({
            product: {
                ...this.state.product,[name]: type==="number"? Number(value):value
            }
        })
    }
    render() {
        
    return (
      <div>
            <form action="" onSubmit={this.handleSubmit}>
                <h2>Them moi san pham</h2>
                <label htmlFor="">Ma san pham</label> <br />
                <input type="text" name="id" value={ this.state.product.id} onChange={this.handleChange} /> <br />
                <label htmlFor="">Ten san pham</label> <br />
                <input type="text" name="title" value={ this.state.product.title} onChange={this.handleChange} /> <br />
                <label htmlFor="">Gia</label> <br />
                <input type="text" name="price" value={ this.state.product.price} onChange={this.handleChange} /> <br />
                <label htmlFor="">So luong</label> <br />
                <input type="number" name="quantity" value={ this.state.product.quantity} onChange={this.handleChange} /> <br />
                <button type="submit">Dang ky</button>
            </form>
      </div>
    )
  }
}
