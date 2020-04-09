import {
  CREATE_ORDER,
  GET_ORDERS,
  SHOW_DETAILS,
  HIDE_DETAILS,
  GET_ONE_ORDER,
} from "./OrderActionTypes";
import axios from "axios";

export const createOrder = (book, index) => {
  return (dispatch, getState) => {
    // let cartItems = getState().ShoppingCartReducer.copyOfBooksInCart;
    let cartItems = getState().CartReducer.items;
    let selUser = getState().UserReducer.info;
    const loggedUserId = localStorage.getItem("userId");
    console.log(loggedUserId);
    console.log(cartItems);
    return axios
      .post(`http://localhost:5000/orders`, {
        userIds: loggedUserId,
        cart: cartItems,
        name: selUser.firstName + " " + selUser.lastName,
        email: selUser.email,
        phone: selUser.phone,
        address: selUser.address,
        city: selUser.city,
        country: selUser.country,
        postalCode: selUser.postalCode,
        customerId: selUser.customerId,
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: CREATE_ORDER,
          payload: response.data,
        });
        localStorage.setItem(
          "stripeOrderId",
          response.data.orders.stripeOrderId
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getOrders = () => {
  return (dispatch, getState) => {
    let currentUser = localStorage.getItem("userId");
    return axios
      .get(`http://localhost:5000/orders`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_ORDERS,
          payload: response.data.orders.filter(
            ({ userIds }) => userIds._id === currentUser
          ),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const toggleShowTrue = () => {
  return {
    type: SHOW_DETAILS,
  };
};

export const toggleShowFalse = () => {
  return {
    type: HIDE_DETAILS,
  };
};

export const getOneOrder = () => {
  return (dispatch, getState) => {
    let selectedOrder = localStorage.getItem("selectedOrder");
    return axios
      .get(`http://localhost:5000/orders/${selectedOrder}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_ONE_ORDER,
          payload: response.data.oneOrder,
        });
      });
  };
};
