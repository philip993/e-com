import { ADD_BOOK, SELECT_BOOK } from "../constants/constants";

export const addBook = item => {
  return {
    type: ADD_BOOK,
    payload: [
      (item = {
        title: item.title,
        price: item.price
      })
    ]
  };
};

export const selectBook = item => {
  return {
    type: SELECT_BOOK,
    payload: [
      (item = {
        title: item.title,
        price: item.price,
        quantity: item.quantity
      })
    ]
  };
};
