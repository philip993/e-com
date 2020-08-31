import { SUCCESS_LOAD_ITEMS } from "./BooksActionTypes";

const initialState = {
  data: [],
  maximumPages: 0,
};

export const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOAD_ITEMS:
      return {
        ...state,
        data: action.payload.books,
        maximumPages: action.payload.totalPages,
      };

    default:
      return state;
  }
};
