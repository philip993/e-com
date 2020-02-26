import {
  GET_WISHLIST_ITEMS,
  POST_NEW_WISHLIST_ITEM
} from "./WishlistActionTypes";

const initialState = {
  wishItems: []
};

export const WishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WISHLIST_ITEMS:
      return {
        ...state,
        wishItems: action.payload
      };
    case POST_NEW_WISHLIST_ITEM:
      return {
        ...state,
        wishItems: [...state.wishItems, action.payload]
      };
    default:
      return state;
  }
};
