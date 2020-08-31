import {
  GET_WISHLIST_ITEMS,
  POST_NEW_WISHLIST_ITEM,
  DELETE_ALL_WISHLIST_ITEMS,
  DELETE_ONE_ITEM_FROM_WISHLIST
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
    case DELETE_ONE_ITEM_FROM_WISHLIST:
      return {
        ...state,
        wishItems: [
          ...state.wishItems.slice(0, action.payload),
          ...state.wishItems.slice(action.payload + 1)
        ]
      };
    default:
      return state;
  }
};
