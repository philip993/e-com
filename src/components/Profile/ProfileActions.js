import { GET_USER_INFO } from "./ProfileActionTypes";
import axios from "axios";

export const getUserInfo = () => {
  return (dispatch) => {
    let userEmail = localStorage.getItem("user");
    return axios
      .get(`http://localhost:5000/users/profile/${userEmail}`)
      .then((res) => {
        dispatch({
          type: GET_USER_INFO,
          payload: res.data.user,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
