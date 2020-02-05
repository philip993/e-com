import { REDUCE_PRICE_FROM_CART } from "../constants/constants";

export const reducePriceFromCart = item => {
  return dispatch => {
    dispatch({
      type: REDUCE_PRICE_FROM_CART,
      payload: item
    });
  };
};
