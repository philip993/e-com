import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmailAddress,
  setPassword,
  postRegistration,
  setFirstName,
  setLastName,
  setUsername,
  setCity,
  setContry,
  setAge,
  setGender,
  setAddress,
  setPostalCode,
  setPhone
} from "./RegisterActions";
import { Form, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Register = () => {
  const user = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();
  let history = useHistory();

  const handleUserEmail = e => {
    dispatch(setEmailAddress(e.target.value));
  };

  const handleUserPassword = e => {
    dispatch(setPassword(e.target.value));
  };

  const handleFirstNameInput = e => {
    dispatch(setFirstName(e.target.value));
  };

  const handleLastNameInput = e => {
    dispatch(setLastName(e.target.value));
  };

  const handleUsernameInput = e => {
    dispatch(setUsername(e.target.value));
  };

  const handleAgeInput = e => {
    dispatch(setAge(e.target.value));
  };

  const handleGenderSelection = e => {
    dispatch(setGender(e.target.value));
  };

  const handlePhone = e => {
    dispatch(setPhone(e.target.value));
  };

  const handleAddressInput = e => {
    dispatch(setAddress(e.target.value));
  };

  const handleCityInput = e => {
    dispatch(setCity(e.target.value));
  };

  const handleCountryInput = e => {
    dispatch(setContry(e.target.value));
  };

  const handlePostalCode = e => {
    dispatch(setPostalCode(e.target.value));
  };

  const handleRegister = e => {
    e.preventDefault();
    dispatch(postRegistration());
    history.push("/");
  };

  return (
    <div>
      <Form
        onSubmit={handleRegister}
        style={{ width: "920px", margin: "auto", padding: "auto" }}
      >
        <Form.Row>
          <Form.Group as={Col} controlId='formGridEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              onChange={handleUserEmail}
              value={user.email}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Password'
              onChange={handleUserPassword}
              value={user.password}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId='formGridFirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='ex. John'
              onChange={handleFirstNameInput}
              value={user.firstName}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridLastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='ex. Marty'
              onChange={handleLastNameInput}
              value={user.lastName}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId='formGridUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              placeholder='ex. john2marty'
              type='text'
              onChange={handleUsernameInput}
              value={user.username}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridAge'>
            <Form.Label>Age</Form.Label>
            <Form.Control
              placeholder='ex. 24 years old'
              type='number'
              onChange={handleAgeInput}
              value={user.age}
            />
          </Form.Group>
          <Form.Group as={Col} controlId='formGridGender'>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              as='select'
              onChange={handleGenderSelection}
              value={user.gender}
            >
              <option>Choose...</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId='formGridPhone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              placeholder='ex. 00 232 978 5555'
              onChange={handlePhone}
              value={user.phone}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridAddress'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder='ex. 1st Street, 5-A'
              onChange={handleAddressInput}
              value={user.address}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId='formGridCity'>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='text'
              placeholder='ex. Washington'
              onChange={handleCityInput}
              value={user.city}
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridState'>
            <Form.Label>Country</Form.Label>
            <Form.Control
              placeholder='ex. US'
              onChange={handleCountryInput}
              value={user.country}
            ></Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId='formGridPostalCode'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              placeholder='ex. 90020'
              onChange={handlePostalCode}
              value={user.postalCode}
            ></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Button variant='primary' type='submit'>
            Register
          </Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default Register;
