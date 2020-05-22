import {
  GET_WISHLIST_ITEMS,
  POST_NEW_WISHLIST_ITEM,
  DELETE_ALL_WISHLIST_ITEMS,
  DELETE_ONE_ITEM_FROM_WISHLIST,
  COUNT_ITEMS_IN_WISHLIST,
  DUPLICATE_TRUE,
  DUPLICATE_FALSE,
} from "./WishlistActionTypes";

const initialState = {
  wishItems: [],
  wishNumber: 0,
  wishStatus: null,
};

export const WishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WISHLIST_ITEMS:
      return {
        ...state,
        wishItems: action.payload,
      };
    case POST_NEW_WISHLIST_ITEM:
      return {
        ...state,
        wishItems: [...state.wishItems, action.payload],
      };
    case DELETE_ALL_WISHLIST_ITEMS:
      return {
        ...state,
        wishItems: action.payload,
      };
    case DELETE_ONE_ITEM_FROM_WISHLIST:
      return {
        ...state,
        wishItems: [
          ...state.wishItems.slice(0, action.payload),
          ...state.wishItems.slice(action.payload + 1),
        ],
      };
    case COUNT_ITEMS_IN_WISHLIST:
      return {
        ...state,
        wishNumber: action.payload,
      };
    case DUPLICATE_TRUE:
      return {
        ...state,
        wishStatus: true,
      };
    case DUPLICATE_FALSE:
      return {
        ...state,
        wishStatus: false,
      };
    default:
      return state;
  }
};
