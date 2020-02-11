import {
  CLEAR_ALL_BOOKS_FROM_CART,
  REMOVE_BOOK_FROM_CART,
  LOAD_ITEMS_TO_CART_COPY
} from "./ShoppingCartActionTypes";

export const ClearBooksFromCart = item => {
  return (dispatch, getState) => {
    let testOne = getState().BookReducer.booksInCart;
    testOne.splice(0);
    dispatch({
      type: CLEAR_ALL_BOOKS_FROM_CART,
      payload: testOne
    });
  };
};

export const RemoveBookFromCart = book => {
  return dispatch => {
    dispatch({
      type: REMOVE_BOOK_FROM_CART,
      payload: book
    });
  };
};

export const LoadItemToCartCopy = item => {
  return (dispatch, getState) => {
    let testTwo = getState().BookReducer.booksInCart;
    dispatch({
      type: LOAD_ITEMS_TO_CART_COPY,
      payload: testTwo
    });
  };
};
