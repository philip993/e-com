import { GET_ITEMS_TO_CHECKOUT } from "./CheckoutActionTypes";

const initialState = {
  cartItems: []
};

export const CheckoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_TO_CHECKOUT:
      return {
        ...state,
        cartItems: action.payload
      };
    default:
      return state;
  }
};
