import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function PopulationTable({ populationStats}) {
  
        //   <TableRow key={'first-choice-' + key}>
        //     <TableCell>{key}</TableCell>
        //     <TableCell>{resInfo.apps}</TableCell>
        //     <TableCell>{resInfo.success} ({getSuccessPercentage(resInfo.apps, resInfo.success)})</TableCell>
        //     <TableCell>{nonResInfo.apps}</TableCell>
        //     <TableCell>{nonResInfo.success} ({getSuccessPercentage(nonResInfo.apps, nonResInfo.success)})</TableCell>
        //   </TableRow>
  
//   const getSuccessPercentage = (applicants, success) => {
//     const successPercentage = (success / applicants) * 100;
//     return successPercentage ?  + successPercentage.toFixed(0) + '%' : '0%';
//   }

    const displayDrawTable = () => {
        if (showErrorLoading) {
            return (
                <Box>
                    <Typography variant="h2" component="h4" align="center" sx={{color: '#d35400', mt: 4}}>
                        Error loading data, please try again
                    </Typography>
                </Box>
            )
      // error text
    } else if (showLoading) {
      return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '800px'}}>
          <Skeleton width={800} height={200} />
          <Skeleton width={800} height={200} />
          <Skeleton width={800} height={200} />
        </Box>
      )
    } else {
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
                    {displaySecondChoiceRow()}
                    {displayThirdChoiceRow()}
                    {displayFourthChoiceRow()}
                    {displayFirstChoiceRows()}
                    </TableBody>
                </Table>
            </TableContainer>
        )
  }

  return (
    <Box>
      {displayDrawTable()}
    </Box>
  );
}