import {
  SET_EMAIL_ADDRESS,
  SET_PASSWORD,
  FORM_COMPLETE,
  POST_REGISTRATION,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_USERNAME,
  SET_AGE,
  SET_CITY,
  SET_COUNTRY
} from "./RegisterActionTypes";

import axios from "axios";

export const SetEmailAddress = e => {
  return dispatch => {
    dispatch({
      type: SET_EMAIL_ADDRESS,
      payload: e
    });
  };
};

export const SetPassword = e => {
  return dispatch => {
    dispatch({
      type: SET_PASSWORD,
      payload: e
    });
  };
};

export const FormComplete = t => {
  return dispatch => {
    dispatch({
      type: FORM_COMPLETE,
      payload: t
    });
  };
};

export const PostRegistration = user => {
  return (dispatch, getState) => {
    let temporaryState = getState().RegisterReducer;
    axios
      .post(
        `http://localhost:5000/users/register`,
        {
          firstName: temporaryState.firstName,
          lastName: temporaryState.lastName,
          username: temporaryState.username,
          email: temporaryState.email,
          password: temporaryState.password,
          age: temporaryState.age,
          city: temporaryState.city,
          country: temporaryState.country
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        dispatch({
          type: POST_REGISTRATION,
          payload: res.data
        });
      });
  };
};

export const SetFirstName = e => {
  return {
    type: SET_FIRST_NAME,
    payload: e
  };
};

export const SetLastName = e => {
  return {
    type: SET_LAST_NAME,
    payload: e
  };
};

export const SetUsername = e => {
  return {
    type: SET_USERNAME,
    payload: e
  };
};

export const SetAge = e => {
  return {
    type: SET_AGE,
    payload: e
  };
};

export const SetCity = e => {
  return {
    type: SET_CITY,
    payload: e
  };
};

export const SetContry = e => {
  return {
    type: SET_COUNTRY,
    payload: e
  };
};
