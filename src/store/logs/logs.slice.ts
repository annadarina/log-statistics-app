import { createSlice } from '@reduxjs/toolkit'
import { ILogItem } from '../../interfaces';

// A type for the slice state
interface ILogsState {
  collection: ILogItem[];
  error: boolean;
}

// Initial state using that type
const initialState: ILogsState = {
  collection: [],
  error: false,
}

export const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    getLogs: (state: ILogsState, { payload }) => {
      state.collection = payload;
    },
    getLogsError: (state: ILogsState) => {
      state.error = true;
    },
  },
})

export const { getLogs, getLogsError } = logsSlice.actions;

export const logsSliceReducer = logsSlice.reducer;
