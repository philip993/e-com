import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Table, Button } from "react-bootstrap";

const ShoppingCart = item => {
  const selectedBooks = useSelector(state => state.bookReducer);
  const dispatch = useDispatch();

  const booksFromCart = selectedBooks.booksInCart.map(
    ({ _id, title, price }) => (
      <p key={_id}>
        {title} - $ {price}
      </p>
    )
  );

  const totalSumOfCartItems = selectedBooks.sumsArray.reduce(
    (a, b) => a + b,
    0
  );

  const handleAddBook = () => {
    console.log("Add payment method!");
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
              <Button onClick={handleAddBook}>Buy</Button>
            </th>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default ShoppingCart;
