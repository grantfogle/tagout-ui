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
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '800px'}}>
          <Skeleton width={500} height={200} />
          <Skeleton width={500} height={200} />
          <Skeleton width={500} height={200} />
        </Box>
      )
    } else {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Bulls</TableCell>
                            <TableCell>Cows</TableCell>
                            <TableCell>Calves</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Hunters</TableCell>
                            <TableCell>Success</TableCell>
                            <TableCell>Rec Days</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={'harvest-stats'}>
                            <TableCell>{bulls}</TableCell>
                            <TableCell>{cows}</TableCell>
                            <TableCell>{calves}</TableCell>
                            <TableCell>{total}</TableCell>
                            <TableCell>{hunters}</TableCell>
                            <TableCell>{successPercent + '%'}</TableCell>
                            <TableCell>{recDays}</TableCell>
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