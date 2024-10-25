import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';

import { configureStore } from '@reduxjs/toolkit';

import {
  rootPersistConfig,
  rootReducer,
} from './rootReducer';
import { TabsAPI } from '../components/services/TabsSlice';


// ----------------------------------------------------------------------

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(
      
      TabsAPI.middleware,
      
    ),
  devTools: true
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { dispatch, persistor, store, useDispatch, useSelector };
