import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"

import rootReducer from '../store/reducers/ui.reducer'

const persistConfig = {
    key: 'root',
    storage,
}

const reducer = combineReducers({ authstatus: rootReducer })
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: {
        UIStore: persistedReducer
    },
    middleware: [thunk]
});

let persistor = persistStore(store)

export {
    persistor
};
