import React from 'react'

export default function ShoppingCart() {
  return (
    <div>
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h1 className="panel-title">Your Cart</h1>
            </div>
            <div className="panel-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="my-cart-body">
                  <tr>
                    <th scope="row">1</th>
                    <td>Cake</td>
                    <td>10 USD</td>
                    <td>
                      <input
                        name="cart-item-quantity-1"
                        type="number"
                        defaultValue={15}
                      />
                    </td>
                    <td>
                      <a
                        className="label label-info update-cart-item"
                        data-product=""
                      >
                        Update
                      </a>
                      <a
                        className="label label-danger delete-cart-item"
                        data-product=""
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Hamburger</td>
                    <td>15 USD</td>
                    <td>
                      <input
                        name="cart-item-quantity-1"
                        type="number"
                        defaultValue={32}
                      />
                    </td>
                    <td>
                      <a
                        className="label label-info update-cart-item"
                        data-product=""
                      >
                        Update
                      </a>
                      <a
                        className="label label-danger delete-cart-item"
                        data-product=""
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tfoot id="my-cart-footer">
                  <tr>
                    <td colSpan={4}>
                      There are <b>2</b> items in your shopping cart.
                    </td>
                    <td colSpan={2} className="total-price text-left">
                      630 USD
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
      </div>
    </div>
  );
}
