import {
  ADD_INDEX,
  SELECT_BOOK,
  REMOVE_BOOK,
  CLEAR_BOOKS,
} from "./BookActionTypes";

export const addIndex = (item) => {
  return (dispatch) => {
    dispatch({
      type: ADD_INDEX,
      payload: item,
    });
  };
};

export const selectBook = (book) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_BOOK,
      payload: book,
    });
  };
};

export const removeBook = (item) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_BOOK,
      payload: item,
    });
  };
};

export const clearBooks = () => {
  return {
    type: CLEAR_BOOKS,
  };
};
