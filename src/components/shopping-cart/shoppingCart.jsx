import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../redux/actions/addBook";

const ShoppingCart = items => {
  const selectedBooks = useSelector(state => state.bookReducer);
  const dispatch = useDispatch();

  const testTitle = selectedBooks.boughtBooks.title;
  const testPrice = selectedBooks.boughtBooks.price;
  const testQuantity = selectedBooks.boughtBooks.quantity;
  const testAmount = testPrice * testQuantity;

  const handleAddBook = () => {
    dispatch(addBook(items));
  };

  return (
    <div>
      <h3>Shopping Cart</h3>

      <button onClick={handleAddBook}>ADD to Cart</button>
    </div>
  );
};

export default ShoppingCart;
