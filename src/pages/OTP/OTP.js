import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { userActions } from '../../actions';
import { selectIsLoggedIn, login, loading, selectPhoneNumber } from '../../features/user/userSlice';
// style
import './otp.scss';

// import components 
import Logo from '../../components/Logo';
import OTPInput from '../../components/OTPInput/OTPInput';


export default function OTP() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const phoneNumber = useSelector(selectPhoneNumber);
  const dispatch = useDispatch();
  const [code, setCode] = useState();

  const loginClick = (e) => {
    e.preventDefault();
    //TODO: dispatch something to /login/otp to get an access token 
    dispatch(userActions.verify({ otp: code, phone_number: phoneNumber })).then(
      res => {
        dispatch(loading(false));
        dispatch(login(res));
      },
      // err => { loading = false }
    );

  }
  function setOTPCode(code) {
    setCode(code);
  }
  if (isLoggedIn)
    return <Redirect to={{ pathname: '/' }} />;

  return (
    <div className="otp-page secondary-bg" style={styles.container}>
      <Logo />

      <div className="hero-text mt-xl" style={styles.heroText}>
        <h2 style={styles.noMargin}>OTP Verification</h2>
      </div>

      <p className="mt-lg gray3-text">
        Please Enter the <strong>One Time Password</strong><br /> we sent to your mobile number
      </p>

      <form style={styles.form}>
        <OTPInput valueCallback={setOTPCode} />
        <button className="primary-bg white-text verify-btn" onClick={loginClick}>Verify</button>
      </form>

      <p className="mt-md gray-text">Didn't receive the OTP? <a href="/resend-otp" className="blue-text">Resend it</a></p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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
  }
}