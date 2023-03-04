import * as React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Skeleton,
    Box,
    Typography
} from '@mui/material'


export default function PopulationTable({ populationStats, showErrorLoading, showLoading}) {
    const {bullCowRatio, dau, dauUnits, populationEstimate} = populationStats
  
    const displayBullCowRatio = (bullRatio) =>  bullRatio ? bullRatio + '%' : 'N/A';

    const displayDauUnits = (allUnits) => {
        if (allUnits) {
            if (allUnits.length > 1) {
                return allUnits.join(', ')    
            }
            return allUnits
        }
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
          <Skeleton width={400} height={200} />
          <Skeleton width={400} height={200} />
          <Skeleton width={400} height={200} />
        </Box>
      )
    } else {
        return (
            <TableContainer component={Paper}>
                <Typography variant="h5" component="h5" sx={{marginLeft: '.5em', marginTop: '.5em'}}>Herd Population</Typography>
                <Table sx={{ maxWidth: 500 }} aria-label="simple table">
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
                            <TableCell>
                                {displayDauUnits(dauUnits)}
                            </TableCell>
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
    <Box sx={{width: '520px', marginBottom: '1em'}}>
        {displayDrawTable()}
    </Box>
  )
}