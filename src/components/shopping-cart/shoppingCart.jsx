import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../redux/actions/addBook";

const ShoppingCart = item => {
  const selectedBooks = useSelector(state => state.bookReducer);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    dispatch(addBook(item));
    console.log(selectedBooks.booksInCart);
  };

  return (
    <div>
      <h3>Shopping Cart</h3>

      <button onClick={handleAddBook}>BUY</button>
    </div>
  );
};

export default ShoppingCart;
