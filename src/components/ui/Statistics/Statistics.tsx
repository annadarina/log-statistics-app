import React from 'react';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import StatItem from '../StatItem';
import { TStatistics } from '../../../interfaces';

/** Component interface */
interface IProps {
  statistics: TStatistics;
}

/** Component styles */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerWrapper: {
      display: 'flex',
      alignItems: 'center',
      margin: '0 -8px 24px -8px',
      marginBottom: 24,
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        margin: '0 0 24px 0',
      },
    },
    column: {
      flex: '0 0 33.333%',
      width: '100%',
      padding: '0 8px',
      [theme.breakpoints.down('sm')]: {
        flex: '0 0 100%',
        padding: 0,
        '&:not(:last-child)': {
          marginBottom: 16
        }
      },
    },
  }),
);

const Statistics: React.FC<IProps> = ({ statistics }) => {
  const { info, warning, error } = statistics;

  /** Styles */
  const classes = useStyles();

  return (
    <Grid className={classes.headerWrapper}>
      <Grid className={classes.column}>
        <StatItem statItem={{ status: 'info', value: info }}/>
      </Grid>
      <Grid className={classes.column}>
        <StatItem statItem={{ status: 'warning', value: warning }}/>
      </Grid>
      <Grid className={classes.column}>
        <StatItem statItem={{ status: 'error', value: error }}/>
      </Grid>
    </Grid>
  );
};

export default Statistics;
