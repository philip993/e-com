import {
  SET_INCREMENT_PAGE,
  SET_DECREMENT_PAGE,
  SET_MAXIMUM_PAGES
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
    let pageSize = getState().PaginationReducer.pageSize;
    let pages = getState().BooksReducer.data.length;

    return dispatch => {
      console.log(pageSize);
      console.log(pages.length);
      dispatch({
        type: SET_MAXIMUM_PAGES,
        payload: Math.floor((pages + pageSize - 1) / pageSize)
      });
    };
  };
};
