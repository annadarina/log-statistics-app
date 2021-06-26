import React from 'react';
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { ILogItem } from '../../../interfaces';
import LogItem from '../LogItem/LogItem';

/** Component interface */
interface IProps {
  logs: ILogItem[];
}

/** Component styles */
const useStyles = makeStyles({
  container: {
    maxHeight: '100%',
  },
});

const Logs: React.FC<IProps> = ({ logs }) => {
  /** Styles */
  const classes = useStyles();

  /** Markup for table rows */
  const rowsMarkup = logs.map((log: ILogItem, i: number) => <LogItem logItem={log} key={i}/>)

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Severity</TableCell>
            <TableCell>Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsMarkup}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Logs;
