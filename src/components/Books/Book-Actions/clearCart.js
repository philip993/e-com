import { CLEAR_ALL_BOOKS_FROM_CART } from "../Book-Action-Types/book-action-types";

export const clearBooksFromCart = item => {
  return dispatch => {
    dispatch({
      type: CLEAR_ALL_BOOKS_FROM_CART,
      payload: item
    });
  };
};
