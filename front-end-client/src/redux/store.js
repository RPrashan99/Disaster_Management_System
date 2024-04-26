import { configureStore,combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import { persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user:userReducer,
});

const persistConfig={
  key:'root',
  storage,
  version:1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // Instead of adding lot of reducer we can add the persistReducer
  middleware: (getDefaultMiddleware) => getDefaultMiddleware( {serializableCheck: false}), // This is to remove the warning
})

export const persistor = persistStore(store);