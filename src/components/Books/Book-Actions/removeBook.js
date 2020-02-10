import { REMOVE_BOOK_FROM_CART } from "../Book-Action-Types/book-action-types";

export const removeBook = book => {
  return dispatch => {
    dispatch({
      type: REMOVE_BOOK_FROM_CART,
      payload: book
    });
  };
};
