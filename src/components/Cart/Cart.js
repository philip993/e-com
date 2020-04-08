import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemsFromCart } from "./CartActions";

const Cart = () => {
  const cart = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsFromCart());
  }, []);

  const getCart = () => {
    dispatch(getItemsFromCart());
    console.log(cart);
  };
  return (
    <div>
      <h1>CART</h1>
      <button onClick={getCart}>GET ITEMS</button>

      {cart.items.map((cartItems) => (
        <div>
          <p>{cartItems.bookTitle}</p>
          <p>
            {cartItems.bookQuantity} - {cartItems.bookPrice}
          </p>
          <p>{cartItems.total} $</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
