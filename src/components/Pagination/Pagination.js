import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, DropdownButton } from "react-bootstrap";
import {
  setIncrementPage,
  setDecrementPage,
  setPageSizeToOne,
  setPageSizeToFour,
  setPriceAcc,
  setPriceDesc,
  setTitleZA,
  setTitleAZ
} from "./PaginationActions";
import DropdownItem from "react-bootstrap/DropdownItem";

const Pagination = () => {
  const paginate = useSelector(state => state.PaginationReducer);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(setIncrementPage());
  };
  const decrement = () => {
    dispatch(setDecrementPage());
  };

  const pageSizeOne = () => {
    dispatch(setPageSizeToOne());
  };

  const pageSizeFour = () => {
    dispatch(setPageSizeToFour());
  };

  const priceHightoLow = () => {
    dispatch(setPriceDesc());
  };
  const priceLowToHigh = () => {
    dispatch(setPriceAcc());
  };

  const titleAtoZ = () => {
    dispatch(setTitleAZ());
  };

  const titleZtoA = () => {
    dispatch(setTitleZA());
  };

  return (
    <div>
      <Table>
        <tr>
          <th>
            <Button onClick={decrement} disabled={paginate.page === 1}>
              Previous
            </Button>
          </th>
          <th>
            <Button>{paginate.page - 1}</Button>
            <Button>{paginate.page}</Button>
            <Button>{paginate.page + 1}</Button>
          </th>
          <th>
            {paginate.maxPages === 0 ? (
              <Button onClick={decrement}>Back</Button>
            ) : (
              <Button onClick={increment} disabled={paginate.maxPages === 0}>
                Next
              </Button>
            )}
          </th>
          <th>
            <DropdownButton>
              <DropdownItem onClick={pageSizeFour}>Grid x 4</DropdownItem>
              <DropdownItem onClick={pageSizeOne}> Grid x 1</DropdownItem>
              <DropdownItem onClick={priceLowToHigh}>
                Price Low to High
              </DropdownItem>
              <DropdownItem onClick={priceHightoLow}>
                Price High to Low
              </DropdownItem>
              <DropdownItem onClick={titleAtoZ}>Title A to Z</DropdownItem>
              <DropdownItem onClick={titleZtoA}>Title Z to A</DropdownItem>
            </DropdownButton>
          </th>
        </tr>
      </Table>
    </div>
  );
};

export default Pagination;
