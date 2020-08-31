import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getItemsFromCart,
  clearCartAfterOrder,
  removeOneCartItem,
} from "./CartActions";
import { createOrder } from "../Order/OrderActions";
import { useHistory } from "react-router-dom";
import { deletePreviousBook } from "../Book/BookActions";

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

  const handleRemoveItemFromCart = (e) => {
    console.log(e);
    dispatch(removeOneCartItem(e));
    dispatch(getItemsFromCart());
  };

  return (
    <div>
      <h1>CART</h1>

      {cart.items.map((cartItems, index) => (
        <div>
          <p>{cartItems.bookTitle}</p>
          <p>
            {cartItems.bookQuantity} - {cartItems.bookPrice}
          </p>
          <p>{cartItems.total} $</p>
          <button onClick={handleRemoveItemFromCart.bind(this, index)}>
            x
          </button>
        </div>
      ))}
      <button onClick={handleCreateOrder}>To Checkout</button>
    </div>
  );
};

export default Cart;
