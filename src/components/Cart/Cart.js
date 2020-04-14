import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemsFromCart, clearCartAfterOrder } from "./CartActions";
import { createOrder } from "../Order/OrderActions";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getItemsFromCart());
  }, []);

  const handleCreateOrder = () => {
    dispatch(createOrder());
    history.push("/checkout");
    dispatch(clearCartAfterOrder());
  };
  return (
    <div>
      <h1>CART</h1>

      {cart.items.map((cartItems) => (
        <div>
          <p>{cartItems.bookTitle}</p>
          <p>
            {cartItems.bookQuantity} - {cartItems.bookPrice}
          </p>
          <p>{cartItems.total} $</p>
        </div>
      ))}
      <button onClick={handleCreateOrder}>To Checkout</button>
    </div>
  );
};

export default Cart;
