import {
  EMAIL_SUBMIT,
  PASSWORD_SUBMIT,
  LOGIN_FINISH,
} from "./LoginActionTypes";

import axios from "axios";

export const emailSubmit = (e) => {
  return (dsipatch) => {
    dsipatch({
      type: EMAIL_SUBMIT,
      payload: e,
    });
  };
};

export const passwordSubmit = (e) => {
  return (dispatch) => {
    dispatch({
      type: PASSWORD_SUBMIT,
      payload: e,
    });
  };
};

export const loginFinish = (user) => {
  return (dispatch, getState) => {
    let tempState = getState().LoginReducer;
    axios
      .post(`http://localhost:5000/users/login`, {
        email: tempState.email,
        password: tempState.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: LOGIN_FINISH,
          payload: res.user,
        });
        localStorage.setItem("user", tempState.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
