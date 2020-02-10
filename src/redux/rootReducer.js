import { combineReducers } from "redux";
import bookReducer from "../components/Books/Book-Reducer/bookReducer";
import usersReducer from "../components/users/reducer/userReducer";

const rootReducer = combineReducers({ bookReducer, usersReducer });

export default rootReducer;
