import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
// Redux Actions
import { registerRequest } from "./RegisterActions";
// Material Ui Components
import { Button, Container, Typography } from "@material-ui/core";

const RegisterConfirmation = () => {
  const {} = useSelector((state) => state.RegisterReducer);
  const dispatch = useDispatch();
  const classes = Styles();

  // Register Request
  const handleRegisterRequest = (e) => {
    e.preventDefault();
    dispatch(registerRequest());
  };

  return (
    <div>
      <Typography varaint='p'>
        You are one step away from creatng your account here in WISDOM
        bookstore.
      </Typography>
      <Button
        onClick={handleRegisterRequest}
        className={classes.nextStepButton}
      >
        Finish Registratiom
      </Button>
    </div>
  );
};

export default RegisterConfirmation;
