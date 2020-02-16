import { GET_TOKEN, CLEAR_TOKEN } from "./HeaderActionTypes";

const initialState = {
  token: ""
};

export const HeaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    case CLEAR_TOKEN:
      return {
        ...state,
        token: ""
      };
    default:
      return state;
  }
};
