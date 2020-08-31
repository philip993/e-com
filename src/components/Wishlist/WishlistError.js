import React from "react";

// Styles
import Styles from "../Styles/Styles";
// Material Ui Components
import { Alert, AlertTitle } from "@material-ui/lab";

const WishlistError = () => {
  const classes = Styles();

  return (
    <div>
      <Alert severity='error' className={classes.alertLogin}>
        Item is already in Wishlist
      </Alert>
    </div>
  );
};

export default WishlistError;
