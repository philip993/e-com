import {
  SELECT_BOOK,
  ADD_INDEX,
  REMOVE_BOOK,
  CLEAR_BOOKS,
} from "./BookActionTypes";

const initialState = {
  booksInCart: [],
  index: 0,
};

export const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INDEX:
      return {
        ...state,
        index: state.index + 1,
      };
    case SELECT_BOOK:
      return {
        ...state,
        booksInCart: [...state.booksInCart, action.payload],
      };
    case REMOVE_BOOK:
      return {
        ...state,
        booksInCart: [
          ...state.booksInCart.slice(0, action.payload),
          ...state.booksInCart.slice(action.payload + 1),
        ],
      };
    case CLEAR_BOOKS:
      return {
        ...state,
        booksInCart: [],
      };
    default:
      return state;
  }
};
