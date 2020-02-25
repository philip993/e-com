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

  const SetIncrement = () => {
    dispatch(setIncrementPage());
  };
  const SetDecrement = () => {
    dispatch(setDecrementPage());
  };

  const SetPageSizeOne = () => {
    dispatch(setPageSizeToOne());
  };

  const SetPageSizeFour = () => {
    dispatch(setPageSizeToFour());
  };

  const SetPriceHightoLow = () => {
    dispatch(setPriceDesc());
  };
  const SetPriceLowToHigh = () => {
    dispatch(setPriceAcc());
  };

  const SetTitleAtoZ = () => {
    dispatch(setTitleAZ());
  };

  const SetTitleZtoA = () => {
    dispatch(setTitleZA());
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
            {paginate.maxPages === 0 ? (
              <Button onClick={SetDecrement}>Back</Button>
            ) : (
              <Button onClick={SetIncrement} disabled={paginate.maxPages === 0}>
                Next
              </Button>
            )}
          </th>
          <th>
            <DropdownButton>
              <DropdownItem onClick={SetPageSizeFour}>Grid x 4</DropdownItem>
              <DropdownItem onClick={SetPageSizeOne}> Grid x 1</DropdownItem>
              <DropdownItem onClick={SetPriceLowToHigh}>
                Price Low to High
              </DropdownItem>
              <DropdownItem onClick={SetPriceHightoLow}>
                Price High to Low
              </DropdownItem>
              <DropdownItem onClick={SetTitleAtoZ}>Title A to Z</DropdownItem>
              <DropdownItem onClick={SetTitleZtoA}>Title Z to A</DropdownItem>
            </DropdownButton>
          </th>
        </tr>
      </Table>
    </div>
  );
};

export default Pagination;
