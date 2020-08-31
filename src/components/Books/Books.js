import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
// React Components
import Book from "../Book/Book";
import Pagination from "../Pagination/Pagination";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Footer from "../Footer/Footer";
// Redux Actions
import { setPageSize } from "../Pagination/PaginationActions";
import { loadBooks } from "./BooksActions";
import { isAddedFalse, itemDuplicateFalse } from "../Book/BookActions";
import { getItemsFromCart } from "../Cart/CartActions";
import { getAllWishlistItems } from "../Wishlist/WishlistActions";
// Material Ui Components
import { Grid, Snackbar, Container, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import BookError from "../Book/BookError";
import WishlistError from "../Wishlist/WishlistError";

const Books = () => {
  const {
    data,
    page,
    pageSize,
    sortBy,
    isAdded,
    wishStatus,
    itemStatus,
  } = useSelector((state) => ({
    ...state.PaginationReducer,
    ...state.BooksReducer,
    ...state.BookReducer,
    ...state.WishlistReducer,
  }));
  const dispatch = useDispatch();
  const classes = Styles();

  const handleClose = () => {
    dispatch(isAddedFalse());
  };

  useEffect(() => {
    dispatch(getItemsFromCart());
  }, []);

  useEffect(() => {
    dispatch(getAllWishlistItems());
  }, []);

  useEffect(() => {
    dispatch(loadBooks());
  }, [page, sortBy]);

  const handleSetDuplicateFalse = () => {
    dispatch(itemDuplicateFalse());
  };
  return (
    <div>
      <PrivateRoute>
        <Container className={classes.pageContainer}>
          <Pagination />
          {wishStatus === true ? <WishlistError /> : ""}
          {itemStatus === true ? <BookError /> : ""}
          <Grid>
            {data.map(({ ...otherProps }) => (
              <Book {...otherProps} />
            ))}
          </Grid>
          <Snackbar
            open={isAdded}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert severity='success' onClose={handleClose} variant='filled'>
              Book added to cart!
            </Alert>
          </Snackbar>
        </Container>
      </PrivateRoute>
    </div>
  );
};

export default Books;
