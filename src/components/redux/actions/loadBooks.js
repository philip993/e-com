import { LOAD_BOOKS } from "../constants/constants";
import axios from "axios";

// export const loadBooks = () => {
//   return dispatch => {
//     return fetch(`http://localhost:5000/books`)
//       .then(res => res.json())
//       .then(jsonResponse => {
//         dispatch({
//           type: LOAD_BOOKS,
//           payload: jsonResponse.books
//         });
//       });
//   };
// };

export const testLoadBooks = () => {
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
