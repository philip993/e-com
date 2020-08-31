import {
  ADD_INDEX,
  CLEAR_BOOKS,
  UPDATE_QUANTITY,
  ADD_BOOK_TO_CART,
  IS_ADDED_FALSE,
  ITEM_DUPLICATE_TRUE,
  ITEM_DUPLICATE_FALSE,
} from "./BookActionTypes";

import axios from "axios";

export const addIndex = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADD_INDEX,
      payload: item,
    });
  };
};

export const addBookToCart = (book) => {
  return (dispatch, getState) => {
    let currentUser = localStorage.getItem("user");
    let cart = getState().CartReducer.items;
    let checkDuplicate = cart.findIndex(
      ({ bookTitle }, index) => bookTitle === book.title
    );

    console.log(checkDuplicate);
    if (checkDuplicate === -1) {
      return axios
        .post(`http://localhost:5000/cartitems/${currentUser}`, {
          bookTitle: book.title,
          bookPrice: book.price,
          bookQuantity: book.quantity,
          total: book.price * book.quantity,
          bookSKUid: book.skuId,
          currentUser: currentUser,
        })
        .then((response) => {
          console.log(response);
          dispatch({
            type: ADD_BOOK_TO_CART,
            payload: book,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      dispatch({
        type: ITEM_DUPLICATE_TRUE,
      });
    }
  };
};

export const updateQuantity = (item) => {
  return (dispatch, getState) => {
    let title = item.title;
    console.log(title);
    let currentUser = localStorage.getItem("user");
    console.log(currentUser);
    let cartItems = getState().CartReducer.items;
    let index = cartItems.findIndex(
      (itm, index) => itm.bookTitle === item.title
    );
    console.log(cartItems[index]._id);
    console.log(title);
    console.log(index);
    return axios
      .put(`http://localhost:5000/cartitems/${title}`, {
        _id: cartItems[index]._id,
        bookTitle: item.title,
        bookPrice: item.price,
        bookQuantity: item.quantity,
        total: item.price * item.quantity,
        bookSKUid: item.skuId,
        currentUser: currentUser,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: UPDATE_QUANTITY,
          payload: item,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const clearBooks = () => {
  return {
    type: CLEAR_BOOKS,
  };
};

export const isAddedFalse = () => {
  return {
    type: IS_ADDED_FALSE,
  };
};
// Check for duplicate
export const itemDuplicateTrue = () => {
  return {
    type: ITEM_DUPLICATE_TRUE,
  };
};

export const itemDuplicateFalse = () => {
  return {
    type: ITEM_DUPLICATE_FALSE,
  };
};
