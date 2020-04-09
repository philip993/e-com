import {
  SELECT_BOOK,
  ADD_INDEX,
  REMOVE_BOOK,
  CLEAR_BOOKS,
  INCREASE_QUANTITY,
  REMOVE_DUPLICATE,
  UPDATE_QUANTITY,
  DELETE_PREVIOUS_BOOK,
  ADD_BOOK_TO_CART,
} from "./BookActionTypes";

const initialState = {
  booksInCart: [],
  currentItem: [],
  index: 0,
  qty: 0,
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
    case ADD_BOOK_TO_CART:
      return {
        ...state,
        currentItem: action.payload,
      };
    case DELETE_PREVIOUS_BOOK:
      return {
        ...state,
        currentItem: [
          ...state.currentItem.slice(0, action.payload),
          ...state.currentItem.slice(action.payload + 1),
        ],
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        currentItem: action.payload,
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
    case INCREASE_QUANTITY:
      return {
        ...state,
        qty: state.qty + 1,
      };
    case REMOVE_DUPLICATE:
      return {
        ...state,
        booksInCart: state.booksInCart.filter(
          (item, index) => state.booksInCart.indexOf(item) === index
        ),
      };
    default:
      return state;
  }
};
