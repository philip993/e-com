import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../redux/actions/addBook";
import CartOutput from "../cart-output/cartOutput";

const ShoppingCart = () => {
  const selectedBooks = useSelector(state => state.bookReducer);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    let itemsFromCart = selectedBooks.booksInCart;
    dispatch(addBook(itemsFromCart));
    console.log(itemsFromCart);
  };

  return (
    <div>
      <h3>Shopping Cart</h3>
      {selectedBooks.booksInCart.map(({ _id, ...otherProps }) => (
        <CartOutput key={_id} {...otherProps} />
      ))}
      <button onClick={handleAddBook}>ADD</button>
    </div>
  );
};

export default ShoppingCart;
