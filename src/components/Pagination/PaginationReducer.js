import {
  SET_INCREMENT_PAGE,
  SET_DECREMENT_PAGE,
  SET_MAXIMUM_PAGES,
  SET_PAGE_SIZE_TO_ONE,
  SET_PAGE_SIZE_TO_FOUR,
  SET_PRICE_ACCENDING,
  SET_PRICE_DESCENDING,
  SET_TITLE_A_Z,
  SET_TITLE_Z_A
} from "./PaginationActionTypes";

const initalState = {
  pageSize: 3,
  maxPages: 0,
  page: 1,
  sortBy: ""
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
    case SET_PAGE_SIZE_TO_ONE:
      return {
        ...state,
        pageSize: 1
      };
    case SET_PAGE_SIZE_TO_FOUR:
      return {
        ...state,
        pageSize: 4
      };
    case SET_PRICE_ACCENDING:
      return {
        ...state,
        sortBy: "price"
      };
    case SET_PRICE_DESCENDING:
      return {
        ...state,
        sortBy: "-price"
      };
    case SET_TITLE_A_Z:
      return {
        ...state,
        sortBy: "title"
      };
    case SET_TITLE_Z_A:
      return {
        ...state,
        sortBy: "-title"
      };
    default:
      return state;
  }
};
