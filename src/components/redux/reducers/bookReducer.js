import { LOAD_BOOKS, ADD_BOOK, SELECT_BOOK } from "../constants/constants";

const initialState = {
  data: [],
  booksInCart: [],
  boughtBooks: [{ titles: [], amount: null }]
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
        booksInCart: action.payload
      };
    case ADD_BOOK:
      return {
        ...state,
        boughtBooks: action.payload
      };
    default:
      return state;
  }
};

export default bookReducer;
