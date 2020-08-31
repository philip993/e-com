import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Navbar, Nav, NavLink } from "react-bootstrap";
import Logout from "../Logout/Logout";
import { getTokenFromLS } from "./HeaderActions";
import { getUserInformation } from "../User/UserActions";
import { countItemsInCart } from "../Cart/CartActions";

const Header = () => {
  const header = useSelector((state) => state.HeaderReducer);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.CartReducer);

  useEffect(() => {
    dispatch(countItemsInCart());
  }, [cart.items]);

  const getToken = () => {
    dispatch(getTokenFromLS());
    dispatch(getUserInformation());
  };

  const returnTokenFromLS = localStorage.getItem("token");
  const returnUserEmailFromLS = localStorage.getItem("user");

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
          <Nav.Link>
            <Link to='/wishlist'>Wishlist</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/cartitems' onClick={getToken}>
              CART {cart.itemNumber}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/orders' onClick={getToken}>
              Orders
            </Link>
          </Nav.Link>

          {returnUserEmailFromLS ? (
            <Nav.Link>
              <Link to='/profile'>Profile</Link>
            </Nav.Link>
          ) : null}

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
