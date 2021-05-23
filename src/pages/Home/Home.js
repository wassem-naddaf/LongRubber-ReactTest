import React, { useEffect } from 'react';
import RestaurantCard from '../../components/RestaurantCard';
import Logo from '../../components/Logo';
import './home.scss';
import { restaurantActions } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurants, selectRestaurants } from '../../features/restaurant/restaurantSlice';
import { loading } from '../../features/user/userSlice';

export default function Home() {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurants);
  useEffect(() => {
    dispatch(restaurantActions.getAll()).then(res => {dispatch(loading(false));dispatch(getRestaurants(res))})
  }, []);

  return (
    <div className="home-page secondary-bg py-xl" style={styles.container}>
      <Logo />
      <h2>Best classic Dubai restaurants</h2>

      <div className="grid-restaurants">
        {restaurants.map(restaurant =>
          <div className="column" style={styles.column}>
            <RestaurantCard data={restaurant} />
          </div>
        )}
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
  column: {
    width: 300,
    marginTop: 25,
  }
}