import {
  CREATE_ORDER,
  GET_ORDERS,
  SHOW_DETAILS,
  HIDE_DETAILS,
  GET_STRIPE_SKU
} from "./OrderActionTypes";

const initialState = {
  order: [],
  visibility: false,
  sku: ""
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
    case GET_STRIPE_SKU:
      return {
        ...state,
        sku: action.payload
      };
    default:
      return state;
  }
};
