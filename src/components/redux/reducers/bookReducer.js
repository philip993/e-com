import {
  LOAD_BOOKS,
  SELECT_BOOK,
  GET_TOTAL_SUM,
  REMOVE_BOOK_FROM_CART,
  CLEAR_ALL_BOOKS_FROM_CART,
  TOGGLE_LOADER_TRUE,
  TOGGLE_LOADER_FALSE
} from "../constants/constants";

const initialState = {
  data: [],
  booksInCart: [],
  sumsArray: [],
  testArr: [],
  totalSum: 0,
  isLoading: false,
  loadingItem: ""
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
    case GET_TOTAL_SUM:
      return {
        ...state,
        sumsArray: [...state.sumsArray, action.payload.price]
      };
    case REMOVE_BOOK_FROM_CART:
      return {
        ...state,
        testArr: [...state.booksInCart.slice(0, action.payload._id)]
      };
    case CLEAR_ALL_BOOKS_FROM_CART:
      return {
        ...state,
        booksInCart: [],
        sumsArray: []
      };
    case TOGGLE_LOADER_TRUE:
      return {
        ...state,
        isLoading: (state.isLoading = true),
        loadingItem: action.payload.title
      };
    case TOGGLE_LOADER_FALSE:
      return {
        ...state,
        isLoading: false,
        loadingItem: ""
      };
    default:
      return state;
  }
};

export default bookReducer;
