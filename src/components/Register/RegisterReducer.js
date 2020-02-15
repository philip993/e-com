import {
  TYPE_EMAIL_ADDRESS,
  TYPE_PASSWORD,
  FORM_COMPLETE,
  POST_REGISTRATION
} from "./RegisterActionTypes";

const initialState = {
  email: "",
  password: "",
  info: [],
  user: {}
};

export const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_EMAIL_ADDRESS:
      return {
        ...state,
        email: action.payload
      };
    case TYPE_PASSWORD:
      return {
        ...state,
        password: action.payload
      };
    case FORM_COMPLETE:
      return {
        ...state,
        info: [state.email, state.password]
      };
    case POST_REGISTRATION:
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
