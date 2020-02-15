import {
  EMAIL_SUBMIT,
  PASSWORD_SUBMIT,
  LOGIN_FINISH
} from "./LoginActionTypes";

const initialState = {
  email: "",
  password: "",
  user: {}
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_SUBMIT:
      return {
        ...state,
        email: action.payload
      };
    case PASSWORD_SUBMIT:
      return {
        ...state,
        password: action.payload
      };
    case LOGIN_FINISH:
      return {
        ...state,
        user: action.payload,
        email: "",
        password: ""
      };
    default:
      return state;
  }
};
