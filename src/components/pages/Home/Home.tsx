import React, { useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Logs from '../../ui/Logs';
import Statistics from '../../ui/Statistics';
import { useDispatch, useSelector } from 'react-redux';
import { selectLogs, selectLogsError, selectStatistics } from '../../../store/logs/logs.selector';
import { getLogsList } from '../../../store/logs/logs.effects';

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

  /** Logs from state */
  const logs = useSelector(selectLogs);
  /** Statistics selector */
  const statistics = useSelector(selectStatistics);
  /** Error */
  const error = useSelector(selectLogsError);
  /** Dispatch */
  const dispatch = useDispatch();

  /** Fetching list of logs with 1 sec interval */
  useEffect(() => {
    let size = 1;
    const fetchInterval = 1000;

    const interval = setInterval(() => {
      dispatch(getLogsList(size++));
    }, fetchInterval);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  /** Logs table */
  const logsMarkup = logs.length ? <Logs logs={logs}/> : 'loading...'

  console.log(123)

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
