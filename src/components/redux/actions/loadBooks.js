import { LOAD_BOOKS } from "../constants/constants";

export const loadBooks = () => {
  return dispatch => {
    return fetch(`http://localhost:5000/books`)
      .then(res => res.json())
      .then(jsonResponse => {
        dispatch({
          type: LOAD_BOOKS,
          payload: jsonResponse.books
        });
      });
  };
};
