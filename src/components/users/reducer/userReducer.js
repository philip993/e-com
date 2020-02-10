import { LOGGED_IN_USER } from "../user-action-types/user-action-types";

const initialState = {
  loggedUser: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN_USER:
      return {
        ...state,
        loggedUser: action.payload
      };
    default:
      return state;
  }
};

export default usersReducer;
