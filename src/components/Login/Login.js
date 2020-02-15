import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { EmailSubmit, PasswordSubmit, LoginFinish } from "./LoginActions";

const Login = () => {
  const user = useSelector(state => state.LoginReducer);
  const dispatch = useDispatch();

  const handleEmailSubmit = e => {
    dispatch(EmailSubmit(e.target.value));
  };

  const handlePasswordSubmit = e => {
    dispatch(PasswordSubmit(e.target.value));
  };

  const handleLoginFinish = e => {
    e.preventDefault();
    dispatch(LoginFinish());
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleLoginFinish}>
        <input
          type='text'
          onChange={handleEmailSubmit}
          value={user.email}
          placeholder='e-mail'
        />
        <input
          type='password'
          onChange={handlePasswordSubmit}
          value={user.password}
          placeholder='password'
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
