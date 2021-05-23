import { createSlice } from '@reduxjs/toolkit'

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        restaurants: [],
        restaurant: {},
    },
    reducers: {
        getRestaurants: (state, action) => {
            state.restaurants = action.payload.data;
        },
        getRestaurant: (state, action) => {
            state.restaurant = action.payload.data;
        }
    }
})

export const { getRestaurants, getRestaurant } = restaurantSlice.actions

export const selectRestaurants = state => state.restaurant.restaurants;
export const selectRestaurant = state => state.restaurant.restaurant;

export default restaurantSlice.reducer;

