import React,{useMemo} from 'react'
type CartItem = {
    id: number,
    name: string,
    price: number,
    quantity:number
}
export default function ShoppingCart() {
    const cartItems: CartItem[] = [
        { id: 1, name: "San pham A", price: 10000, quantity: 2 },
        { id: 2, name: "San pham B", price: 20000, quantity: 1 }
    ]
    const totalPrice = useMemo(() => {
        return cartItems.reduce((sum,item)=>sum+item.price*item.quantity,0)
    },[cartItems])
  return (
    <div>
          <h2>gio hang</h2>
          <ul>
              {cartItems.map((item) => (
                  <li>{item.name}-gia{item.price.toLocaleString()}VND x { item.quantity}</li>
              ))}
          </ul>
          <h3>tong don hang : <span>{ totalPrice.toLocaleString()}VND</span></h3>
    </div>
  )
}
