import { ILogItem } from '../../interfaces';

/**
 * Fetch logs list
 * @param size {number} - the amount of log items we get per one request
 */
export const fetchLogsList = async (size: number): Promise<ILogItem[]> => {
  const response = await fetch('/api/data.json');
  if (!response.ok) {
    throw new Error('Error occurred.');
  }

  const logs = await response.json();

  return logs.slice(0, size);
}
