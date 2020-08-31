import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import Homepage from "../../pages/homepage/Homepage";
import About from "../../pages/about/about";
import Contact from "../../pages/contact/contact";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Books from "../Books/Books";
import Wishlist from "../Wishlist/Wishlist";

const App = props => {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/shop' exact component={Books} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/register' exact component={Register} />
        <Route path='/cart' exact component={ShoppingCart} />
        <Route path='/login' exact component={Login} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/wishlist' exact component={Wishlist} />
      </Switch>
    </div>
  );
};

export default App;
