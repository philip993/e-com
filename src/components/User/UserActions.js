import { GET_USER_INFORMATION } from "./UserActionTypes";
import axios from "axios";

export const getUserInformation = () => {
  return (dispatch, getState) => {
    let email = localStorage.getItem("user");
    return axios
      .get(`http://localhost:5000/users/${email}`)
      .then(response => {
        dispatch({
          type: GET_USER_INFORMATION,
          payload: response.data.selectedUser
        });
        localStorage.setItem("userId", response.data.selectedUser._id);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
