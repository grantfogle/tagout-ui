import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('5', 10, 20, 20, 20),
  createData('4', 10, 20, 20, 20),
  createData('3', 10, 20, 20, 20),
  createData('2', 10, 20, 20, 20),
  createData('1', 10, 20, 20, 20),
  createData('0', 10, 20, 20, 20),
];


// preference points on the y axis
// res non res, pre draw applicants, post draw success
// get all units
// calculate percent
// 0 points res 183

// function loadingState() {
//   return (
    // Ghost loader
//   )
// }

function emptyState() {
  return (
    <Typography>There's nothing here blood</Typography>
  )
}


export default function DrawOdds({searchResults}) {

  React.useEffect(() => {
    console.log(searchResults)
  }, [searchResults])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{width: '10%'}}>Preference Points</TableCell>
            <TableCell align="right">Res Applicant</TableCell>
            <TableCell align="right">Res Success</TableCell>
            <TableCell align="right">Non Res Applicant</TableCell>
            <TableCell align="right">Non Res Success</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}