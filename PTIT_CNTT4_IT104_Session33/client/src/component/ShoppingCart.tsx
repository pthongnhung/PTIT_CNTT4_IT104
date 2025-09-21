import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Product } from "./interface/interface";

export default function ShoppingCart() {
  const result = useSelector((data: any) => {
    console.log(data);
    return data.cart.cart;
  });

  const dispatch = useDispatch();
  const increase = (item: Product) => {
    dispatch({
      type: "INCREMENT",
      payload: item,
    });
  };

  const decrease = (item: Product) => {
    dispatch({
      type: "DECREMENT",
      payload: item,
    });
  };
const remove = (item: Product) => {
  if (window.confirm("Are you sure to delete this item?")) {
    dispatch({
      type: "DELETE_FROM_CART",
      payload: item,
    });
    alert("Delete cart successfully");
  }
};

  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {result.map((item: Product, index: number) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                  <td>{item.price} USD</td>
                  <td>
                    <button onClick={() => decrease(item)}>-</button>
                    <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                    <button onClick={() => increase(item)}>+</button>
                  </td>
                  <td>
                    <a className="label label-info update-cart-item">update</a>
                  </td>
                  <td>
                    <a
                      className="label label-info update-cart-item"
                      onClick={() => remove(item)}
                    >
                      delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot id="my-cart-footer">
              <tr>
                <td colSpan={3}>
                  There are <b>{result.length}</b> items in your shopping cart.
                </td>
                <td colSpan={2} className="total-price text-left">
                  {result.reduce(
                    (acc: number, item: Product) =>
                      acc + item.price * (item.quantity || 0),
                    0
                  )}{" "}
                  USD
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="alert alert-success" role="alert" id="mnotification">
        Add to cart successfully
      </div>
    </div>
  );
}
