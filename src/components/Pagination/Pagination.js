import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
// Redux Actions
import {
  setIncrementPage,
  setDecrementPage,
  setPageSizeToOne,
  setPageSizeToFour,
  setPriceAcc,
  setPriceDesc,
  setTitleZA,
  setTitleAZ,
} from "./PaginationActions";
// Material Ui Components
import { Typography, Grid } from "@material-ui/core";
import PaginationUi from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";

const Pagination = () => {
  const { page, maximumPages } = useSelector((state) => ({
    ...state.PaginationReducer,
    ...state.BooksReducer,
  }));
  const dispatch = useDispatch();

  const classes = Styles();
  console.log(maximumPages);

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
      <Grid className={classes.paginationContainer}>
        <PaginationItem
          type='previous'
          onClick={decrement}
          disabled={page === 1}
        />
        <PaginationUi
          count={maximumPages}
          page={page}
          variant='outlined'
          shape='rounded'
          hidePrevButton
          hideNextButton
        />
        <PaginationItem
          type='next'
          onClick={increment}
          disabled={page === maximumPages}
        />
      </Grid>
    </div>
  );
};

export default Pagination;
