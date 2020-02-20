import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { SetIncrementPage, SetDecrementPage } from "./PaginationActions";

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
    </div>
  );
};

export default Pagination;
