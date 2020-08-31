import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
import "./RegisterStyles.scss";
// Redux Actions
import {
  setFirstName,
  setLastName,
  setUsername,
  setAge,
  setGender,
  stepIncrement,
} from "./RegisterActions";
// Material Ui Components
import {
  FormGroup,
  InputBase,
  InputLabel,
  Button,
  Typography,
  FormHelperText,
  Select,
  MenuItem,
} from "@material-ui/core";
// Simple React Validator
import SimpleReactValidator from "simple-react-validator";

const RegisterPersonalInfo = () => {
  const { firstName, lastName, age, username, gender } = useSelector(
    (state) => state.RegisterReducer
  );
  const dispatch = useDispatch();
  const classes = Styles();
  const validator = new SimpleReactValidator();

  const handleFirstNameInput = (e) => {
    dispatch(setFirstName(e.target.value));
  };

  const handleLastNameInput = (e) => {
    dispatch(setLastName(e.target.value));
  };

  const handleUsernameInput = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const handleAgeInput = (e) => {
    dispatch(setAge(e.target.value));
  };

  const handleGenderSelection = (e) => {
    dispatch(setGender(e.target.value));
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
        <InputLabel className={classes.registerFormLabel}>
          First Name
        </InputLabel>
        <InputBase
          type='text'
          id='regFirstName'
          className={classes.registerFormGroup}
          onChange={handleFirstNameInput}
          placeholder='Enter you First Name'
          value={firstName}
        />
        <FormHelperText className={classes.registerHelperText}>
          {validator.message("firstName", firstName, "required|alpha")}
        </FormHelperText>
      </FormGroup>
      <FormGroup>
        <InputLabel className={classes.registerFormLabel}>Last Name</InputLabel>
        <InputBase
          type='text'
          id='regLastName'
          className={classes.registerFormGroup}
          onChange={handleLastNameInput}
          placeholder='Enter your Last Name'
          value={lastName}
        />
        <FormHelperText className={classes.registerHelperText}>
          {validator.message("lastName", lastName, "required|alpha")}
        </FormHelperText>
      </FormGroup>
      <FormGroup>
        <InputLabel className={classes.registerFormLabel}>Username</InputLabel>
        <InputBase
          type='text'
          id='regUsername'
          className={classes.registerFormGroup}
          onChange={handleUsernameInput}
          placeholder='Enter valid username'
          value={username}
        />
        <FormHelperText className={classes.registerHelperText}>
          {validator.message("username", username, "required|alpha")}
        </FormHelperText>
      </FormGroup>
      <FormGroup>
        <InputLabel className={classes.registerFormLabel}>Age</InputLabel>
        <InputBase
          type='number'
          id='regAge'
          className={classes.registerFormGroup}
          onChange={handleAgeInput}
          placeholder='Enter your age..'
          value={age}
        />
        <FormHelperText className={classes.registerHelperText}>
          {validator.message("age", age, "required|numeric")}
        </FormHelperText>
      </FormGroup>
      <FormGroup>
        <InputLabel className={classes.registerFormLabel}>Gender</InputLabel>
        <Select
          value={gender}
          onChange={handleGenderSelection}
          className={classes.registerFormGroup}
        >
          <MenuItem>Select gender...</MenuItem>
          <MenuItem value='Male'>Male</MenuItem>
          <MenuItem value='Female'>Female</MenuItem>
        </Select>
        <FormHelperText className={classes.registerHelperText}>
          {validator.message("gender", gender, "required|alpha")}
        </FormHelperText>
      </FormGroup>
      <FormGroup>
        <Button
          className={classes.nextStepButton}
          onClick={handleStepIncrement}
          disabled={!validator.allValid()}
        >
          Next
        </Button>
      </FormGroup>
    </div>
  );
};

export default RegisterPersonalInfo;
