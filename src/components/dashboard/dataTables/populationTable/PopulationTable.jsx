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


export default function PopulationTable({ populationStats, showErrorLoading, showLoading}) {
    const {bullCowRatio, dau, dauUnits, populationEstimate} = populationStats;
  
    const displayBullCowRatio = (bullRatio) => {
        return bullRatio ? bullRatio + '%' : 'N/A';
    }

    const displayDrawTable = () => {
        if (showErrorLoading) {
            return (
                <Box>
                    <Typography variant="h2" component="h4" align="center" sx={{color: '#d35400', mt: 4}}>
                        Error loading data, please try again
                    </Typography>
                </Box>
            )
    } else if (showLoading) {
      return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '800px'}}>
          <Skeleton width={600} height={200} />
          <Skeleton width={600} height={200} />
          <Skeleton width={600} height={200} />
        </Box>
      )
    } else {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>DAU</TableCell>
                            <TableCell>DAU Units</TableCell>
                            <TableCell>Pop Estimate</TableCell>
                            <TableCell>Bull/Cow Ratio</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={'population-stats-' + dau}>
                            <TableCell>{dau}</TableCell>
                            <TableCell>{dauUnits}</TableCell>
                            <TableCell>{populationEstimate}</TableCell>
                            <TableCell>{displayBullCowRatio(bullCowRatio)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            )
        }
    }

  return (
    <Box sx={{width: '600px', marginBottom: '1em'}}>
      {displayDrawTable()}
    </Box>
  );
}