import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { SetIncrementPage, SetDecrementPage } from "./PaginationActions";

const Pagination = () => {
  const paginate = useSelector(state => state.PaginationReducer);
  const dispatch = useDispatch();
  const books = useSelector(state => state.BooksReducer.data.length);

  let pageNumber = paginate.page;

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
        <Button variant='secondary'>{pageNumber - 1}</Button>
        <span> </span>
        <Button>{pageNumber}</Button>
        <span> </span>
        <Button variant='secondary'>{pageNumber + 1}</Button>
        <span> </span>
      </span>
      <Button onClick={SetIncrement}>Next</Button>
    </div>
  );
};

export default Pagination;
