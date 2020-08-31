import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserInformation } from "./UserActions";

const User = () => {
  const user = useSelector(state => state.UserReducer);
  const dispatch = useDispatch();

  const getUser = () => {
    dispatch(getUserInformation());
  };

  return (
    <div>
      <h1>USER</h1>
      <button onClick={getUser}>Get user info</button>
    </div>
  );
};

export default User;
