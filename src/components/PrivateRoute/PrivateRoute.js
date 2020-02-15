import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const tokenFromLS = localStorage.getItem("token");
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          tokenFromLS ? (
            children
          ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
