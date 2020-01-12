import { LOAD_BOOKS, ADD_BOOK, SELECT_BOOK } from "../constants/constants";

const initialState = {
  data: [],
  booksInCart: [],
  boughtBooks: []
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
    case ADD_BOOK:
      return {
        ...state,
        boughtBooks: [...state.boughtBooks, action.payload]
      };
    default:
      return state;
  }
};

export default bookReducer;
