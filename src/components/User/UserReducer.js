import { GET_USER_INFORMATION } from "./UserActionTypes";

const initialState = {
  info: {}
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFORMATION:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }
};
