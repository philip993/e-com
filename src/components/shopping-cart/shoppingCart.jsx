import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartOutput from "../cart-output/cartOutput";
import { getTotalSum } from "../redux/actions/totalSum";

const ShoppingCart = item => {
  const selectedBooks = useSelector(state => state.bookReducer);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const xt = selectedBooks.testArray.map(a => {
      let x = [a.price];
      let z = x.reduce((a, b) => a + b, 0);
      console.log(x);
      console.log(z);
    });
    dispatch(getTotalSum(xt.z));
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
