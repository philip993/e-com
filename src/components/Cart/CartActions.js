import {
  GET_CART_ITEMS,
  COUNT_CART_ITEMS,
  CLEAR_CART_ITEMS_AFTER_ORDER,
  REMOVE_ONE_CART_ITEM,
  CLEAR_CART,
} from "./CartActionTypes";
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

export const clearCartAfterOrder = () => {
  return (dispatch, getState) => {
    let currentUser = localStorage.getItem("user");
    return axios
      .delete(`http://localhost:5000/cartitems/${currentUser}`)
      .then((response) => {
        dispatch({
          type: CLEAR_CART_ITEMS_AFTER_ORDER,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const clearCart = () => {
  return (dispatch, getState) => {
    let currentUser = localStorage.getItem("user");
    return axios
      .delete(`http://localhost:5000/cartitems/${currentUser}`)
      .then((response) => {
        dispatch({
          type: CLEAR_CART,
          payload: [],
        });
      });
  };
};

export const removeOneCartItem = (index) => {
  return (dispatch, getState) => {
    let cartItems = getState().CartReducer.items;
    let currentBook = cartItems[index].bookTitle;
    console.log(currentBook);
    let currentUser = localStorage.getItem("user");
    return axios
      .delete(`http://localhost:5000/cartitems/${currentUser}/${currentBook}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: REMOVE_ONE_CART_ITEM,
          payload: response.data.deletedItem,
        });
      });
  };
};
