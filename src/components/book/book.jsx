import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBook } from "../redux/actions/addBook";

const Book = item => {
  const selectedBook = useSelector(state => state.bookReducer);
  const dispatch = useDispatch();

  const handleSelectBook = () => {
    dispatch(selectBook(item));
    console.log(item);
  };

  return (
    <div>
      <h3>{item.title}</h3>
      <p>Writter: {item.writter}.</p>
      <p>This book is from {item.genre} genre.</p>
      <span>It was published in {item.year}.</span>
      <p>$ {item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <span>
        <button onClick={handleSelectBook}>ADD TO CART</button>
      </span>
    </div>
  );
};

export default Book;
