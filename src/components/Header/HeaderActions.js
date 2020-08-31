import { GET_TOKEN, CLEAR_TOKEN, RETRIEVE_TOKEN } from "./HeaderActionTypes";

export const getTokenFromLS = (token) => {
  return (dispatch) => {
    let tokenLS = localStorage.getItem("token");
    dispatch({
      type: GET_TOKEN,
      payload: tokenLS,
    });
  };
};

export const clearTokenFromLS = () => {
  localStorage.clear();
  return {
    type: CLEAR_TOKEN,
  };
};

export const retriveToken = (token) => {
  return (dispatch) => {
    let tokenPersist = localStorage.getItem("token");
    dispatch({
      type: RETRIEVE_TOKEN,
      payload: tokenPersist,
    });
  };
};
