import React, { useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Logs from '../../ui/Logs';
import Statistics from '../../ui/Statistics';
import { useDispatch, useSelector } from 'react-redux';
import { selectLogs, selectLogsError } from '../../../store/logs/logs.selector';
import { getLogsList } from '../../../store/logs/logs.effects';
import { ILogItem, TStatistics } from '../../../interfaces';

/** Component styles */
const useStyles = makeStyles({
  contentWrapper: {
    flex: '1 0 auto',
    maxHeight: 'calc(100% - 80px)',
    padding: '16px',
    borderRadius: '16px',
    backgroundColor: '#fff',
    boxShadow: '0px 5px 8px #d0d3e6',
    overflow: 'auto',
  },
});

const Home: React.FC = () => {
  /** Styles */
  const classes = useStyles();

  /** Statistics hook */
  const [statistics, setStatistics] = useState<TStatistics>({ error: 0, info: 0, warning: 0 });

  /** Logs from state */
  const logs = useSelector(selectLogs);
  /** Error */
  const error = useSelector(selectLogsError);
  /** Dispatch */
  const dispatch = useDispatch();

  /** Fetching list of logs with 1 sec interval */
  useEffect(() => {
    let size = 0;
    const fetchInterval = 500;

    const interval = setInterval(() => {
      dispatch(getLogsList(size++));
    }, fetchInterval);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  /** Update statistics */
  useEffect(() => {
    if (logs.length) {
      setStatistics({
        info: logs.filter((log: ILogItem) => log.severity === 'info').length,
        warning: logs.filter((log: ILogItem) => log.severity === 'warning').length,
        error: logs.filter((log: ILogItem) => log.severity === 'error').length
      });
    }
  }, [logs]);

  /** Logs table */
  const logsMarkup = logs.length ? <Logs logs={logs}/> : 'loading...'

  return (
    <>
      <Statistics statistics={statistics}/>
      <Grid className={classes.contentWrapper}>
        {!error ? logsMarkup : 'Oops, something happened at our side. Please retry later...'}
      </Grid>
    </>
  );
};

export default Home;