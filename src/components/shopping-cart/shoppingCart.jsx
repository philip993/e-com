import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Table, Button } from "react-bootstrap";
import { removeBook } from "../redux/actions/removeBook";
import { clearBooksFromCart } from "../redux/actions/clearCart";

const ShoppingCart = item => {
  const selectedBooks = useSelector(state => state.bookReducer);
  const dispatch = useDispatch();

  const handleDeleteRedux = item => {
    dispatch(removeBook());
  };

  const booksFromCart = selectedBooks.booksInCart.map(
    ({ _id, title, price }) => (
      <p key={_id}>
        {title} - $ {price} - <Button onClick={handleDeleteRedux}> x </Button>
      </p>
    )
  );

  const totalSumOfCartItems = selectedBooks.sumsArray.reduce(
    (a, b) => a + b,
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
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Selected Books</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{booksFromCart}</th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total Amount</th>
          </tr>
          <tr>
            <th>{totalSumOfCartItems} $$</th>
          </tr>
          <tr>
            <th>
              <Button onClick={handleCheckOut}>Buy</Button>
              <Button onClick={handleClearCart}>Delete</Button>
            </th>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default ShoppingCart;
