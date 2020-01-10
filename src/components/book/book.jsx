import React from "react";

const Book = ({ title, writter, genre, year, price, quantity }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Writter: {writter}.</p>
      <p>This book is from {genre} genre.</p>
      <span>It was published in {year}.</span>
      <p>$ {price}</p>
      <p>Quantity: {quantity}</p>
      <span>
        <button>ADD TO CART</button>
      </span>
    </div>
  );
};

export default Book;
