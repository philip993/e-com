import React from 'react';
import { useDispatch } from 'react-redux';

// Styles
import Styles from '../Styles/Styles';
// React Router Dom
import { Link, useHistory } from 'react-router-dom';
// Redux Actions
import { setErrorMsg, stepReset } from './RegisterActions';
// Material Ui Components
import { Alert, AlertTitle } from '@material-ui/lab';
import { Button } from '@material-ui/core';

const RegisterSuccess = () => {
  const classes = Styles();
  const dispatch = useDispatch();
  const history = useHistory();

  const redirectToLogin = () => {
    dispatch(setErrorMsg());
    dispatch(stepReset());
    history.push('/login');
  };

  return (
    <div className={classes.registerSuccess}>
      <Alert severity="success" className={classes.alertLogin}>
        <AlertTitle>SUCCESS</AlertTitle>
        Congratulations! You have successfully created an account. Shortly after
        you will be redirected to Log-In page.
      </Alert>
      <Button onClick={redirectToLogin}>LOGIN</Button>
    </div>
  );
};

export default RegisterSuccess;
