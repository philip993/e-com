import React from "react";
import Book from "../book/book";

const Books = () => {
  return (
    <div>
      <h1>Books</h1>
      <Book />
      {/* {book.map(({ id, ...otherProps }) => (
        <Books key={id} {...otherProps} />
      ))} */}
    </div>
  );
};

export default Books;
