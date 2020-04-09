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

const Book = (item) => {
  const book = useSelector((state) => state.BookReducer);
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  const [piece, setPieces] = useState(1);

  const handleSelectBook = () => {
    dispatch(addIndex(book.index));
    setPieces(piece + 1);
    // dispatch(
    //   selectBook({
    //     _id: item._id,
    //     title: item.title,
    //     price: item.price,
    //     index: book.index,
    //     skuId: item.skuId,
    //     quantity: piece,
    //   })
    // );

    dispatch(
      addBookToCart({
        _id: item._id,
        title: item.title,
        price: item.price,
        index: book.index,
        skuId: item.skuId,
        quantity: piece,
      })
    );
    // dispatch(removeDuplicate(item));
    handleToggleToTrue();
    handleToggleToFalse();
  };

  const handleUpdateQuantity = (item) => {
    setPieces(piece + 1);
    // dispatch(deletePreviousBook({ title: item.title }));
    console.log(item);
    dispatch(
      updateQuantity({
        _id: item._id,
        title: item.title,
        price: item.price,
        // index: book.index,
        skuId: item.skuId,
        quantity: piece,
      })
    );
  };

  const handleWishitemSelect = (e) => {
    dispatch(newWishlistItem(item));
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
            <h3>{item.title}</h3>
          </Card.Title>
          <Card.Text>
            <p>Writte by {item.writter}.</p>
            <p>Book Genre is {item.genre}.</p>
            <p>Published on {item.year}.</p>
            <p>Price of this book is {item.price.toFixed(2)}$.</p>
            <span>Remaining quantity: {item.quantity}.</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          {isLoaded === false ? (
            <Button onClick={handleSelectBook}>Add to Cart</Button>
          ) : (
            <Button onClick={handleSelectBook} variant='success'>
              Added!
            </Button>
          )}
          <Button onClick={handleUpdateQuantity.bind(this, item)}>
            Update Quantity
          </Button>
          <Button onClick={handleWishitemSelect.bind(this, item._id)}>
            Wish
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Book;
