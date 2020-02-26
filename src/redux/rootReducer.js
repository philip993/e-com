import { combineReducers } from "redux";
import { BookReducer } from "../components/Book/BookReducer";
import { BooksReducer } from "../components/Books/BooksReducer";
import { ShoppingCartReducer } from "../components/ShoppingCart/ShoppingCartReducer";
import { usersReducer } from "../components/users/reducer/userReducer";
import { RegisterReducer } from "../components/Register/RegisterReducer";
import { LoginReducer } from "../components/Login/LoginReducer";
import { HeaderReducer } from "../components/Header/HeaderReducer";
import { ProfileReducer } from "../components/Profile/ProfileReducer";
import { PaginationReducer } from "../components/Pagination/PaginationReducer";
import { WishlistReducer } from "../components/Wishlist/WishlistReducer";

const rootReducer = combineReducers({
  BookReducer,
  BooksReducer,
  ShoppingCartReducer,
  usersReducer,
  RegisterReducer,
  LoginReducer,
  HeaderReducer,
  ProfileReducer,
  PaginationReducer,
  WishlistReducer
});

export default rootReducer;
