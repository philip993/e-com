import {
  EMAIL_SUBMIT,
  PASSWORD_SUBMIT,
  LOGIN_FINISH
} from "./LoginActionTypes";

import axios from "axios";

export const EmailSubmit = e => {
  return (dsipatch, getState) => {
    dsipatch({
      type: EMAIL_SUBMIT,
      payload: e
    });
  };
};

export const PasswordSubmit = e => {
  return dispatch => {
    dispatch({
      type: PASSWORD_SUBMIT,
      payload: e
    });
  };
};

export const LoginFinish = user => {
  return (dispatch, getState) => {
    let tempState = getState().LoginReducer;
    axios
      .post(
        `http://localhost:5000/users/login`,
        { email: tempState.email, password: tempState.password },
        {
          headers: { "Content-Type": "application/json" }
        }
      )
      .then(res => {
        console.log(res); //show data and where token is stored
        localStorage.setItem("token", res.data.token);
        dispatch({
          type: LOGIN_FINISH,
          payload: res.user
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
