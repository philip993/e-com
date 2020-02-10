import { SELECT_BOOK } from "../Book-Action-Types/book-action-types";

export const selectBook = item => {
  return {
    type: SELECT_BOOK,
    payload: item
  };
};
