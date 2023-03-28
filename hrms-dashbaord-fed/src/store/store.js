import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './reducers/ui.reducer'

export const store = configureStore({
  reducer: {
    UIStore : uiReducer
  },
})
