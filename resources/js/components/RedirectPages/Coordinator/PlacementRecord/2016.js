import React, {useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Data2016() {
    const classes = useStyles();
    const [state, setState] = React.useState({
       record: [],
    });

    const fetchDetails = async () => {
        const res = await axios.get(`/placement2016`);
        if(res.data.status === 200){
            setState({record: res.data.record16});
        }
    }
  
  useEffect(()=>{
    fetchDetails();
  },[])
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Candidate Name</StyledTableCell>
            <StyledTableCell align="right">URN</StyledTableCell>
            <StyledTableCell align="right">Branch</StyledTableCell>
            <StyledTableCell align="right">Company Name</StyledTableCell>
            <StyledTableCell align="right">Package (LPA)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.record.map((record) => (
            <StyledTableRow key={record.urn}>
              <StyledTableCell component="th" scope="row">
                {record.candidateName}
              </StyledTableCell>
              <StyledTableCell align="right">{record.urn}</StyledTableCell>
              <StyledTableCell align="right">{record.branch}</StyledTableCell>
              <StyledTableCell align="right">{record.companyName}</StyledTableCell>
              <StyledTableCell align="right">{record.package}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}