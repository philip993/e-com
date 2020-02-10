import { ADD_INDEX_TO_BOOK } from "../constants/constants";

export const addIndexToBook = item => {
  return dispatch => {
    dispatch({
      type: ADD_INDEX_TO_BOOK,
      payload: item
    });
  };
};
