import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'address', label: 'Address', minWidth: 120 },
  { id: 'current', label: 'Current Rank', minWidth: 90 },

  { id: 'dr', label: 'Yesterday Rank', minWidth: 70 },
  { id: 'dc', label: 'Day Change', minWidth: 70 },
  { id: 'dtc', label: 'Token Change', minWidth: 70 },

  { id: 'wr', label: 'Last Week Rank', minWidth: 70 },
  { id: 'wc', label: 'Week Change', minWidth: 70 },
  { id: 'wtc', label: 'Token Change', minWidth: 70 },

  { id: 'mr', label: 'Last Month Rank', minWidth: 70 },
  { id: 'mc', label: 'Monthly Change', minWidth: 70 },
  { id: 'mtc', label: 'Token Change', minWidth: 70 },

  { id: 'qr', label: 'Last Quater Rank', minWidth: 70 },
  { id: 'qc', label: 'Quaterly Change', minWidth: 70 },
  { id: 'qtc', label: 'Token Change', minWidth: 70 },

];

function createData(name, code, population, size, density2) {
  const density = population / size;
  return { name, code, population, size, density, density2 };
}

const rows = [
  createData('India', 'IN', +2, 1, 3, 4),
  createData('India', 'IN', +2, 1, 3, 4),
  createData('India', 'IN', +2, 1, 3, 4),
  createData('India', 'IN', +2, 1, 3, 4),
  createData('India', 'IN', +2, 1, 3, 4),
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function ComparisonTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="comparisonTable" style={{margin:"0 auto", display:"flex", justifyContent:"center", marginLeft:"0", marginRight:"0", marginTop:"40px"}}>
        <Paper className={classes.root}>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                        );
                    })}
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </Paper>
    </div>
  );
}