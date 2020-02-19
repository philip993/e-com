import { GET_USER_INFO } from "./ProfileActionTypes";

const initialState = {
  userInfo: []
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
};
