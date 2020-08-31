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
  SET_ADDRESS,
  SET_POSTAL_CODE,
  SET_PHONE
} from "./RegisterActionTypes";

import axios from "axios";

export const setEmailAddress = e => {
  return {
    type: SET_EMAIL_ADDRESS,
    payload: e
  };
};

export const setPassword = e => {
  return {
    type: SET_PASSWORD,
    payload: e
  };
};

export const setFirstName = e => {
  return {
    type: SET_FIRST_NAME,
    payload: e
  };
};

export const setLastName = e => {
  return {
    type: SET_LAST_NAME,
    payload: e
  };
};

export const setUsername = e => {
  return {
    type: SET_USERNAME,
    payload: e
  };
};

export const setAge = e => {
  return {
    type: SET_AGE,
    payload: e
  };
};

export const setGender = e => {
  return {
    type: SET_GENDER,
    payload: e
  };
};

export const setAddress = e => {
  return {
    type: SET_ADDRESS,
    payload: e
  };
};

export const setCity = e => {
  return {
    type: SET_CITY,
    payload: e
  };
};

export const setContry = e => {
  return {
    type: SET_COUNTRY,
    payload: e
  };
};

export const setPostalCode = e => {
  return {
    type: SET_POSTAL_CODE,
    payload: e
  };
};

export const setPhone = e => {
  return {
    type: SET_PHONE,
    payload: e
  };
};

export const postRegistration = user => {
  return (dispatch, getState) => {
    let registerUser = getState().RegisterReducer;
    axios
      .post(
        `http://localhost:5000/users/register`,
        {
          firstName: registerUser.firstName,
          lastName: registerUser.lastName,
          username: registerUser.username,
          email: registerUser.email,
          password: registerUser.password,
          age: registerUser.age,
          gender: registerUser.gender,
          phone: registerUser.phone,
          address: registerUser.address,
          city: registerUser.city,
          country: registerUser.country,
          postalCode: registerUser.postalCode,
          customerId: registerUser.customerId
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
