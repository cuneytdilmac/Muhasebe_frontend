import { configureStore } from '@reduxjs/toolkit';
import clientReducer from '../../slices/clientSlice';
import logReducer from '../../slices/logSlice';
import offerReducer from '../../slices/offerSlice';

export const store = configureStore({
  reducer: {
    clients: clientReducer,
    logs: logReducer,
    offers:offerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch