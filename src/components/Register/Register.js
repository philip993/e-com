import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TypeEmailAddress,
  TypePassword,
  PostRegistration
} from "./RegisterActions";

const Register = () => {
  const user = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();

  const handleUserEmail = e => {
    dispatch(TypeEmailAddress(e.target.value));
  };

  const handleUserPasswrod = e => {
    dispatch(TypePassword(e.target.value));
  };

  const handleRegister = e => {
    e.preventDefault();
    dispatch(PostRegistration());
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleRegister}>
        <input
          type='text'
          placeholder='email'
          value={user.email}
          onChange={handleUserEmail}
        />
        <input
          type='password'
          placeholder='password'
          value={user.password}
          onChange={handleUserPasswrod}
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
