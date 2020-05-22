import React from "react";

// Styles
import Styles from "../Styles/Styles";
// Material Ui Components
import { Alert, AlertTitle } from "@material-ui/lab";

const BookError = () => {
  const classes = Styles();

  return (
    <div>
      <Alert severity='error' className={classes.alertLogin}>
        Book is already in Shopping Cart..
      </Alert>
    </div>
  );
};

export default BookError;
