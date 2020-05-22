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
    case SELECT_BOOK:
      return {
        ...state,
        booksInCart: [...state.booksInCart, action.payload],
      };
    case ADD_BOOK_TO_CART:
      return {
        ...state,
        booksInCart: [...state.booksInCart, action.payload],
        isAdded: true,
      };
    case DELETE_PREVIOUS_BOOK:
      return {
        ...state,
        booksInCart: [
          ...state.booksInCart.slice(0, action.payload),
          ...state.booksInCart.slice(action.payload + 1),
        ],
      };
    case UPDATE_QUANTITY:
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
