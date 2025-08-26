import React, {useState } from 'react'
type Product = {
    id: number,
    Name: string,
    Price: string,
    Quantity:number
}
export default function Product() {
    const [product, setProduct] = useState<Product>({
        id: 1,
        Name: "Coca cola",
        Price: "1000$",
        Quantity:10
    })
  return (
    <div>
          <h2>Thong tin san pham</h2>
          <p>id: {product.id}</p>
          <p>Name: {product.Name}</p>
          <p>Price :{product.Price}</p>
          <p>Quantity :{product.Quantity }</p>
    </div>
  )
}
