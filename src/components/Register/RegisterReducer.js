import {
  SET_EMAIL_ADDRESS,
  SET_PASSWORD,
  FORM_COMPLETE,
  POST_REGISTRATION,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_USERNAME,
  SET_AGE,
  SET_CITY,
  SET_COUNTRY,
  SET_GENDER,
  SET_ADDRESS,
  SET_POSTAL_CODE,
  SET_PHONE,
  STEP_INCREMENT,
  STEP_DECREMENT,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  ERROR_MSG_NULL,
  STEP_RESET,
} from './RegisterActionTypes';

const initialState = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
  age: '',
  gender: '',
  phone: '',
  address: '',
  city: '',
  country: '',
  postalCode: '',
  info: [],
  user: {},
  step: 1,
  activeStepper: 0,
  errorMsg: null,
  isValidate: null,
};

export const RegisterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMAIL_ADDRESS:
      return {
        ...state,
        email: action.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    case SET_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload,
      };
    case SET_LAST_NAME:
      return {
        ...state,
        lastName: action.payload,
      };
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case SET_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case SET_GENDER:
      return {
        ...state,
        gender: action.payload,
      };
    case SET_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case SET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case SET_POSTAL_CODE:
      return {
        ...state,
        postalCode: action.payload,
      };
    case FORM_COMPLETE:
      return {
        ...state,
        info: [state.email, state.password],
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        username: '',
        age: '',
        gender: '',
        address: '',
        city: '',
        country: '',
        errorMsg: false,
      };
    case REGISTER_FAILURE: {
      return {
        ...state,
        user: null,
        errorMsg: true,
      };
    }
    case STEP_INCREMENT:
      return {
        ...state,
        step: state.step + 1,
        activeStepper: state.activeStepper + 1,
      };
    case STEP_DECREMENT:
      return {
        ...state,
        step: state.step - 1,
        activeStepper: state.activeStepper - 1,
      };
    case STEP_RESET:
      return {
        ...state,
        step: 1,
        activeStepper: 0,
      };
    case ERROR_MSG_NULL:
      return {
        ...state,
        errorMsg: null,
      };
    default:
      return state;
  }
};
