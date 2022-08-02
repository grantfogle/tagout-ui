import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DrawOdds({ displayStats }) {
  const displayFirstChoiceRows = () => {
    const firstChoiceObj = displayStats.firstChoice;
    let objMap = [];
    if (firstChoiceObj) {
      for (let key in firstChoiceObj) {
        const resInfo = firstChoiceObj[key].res;
        const nonResInfo = firstChoiceObj[key].nonRes;
        objMap.push(
          <TableRow>
            <TableCell>{key}</TableCell>
            <TableCell>{resInfo.applications}</TableCell>
            <TableCell>{resInfo.success} ({getSuccessPercentage(resInfo.applications, resInfo.success)})</TableCell>
            <TableCell>{nonResInfo.applications}</TableCell>
            <TableCell>{nonResInfo.success} ({getSuccessPercentage(nonResInfo.applications, nonResInfo.success)})</TableCell>
          </TableRow>
        )
      }
      return objMap;
    }
  }

  const displaySecondChoiceRows = () => {
    const secondChoiceObj = displayStats.secondChoice;
    return (
      <TableRow>
        <TableCell>2nd Choice</TableCell>
        <TableCell>{secondChoiceObj.res.applications}</TableCell>
        <TableCell>{secondChoiceObj.res.success} ({getSuccessPercentage(secondChoiceObj.res.applications, secondChoiceObj.res.success)})</TableCell>
        <TableCell>{secondChoiceObj.nonRes.applications}</TableCell>
        <TableCell>{secondChoiceObj.nonRes.success} ({getSuccessPercentage(secondChoiceObj.nonRes.applications, secondChoiceObj.nonRes.success)})</TableCell>
      </TableRow>
    )
  }

  const getSuccessPercentage = (applicants, success) => {
    const successPercentage = (success / applicants) * 100;
    return successPercentage + '%';
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Preference Points</TableCell>
            <TableCell>Res Applicant</TableCell>
            <TableCell>Res Success</TableCell>
            <TableCell>Non Res Applicant</TableCell>
            <TableCell>Non Res Success</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayFirstChoiceRows()}
          {displaySecondChoiceRows()}
        </TableBody>
      </Table>
    </TableContainer>
  );
}