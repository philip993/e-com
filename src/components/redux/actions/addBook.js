import { SELECT_BOOK } from "../constants/constants";

export const selectBook = item => {
  return {
    type: SELECT_BOOK,
    payload: item
  };
};
