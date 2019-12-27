import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadBooks } from "../redux/actions/loadBooks";
import Book from "../book/book";

const Books = props => {
  const books = useSelector(state => state.bookReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <div>
      <h1>Books</h1>
      {books.data.map(({ _id, ...otherProps }) => (
        <Book key={_id} {...otherProps} />
      ))}
    </div>
  );
};

export default Books;
