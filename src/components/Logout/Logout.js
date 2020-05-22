import React from "react";
import { useSelector, useDispatch } from "react-redux";

// React Router Dom
import { useHistory, Link } from "react-router-dom";
// Redux Actions
import { clearTokenFromLS } from "../Header/HeaderActions";
// Material Ui Components
import MenuItem from "@material-ui/core/MenuItem";
import { logoutUser } from "../Login/LoginActions";

const Logout = () => {
  const user = useSelector((state) => state.HeaderReducer);
  const dispatch = useDispatch();

  let history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(clearTokenFromLS());
    dispatch(logoutUser());
    history.push("/");
  };
  return (
    <div>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </div>
  );
};

export default Logout;
