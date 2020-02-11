import { combineReducers } from "redux";
import { BookReducer } from "../components/Book/BookReducer";
import { BooksReducer } from "../components/Books/BooksReducer";
import { ShoppingCartReducer } from "../components/ShoppingCart/ShoppingCartReducer";
import { usersReducer } from "../components/users/reducer/userReducer";

const rootReducer = combineReducers({
  BookReducer,
  BooksReducer,
  ShoppingCartReducer,
  usersReducer
});

export default rootReducer;
