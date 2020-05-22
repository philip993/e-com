import {
  ADD_INDEX,
  SELECT_BOOK,
  REMOVE_BOOK,
  CLEAR_BOOKS,
  INCREASE_QUANTITY,
  REMOVE_DUPLICATE,
  UPDATE_QUANTITY,
  ADD_BOOK_TO_CART,
  DELETE_PREVIOUS_BOOK,
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

export const selectBook = (book) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_BOOK,
      payload: book,
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

export const deletePreviousBook = (item) => {
  return (dispatch, getState) => {
    let title = item.title;
    console.log(title);
    return axios
      .delete(`http://localhost:5000/cartitems/${title}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: DELETE_PREVIOUS_BOOK,
          payload: response.data.deletedItem,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const removeBook = (item) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_BOOK,
      payload: item,
    });
  };
};

export const clearBooks = () => {
  return {
    type: CLEAR_BOOKS,
  };
};

export const increaseQuantity = (item) => {
  return (dispatch) => {
    dispatch({
      type: INCREASE_QUANTITY,
      payload: item,
    });
  };
};

export const removeDuplicate = (item) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_DUPLICATE,
      payload: item,
    });
  };
};

export const isAddedFalse = () => {
  return {
    type: IS_ADDED_FALSE,
  };
};

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
