import { RootState } from '../index';

/**
 * Get data from Logs state
 * */
export const selectLogs = (state: RootState) => state.logs.collection;
export const selectLogsError = (state: RootState) => state.logs.error;
