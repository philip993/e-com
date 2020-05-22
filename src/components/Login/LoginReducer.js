import {
  EMAIL_SUBMIT,
  PASSWORD_SUBMIT,
  LOGIN_FINISH,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./LoginActionTypes";

const initialState = {
  email: "",
  password: "",
  user: null,
  errorMsg: null,
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_SUBMIT:
      return {
        ...state,
        email: action.payload,
      };
    case PASSWORD_SUBMIT:
      return {
        ...state,
        password: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        email: "",
        password: "",
        errorMsg: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        email: "",
        password: "",
        errorMsg: true,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        errorMsg: null,
      };
    case LOGIN_FINISH:
      return {
        ...state,
        user: action.payload,
        email: "",
        password: "",
      };
    default:
      return state;
  }
};
