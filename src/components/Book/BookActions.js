import { ADD_INDEX, SELECT_BOOK, REMOVE_BOOK } from "./BookActionTypes";

export const AddIndex = item => {
  return dispatch => {
    dispatch({
      type: ADD_INDEX,
      payload: item
    });
  };
};

export const SelectBook = book => {
  return dispatch => {
    dispatch({
      type: SELECT_BOOK,
      payload: book
    });
  };
};

export const RemoveBook = item => {
  return dispatch => {
    dispatch({
      type: REMOVE_BOOK,
      payload: item
    });
  };
};
