import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, DropdownButton } from "react-bootstrap";
import {
  SetIncrementPage,
  SetDecrementPage,
  SetPageSizeToOne,
  SetPageSizeToFour
} from "./PaginationActions";
import DropdownItem from "react-bootstrap/DropdownItem";

const Pagination = () => {
  const paginate = useSelector(state => state.PaginationReducer);
  const dispatch = useDispatch();
  const books = useSelector(state => state.BooksReducer.data);

  let maxPage = Math.floor(
    (books.length + paginate.pageSize - 1) / paginate.pageSize
  );

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

  return (
    <div>
      <Table>
        <tr>
          <th>
            <Button onClick={SetDecrement} disabled={paginate.page === 1}>
              Previous
            </Button>
          </th>
          <th>
            <Button>{paginate.page - 1}</Button>
            <Button>{paginate.page}</Button>
            <Button>{paginate.page + 1}</Button>
          </th>
          <th>
            {maxPage === 0 ? (
              <Button onClick={SetDecrement}>Back</Button>
            ) : (
              <Button onClick={SetIncrement} disabled={maxPage === 0}>
                Next
              </Button>
            )}
          </th>
          <th>
            <DropdownButton>
              <DropdownItem onClick={SetPageSizeFour}>Grid x 4</DropdownItem>
              <DropdownItem onClick={SetPageSizeOne}> Grid x 1</DropdownItem>
            </DropdownButton>
          </th>
        </tr>
      </Table>
    </div>
  );
};

export default Pagination;
