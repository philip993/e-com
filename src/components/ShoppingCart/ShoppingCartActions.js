import {
  CLEAR_ALL_BOOKS_FROM_CART,
  REMOVE_BOOK_FROM_CART,
  LOAD_ITEMS_TO_CART_COPY,
  CLEAR_CART_AFTER_PAYMENT,
} from "./ShoppingCartActionTypes";

export const clearBooksFromCart = (item) => {
  return (dispatch, getState) => {
    let cartItems = getState().BookReducer.booksInCart;
    cartItems.splice(0);
    dispatch({
      type: CLEAR_ALL_BOOKS_FROM_CART,
      payload: cartItems,
    });
  };
};

export const removeBookFromCart = (book) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_BOOK_FROM_CART,
      payload: book,
    });
  };
};

export const loadItemToCartCopy = (item) => {
  return (dispatch, getState) => {
    let cartItems = getState().BookReducer.booksInCart;
    dispatch({
      type: LOAD_ITEMS_TO_CART_COPY,
      payload: cartItems,
    });
  };
};

export const clearCartAfterPayment = () => {
  return {
    type: CLEAR_CART_AFTER_PAYMENT,
  };
};
