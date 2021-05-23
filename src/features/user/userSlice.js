import { createSlice } from '@reduxjs/toolkit'
let state = JSON.parse(localStorage.getItem('userInfo')) || {
  loggedIn: false,
  isLoading: false,
  accessToken: null,
  phoneNumber: null
}
export const userSlice = createSlice({
  name: 'user',
  initialState: state,
  reducers: {
    login: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loggedIn = true;
      state.accessToken = action.payload.data.access_token;

      localStorage.setItem('userInfo', JSON.stringify(state));
    },
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
    phoneNumber: (state, action) => {
      state.phoneNumber = action.payload.phone_number;
    }
  }
})

export const { login, loading, phoneNumber } = userSlice.actions

export const selectIsLoggedIn = state => state.user.loggedIn;
export const selectIsLoading = state => state.user.isLoading;
export const selectPhoneNumber = state => state.user.phoneNumber;

export default userSlice.reducer;

