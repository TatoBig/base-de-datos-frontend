import { createSlice } from '@reduxjs/toolkit'

export const portSlice = createSlice({
  name: 'port',
  initialState: {
    port: '8080'
  },
  reducers: {
    changePort: (state, action) => {
      const {
        port
      } = action.payload
      state.port = port
    }
  }
})

export const { changePort } = portSlice.actions

export default portSlice.reducer
