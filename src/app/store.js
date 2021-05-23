import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import restaurantSlice from '../features/restaurant/restaurantSlice'
import userReducer from '../features/user/userSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    restaurant: restaurantSlice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})