import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Navbar bg="light" variant="light" style={{ height: "75px" }}>
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/shop">Shop</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/contact">Contact</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/cart">Cart</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/login">Login</Link>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
