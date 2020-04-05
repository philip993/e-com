import {
  REMOVE_BOOK_FROM_CART,
  CLEAR_ALL_BOOKS_FROM_CART,
  LOAD_ITEMS_TO_CART_COPY,
  CLEAR_CART_AFTER_PAYMENT,
} from "./ShoppingCartActionTypes";

const initialState = {
  copyOfBooksInCart: [],
};

export const ShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ALL_BOOKS_FROM_CART:
      return {
        ...state,
        copyOfBooksInCart: action.payload,
      };
    case REMOVE_BOOK_FROM_CART:
      return {
        ...state,
        copyOfBooksInCart: [
          ...state.copyOfBooksInCart.slice(0, action.payload),
          ...state.copyOfBooksInCart.slice(action.payload + 1),
        ],
      };
    case LOAD_ITEMS_TO_CART_COPY:
      return {
        ...state,
        copyOfBooksInCart: action.payload,
      };
    case CLEAR_CART_AFTER_PAYMENT:
      return {
        ...state,
        copyOfBooksInCart: [],
      };
    default:
      return state;
  }
};
