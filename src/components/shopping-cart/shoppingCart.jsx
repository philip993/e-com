import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Table, Button } from "react-bootstrap";
import { removeBook } from "../redux/actions/removeBook";
import { clearBooksFromCart } from "../redux/actions/clearCart";

const ShoppingCart = item => {
  const selectedBooks = useSelector(state => state.bookReducer);
  const dispatch = useDispatch();

  const handleRemoveOneBook = index => {
    dispatch(removeBook(index));
  };

  const totalSumOfCartItems = selectedBooks.booksInCart.reduce(
    (total, currentItem) => total + currentItem.price,
    0
  );

  const handleCheckOut = () => {
    console.log("Add payment method!");
  };

  const handleClearCart = () => {
    dispatch(clearBooksFromCart());
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
          {selectedBooks.booksInCart.map(({ title, price }, index) => (
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
