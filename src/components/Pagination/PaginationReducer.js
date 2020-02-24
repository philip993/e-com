import {
  SET_INCREMENT_PAGE,
  SET_DECREMENT_PAGE,
  SET_MAXIMUM_PAGES,
  SET_PAGE_SIZE_TO_ONE,
  SET_PAGE_SIZE_TO_FOUR,
  SET_PAGE_SIZE_TO_SIX,
  SET_PAGE_SIZE_TO_DEFAULT
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
    case SET_PAGE_SIZE_TO_SIX:
      return {
        ...state,
        pageSize: 6
      };
    case SET_PAGE_SIZE_TO_DEFAULT:
      return {
        ...state,
        pageSize: 2
      };
    default:
      return state;
  }
};
