import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
import "./RegisterStyles.scss";
// Redux Actions
import {
  setEmailAddress,
  setPassword,
  validateTrue,
  validateFalse,
  stepIncrement,
} from "./RegisterActions";
// Material Ui Components
import {
  FormGroup,
  InputBase,
  InputLabel,
  Typography,
  Container,
  FormHelperText,
  Button,
} from "@material-ui/core";
// Simple React Validator
import SimpleReactValidator from "simple-react-validator";

const RegisterUserInfo = () => {
  const { email, password } = useSelector((state) => state.RegisterReducer);
  const dispatch = useDispatch();
  const classes = Styles();
  const validator = new SimpleReactValidator();

  const handleUserEmail = (e) => {
    dispatch(setEmailAddress(e.target.value));
  };

  const handleUserPassword = (e) => {
    dispatch(setPassword(e.target.value));
  };
  // Steps
  const handleStepIncrement = () => {
    dispatch(stepIncrement());
  };

  return (
    <div>
      {validator.showMessages()}
      <Typography variant='h4'>User Info</Typography>
      <FormGroup>
        <InputLabel className={classes.registerFormLabel}>Email</InputLabel>
        <InputBase
          type='email'
          id='regEmail'
          className={classes.registerFormGroup}
          onChange={handleUserEmail}
          placeholder='Enter valid e-mail adress'
          value={email}
          onBlur={() => validator.showMessageFor("email")}
        />
        <FormHelperText className={classes.registerHelperText}>
          {validator.message("email", email, "required|email")}
        </FormHelperText>
      </FormGroup>
      <FormGroup>
        <InputLabel className={classes.registerFormLabel}>Password</InputLabel>
        <InputBase
          type='password'
          id='regPassword'
          className={classes.registerFormGroup}
          onChange={handleUserPassword}
          placeholder='Enter your password'
          value={password}
        />
        <FormHelperText className={classes.registerHelperText}>
          {validator.message("password", password, [
            "required",
            {
              regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            },
          ])}
        </FormHelperText>
        <Button
          className={classes.nextStepButton}
          disabled={!validator.allValid()}
          onClick={handleStepIncrement}
        >
          Next
        </Button>
      </FormGroup>
    </div>
  );
};

export default RegisterUserInfo;
