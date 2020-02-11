import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Table, Button } from "react-bootstrap";
import { RemoveBook } from "../Book/BookActions";
import {
  RemoveBookFromCart,
  ClearBooksFromCart,
  LoadItemToCartCopy
} from "./ShoppingCartActions";

const ShoppingCart = item => {
  const selectedBooks = useSelector(state => state.ShoppingCartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadItemToCartCopy());
  }, []);

  const handleRemoveOneBook = index => {
    dispatch(RemoveBookFromCart(index));
    dispatch(RemoveBook(index));
  };

  const totalSumOfCartItems = selectedBooks.copyOfBooksInCart.reduce(
    (total, currentItem) => total + currentItem.price,
    0
  );

  const handleCheckOut = () => {
    console.log("Add payment method!");
  };

  const handleClearCart = () => {
    dispatch(ClearBooksFromCart());
  };

  return (
    <div>
      <Table
        striped
        bordered
        hover
        size="sm"
        style={{ width: "50%", margin: "auto" }}
      >
        <thead>
          <tr>
            <th>No.</th>
            <th>Book Title</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {selectedBooks.copyOfBooksInCart.map(({ title, price }, index) => (
            <tr>
              <td>{index}.</td>
              <td>{title}</td>
              <td>{price.toFixed(2)}$</td>
              <td>
                <Button
                  variant="danger"
                  onClick={handleRemoveOneBook.bind(this, index)}
                >
                  x
                </Button>
              </td>
            </tr>
          ))}
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
              <Button onClick={handleCheckOut} variant="success">
                To Checkout
              </Button>
            </th>
            <th>
              <Button onClick={handleClearCart} variant="danger">
                Clear Cart
              </Button>
            </th>
          </tr>
        </thead>
      </Table>
    </div>
  );
};

export default ShoppingCart;
