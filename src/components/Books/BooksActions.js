import { SUCCESS_LOAD_ITEMS } from "./BooksActionTypes";

import axios from "axios";

export const loadBooks = () => {
  return (dispatch, getState) => {
    const { page, pageSize, price, title } = getState().PaginationReducer;

    return axios
      .get(
        `http://localhost:5000/books?page=${page}&pagesize=${pageSize}&param=${price}&paramtwo=${title}`,
        {
          params: {
            price,
            title
          }
        }
      )
      .then(res => {
        dispatch({
          type: SUCCESS_LOAD_ITEMS,
          payload: res.data.books
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
