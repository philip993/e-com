import { GET_CART_ITEMS, COUNT_CART_ITEMS } from "./CartActionTypes";

const initalState = {
  items: [],
  itemNumber: 0,
};

export const CartReducer = (state = initalState, action) => {
  switch (action.type) {
    case GET_CART_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case COUNT_CART_ITEMS:
      return {
        ...state,
        itemNumber: action.payload,
      };
    default:
      return state;
  }
};
