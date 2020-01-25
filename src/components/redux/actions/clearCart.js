import { CLEAR_ALL_BOOKS_FROM_CART } from "../constants/constants";

export const clearBooksFromCart = item => {
  return dispatch => {
    dispatch({
      type: CLEAR_ALL_BOOKS_FROM_CART,
      payload: item
    });
  };
};
