import { configureStore } from '@reduxjs/toolkit'
import { logsSlice } from './logs/logs.slice';

/** App store */
export const store = configureStore({
  reducer: {
    logs: logsSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
