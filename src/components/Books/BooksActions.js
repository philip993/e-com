import { SUCCESS_LOAD_ITEMS } from "./BooksActionTypes";

import axios from "axios";

export const LoadBooks = () => {
  return (dispatch, getState) => {
    let pageNumber = getState().PaginationReducer.page;
    let pageSize = getState().PaginationReducer.pageSize;
    return axios
      .get(
        `http://localhost:5000/books?page=${pageNumber}&pagesize=${pageSize}`
      )
      .then(res => {
        dispatch({
          type: SUCCESS_LOAD_ITEMS,
          payload: res.data.books
        });
      });
  };
};
