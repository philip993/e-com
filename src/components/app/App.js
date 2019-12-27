import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "../header/header";
import Homepage from "../../pages/homepage/homepage";
import Shop from "../../pages/shop/shop";
import About from "../../pages/about/about";
import Contact from "../../pages/contact/contact";
import UserRegistration from "../../pages/userRegistration/userRegistration";
import UserLogin from "../../pages/userLogin/userLogin";

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
        <Route path="/login" exact component={UserLogin} />
      </Switch>
    </div>
  );
};

export default App;
