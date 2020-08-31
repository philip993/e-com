import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Table, Button } from "react-bootstrap";
import {
  removeBookFromCart,
  clearBooksFromCart,
  loadItemToCartCopy,
} from "./ShoppingCartActions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { useHistory } from "react-router-dom";
import { createOrder } from "../Order/OrderActions";

const ShoppingCart = (item) => {
  const selectedBooks = useSelector((state) => state.ShoppingCartReducer);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(loadItemToCartCopy());
  }, []);

  const handleRemoveOneBook = (index) => {
    dispatch(removeBookFromCart(index));
  };

  const totalSumOfCartItems = selectedBooks.copyOfBooksInCart.reduce(
    (total, currentItem) => total + currentItem.price,
    0
  );

  const handleCheckOut = (item) => {
    dispatch(createOrder());
    history.push("/checkout");
  };

  const handleClearCart = () => {
    dispatch(clearBooksFromCart());
  };

  return (
    <div>
      <PrivateRoute>
        <Table
          striped
          bordered
          hover
          size='sm'
          style={{ width: "50%", margin: "auto" }}
        >
          <thead>
            <tr>
              <th>No.</th>
              <th>Book Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {selectedBooks.copyOfBooksInCart.map(
              ({ title, price, quantity }, index) => (
                <tr>
                  <td>{index}.</td>
                  <td>{title}</td>
                  <td>{price.toFixed(2)}$</td>
                  <td>{quantity}</td>
                  <td>
                    <Button
                      variant='danger'
                      onClick={handleRemoveOneBook.bind(this, index)}
                    >
                      x
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
        <Table style={{ width: "50%", margin: "auto" }}>
          <thead>
            <tr>
              <th>Total Sum</th>
              <th>{totalSumOfCartItems.toFixed(2)} $</th>
            </tr>
            <tr>
              <th>
                {" "}
                <Button onClick={handleCheckOut} variant='success'>
                  To Checkout
                </Button>
              </th>
              <th>
                <Button onClick={handleClearCart} variant='danger'>
                  Clear Cart
                </Button>
              </th>
            </tr>
          </thead>
        </Table>
      </PrivateRoute>
    </div>
  );
};

export default ShoppingCart;
