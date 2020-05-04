import React from "react";
// React Router Dom
import { Switch, Route } from "react-router-dom";
// Styles
import Styles from "../Styles/Styles";
import "./App.css";
// React components
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
import Checkout from "../Checkout/Checkout";
import Order from "../Order/Order";
import Cart from "../Cart/Cart";

const App = (props) => {
  const classes = Styles();

  return (
    <div className={classes.root}>
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
        <Route path='/checkout' exact component={Checkout} />
        <Route path='/orders' exact component={Order} />
        <Route path='/cartitems' exact component={Cart} />
      </Switch>
    </div>
  );
};

export default App;
