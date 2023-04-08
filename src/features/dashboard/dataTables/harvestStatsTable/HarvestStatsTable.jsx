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
import { useContext } from 'react'
import { DashboardContext } from '../../components/DashboardContextProvider'


export default function HarvestStatsTable() {
    // const { bulls, calves, cows, hunters, recDays, successPercent, total } = harvestStats
    const {
        animal,
        harvestData,
        harvestDataLoading,
        harvestDataError
    } = useContext(DashboardContext)

    // let formattedHarvestData = {}

    // if (animal == 'elk') {
    //     const {bulls, calves, cows, hunters, recDays, successPercent, total } = harvestData
    //     formattedHarvestData = {
    //         males: bulls,
    //         calves,
    //         females: cows,
    //         hunters,
    //         recDays,
    //         successPercent,
    //         total
    //     }
    // } else {
    //     const {bucks, does, fawns, hunters, recDays, successPercent, total } = harvestData
    //     formattedHarvestData = {
    //         males: bucks,
    //         fawns,
    //         females: does,
    //         hunters,
    //         recDays,
    //         successPercent,
    //         total
    //     }
    // }
    // const otherData 
    /*
        TDL Before Launch
        Ghost Loading
        Error Message
    */

    const displayDrawTable = () => {
        if (harvestDataError) {
            return (
                <Box>
                    <Typography variant="h2" component="h4" align="center" sx={{color: '#d35400', mt: 4}}>
                        Error loading data, please try again
                    </Typography>
                </Box>
            )
    } else if (harvestDataLoading) {
      return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '400px'}}>
          <Skeleton width={400} height={120} />
          <Skeleton width={400} height={120} />
          <Skeleton width={400} height={120} />
        </Box>
      )
    } else if (harvestData) {
        return (
            <TableContainer>
                <Typography variant="h5" component="h5" sx={{marginLeft: '.5em', marginTop: '.5em'}}>Harvest Stats</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Males</TableCell>
                            <TableCell>Females</TableCell>
                            <TableCell>Calves</TableCell>
                            <TableCell>Total</TableCell>
                            <TableCell>Hunters</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={'harvest-stats'}>
                            <TableCell>{harvestData.bulls}</TableCell>
                            <TableCell>{harvestData.cows}</TableCell>
                            <TableCell>{(harvestData.calves ? harvestData.calves : harvestData.fawns)}</TableCell>
                            <TableCell>{harvestData.total} ({harvestData.successPercent + '%'})</TableCell>
                            <TableCell>{harvestData.hunters}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            )
        }
    }

  return (
    <Box sx={{maxWidth: '600px', marginBottom: '1em', boxShadow: 'none'}}>
        {displayDrawTable()}
    </Box>
  )
}