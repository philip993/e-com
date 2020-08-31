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
import axios from "axios";

// request
export const requestCreateBook = () => {
  return (dispatch, getState) => {
    const {
      title,
      writter,
      year,
      genre,
      price,
      quantity,
    } = getState().AddBookReducer;

    return axios
      .post(`http://localhost:5000/books`, {
        title,
        writter,
        genre,
        year,
        price,
        quantity,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: CREATE_BOOK_SUCCESS,
          payload: response.data.book,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: CREATE_BOOK_FAILURE,
        });
      });
  };
};

// input
export const bookTitleInput = (e) => {
  return {
    type: BOOK_TITLE_INPUT,
    payload: e,
  };
};
export const bookWritterInput = (e) => {
  return {
    type: BOOK_WRITTER_INPUT,
    payload: e,
  };
};
export const bookGenreInput = (e) => {
  return {
    type: BOOK_GENRE_INPUT,
    payload: e,
  };
};
export const bookYearInput = (e) => {
  return {
    type: BOOK_YEAR_INPUT,
    payload: e,
  };
};
export const bookPriceInput = (e) => {
  return {
    type: BOOK_PRICE_INPUT,
    payload: e,
  };
};
export const bookQuantityInput = (e) => {
  return {
    type: BOOK_QUANTITY_INPUT,
    payload: e,
  };
};
