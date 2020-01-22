import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBook } from "../redux/actions/addBook";
import { getTotalSum } from "../redux/actions/totalSum";

const Book = ({ title, writter, price, genre, year, quantity }) => {
  const selectedBook = useSelector(state => state.bookReducer);
  const dispatch = useDispatch();

  const handleSelectBook = () => {
    dispatch(selectBook({ title, writter, price, genre, year, quantity }));
    dispatch(getTotalSum({ price }));
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>Writter: {writter}.</p>
      <p>This book is from {genre} genre.</p>
      <span>It was published in {year}.</span>
      <p>$ {price}</p>
      <p>Quantity: {quantity}</p>
      <span>
        <button onClick={handleSelectBook}>ADD TO CART</button>
      </span>
    </div>
  );
};

export default Book;
