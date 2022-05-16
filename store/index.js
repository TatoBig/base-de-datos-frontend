import { configureStore } from '@reduxjs/toolkit'
import paletteReducer from './palette'
import loginReducer from './login'
import portReducer from './port'

export default configureStore({
  reducer: {
    palette: paletteReducer,
    login: loginReducer,
    port: portReducer
  }
})
