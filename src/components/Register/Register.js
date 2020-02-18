import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SetEmailAddress,
  SetPassword,
  PostRegistration,
  SetFirstName,
  SetLastName,
  SetUsername,
  SetCity,
  SetContry,
  SetAge
} from "./RegisterActions";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Register = () => {
  const user = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();
  let history = useHistory();

  const handleFirstNameInput = e => {
    dispatch(SetFirstName(e.target.value));
  };

  const handleLastNameInput = e => {
    dispatch(SetLastName(e.target.value));
  };

  const handleUsernameInput = e => {
    dispatch(SetUsername(e.target.value));
  };

  const handleAgeInput = e => {
    dispatch(SetAge(e.target.value));
  };

  const handleCityInput = e => {
    dispatch(SetCity(e.target.value));
  };

  const handleCountryInput = e => {
    dispatch(SetContry(e.target.value));
  };

  const handleUserEmail = e => {
    dispatch(SetEmailAddress(e.target.value));
  };

  const handleUserPassword = e => {
    dispatch(SetPassword(e.target.value));
  };

  const handleRegister = e => {
    e.preventDefault();
    dispatch(PostRegistration());
    history.push("/");
  };

  return (
    <div>
      <Form
        onSubmit={handleRegister}
        style={{ width: "720px", margin: "auto" }}
      >
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={handleUserEmail}
            value={user.email}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={handleUserPassword}
            value={user.password}
          />
        </Form.Group>
        <Form.Group controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>

        <Form.Group controlId='formBasicFirstName'>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='First Name'
            onChange={handleFirstNameInput}
            value={user.firstName}
          />
          <Form.Text className='text-muted'>....</Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicLastName'>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Last Name'
            onChange={handleLastNameInput}
            value={user.lastName}
          />
          <Form.Text className='text-muted'>....</Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicUsername'>
          <Form.Label>Usernames</Form.Label>
          <Form.Control
            type='text'
            placeholder='Username'
            onChange={handleUsernameInput}
            value={user.username}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicAge'>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type='number'
            placeholder='Age'
            onChange={handleAgeInput}
            value={user.age}
          />
          <Form.Text className='text-muted'>....</Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicCity'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='City'
            onChange={handleCityInput}
            value={user.city}
          />
          <Form.Text className='text-muted'>.....</Form.Text>
        </Form.Group>
        <Form.Group controlId='formBasicCity'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Country'
            onChange={handleCountryInput}
            value={user.country}
          />
          <Form.Text className='text-muted'>.....</Form.Text>
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Register;
