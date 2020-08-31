import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
// React Router Dom
import { useHistory } from "react-router-dom";
// Material Ui Components
import {
  BottomNavigation,
  BottomNavigationAction,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Footer = () => {
  const history = useHistory();
  const classes = Styles();
  return (
    <div>
      <Toolbar className={classes.footerContainer}>
        <BottomNavigation>
          <BottomNavigationAction
            label='wishlist'
            onClick={() => history.push("/wishlist")}
            icon={<FavoriteBorderIcon />}
          />
          <BottomNavigationAction
            label='shop'
            onClick={() => history.push("/shop")}
            icon={<ShoppingCartIcon />}
          />
        </BottomNavigation>
      </Toolbar>
    </div>
  );
};

export default Footer;
