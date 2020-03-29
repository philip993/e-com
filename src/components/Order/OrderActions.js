import {
  CREATE_ORDER,
  GET_ORDERS,
  SHOW_DETAILS,
  HIDE_DETAILS
} from "./OrderActionTypes";
import axios from "axios";

export const createOrder = (book, index) => {
  return (dispatch, getState) => {
    let cartItems = getState().ShoppingCartReducer.copyOfBooksInCart;
    let selUser = getState().UserReducer.info;
    const loggedUserId = localStorage.getItem("userId");
    console.log(loggedUserId);
    console.log(cartItems);
    return axios
      .post(`http://localhost:5000/orders`, {
        userIds: loggedUserId,
        cart: cartItems,
        name: selUser.firstName,
        address: selUser.address,
        city: selUser.city,
        country: selUser.country
      })
      .then(response => {
        console.log(response);
        dispatch({
          type: CREATE_ORDER,
          payload: response.data
        });
        localStorage.setItem(
          "stripeOrderId",
          response.data.orders.stripeOrderId
        );
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getOrders = () => {
  return (dispatch, getState) => {
    return axios
      .get(`http://localhost:5000/orders`)
      .then(response => {
        console.log(response);
        dispatch({
          type: GET_ORDERS,
          payload: response.data.orders
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const toggleShowTrue = () => {
  return {
    type: SHOW_DETAILS
  };
};

export const toggleShowFalse = () => {
  return {
    type: HIDE_DETAILS
  };
};
