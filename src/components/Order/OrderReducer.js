import {
  CREATE_ORDER,
  GET_ORDERS,
  SHOW_DETAILS,
  HIDE_DETAILS
} from "./OrderActionTypes";

const initialState = {
  order: [],
  visibility: false
};

export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        ...state,
        order: [...state.order, action.payload]
      };
    case GET_ORDERS:
      return {
        ...state,
        order: action.payload
      };
    case SHOW_DETAILS:
      return {
        ...state,
        visibility: true
      };
    case HIDE_DETAILS:
      return {
        ...state,
        visibility: false
      };
    default:
      return state;
  }
};
