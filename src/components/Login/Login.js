import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Import scss
import Styles from "../Styles/Styles";
import "./LoginStyle.scss";
// Redux Actions
import { emailSubmit, passwordSubmit, loginRequest } from "./LoginActions";
import { getUserInformation } from "../User/UserActions";
// Import React-router-dom
import { Link, useHistory } from "react-router-dom";

// Material ui Components
import {
  Button,
  FormGroup,
  Input,
  Container,
  InputBase,
  InputLabel,
  Typography,
} from "@material-ui/core";
import LoginError from "./LoginError";

const Login = () => {
  const { email, password, errorMsg } = useSelector(
    (state) => state.LoginReducer
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = Styles();

  const handleEmailSubmit = (e) => {
    dispatch(emailSubmit(e.target.value));
  };

  const handlePasswordSubmit = (e) => {
    dispatch(passwordSubmit(e.target.value));
  };

  const handleLoginRequest = (e) => {
    e.preventDefault();
    dispatch(loginRequest());
    setTimeout(() => {
      dispatch(getUserInformation());
    }, 500);
  };

  return (
    <div className={classes.contentContainer}>
      {errorMsg === null ? (
        ""
      ) : errorMsg === false ? (
        history.push("/")
      ) : (
        <LoginError />
      )}
      <Container className={classes.loginContainer}>
        <form onSubmit={handleLoginRequest} className={classes.loginForm}>
          <Typography variant='h4'>Login</Typography>
          <FormGroup>
            <InputLabel className={classes.loginInputLabel}>Email</InputLabel>
            <InputBase
              type='email'
              id='inputBaseEmail'
              className={classes.loginFormGroup}
              onChange={handleEmailSubmit}
              placeholder='Enter your e-mail adress'
              value={email}
            />
          </FormGroup>
          <FormGroup>
            <InputLabel className={classes.loginInputLabel}>
              Password
            </InputLabel>
            <InputBase
              type='password'
              id='inputBasePassword'
              className={classes.loginFormGroup}
              onChange={handlePasswordSubmit}
              placeholder='Enter your password'
              value={password}
            />
          </FormGroup>
          <FormGroup>
            <Button
              type={"submit"}
              variant='outlined'
              className={classes.loginButton}
            >
              Log-In
            </Button>
          </FormGroup>
        </form>

        <Typography variant='h6' id='registerSubtitle'>
          <span id='regSubtitleSpan'> New to WISDOM bookstore?</span>
        </Typography>
        <Button variant='outlined' className={classes.newUserButton}>
          <Link to='/register' id='registerLink'>
            Create your WISDOM account
          </Link>
        </Button>
      </Container>
    </div>
  );
};

export default Login;
