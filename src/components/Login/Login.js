import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Import scss
import Style from "../Styles/Styles";
import "./LoginStyle.scss";
// Redux Actions
import { emailSubmit, passwordSubmit, loginFinish } from "./LoginActions";
import { getUserInformation } from "../User/UserActions";
// Import React-router-dom
import { Link, useHistory } from "react-router-dom";

// Material ui Components
import { Button, FormGroup, Input, Container } from "@material-ui/core";

const Login = () => {
  const user = useSelector((state) => state.LoginReducer);
  const dispatch = useDispatch();
  let history = useHistory();

  const handleEmailSubmit = (e) => {
    dispatch(emailSubmit(e.target.value));
  };

  const handlePasswordSubmit = (e) => {
    dispatch(passwordSubmit(e.target.value));
  };

  const handleLoginFinish = (e) => {
    e.preventDefault();
    dispatch(loginFinish());
    history.push("/");
    dispatch(getUserInformation());
  };

  return (
    <div className='login'>
      <Container>
        <form onSubmit={handleLoginFinish} className='loginForm'>
          <h3>Login</h3>
          <FormGroup className='loginFormGroup'>
            <h6>Email</h6>
            <Input
              type='email'
              className='loginFormInput'
              onChange={handleEmailSubmit}
              placeholder='Enter your e-mail adress'
              value={user.email}
            />
          </FormGroup>
          <FormGroup className='loginFormGroup'>
            <h6>Password</h6>
            <Input
              type='password'
              className='loginFormInput'
              onChange={handlePasswordSubmit}
              placeholder='Enter your password'
              value={user.password}
            />
          </FormGroup>
          <FormGroup className='loginFormGroup'>
            <Button
              type={"submit"}
              variant='outlined'
              color='secondary'
              className='loginFormButton'
            >
              Log-In
            </Button>
          </FormGroup>
        </form>
        <div className='loginExtention'>
          <h6>New to WISDOM bookstore?</h6>
          <Button variant='outlined' className='loginExtentionButton'>
            <Link to='/register'>Create your WISDOM account</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
