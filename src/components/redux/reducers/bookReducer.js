import {
  LOAD_BOOKS,
  SELECT_BOOK,
  REMOVE_BOOK_FROM_CART,
  CLEAR_ALL_BOOKS_FROM_CART,
  ADD_INDEX_TO_BOOK
} from "../constants/constants";

const initialState = {
  data: [],
  booksInCart: [],
  index: 0
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        data: action.payload
      };
    case SELECT_BOOK:
      return {
        ...state,
        booksInCart: [...state.booksInCart, action.payload]
      };
    case REMOVE_BOOK_FROM_CART:
      return {
        ...state,
        booksInCart: [
          ...state.booksInCart.slice(0, action.payload),
          ...state.booksInCart.slice(action.payload + 1)
        ]
      };
    case CLEAR_ALL_BOOKS_FROM_CART:
      return {
        ...state,
        booksInCart: [],
        sumsArray: []
      };
    case ADD_INDEX_TO_BOOK:
      return {
        ...state,
        index: state.index + 1
      };
    default:
      return state;
  }
};

export default bookReducer;
