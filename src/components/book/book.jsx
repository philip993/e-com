import React from "react";

const Book = ({ title, writter, genre, year }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>Writter: {writter}.</p>
      <p>This book is from {genre} genre.</p>
      <span>It was published in {year}.</span>
    </div>
  );
};

export default Book;
