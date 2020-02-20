import {
  SET_INCREMENT_PAGE,
  SET_DECREMENT_PAGE,
  SET_MAXIMUM_PAGES
} from "./PaginationActionTypes";

const initalState = {
  pageSize: 2,
  maxPages: 0,
  page: 1
};

export const PaginationReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1
      };
    case SET_DECREMENT_PAGE:
      return {
        ...state,
        page: state.page - 1
      };
    case SET_MAXIMUM_PAGES:
      return {
        ...state,
        maxPages: action.payload
      };
    default:
      return state;
  }
};
