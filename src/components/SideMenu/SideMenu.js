import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
import "./SideMenuStyles.scss";
// React-router-dom
import { Link } from "react-router-dom";
// Redux Actions
import { setDrawerToOpen, setDrawerToClose } from "./SideMenuActions";
import { getUserInformation } from "../User/UserActions";
import { getTokenFromLS } from "../Header/HeaderActions";
// Material Ui Components
import { Drawer, List, ListItem, IconButton, Divider } from "@material-ui/core";
// Material Ui Icons
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const SideMenu = () => {
  const sideMenu = useSelector((state) => state.SideMenuReducer);
  const dispatch = useDispatch();

  const handleOpenDrawer = () => {
    dispatch(setDrawerToOpen());
  };

  const handleCloseDrawer = () => {
    dispatch(setDrawerToClose());
  };

  const handleUser = () => {
    dispatch(getTokenFromLS());
    dispatch(getUserInformation());
  };
  const classes = Styles();

  return (
    <div className='sideMenu'>
      <IconButton
        onClick={
          sideMenu.isOpen === false ? handleOpenDrawer : handleCloseDrawer
        }
        color='inherit'
        edge='start'
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        open={sideMenu.isOpen === true}
        anchor='left'
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List className='sideMenuList' onClick={handleCloseDrawer}>
          <IconButton onClick={handleCloseDrawer} className='sideMenuBtn'>
            <CloseIcon />
          </IconButton>

          <ListItem>
            Hello,{" "}
            <Link to='/login' className='sideMenuLogin'>
              {" "}
              Sign-In
            </Link>
          </ListItem>

          <Divider />
          <ListItem>
            <Link to='/'>Home</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to='/about'>About</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to='/contact'>Contact</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to='/shop' onClick={handleUser}>
              Shop
            </Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to='/wishlist'>Wishlist</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to='/orders'>Orders</Link>
          </ListItem>
          <Divider />
          <ListItem>
            <Link to='/profile'>Profile</Link>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </div>
  );
};

export default SideMenu;
