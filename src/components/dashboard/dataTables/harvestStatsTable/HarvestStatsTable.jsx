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


export default function HarvestStatsTable({ showErrorLoading, showLoading}) {
    // const {bullCowRatio, dau, dauUnits, populationEstimate} = harvestStats
  
    /*
        TDL Before Launch
        Ghost Loading
        Error Message
    */

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
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Bulls</TableCell>
                            <TableCell>Cows</TableCell>
                            <TableCell>Calves</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Hunters</TableCell>
                            <TableCell>Success Percentage</TableCell>
                            <TableCell>Total Rec Days</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={'harvest-stats'}>
                            <TableCell>20</TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>0</TableCell>
                            <TableCell>25</TableCell>
                            <TableCell>100</TableCell>
                            <TableCell>12%</TableCell>
                            <TableCell>1000</TableCell>
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
  )
}