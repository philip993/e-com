import {
  ADD_INDEX,
  CLEAR_BOOKS,
  INCREASE_QUANTITY,
  UPDATE_QUANTITY,
  ADD_BOOK_TO_CART,
  IS_ADDED_FALSE,
  ITEM_DUPLICATE_TRUE,
  ITEM_DUPLICATE_FALSE,
} from "./BookActionTypes";

const initialState = {
  booksInCart: [],
  currentItem: [],
  index: 0,
  isAdded: null,
  qty: 0,
  itemStatus: null,
};

export const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INDEX:
      return {
        ...state,
        index: state.index + 1,
      };
    case ADD_BOOK_TO_CART:
      return {
        ...state,
        booksInCart: [...state.booksInCart, action.payload],
        isAdded: true,
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        booksInCart: [...state.booksInCart, action.payload],
      };
    case CLEAR_BOOKS:
      return {
        ...state,
        booksInCart: [],
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        qty: state.qty + 1,
      };
    case IS_ADDED_FALSE:
      return {
        ...state,
        isAdded: false,
      };
    case ITEM_DUPLICATE_TRUE:
      return {
        ...state,
        itemStatus: true,
      };
    case ITEM_DUPLICATE_FALSE:
      return {
        ...state,
        itemStatus: false,
      };
    default:
      return state;
  }
};
