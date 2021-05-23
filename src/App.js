import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login/Login';
import OrderPage from './pages/Order';
import RestaurantPage from './pages/Restaurant/Restaurant';
import OTP from "./pages/OTP/OTP";
import { selectIsLoggedIn, selectIsLoading } from './features/user/userSlice';
import { useSelector } from 'react-redux';
import './App.scss';
import ReactLoading from 'react-loading';

function App() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Router>
      <div>
        {
          isLoading && <div className="loading-parent">
            <ReactLoading />
          </div>
        }
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/otp">
            <OTP />
          </Route>
          <Route path="/restaurant/:id" render={(props) => (
            <RestaurantPage id={props.match.params.id} />
          )} >
          </Route>
          <PrivateRoute path="/order">
            <OrderPage />
          </PrivateRoute>
          <PrivateRoute path="/">
            <HomePage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: location }
          }}
          />
        )
      }
    />
  )
}

export default App;
