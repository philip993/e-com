import { GET_CART_ITEMS, COUNT_CART_ITEMS } from "./CartActionTypes";
import axios from "axios";

export const getItemsFromCart = () => {
  return (dispatch, getState) => {
    let currentUser = localStorage.getItem("user");
    return axios
      .get(`http://localhost:5000/cartitems/${currentUser}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_CART_ITEMS,
          payload: response.data.cartItems,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const countItemsInCart = () => {
  return (dispatch, getState) => {
    let itemsInCart = getState().CartReducer.items;
    let numberOfItems = itemsInCart.reduce(
      (total, current) => total + current.bookQuantity,
      0
    );
    console.log(numberOfItems);
    dispatch({
      type: COUNT_CART_ITEMS,
      payload: numberOfItems,
    });
  };
};
