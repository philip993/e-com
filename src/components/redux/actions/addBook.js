import { ADD_BOOK, SELECT_BOOK } from "../constants/constants";

export const addBook = items => {
  return {
    type: ADD_BOOK,
    payload: [
      (items = {
        titles: items.testTitle,
        amount: items.testPrice * items.testQuantity
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
