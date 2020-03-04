import {
  GET_WISHLIST_ITEMS,
  POST_NEW_WISHLIST_ITEM,
  DELETE_ALL_WISHLIST_ITEMS,
  DELETE_ONE_ITEM_FROM_WISHLIST
} from "./WishlistActionTypes";
import axios from "axios";

export const getAllWishlistItems = () => {
  return (dispatch, getState) => {
    let userId = localStorage.getItem("userId");
    return axios
      .get(`http://localhost:5000/wishlist`)
      .then(response => {
        dispatch({
          type: GET_WISHLIST_ITEMS,
          payload: response.data.items.filter(
            item => item.wishlistAuthor._id === userId
          )
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const newWishlistItem = item => {
  return (dispatch, getState) => {
    let userId = localStorage.getItem("userId");
    return axios
      .post(`http://localhost:5000/wishlist`, {
        wishlistItemId: item._id,
        wishlistAuthor: userId
      })
      .then(response => {
        dispatch({
          type: POST_NEW_WISHLIST_ITEM,
          payload: response.data.item
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteWishlist = item => {
  return (dispatch, getState) => {
    let wishItemsTest = getState().WishlistReducer.wishItems;
    return axios
      .delete(`http://localhost:5000/wishlist`, { data: { wishItemsTest } })
      .then(response => {
        dispatch({
          type: DELETE_ALL_WISHLIST_ITEMS
        });
      });
  };
};

export const deleteItemFromWishlist = item => {
  return (dispatch, getState) => {
    let wishItemsTestTwo = getState().WishlistReducer.wishItems;
    return axios
      .delete(
        `http://localhost:5000/wishlist/${wishItemsTestTwo[item.index]._id}`
      )
      .then(response => {
        dispatch({
          type: DELETE_ONE_ITEM_FROM_WISHLIST,
          payload: item.index
        });
      });
  };
};
