import React, { useState } from "react";
import bread from "../images/bread.jpg";
import pizza from "../images/pizza.jpg";
import hamburger from "../images/Hamburger.jpg";
import cake from "../images/Cake.jpg";
import type { Product } from "./interface/interface";
import { useDispatch } from "react-redux";

const data: Omit<Product, "quantity">[] = [
  { id: 1, title: "Pizza", image: pizza, content: "pizza", price: 30 },
  {
    id: 2,title: "Hamburger",image: hamburger,content: "hamburger",price: 35},
  { id: 3, title: "Bread", image: bread, content: "bread", price: 30 },
  { id: 4, title: "Cake", image: cake, content: "cake", price: 31 },
];

export default function ProductList() {

  const [products, setProducts] = useState<Product[]>(
    data.map((p) => ({ ...p, quantity: 1 }))
  );
  const dispatch = useDispatch();
  const handleChangeQuantity = (id: number, raw: string) => {
    const value = Math.max(1, Number(raw) || 1); 
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: value } : item))
    );
  };
  const addToCart = (item: Product) => {
    console.log(`111`);
    
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: 1 },
    });
  };
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>

        <div className="panel-body" id="list-product">
          {products.map((item) => (
            <div key={item.id}>
              <div className="media product">
                <div className="media-left">
                  <a href="#">
                    <img
                      className="media-object"
                      src={item.image}
                      alt={item.title}
                    />
                  </a>
                </div>

                <div className="media-body">
                  <h4 className="media-heading">{item.title}</h4>
                  <p>{item.content}</p>

                  <input
                    name={`quantity-product-${item.id}`}
                    type="number"
                    min={1}
                    value={item.quantity ?? 1}
                    onChange={(e) =>
                      handleChangeQuantity(item.id, e.target.value)
                    }
                    style={{ width: 80, marginRight: 8 }}
                  />

                  <a
                    data-product={item.id}
                    className="price"
                    onClick={() => addToCart(item)}
                  >
                    {item.price} USD
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
