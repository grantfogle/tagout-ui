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


export default function HarvestStatsTable({ harvestStats, showErrorLoading, showLoading}) {
    const { bulls, calves, cows, hunters, recDays, successPercent, total } = harvestStats
  
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
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '400px'}}>
          <Skeleton width={400} height={120} />
          <Skeleton width={400} height={120} />
          <Skeleton width={400} height={120} />
        </Box>
      )
    } else {
        return (
            <TableContainer component={Paper}>
                <Typography variant="h5" component="h5" sx={{marginLeft: '.5em', marginTop: '.5em'}}>Harvest Stats</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Bulls</TableCell>
                            <TableCell>Cows</TableCell>
                            <TableCell>Calves</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Hunters</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={'harvest-stats'}>
                            <TableCell>{bulls}</TableCell>
                            <TableCell>{cows}</TableCell>
                            <TableCell>{calves}</TableCell>
                            <TableCell>{total}</TableCell>
                            <TableCell>{hunters} ({successPercent + '%'})</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            )
        }
    }

  return (
    <Box sx={{maxWidth: '600px', marginBottom: '1em'}}>
        {displayDrawTable()}
    </Box>
  )
}