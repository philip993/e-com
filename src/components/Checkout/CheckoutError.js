import React from "react";
import {} from "react-redux";

// Styles
import Styles from "../Styles/Styles";
// React Router Dom
import { Link } from "react-router-dom";
// Material Ui Components
import { Typography, Divider, Button } from "@material-ui/core";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const CheckoutError = () => {
  const classes = Styles();

  return (
    <div className={classes.contentContainer}>
      <PrivateRoute>
        <Typography variant='h4' className={classes.errorMsg}>
          Error
        </Typography>
        <Divider />
        <div className={classes.infoContainer}>
          <Typography variant='p'>
            Error occured during payment. Please try again.
          </Typography>
        </div>
        <div className={classes.messageContainer}>
          <Button className={classes.checkoutLink}>
            <Link to='/shop'>Shop</Link>
          </Button>
          <Button className={classes.checkoutLink}>
            <Link to='/order'>Order</Link>
          </Button>
          <Button className={classes.checkoutLink}>
            <Link to='/'>Homepage</Link>
          </Button>
        </div>
      </PrivateRoute>
    </div>
  );
};

export default CheckoutError;
