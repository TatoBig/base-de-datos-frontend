import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    logged: false,
    username: ''
  },
  reducers: {
    login: (state, action) => {
      const {
        status,
        username
      } = action.payload
      state.logged = status
      state.username = username
    }
  }
})

export const { login } = loginSlice.actions

export default loginSlice.reducer
