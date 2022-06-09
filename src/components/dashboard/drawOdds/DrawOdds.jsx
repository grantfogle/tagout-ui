import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function loadingState() {
  return (
    <Typography>LOADING...</Typography>
  )
}

function errorState() {
  return (
    <Typography>There's nothing here blud</Typography>
  )
}

function secondChoiceRow(secondChoice) {
  if (secondChoice) {  
    return (
      <TableRow>
        <TableCell>2nd Choice</TableCell>
        <TableCell>{secondChoice.resident.success}</TableCell>
        <TableCell>{secondChoice.resident.applications}</TableCell>
        <TableCell>{secondChoice.nonResident.success}</TableCell>
        <TableCell>{secondChoice.resident.applications}</TableCell>
      </TableRow>
    )

  }
}

function resultsTable(results) {
  const firstChoiceMap = results.firstChoice.map((firstStats, index) => {
    return (
      <TableRow key={index + 'firstStats'}>
        <TableCell>{index}</TableCell>
        <TableCell>{firstStats.resident.success}</TableCell>
        <TableCell>{firstStats.resident.applications}</TableCell>
        <TableCell>{firstStats.nonResident.success}</TableCell>
        <TableCell>{firstStats.resident.applications}</TableCell>
      </TableRow>
    )
  })

  return firstChoiceMap;
}

function searchResultTable(results) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 375 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Preference Pts/Choice</TableCell>
            <TableCell align="right">Res Applicant</TableCell>
            <TableCell align="right">Res Success</TableCell>
            <TableCell align="right">Non Res Applicant</TableCell>
            <TableCell align="right">Non Res Success</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultsTable(results)}
          {secondChoiceRow(results.secondChoice)}
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
    <Box>
      {displayResultsTable()}
    </Box>
  );
}