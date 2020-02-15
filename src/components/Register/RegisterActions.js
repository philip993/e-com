import {
  TYPE_EMAIL_ADDRESS,
  TYPE_PASSWORD,
  FORM_COMPLETE,
  POST_REGISTRATION
} from "./RegisterActionTypes";

import axios from "axios";

export const TypeEmailAddress = e => {
  return dispatch => {
    dispatch({
      type: TYPE_EMAIL_ADDRESS,
      payload: e
    });
  };
};

export const TypePassword = e => {
  return dispatch => {
    dispatch({
      type: TYPE_PASSWORD,
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

// export const PostRegistration = user => {
//   return dispatch => {
//     axios.post(`http://localhost:5000/users`, { user }).then(res => {
//       console.log(user);
//       console.log(res);
//       dispatch({
//         type: POST_REGISTRATION,
//         payload: res.user.user
//       });
//       console.log(res.user);
//     });
//   };
// };

export const PostRegistration = user => {
  return (dispatch, getState) => {
    let temporaryState = getState().RegisterReducer;
    axios
      .post(
        `http://localhost:5000/users/register`,
        {
          email: temporaryState.email,
          password: temporaryState.password
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
