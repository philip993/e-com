import {
  REMOVE_BOOK_FROM_CART,
  CLEAR_ALL_BOOKS_FROM_CART,
  LOAD_ITEMS_TO_CART_COPY
} from "./ShoppingCartActionTypes";

const initialState = {
  one: [],
  two: []
};

export const ShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ALL_BOOKS_FROM_CART:
      return {
        ...state,
        one: action.payload
      };
    case REMOVE_BOOK_FROM_CART:
      return {
        ...state,
        two: [
          ...state.two.slice(0, action.payload),
          ...state.two.slice(action.payload + 1)
        ]
      };
    case LOAD_ITEMS_TO_CART_COPY:
      return {
        ...state,
        two: action.payload
      };
    default:
      return state;
  }
};
