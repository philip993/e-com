import React from "react";
import { Link } from "react-router-dom";

import { Jumbotron, Button } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to Book Shop</h1>
        <p>Browse for Books in our Shop.</p>
        <p>
          Create account here following this link
          <Button variant="">
            <Link to="/login">Login</Link>
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Main;
