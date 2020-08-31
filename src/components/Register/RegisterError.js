import React from 'react';
import { useDispatch } from 'react-redux';

// Styles
import Styles from '../Styles/Styles';
// React Router Dom
import { useHistory } from 'react-router-dom';

// Material Ui Components
import { Alert, AlertTitle } from '@material-ui/lab';
import { Button } from '@material-ui/core';
import { setErrorMsg, stepReset } from './RegisterActions';

const RegisterError = () => {
  const classes = Styles();
  const dispatch = useDispatch();
  const history = useHistory();

  const redirectToLogin = () => {
    dispatch(setErrorMsg());
    dispatch(stepReset());
    history.push('/register');
  };

  return (
    <div className={classes.registerError}>
      <Alert severity="error" className={classes.alertLogin}>
        <AlertTitle>ERROR</AlertTitle>
        Something went wrong... Please try again!
      </Alert>
      <Button onClick={redirectToLogin}>TRY AGAIN</Button>
    </div>
  );
};

export default RegisterError;
