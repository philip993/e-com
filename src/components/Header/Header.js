import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";
import Logout from "../Logout/Logout";
import { GetTokenFromLS } from "./HeaderActions";

const Header = () => {
  const user = useSelector(state => state.HeaderReducer);
  const dispatch = useDispatch();

  const getToken = () => {
    dispatch(GetTokenFromLS());
  };

  const returnTokenFromLS = localStorage.getItem("token");
  return (
    <div className='header'>
      <Navbar bg='light' variant='light' style={{ height: "75px" }}>
        <Navbar.Brand>
          <Link to='/'>Home</Link>
        </Navbar.Brand>
        <Nav className='mr-auto'>
          <Nav.Link>
            <Link to='/shop' onClick={getToken}>
              Shop
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/about'>About</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/contact'>Contact</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/cart'>Cart</Link>
          </Nav.Link>

          {!returnTokenFromLS ? (
            <Nav.Link>
              <Link to='/login'>Login</Link>
            </Nav.Link>
          ) : (
            <Logout />
          )}
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
