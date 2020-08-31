import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styles
import Styles from '../Styles/Styles';
// React Router Dom
import { useHistory } from 'react-router-dom';
// React Components
import RegisterUserInfo from './RegisterUserInfo';
// Material Ui Components
import { Container, Button, Step, Stepper, StepLabel } from '@material-ui/core';
// React Components
import RegisterPersonalInfo from './RegisterPersonalInfo';
import RegisterShippingInfo from './RegisterShippingInfo';
import RegisterConfirmation from './RegisterConfirmation';
import RegisterError from './RegisterError';
import RegisterSuccess from './RegisterSuccess';

const Register = () => {
  const { step, activeStepper, errorMsg } = useSelector(
    (state) => state.RegisterReducer
  );
  const dispatch = useDispatch();
  const classes = Styles();
  const history = useHistory();

  return (
    <div className={classes.contentContainer}>
      <Container className={classes.registerContainer}>
        {step === 1 ? (
          <RegisterUserInfo />
        ) : step === 2 ? (
          <RegisterPersonalInfo />
        ) : step === 3 ? (
          <RegisterShippingInfo />
        ) : step === 4 ? (
          <RegisterConfirmation />
        ) : (
          ''
        )}
      </Container>

      {errorMsg === null
        ? ''
        : errorMsg === false
        ? history.push('/registersuccess')
        : history.push('/registererror')}

      <div className={classes.registerStepperContainer}>
        <Stepper activeStep={activeStepper} alternativeLabel>
          <Step active={activeStepper === 0}>
            <StepLabel>User Information</StepLabel>{' '}
          </Step>
          <Step>
            <StepLabel>Personal Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Shipping Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Finish Registration</StepLabel>
          </Step>
        </Stepper>
      </div>
    </div>
  );
};

export default Register;
