import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h2>Header</h2>
      <span>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </span>
    </div>
  );
};

export default Header;
