import React from "react";

// Styles
import Styles from "../Styles/Styles";
// Material Ui Components
import { Alert, AlertTitle } from "@material-ui/lab";

const LoginError = () => {
  const classes = Styles();

  return (
    <div>
      <Alert severity='error' className={classes.alertLogin}>
        <AlertTitle>ERROR</AlertTitle>
        Wrong email or password. Please try again...
      </Alert>
    </div>
  );
};

export default LoginError;
