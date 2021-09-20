import { createSlice } from '@reduxjs/toolkit'

export const paletteSlice = createSlice({
  name: 'palette',
  initialState: {
    secondaryColor: '#ED4245',
    primaryColor: '#FFE459',
    type: 'light'
  },
  reducers: {
    setPrimaryColor: (state, action) => {
      const {
        primaryColor
      } = action.payload
      state.primaryColor = primaryColor
    },
    setPalette: (state, action) => {
      const {
        secondaryColor,
        primaryColor,
        type
      } = action.payload
      state.secondaryColor = secondaryColor
      state.primaryColor = primaryColor
      state.type = type
    },
    setTheme: (state, action) => {
      const {
        theme
      } = action.payload
      state.type = theme
    }
  }
})

export const { setPrimaryColor, setPalette, setTheme } = paletteSlice.actions

export default paletteSlice.reducer
