import {
  GET_CART_ITEMS,
  COUNT_CART_ITEMS,
  CLEAR_CART_ITEMS_AFTER_ORDER,
  REMOVE_ONE_CART_ITEM,
  CLEAR_CART,
} from "./CartActionTypes";

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
    case CLEAR_CART_ITEMS_AFTER_ORDER:
      return {
        ...state,
        items: [],
      };
    case CLEAR_CART:
      return {
        ...state,
        items: action.payload,
      };
    case REMOVE_ONE_CART_ITEM:
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.payload),
          ...state.items.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};
