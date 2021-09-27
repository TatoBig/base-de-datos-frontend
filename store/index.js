import { configureStore } from '@reduxjs/toolkit'
import paletteReducer from './palette'
import loginReducer from './login'

export default configureStore({
  reducer: {
    palette: paletteReducer,
    login: loginReducer
  }
})
