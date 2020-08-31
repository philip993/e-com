import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// React Router Dom
import { Link, useHistory } from "react-router-dom";
// Styles
import Styles from "../Styles/Styles";
import "./HeaderStyle.scss";
// Redux Actions
import { getTokenFromLS, clearTokenFromLS } from "./HeaderActions";
import { getUserInformation } from "../User/UserActions";
import { countItemsInCart } from "../Cart/CartActions";
import { logoutUser } from "../Login/LoginActions";
import { countItemsInWishlist } from "../Wishlist/WishlistActions";
// React Components
import Logout from "../Logout/Logout";
import SideMenu from "../SideMenu/SideMenu";
// Material UI Components
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Button,
  Badge,
} from "@material-ui/core";
// Material UI Icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Header = () => {
  const { items, itemNumber, wishItems, wishNumber, info } = useSelector(
    (state) => ({
      ...state.HeaderReducer,
      ...state.CartReducer,
      ...state.WishlistReducer,
      ...state.UserReducer,
    })
  );
  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogout = () => {
    dispatch(clearTokenFromLS());
    dispatch(logoutUser());
    history.push("/");
  };

  useEffect(() => {
    dispatch(countItemsInCart());
  }, [items]);

  useEffect(() => {
    dispatch(countItemsInWishlist());
  }, [wishItems]);

  const getToken = () => {
    dispatch(getTokenFromLS());
    dispatch(getUserInformation());
  };

  const returnTokenFromLS = localStorage.getItem("token");
  const returnUserEmailFromLS = localStorage.getItem("user");

  const classes = Styles();

  return (
    <div className='header'>
      <AppBar position='static' color='primary' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item className={classes.leftGrid}>
              <SideMenu className={classes.iconButton} />
            </Grid>
            <Grid item className={classes.leftGrid}>
              <Typography variant='h5'>WISDOM</Typography>
            </Grid>
            <Grid item className={classes.rightGrid}>
              {info.role === "admin" ? <Link to='/addbook'>ADD BOOK</Link> : ""}

              {returnUserEmailFromLS ? (
                <IconButton
                  color='inherit'
                  onClick={() => history.push("/profile")}
                >
                  <AccountCircle />
                </IconButton>
              ) : null}

              {!returnTokenFromLS ? (
                <Link to='/login' className='headerLink'>
                  Login
                </Link>
              ) : (
                <IconButton
                  color='inherit'
                  className='headerIcon'
                  onClick={handleLogout}
                >
                  <ExitToAppIcon />
                </IconButton>
              )}

              <Link to='/orders' className='headerLink'>
                Orders
              </Link>

              <IconButton
                color='inherit'
                onClick={() => history.push("/wishlist")}
              >
                <Badge badgeContent={wishNumber} color='error'>
                  <FavoriteIcon />
                </Badge>
              </IconButton>

              <IconButton
                color='inherit'
                className='headerIcon'
                onClick={() => history.push("/cartitems")}
              >
                <Badge badgeContent={itemNumber} color='error'>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
