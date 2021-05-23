import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { restaurantActions } from '../../actions';
import './restaurant.scss';
import { loading } from '../../features/user/userSlice';

// components
import Head from '../../components/RestaurantHead/RestaurantHead';
import Cover from '../../components/RestaurantCover/RestaurantCover';
import Menu from '../../components/RestaurantMenu/RestaurantMenu';
import { getRestaurant, selectRestaurant } from '../../features/restaurant/restaurantSlice';
export default function Restaurant(props) {
    const dispatch = useDispatch();
    const restaurant = useSelector(selectRestaurant);
    useEffect(() => {
        dispatch(restaurantActions.get(props.id)).then(res => {dispatch(loading(false));dispatch(getRestaurant(res))})
    }, []);
    function RestaurantMenu(props) {
        const hasItems = props.data.length > 0;
        return (hasItems) ? <Menu data={props.data} /> : '';
    }
    return (
        <div className="restaurant-page secondary-bg py-xl" >
            <Head />
            <Cover data={restaurant} />
            <RestaurantMenu data={restaurant} />
        </div>
    );
}
