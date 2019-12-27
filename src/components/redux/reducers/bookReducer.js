import { LOAD_BOOKS } from "../constants/constants";

const initialState = {
  data: []
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default bookReducer;
