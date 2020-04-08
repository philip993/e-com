import { GET_CART_ITEMS } from "./CartActionTypes";

const initalState = {
  items: [],
};

export const CartReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};
