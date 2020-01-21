import { ADD_BOOK, SELECT_BOOK } from "../constants/constants";

export const addBook = item => {
  return {
    type: ADD_BOOK,
    payload: item
  };
};

export const selectBook = item => {
  return {
    type: SELECT_BOOK,
    payload: item
  };
};
