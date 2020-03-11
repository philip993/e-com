import { CREATE_ORDER, GET_ORDERS } from "./OrderActionTypes";

const initialState = {
  order: []
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
    default:
      return state;
  }
};
