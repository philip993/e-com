import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectBook, AddIndex } from "./BookActions";

import { Card, Button } from "react-bootstrap";

const Book = ({ title, writter, price, genre, year, quantity }) => {
  const book = useSelector(state => state.BookReducer);
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  const handleSelectBook = () => {
    dispatch(AddIndex(book.index));
    dispatch(
      SelectBook({
        title,
        price,
        index: book.index
      })
    );
    handleToggleToTrue();
    handleToggleToFalse();
  };

  const handleToggleToTrue = () => {
    setTimeout(() => setIsLoaded(true), 100);
  };

  const handleToggleToFalse = () => {
    setTimeout(() => setIsLoaded(false), 2000);
  };

  return (
    <div>
      <Card
        style={{ flex: 1, width: "30rem", textAlign: "center", margin: "1rem" }}
      >
        <Card.Body>
          <Card.Title>
            <h3>{title}</h3>
          </Card.Title>
          <Card.Text>
            <p>Writte by {writter}.</p>
            <p>Book Genre is {genre}.</p>
            <p>Published on {year}.</p>
            <p>Price of this book is {price.toFixed(2)}$.</p>
            <span>Remaining quantity: {quantity}.</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {isLoaded === false ? (
            <Button onClick={handleSelectBook}>Add to Cart</Button>
          ) : (
            <Button onClick={handleSelectBook} variant="success">
              Added!
            </Button>
          )}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Book;
