import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { selectIsLoggedIn, login, loading } from '../../features/user/userSlice';
import { useHistory } from 'react-router-dom';
import { userActions } from '../../actions';

// components
import Logo from '../../components/Logo';
import ThirdPartySign from '../../components/ThirdPartySign';

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import './login.scss';


export default function Login() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const history = useHistory();
  const [mobileNumber, setMobileNumber] = useState("");
  const dispatch = useDispatch();

  const loginClick = (e) => {
    e.preventDefault();
    // TODO: dispatch something to /login to ask for an OTP
    dispatch(userActions.login({ phone_number: mobileNumber })).then(
      res => {
        dispatch(loading(false));
        history.push('/otp')
      },
    );

    // history.push('/otp');
  };

  if (isLoggedIn)
    return <Redirect to={{ pathname: '/' }} />;

  return (
    <div className="login-page secondary-bg" style={styles.container}>

      <Logo />

      <div className="hero-text mt-lg" style={styles.heroText}>
        <h2 style={styles.noMargin}>Your Meal.</h2>
        <h2 style={styles.noMargin}>Fresh and Tasty.</h2>
      </div>

      <form style={styles.form}>
        <PhoneInput
          country="US"
          placeholder="Mobile number"
          value={mobileNumber}
          onChange={setMobileNumber}
        />
        <button className="login-btn primary-bg white-text" onClick={loginClick}>Sign up free
        </button>
      </form>

      <p className="gray-text mt-md">Already have account? <a href="/reset" className="blue-text">Login</a></p>

      <p className="my-md">OR</p>

      <ThirdPartySign />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroText: {
    textAlign: 'center'
  },
  noMargin: {
    margin: 0
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },

}