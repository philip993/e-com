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

export const SetIncrementPage = () => {
  return {
    type: SET_INCREMENT_PAGE
  };
};

export const SetDecrementPage = () => {
  return {
    type: SET_DECREMENT_PAGE
  };
};

export const SetMaximumPages = () => {
  return (dispatch, getState) => {
    let pageSizeNum = getState().PaginationReducer.pageSize;
    let pagesLength = getState().BooksReducer.data.books;

    return dispatch => {
      dispatch({
        type: SET_MAXIMUM_PAGES,
        payload: Math.floor(
          (pagesLength.length + pageSizeNum - 1) / pageSizeNum
        )
      });
    };
  };
};

export const SetPageSizeToOne = () => {
  return {
    type: SET_PAGE_SIZE_TO_ONE
  };
};

export const SetPageSizeToFour = () => {
  return {
    type: SET_PAGE_SIZE_TO_FOUR
  };
};

export const SetPriceAcc = () => {
  return {
    type: SET_PRICE_ACCENDING
  };
};

export const SetPriceDesc = () => {
  return {
    type: SET_PRICE_DESCENDING
  };
};

export const SetTitleAZ = () => {
  return {
    type: SET_TITLE_A_Z
  };
};

export const SetTitleZA = () => {
  return {
    type: SET_TITLE_Z_A
  };
};
