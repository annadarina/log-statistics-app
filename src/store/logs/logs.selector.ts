import { RootState } from '../index';
import { createSelector } from 'reselect';
import { ILogItem } from '../../interfaces';

/**
 * Get data from Logs state
 * */
export const selectLogs = (state: RootState) => state.logs.collection;
export const selectLogsError = (state: RootState) => state.logs.error;

/** Select statistics info */
export const selectStatistics = createSelector(
  selectLogs,
  items => {
    return {
      info: items.filter((log: ILogItem) => log.severity === 'info').length,
      warning: items.filter((log: ILogItem) => log.severity === 'warning').length,
      error: items.filter((log: ILogItem) => log.severity === 'error').length
    }
  }
)
