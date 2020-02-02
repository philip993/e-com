import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBook } from "../redux/actions/addBook";
import { getTotalSum } from "../redux/actions/totalSum";

import { Card, Button, Spinner } from "react-bootstrap";
import { toggleLoaderToFalse } from "../redux/actions/toggleFalse";
import { toggleLoaderToTrue } from "../redux/actions/toggleTrue";

const Book = ({ title, writter, price, genre, year, quantity }) => {
  const selectedBook = useSelector(state => state.bookReducer);
  const dispatch = useDispatch();

  const handleSelectBook = () => {
    dispatch(selectBook({ title, writter, price, genre, year, quantity }));
    dispatch(getTotalSum({ price }));
    handleToggleToTrue();
    handleToggleToFalse();
  };

  const handleToggleToTrue = () => {
    setTimeout(() => dispatch(toggleLoaderToTrue({ title })), 500);
  };

  const handleToggleToFalse = () => {
    setTimeout(() => dispatch(toggleLoaderToFalse({ title })), 5000);
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
          {selectedBook.isLoading === false ? (
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
