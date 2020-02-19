import { GET_USER_INFO } from "./ProfileActionTypes";
import axios from "axios";

export const GetUserInfo = () => {
  return dispatch => {
    const userEmail = localStorage.getItem("user");
    return axios
      .get(`http://localhost:5000/user/profile/${userEmail}`)
      .then(res => {
        dispatch({
          type: GET_USER_INFO,
          payload: res.data.user
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
