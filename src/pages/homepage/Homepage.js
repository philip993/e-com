import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Jumbotron, Button } from "react-bootstrap";

const Main = () => {
  const user = useSelector(state => state.usersReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <Jumbotron>
        <h1>Welcome to Book Shop</h1>
        <p>Browse for Books in our Shop.</p>
        {user.loggedUser === false ? (
          <p>
            Create account here following this link
            <Button variant="">
              <Link to="/register">Register</Link>
            </Button>
          </p>
        ) : (
          <p>
            <Link to="/shop">Go to shop</Link>
          </p>
        )}
      </Jumbotron>
    </div>
  );
};

export default Main;
