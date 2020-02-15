import { combineReducers } from "redux";
import { BookReducer } from "../components/Book/BookReducer";
import { BooksReducer } from "../components/Books/BooksReducer";
import { ShoppingCartReducer } from "../components/ShoppingCart/ShoppingCartReducer";
import { usersReducer } from "../components/users/reducer/userReducer";
import { RegisterReducer } from "../components/Register/RegisterReducer";
import { LoginReducer } from "../components/Login/LoginReducer";

const rootReducer = combineReducers({
  BookReducer,
  BooksReducer,
  ShoppingCartReducer,
  usersReducer,
  RegisterReducer,
  LoginReducer
});

export default rootReducer;
