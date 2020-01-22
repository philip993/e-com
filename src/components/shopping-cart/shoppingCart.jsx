import React from "react";
import { useSelector, useDispatch } from "react-redux";

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

  const test = selectedBooks.testArray.reduce((a, b) => a + b, 0);

  const handleAddBook = () => {
    console.log("Add payment method!");
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      {booksFromCart}
      {test}
      <button onClick={handleAddBook}>BUY</button>
    </div>
  );
};

export default ShoppingCart;
