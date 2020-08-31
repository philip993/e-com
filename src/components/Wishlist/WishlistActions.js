import {
  GET_WISHLIST_ITEMS,
  POST_NEW_WISHLIST_ITEM,
  DELETE_ALL_WISHLIST_ITEMS,
  DELETE_ONE_ITEM_FROM_WISHLIST,
  COUNT_ITEMS_IN_WISHLIST,
  DUPLICATE_TRUE,
  DUPLICATE_FALSE,
} from "./WishlistActionTypes";
import axios from "axios";

export const getAllWishlistItems = () => {
  return (dispatch, getState) => {
    let currentUser = localStorage.getItem("userId");
    return axios
      .get(`http://localhost:5000/wishlist/${currentUser}`)
      .then((response) => {
        dispatch({
          type: GET_WISHLIST_ITEMS,
          payload: response.data.items,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const newWishlistItem = (item) => {
  return (dispatch, getState) => {
    let userId = localStorage.getItem("userId");
    let wishlist = getState().WishlistReducer.wishItems;
    let checkDuplicate = wishlist.findIndex(
      (itm, index) => itm.wishlistItemId._id === item._id
    );
    console.log(checkDuplicate);

    if (checkDuplicate === -1) {
      return axios
        .post(`http://localhost:5000/wishlist/${userId}`, {
          wishlistItemId: item._id,
          wishlistAuthor: userId,
          wishQuantity: 1,
        })
        .then((response) => {
          dispatch({
            type: POST_NEW_WISHLIST_ITEM,
            payload: response.data.item,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      dispatch({
        type: DUPLICATE_TRUE,
      });
    }
  };
};

export const deleteWishlist = () => {
  return (dispatch, getState) => {
    let currentUser = localStorage.getItem("userId");
    // let wishItemsTest = getState().WishlistReducer.wishItems;
    return axios
      .delete(`http://localhost:5000/wishlist/${currentUser}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: DELETE_ALL_WISHLIST_ITEMS,
          payload: [],
        });
      });
  };
};

export const deleteItemFromWishlist = (item) => {
  return (dispatch, getState) => {
    let currentUser = localStorage.getItem("userId");
    let wishItemsTestTwo = getState().WishlistReducer.wishItems;
    return axios
      .delete(
        `http://localhost:5000/wishlist/${currentUser}/${
          wishItemsTestTwo[item.index]._id
        }`
      )
      .then((response) => {
        dispatch({
          type: DELETE_ONE_ITEM_FROM_WISHLIST,
          payload: item.index,
        });
      });
  };
};

export const countItemsInWishlist = () => {
  return (dispatch, getState) => {
    let itemsInWishlist = getState().WishlistReducer.wishItems;
    let numberOfItems = itemsInWishlist.reduce(
      (total, current) => total + current.wishQuantity,
      0
    );
    console.log();
    console.log(numberOfItems);
    dispatch({
      type: COUNT_ITEMS_IN_WISHLIST,
      payload: numberOfItems,
    });
  };
};

export const wishDuplicateTrue = () => {
  return {
    type: DUPLICATE_TRUE,
  };
};

export const wishDuplicateFalse = () => {
  return {
    type: DUPLICATE_FALSE,
  };
};
