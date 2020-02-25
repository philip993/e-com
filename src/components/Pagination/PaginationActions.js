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

export const setIncrementPage = () => {
  return {
    type: SET_INCREMENT_PAGE
  };
};

export const setDecrementPage = () => {
  return {
    type: SET_DECREMENT_PAGE
  };
};

export const setMaximumPages = () => {
  return (dispatch, getState) => {
    let pageSize = getState().PaginationReducer.pageSize;
    let numberOfItems = getState().BooksReducer.data;

    dispatch({
      type: SET_MAXIMUM_PAGES,
      payload: Math.floor((numberOfItems.length + pageSize - 1) / pageSize)
    });
  };
};

export const setPageSizeToOne = () => {
  return {
    type: SET_PAGE_SIZE_TO_ONE
  };
};

export const setPageSizeToFour = () => {
  return {
    type: SET_PAGE_SIZE_TO_FOUR
  };
};

export const setPriceAcc = () => {
  return {
    type: SET_PRICE_ACCENDING
  };
};

export const setPriceDesc = () => {
  return {
    type: SET_PRICE_DESCENDING
  };
};

export const setTitleAZ = () => {
  return {
    type: SET_TITLE_A_Z
  };
};

export const setTitleZA = () => {
  return {
    type: SET_TITLE_Z_A
  };
};
