import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
// Material Ui
import {
  Typography,
  FormGroup,
  InputBase,
  InputLabel,
  Button,
} from "@material-ui/core";
// Redux Actions
import {
  bookTitleInput,
  bookWritterInput,
  bookGenreInput,
  bookYearInput,
  bookPriceInput,
  bookQuantityInput,
  requestCreateBook,
} from "./AddBookActions";
// React Components
import AdminRoute from "../AdminRoute/AdminRoute";

const AddBook = () => {
  const { title, writter, genre, year, price, quantity } = useSelector(
    (state) => state.AddBookReducer
  );
  const dispatch = useDispatch();
  const classes = Styles();

  const handleBookTitleInput = (e) => {
    dispatch(bookTitleInput(e.target.value));
  };
  const handleBookWritterInput = (e) => {
    dispatch(bookWritterInput(e.target.value));
  };
  const handleBookGenreInput = (e) => {
    dispatch(bookGenreInput(e.target.value));
  };
  const handleBookYearInput = (e) => {
    dispatch(bookYearInput(e.target.value));
  };
  const handleBookPriceInput = (e) => {
    dispatch(bookPriceInput(e.target.value));
  };
  const handleBookQuantityInput = (e) => {
    dispatch(bookQuantityInput(e.target.value));
  };

  const handleBookSubmit = (e) => {
    console.log("click");
    e.preventDefault();
    dispatch(requestCreateBook());
  };

  return (
    <div className={classes.contentContainer}>
      <AdminRoute>
        <form onSubmit={handleBookSubmit}>
          <FormGroup>
            <InputLabel className={classes.loginInputLabel}>
              Book Title
            </InputLabel>
            <InputBase
              type='text'
              className={classes.loginFormGroup}
              onChange={handleBookTitleInput}
              placeholder='Enter Book Title'
              value={title}
            />
          </FormGroup>
          <FormGroup>
            <InputLabel className={classes.loginInputLabel}>Writter</InputLabel>
            <InputBase
              type='text'
              className={classes.loginFormGroup}
              onChange={handleBookWritterInput}
              placeholder='Enter Book Writter'
              value={writter}
            />
          </FormGroup>
          <FormGroup>
            <InputLabel className={classes.loginInputLabel}>Genre</InputLabel>
            <InputBase
              type='text'
              className={classes.loginFormGroup}
              onChange={handleBookGenreInput}
              placeholder='Enter Book Genre'
              value={genre}
            />
          </FormGroup>
          <FormGroup>
            <InputLabel className={classes.loginInputLabel}>Year</InputLabel>
            <InputBase
              type='number'
              className={classes.loginFormGroup}
              onChange={handleBookYearInput}
              placeholder='Enter Book Year'
              value={year}
            />
          </FormGroup>
          <FormGroup>
            <InputLabel className={classes.loginInputLabel}>Price</InputLabel>
            <InputBase
              type='number'
              className={classes.loginFormGroup}
              onChange={handleBookPriceInput}
              placeholder='Enter Book Price'
              value={price}
            />
          </FormGroup>
          <FormGroup>
            <InputLabel className={classes.loginInputLabel}>
              Quantity
            </InputLabel>
            <InputBase
              type='number'
              className={classes.loginFormGroup}
              onChange={handleBookQuantityInput}
              placeholder='Enter Book Quantity'
              value={quantity}
            />
          </FormGroup>
          <Button type={"submit"}>Save Book</Button>
        </form>
      </AdminRoute>
    </div>
  );
};

export default AddBook;
