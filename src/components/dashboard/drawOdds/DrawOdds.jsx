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

function loadingState() {
  return (
    <Typography>LOADING...</Typography>
  )
}

function errorState() {
  return (
    <Typography>There's nothing here blood</Typography>
  )
}

function resultsTable(results) {
  console.log(results)
  const firstChoiceMap = results.firstChoice.map(firstStats => {
    console.log(firstStats)
    return (
      <TableRow>
        <TableCell>{'asdf'}</TableCell>
        <TableCell>{'asdf'}</TableCell>
        <TableCell>{'asdf'}</TableCell>
        <TableCell>{'adf'}</TableCell>
        <TableCell>{'aser'}</TableCell>
      </TableRow>
    )
  })
  return (
    <TableRow>
        <TableCell>{'asdf'}</TableCell>
        <TableCell>{'asdf'}</TableCell>
        <TableCell>{'asdf'}</TableCell>
        <TableCell>{'adf'}</TableCell>
        <TableCell>{'aser'}</TableCell>
      </TableRow>
  )
  }


function searchResultTable(results) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 375 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Preference Points</TableCell>
            <TableCell align="right">Res Applicant</TableCell>
            <TableCell align="right">Res Success</TableCell>
            <TableCell align="right">Non Res Applicant</TableCell>
            <TableCell align="right">Non Res Success</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultsTable(results)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default function DrawOdds({searchResults, loading, error}) {

  const displayResultsTable = () => {
    return loading ? loadingState() : (
      error ? 
        errorState() :
        searchResultTable(searchResults)
    )
  }

  return (
    displayResultsTable()
  );
}