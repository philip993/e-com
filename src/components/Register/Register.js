import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Styles
import Styles from "../Styles/Styles";
// React Components
import RegisterUserInfo from "./RegisterUserInfo";
// Material Ui Components
import { Container, Button, Step, Stepper, StepLabel } from "@material-ui/core";
// React Components
import RegisterPersonalInfo from "./RegisterPersonalInfo";
import RegisterShippingInfo from "./RegisterShippingInfo";
import RegisterConfirmation from "./RegisterConfirmation";

const Register = () => {
  const { step, activeStepper } = useSelector((state) => state.RegisterReducer);
  const dispatch = useDispatch();
  const classes = Styles();

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
          ""
        )}
      </Container>
      <div className={classes.registerStepperContainer}>
        <Stepper activeStep={activeStepper} alternativeLabel>
          <Step active={activeStepper === 0}>
            <StepLabel>User Information</StepLabel>{" "}
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
