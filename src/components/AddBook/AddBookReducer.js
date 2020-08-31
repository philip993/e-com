import {
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAILURE,
  BOOK_TITLE_INPUT,
  BOOK_WRITTER_INPUT,
  BOOK_GENRE_INPUT,
  BOOK_YEAR_INPUT,
  BOOK_PRICE_INPUT,
  BOOK_QUANTITY_INPUT,
} from "./AddBookActionTypes";

const initalState = {
  title: "",
  writter: "",
  genre: "",
  year: "",
  price: "",
  quantity: "",
  book: [],
  errorMsg: null,
  loading: null,
};

export const AddBookReducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_BOOK_SUCCESS:
      return {
        ...state,
        book: action.payload,
        title: "",
        writter: "",
        genre: "",
        year: "",
        price: "",
        quantity: "",
        errorMsg: false,
        loading: false,
      };
    case CREATE_BOOK_FAILURE:
      return {
        ...state,
        title: "",
        writter: "",
        genre: "",
        year: "",
        price: "",
        quantity: "",
        book: null,
        errorMsg: true,
        loading: true,
      };
    case BOOK_TITLE_INPUT:
      return {
        ...state,
        title: action.payload,
      };
    case BOOK_WRITTER_INPUT:
      return {
        ...state,
        writter: action.payload,
      };
    case BOOK_GENRE_INPUT:
      return {
        ...state,
        genre: action.payload,
      };
    case BOOK_YEAR_INPUT:
      return {
        ...state,
        year: action.payload,
      };
    case BOOK_PRICE_INPUT:
      return {
        ...state,
        price: action.payload,
      };
    case BOOK_QUANTITY_INPUT:
      return {
        ...state,
        quantity: action.payload,
      };
    default:
      return state;
  }
};
