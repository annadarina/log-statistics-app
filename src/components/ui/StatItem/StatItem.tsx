import React from 'react';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import { IStatItem, TSeverity, TTypographyColor } from '../../../interfaces';

/** Component interface */
interface IProps {
  statItem: IStatItem;
}

/** Component styles */
const useStyles = makeStyles({
  paper: {
    padding: '8px 16px',
    borderRadius: '16px',
    backgroundColor: '#fff',
    boxShadow: '0px 5px 8px #d0d3e6',
    fontWeight: 600,
  },
  title: {
    textTransform: 'capitalize',
  },
  value: {
    fontWeight: 600,
  }
});

/** Color map for each status */
const colorMap: Record<TSeverity, TTypographyColor> = {
  info: 'primary',
  warning: 'secondary',
  error: 'error',
}

const StatItem: React.FC<IProps> = ({ statItem }) => {
  /** Styles */
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h6">{statItem.status}</Typography>
      <Typography color={colorMap[statItem.status]} className={classes.value} variant="h5"
                  component="span">{statItem.value}</Typography>
    </Paper>
  );
};

export default StatItem;
