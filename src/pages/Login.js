import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { selectIsLoggedIn, login } from './../features/user/userSlice';
import logo from './../assets/images/logo.png';
import googleLogo from './../assets/images/logo-google.png';
import facebookLogo from './../assets/images/logo-facebook.png';
import { useHistory } from 'react-router-dom';

export default function Login(){
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const history = useHistory();
  const [mobileNumber, setMobileNumber] = useState("");

  const loginClick = () => {
    //TODO: dispatch something to /login to ask for an OTP
    history.push('/otp');
  };

  const doNothing = () => {};

  if(isLoggedIn)
    return <Redirect to={{ pathname: '/' }} />;

  return (
    <div style={styles.container}>
      <img src={logo} alt="logo" width="60" />
      
      <div className="hero-text" style={styles.heroText}>
        <h2 style={styles.noMargin}>Your Meal.</h2>
        <h2 style={styles.noMargin}>Fresh and Tasty.</h2>
      </div>
      
      <form style={styles.form}>
        <input value={mobileNumber} onChange={e => setMobileNumber(e.target.value)}/>
        <button onClick={loginClick}>Free Sign Up</button>
      </form>
      
      <p>Did you forgot your password? <a href="/reset">Reset Password</a></p>

      <p>OR</p>

      <div style={styles.thirdPartyLoginContainer}>
        <button onClick={doNothing} style={styles.button}>
          <img src={facebookLogo} width="30"/> Continue with Facebook
        </button>
        <button onClick={doNothing} style={styles.button}>
          <img src={googleLogo} width="30" /> Continue with Google
        </button>
      </div>
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
  },
  thirdPartyLoginContainer: {
    display: 'flex', 
    flexDirection: 'column'
  },
  button: {
    display: 'flex', 
    alignItems: 'center'
  }
}