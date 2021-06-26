/**
 * Store all the interface descriptions here
 */

/** Severity type */
export type TSeverity = 'info' | 'warning' | 'error';

/** Interface for stat item */
export interface IStatItem {
  status: TSeverity;
  value: number;
}

/** Statistics type */
export type TStatistics = Record<TSeverity, number>;

/** Interface for log item */
export interface ILogItem {
  datetime: string;
  severity: TSeverity;
  message: string;
}

/** Type for color prop of Typography component */
export type TTypographyColor = | 'initial'
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';
