import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import {
  SetIncrementPage,
  SetDecrementPage,
  SetPageSizeToOne,
  SetPageSizeToFour,
  SetPageSizeToSix,
  SetPageToDefault
} from "./PaginationActions";

const Pagination = () => {
  const paginate = useSelector(state => state.PaginationReducer);
  const dispatch = useDispatch();
  const books = useSelector(state => state.BooksReducer.data.length);

  let pageNumber = paginate.page;
  let pageS = paginate.pageSize;
  let checkPage = Math.floor((books + pageS - 1) / pageS);

  const SetIncrement = () => {
    dispatch(SetIncrementPage());
  };
  const SetDecrement = () => {
    dispatch(SetDecrementPage());
  };

  const SetPageSizeOne = () => {
    dispatch(SetPageSizeToOne());
  };

  const SetPageSizeFour = () => {
    dispatch(SetPageSizeToFour());
  };

  const SetPageSizeSix = () => {
    dispatch(SetPageSizeToSix());
  };

  const SetPageSizeDefault = () => {
    dispatch(SetPageToDefault());
  };

  return (
    <div>
      <Button onClick={SetDecrement} disabled={pageNumber === 1}>
        Previous
      </Button>
      <span>
        <span> </span>
        {pageNumber === 1 ? null : (
          <Button variant='secondary'>{pageNumber - 1}</Button>
        )}
        <span> </span>
        <Button>{pageNumber}</Button>
        <span> </span>
        {checkPage === 0 ? null : (
          <Button variant='secondary'>{pageNumber + 1}</Button>
        )}

        <span> </span>
      </span>
      <Button onClick={SetIncrement} disabled={checkPage === 0}>
        Next
      </Button>
      <div>
        <p>Options</p>
        <button onClick={SetPageSizeOne}>1</button>
        <button onClick={SetPageToDefault}>2</button>
        <button onClick={SetPageSizeFour}>4</button>
        <button onClick={SetPageSizeSix}>6</button>
      </div>
    </div>
  );
};

export default Pagination;
