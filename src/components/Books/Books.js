import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoadBooks } from "./BooksActions";
import Book from "../Book/Book";

import { CardDeck, Spinner } from "react-bootstrap";
import { SetMaximumPages } from "../Pagination/PaginationActions";
import Pagination from "../Pagination/Pagination";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Books = () => {
  const books = useSelector(state => state.BooksReducer);
  const dispatch = useDispatch();
  const pages = useSelector(state => state.PaginationReducer);

  useEffect(() => {
    dispatch(SetMaximumPages());
    console.log(books.data.length);
  }, [books.data.length]);

  useEffect(() => {
    dispatch(LoadBooks());
  }, [pages.page, pages.pageSize]);

  return (
    <div>
      <PrivateRoute>
        <Pagination />

        <CardDeck
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "1rem"
          }}
        >
          {books.data.map(({ _id, ...otherProps }) => (
            <Book key={_id} {...otherProps} />
          ))}
        </CardDeck>
      </PrivateRoute>
    </div>
  );
};

export default Books;
