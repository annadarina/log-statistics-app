import { AppDispatch } from '../index';
import { fetchLogsList } from './logs.service';
import { getLogs, getLogsError } from './logs.slice';

/**
 * Asynchronous thunk for logs list
 * */
export function getLogsList(size: number) {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetchLogsList(size);
      dispatch(getLogs(response))

    } catch (error) {
      dispatch(getLogsError());
    }
  }
}
