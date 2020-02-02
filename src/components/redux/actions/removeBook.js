import { REMOVE_BOOK_FROM_CART } from "../constants/constants";

export const removeBook = (price, title) => {
  return dispatch => {
    dispatch({
      type: REMOVE_BOOK_FROM_CART,
      payload: (price, title)
    });
  };
};
