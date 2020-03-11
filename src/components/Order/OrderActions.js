import { CREATE_ORDER, GET_ORDERS } from "./OrderActionTypes";
import axios from "axios";

export const createOrder = item => {
  return (dispatch, getState) => {
    let cartItems = getState().ShoppingCartReducer.copyOfBooksInCart;
    const loggedUserId = localStorage.getItem("userId");
    console.log(loggedUserId);
    return axios
      .post(`http://localhost:5000/orders`, {
        userIds: loggedUserId,
        cart: cartItems
      })
      .then(response => {
        console.log(response);
        dispatch({
          type: CREATE_ORDER,
          payload: response.data
        });
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
          payload: response.data.order
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
};
