import { SUCCESS_LOAD_ITEMS } from "./BooksActionTypes";

import axios from "axios";

export const LoadBooks = () => {
  const request = axios.get("http://localhost:5000/books");
  return dispatch => {
    request.then(res => {
      dispatch({
        type: SUCCESS_LOAD_ITEMS,
        payload: res.data.books
      });
    });
  };
};
