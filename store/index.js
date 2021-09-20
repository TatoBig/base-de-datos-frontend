import { configureStore } from '@reduxjs/toolkit'
import paletteReducer from './palette'

export default configureStore({
  reducer: {
    palette: paletteReducer
  }
})
