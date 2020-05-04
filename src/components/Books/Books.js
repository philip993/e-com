import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
// React Components
import Book from "../Book/Book";
import Pagination from "../Pagination/Pagination";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// Redux Actions
import { setPageSize } from "../Pagination/PaginationActions";
import { loadBooks } from "./BooksActions";
// Material Ui Components
import { Grid } from "@material-ui/core";

const Books = () => {
  const { data, page, pageSize, sortBy } = useSelector((state) => ({
    ...state.PaginationReducer,
    ...state.BooksReducer,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, [page, sortBy]);

  return (
    <div>
      <PrivateRoute>
        <Pagination />
        <Grid>
          {data.map(({ ...otherProps }) => (
            <Book {...otherProps} />
          ))}
        </Grid>
      </PrivateRoute>
    </div>
  );
};

export default Books;
