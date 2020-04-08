import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadBooks } from "./BooksActions";
import Book from "../Book/Book";

import { CardDeck, Spinner } from "react-bootstrap";
import { setMaximumPages } from "../Pagination/PaginationActions";
import Pagination from "../Pagination/Pagination";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { getItemsFromCart } from "../Cart/CartActions";

const Books = () => {
  const { data, page, pageSize, sortBy } = useSelector((state) => ({
    ...state.PaginationReducer,
    ...state.BooksReducer,
  }));
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartReducer);

  useEffect(() => {
    dispatch(setMaximumPages());
  }, [data]);

  useEffect(() => {
    dispatch(getItemsFromCart());
    console.log(cart);
  }, []);

  useEffect(() => {
    dispatch(loadBooks());
  }, [page, pageSize, sortBy]);

  return (
    <div>
      <PrivateRoute>
        <Pagination />

        <CardDeck
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "1rem",
          }}
        >
          {data.map(({ ...otherProps }) => (
            <Book {...otherProps} />
          ))}
        </CardDeck>

        {cart.items.map((cartItems) => (
          <div>
            <p>{cartItems.bookTitle}</p>
            <p>
              {cartItems.bookQuantity} - {cartItems.bookPrice}
            </p>
            <p>{cartItems.total} $</p>
          </div>
        ))}
      </PrivateRoute>
    </div>
  );
};

export default Books;
