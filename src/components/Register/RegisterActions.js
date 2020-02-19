import {
  SET_EMAIL_ADDRESS,
  SET_PASSWORD,
  POST_REGISTRATION,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_USERNAME,
  SET_AGE,
  SET_CITY,
  SET_COUNTRY,
  SET_GENDER,
  SET_ADDRESS
} from "./RegisterActionTypes";

import axios from "axios";

export const SetEmailAddress = e => {
  return {
    type: SET_EMAIL_ADDRESS,
    payload: e
  };
};

export const SetPassword = e => {
  return {
    type: SET_PASSWORD,
    payload: e
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

export const SetGender = e => {
  return {
    type: SET_GENDER,
    payload: e
  };
};

export const SetAddress = e => {
  return {
    type: SET_ADDRESS,
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
          gender: temporaryState.gender,
          address: temporaryState.address,
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
      })
      .catch(err => {
        console.log(err);
      });
  };
};
