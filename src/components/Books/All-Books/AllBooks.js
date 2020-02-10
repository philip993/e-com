import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadAllBooks } from "../Book-Actions/loadBooks";
import Book from "../Book/Book";

import { CardDeck, Spinner } from "react-bootstrap";

const Books = props => {
  const books = useSelector(state => state.bookReducer);
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(loadAllBooks());
    setIsLoaded(true);
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <Spinner animation="border"></Spinner>
      ) : (
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
      )}
    </div>
  );
};

export default Books;
