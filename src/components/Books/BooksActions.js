import { SUCCESS_LOAD_ITEMS } from "./BooksActionTypes";

import axios from "axios";

// export const loadBooks = () => {
//   return (dispatch, getState) => {
//     const { page, pageSize, sortBy, maxPages } = getState().PaginationReducer;

//     console.log(maxPages);
//     return axios
//       .get(
//         `http://localhost:5000/books?page=${page}&pagesize&param=${sortBy}`,
//         {
//           params: {
//             sortBy,
//           },
//         }
//       )
//       .then((res) => {
//         dispatch({
//           type: SUCCESS_LOAD_ITEMS,
//           payload: res.data.books,
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

export const loadBooks = () => {
  return (dispatch, getState) => {
    const { page, pageSize, sortBy, maxPages } = getState().PaginationReducer;

    console.log(maxPages);
    return axios
      .get(
        `http://localhost:5000/books?page=${page}&pagesize=${pageSize}&param=${sortBy}`,
        {
          params: {
            sortBy,
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch({
          type: SUCCESS_LOAD_ITEMS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
