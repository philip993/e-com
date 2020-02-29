import {
  GET_WISHLIST_ITEMS,
  POST_NEW_WISHLIST_ITEM,
  DELETE_ALL_WISHLIST_ITEMS
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
    case DELETE_ALL_WISHLIST_ITEMS:
      return {
        ...state,
        wishItems: []
      };
    default:
      return state;
  }
};
