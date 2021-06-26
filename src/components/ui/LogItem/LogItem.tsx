import React from 'react';
import { createStyles, makeStyles, TableCell, TableRow, Theme } from '@material-ui/core';
import { ILogItem } from '../../../interfaces';

/** Component interface */
interface IProps {
  logItem: ILogItem;
}

/** Component styles */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    info: {
      color: theme.palette.primary.main,
    },
    warning: {
      color: theme.palette.secondary.main,
    },
    error: {
      color: theme.palette.error.main
    },
    cell: {
      color: 'inherit',
    }
  }),
);

const LogItem: React.FC<IProps> = ({ logItem }) => {
  /** Styles */
  const classes = useStyles();

  return (
    <TableRow classes={{ root: classes[logItem.severity] }}>
      <TableCell className={classes.cell}>{logItem.datetime}</TableCell>
      <TableCell className={classes.cell}>{logItem.severity}</TableCell>
      <TableCell className={classes.cell}>{logItem.message}</TableCell>
    </TableRow>
  );
};

export default LogItem;
