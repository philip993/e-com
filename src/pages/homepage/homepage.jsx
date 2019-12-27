import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Homepage Page</h1>
      <span>
        Create account here following this link{" "}
        <Link to="/register">register</Link>
      </span>
    </div>
  );
};

export default Main;
