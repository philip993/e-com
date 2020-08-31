import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
import "./RegisterStyles.scss";
// Redux Actions
import {
  setAddress,
  setCity,
  setContry,
  setPostalCode,
  setPhone,
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
} from "@material-ui/core";
// Simple React Validator
import SimpleReactValidator from "simple-react-validator";

const RegisterShippingInfo = () => {
  const { address, city, country, postalCode, phone } = useSelector(
    (state) => state.RegisterReducer
  );
  const dispatch = useDispatch();
  const classes = Styles();
  const validator = new SimpleReactValidator();

  const handlePhone = (e) => {
    dispatch(setPhone(e.target.value));
  };

  const handleAddressInput = (e) => {
    dispatch(setAddress(e.target.value));
  };

  const handleCityInput = (e) => {
    dispatch(setCity(e.target.value));
  };

  const handleCountryInput = (e) => {
    dispatch(setContry(e.target.value));
  };

  const handlePostalCode = (e) => {
    dispatch(setPostalCode(e.target.value));
  };
  // Steps
  const handleStepIncrement = () => {
    dispatch(stepIncrement());
  };

  return (
    <div>
      {validator.showMessages()}
      <Typography variant='h4'>Shipping Info</Typography>
      <FormGroup>
        <InputLabel className={classes.registerFormLabel}>Address</InputLabel>
        <InputBase
          type='text'
          id='regAddress'
          className={classes.registerFromGroup}
          onChange={handleAddressInput}
          placeholder='Enter your address'
          value={address}
        />
        <FormHelperText className={classes.registerHelperText}>
          {validator.message("address", address, "required|alpha_num_space")}
        </FormHelperText>
      </FormGroup>
      <FormGroup>
        <InputLabel className={classes.registerFormLabel}>City</InputLabel>
        <InputBase
          type='text'
          id='regCity'
          className={classes.registerFromGroup}
          onChange={handleCityInput}
          placeholder='Enter City..'
          value={city}
        />
        <FormHelperText className={classes.registerHelperText}>
          {validator.message("city", city, "required|alpha_space")}
        </FormHelperText>
      </FormGroup>
      <FormGroup>
        <InputLabel className={classes.registerFormLabel}>Country</InputLabel>
        <InputBase
          type='text'
          id='regCountry'
          className={classes.registerFromGroup}
          onChange={handleCountryInput}
          placeholder='Enter Country..'
          value={country}
        />
        <FormHelperText className={classes.registerHelperText}>
          {validator.message("country", country, "required|alpha_space")}
        </FormHelperText>
      </FormGroup>
      <FormGroup>
        <InputLabel className={classes.registerFormLabel}>
          Postal Code
        </InputLabel>
        <InputBase
          type='number'
          id='regPostalCode'
          className={classes.registerFromGroup}
          onChange={handlePostalCode}
          placeholder='Enter Postal Code..'
          value={postalCode}
        />
        <FormHelperText className={classes.registerHelperText}>
          {validator.message("postalCode", postalCode, "required|alpha_num")}
        </FormHelperText>
      </FormGroup>
      <FormGroup>
        <InputLabel className={classes.registerFormLabel}>Phone</InputLabel>
        <InputBase
          type='text'
          id='regPhone'
          className={classes.registerFromGroup}
          onChange={handlePhone}
          placeholder='Select your phone..'
          value={phone}
        />
      </FormGroup>
      <Button
        className={classes.nextStepButton}
        onClick={handleStepIncrement}
        disabled={!validator.allValid()}
      >
        Next
      </Button>
    </div>
  );
};

export default RegisterShippingInfo;
