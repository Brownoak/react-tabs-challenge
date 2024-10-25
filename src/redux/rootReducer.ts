import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

import { apiSlice } from './apiSlice'; 
// Remove auth slices

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux',
  whitelist: [], 
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export { rootPersistConfig, rootReducer };
