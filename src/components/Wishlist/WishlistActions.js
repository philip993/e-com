import {
  GET_WISHLIST_ITEMS,
  POST_NEW_WISHLIST_ITEM
} from "./WishlistActionTypes";
import axios from "axios";

export const getAllWishlistItems = () => {
  return dispatch => {
    return axios
      .get(`http://localhost:5000/wishlist`)
      .then(response => {
        console.log(response);
        dispatch({
          type: GET_WISHLIST_ITEMS,
          payload: response.data.items
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const newWishlistItem = item => {
  return (dispatch, getState) => {
    let testItem = getState().BooksReducer.data;
    return axios
      .post(`http://localhost:5000/wishlist`, {
        wishlistItemId: testItem[item.index]
      })
      .then(response => {
        console.log(item);
        console.log(response);
        dispatch({
          type: POST_NEW_WISHLIST_ITEM,
          payload: {
            title: item.title,
            price: item.price
          }
        });
      });
  };
};
