import { SUCCESS_LOAD_ITEMS } from "./BooksActionTypes";

const initialState = {
  data: []
};

export const BooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_LOAD_ITEMS:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};
