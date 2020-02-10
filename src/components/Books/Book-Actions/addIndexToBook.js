import { ADD_INDEX_TO_BOOK } from "../Book-Action-Types/book-action-types";

export const addIndexToBook = item => {
  return dispatch => {
    dispatch({
      type: ADD_INDEX_TO_BOOK,
      payload: item
    });
  };
};
