import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { ClearTokenFromLS } from "../Header/HeaderActions";

const Logout = () => {
  const user = useSelector(state => state.HeaderReducer);
  const dispatch = useDispatch();

  let history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    dispatch(ClearTokenFromLS());
    history.push("/");
  };
  return (
    <div>
      <Nav.Link onClick={handleLogout}>
        <Link>Logout</Link>
      </Nav.Link>
    </div>
  );
};

export default Logout;
