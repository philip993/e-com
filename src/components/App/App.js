import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "../Header/Header";
import Homepage from "../../pages/homepage/Homepage";
import Shop from "../../pages/Shop/Shop";
import About from "../../pages/about/about";
import Contact from "../../pages/contact/contact";
import UserRegistration from "../../pages/userRegistration/userRegistration";
import UserLogin from "../../pages/userLogin/userLogin";
import ShoppingCart from "../Shopping-Cart/ShoppingCart";

const App = props => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/register" exact component={UserRegistration} />
        <Route path="/cart" exact component={ShoppingCart} />
        <Route path="/login" exact component={UserLogin} />
      </Switch>
    </div>
  );
};

export default App;
