import { LOAD_BOOKS } from "../Book-Action-Types/book-action-types";
import axios from "axios";

export const loadAllBooks = () => {
  const request = axios.get("http://localhost:5000/books");
  return dispatch => {
    request.then(res => {
      dispatch({
        type: LOAD_BOOKS,
        payload: res.data.books
      });
    });
  };
};
