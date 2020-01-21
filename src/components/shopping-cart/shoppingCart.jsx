import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartOutput from "../cart-output/cartOutput";

const ShoppingCart = () => {
  const selectedBooks = useSelector(state => state.bookReducer);
  const dispatch = useDispatch();

  const handleAddBook = item => {
    console.log("BUY ITEMS");
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      {selectedBooks.booksInCart.map(({ _id, ...otherProps }) => (
        <CartOutput key={_id} {...otherProps} />
      ))}
      <button onClick={handleAddBook}>BUY</button>
    </div>
  );
};

export default ShoppingCart;
