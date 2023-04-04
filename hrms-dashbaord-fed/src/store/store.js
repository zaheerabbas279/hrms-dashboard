import { configureStore, combineReducers } from '@reduxjs/toolkit'
import uiReducer from './reducers/ui.reducer'
import storage from "redux-persist/lib/storage"
import { persistReducer } from 'redux-persist'
import thunk from "redux-thunk"

const combineReduer = combineReducers({
  UIStore: uiReducer
})

const persistConfig = {
  key: 'root',
  storage,
}

let persist = persistReducer(persistConfig, combineReduer)

export const store = configureStore({
  reducer: persist,
  middleware: [thunk]
})


