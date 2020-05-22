import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ children, ...rest }) => {
  const tokenFromLS = localStorage.getItem("token");
  const { info } = useSelector((state) => state.UserReducer);

  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          tokenFromLS && info.role === "admin" ? (
            children
          ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          )
        }
      />
    </div>
  );
};

export default AdminRoute;
