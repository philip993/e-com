import { GET_TOKEN, CLEAR_TOKEN } from "./HeaderActionTypes";

export const GetTokenFromLS = token => {
  return dispatch => {
    let tokenLS = localStorage.getItem("token");
    dispatch({
      type: GET_TOKEN,
      payload: tokenLS
    });
  };
};

export const ClearTokenFromLS = () => {
  return {
    type: CLEAR_TOKEN
  };
};
