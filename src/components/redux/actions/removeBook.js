import { REMOVE_BOOK_FROM_CART } from "../constants/constants";

export const removeBook = (_id, title, price) => {
  return dispatch => {
    dispatch({
      type: REMOVE_BOOK_FROM_CART,
      payload: {
        _id
      }
    });
  };
};
