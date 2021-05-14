import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { selectIsLoggedIn, login } from './../features/user/userSlice';

export default function Login(){
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const loginClick = () => dispatch(login());

  if(isLoggedIn)
    return <Redirect to={{ pathname: '/' }} />

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h2>Login Page</h2>
      <button onClick={loginClick}>Press me to login</button>
    </div>
  ); 
}