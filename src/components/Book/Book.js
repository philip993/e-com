import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectBook,
  addIndex,
  increaseQuantity,
  removeBook,
  removeDuplicate,
  addBookToCart,
  updateQuantity,
  deletePreviousBook,
} from "./BookActions";

import { Card, Button } from "react-bootstrap";
import { newWishlistItem } from "../Wishlist/WishlistActions";
import { getItemsFromCart } from "../Cart/CartActions";

const Book = ({ _id, title, price, skuId, writter, genre, year, quantity }) => {
  const book = useSelector((state) => state.BookReducer);
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  const [piece, setPieces] = useState(1);

  const handleSelectBook = () => {
    dispatch(addIndex(book.index));
    setPieces(piece + 1);
    dispatch(
      addBookToCart({
        _id: _id,
        title: title,
        price: price,
        skuId: skuId,
        quantity: piece,
      })
    );
    dispatch(getItemsFromCart());
    handleToggleToTrue();
    handleToggleToFalse();
  };

  const handleUpdateQuantity = (item) => {
    setPieces(piece + 1);
    console.log(item);
    dispatch(
      updateQuantity({
        _id: _id,
        title: title,
        price: price,
        skuId: skuId,
        quantity: piece,
      })
    );
    dispatch(getItemsFromCart());
  };

  const handleWishitemSelect = (e) => {
    dispatch(newWishlistItem({ _id }));
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
            <Button onClick={handleSelectBook.bind(this, _id)}>
              Add to Cart
            </Button>
          ) : (
            <Button onClick={handleSelectBook} variant='success'>
              Added!
            </Button>
          )}
          <Button onClick={handleUpdateQuantity.bind(this, title)}>
            Update Quantity
          </Button>
          <Button onClick={handleWishitemSelect.bind(this, _id)}>Wish</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Book;
