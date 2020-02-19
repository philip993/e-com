import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { EmailSubmit, PasswordSubmit, LoginFinish } from "./LoginActions";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Login = () => {
  const user = useSelector(state => state.LoginReducer);
  const dispatch = useDispatch();
  let history = useHistory();

  const handleEmailSubmit = e => {
    dispatch(EmailSubmit(e.target.value));
  };

  const handlePasswordSubmit = e => {
    dispatch(PasswordSubmit(e.target.value));
  };

  const handleLoginFinish = e => {
    e.preventDefault();
    dispatch(LoginFinish());
    history.push("/");
  };

  return (
    <div>
      <Form
        onSubmit={handleLoginFinish}
        style={{ width: "720px", margin: "auto", padding: "auto" }}
      >
        <Form.Label>Login Form</Form.Label>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={handleEmailSubmit}
            value={user.email}
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={handlePasswordSubmit}
            value={user.password}
          />
        </Form.Group>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
