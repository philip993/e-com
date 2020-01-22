import { LOAD_BOOKS, SELECT_BOOK, GET_TOTAL_SUM } from "../constants/constants";

const initialState = {
  data: [],
  booksInCart: [],
  testArray: [],
  totalSum: 0
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
        testArray: [...state.testArray, action.payload.price]
      };
    default:
      return state;
  }
};

export default bookReducer;
