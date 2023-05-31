import * as React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Skeleton,
    Box,
    Typography
} from '@mui/material'
import { useContext } from 'react'
import { DashboardContext } from '../../../../DashboardContextProvider'

import { HARVEST_TABLE } from '../../../../../constants/constants';


export default function HarvestStatsTable() {
    const {
        species,
        harvestData,
        harvestDataLoading,
        harvestDataError
    } = useContext(DashboardContext)

    const displayDrawTable = () => {
        if (harvestDataError) {
            return (
                <Box>
                    <Typography variant="h2" component="h4" align="center" sx={{ color: '#d35400', mt: 4 }}>
                        Error loading data, please try again
                    </Typography>
                </Box>
            )
        } else if (harvestDataLoading) {
            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '400px' }}>
                    <Skeleton width={400} height={120} />
                    <Skeleton width={400} height={120} />
                    <Skeleton width={400} height={120} />
                </Box>
            )
        } else if (harvestData) {
            const tableHeaders = HARVEST_TABLE.headers
            const harvestDataMales = (harvestData.bulls ? harvestData.bulls : harvestData.bucks)
            const harvestDataFemales = (harvestData.cows ? harvestData.cows : harvestData.does)
            const harvestDataCalves = (harvestData.calves ? harvestData.calves : harvestData.fawns)

            return (
                <TableContainer>
                    <Typography variant="h5" component="h5" sx={{ marginLeft: '.5em', marginTop: '.5em' }}>Harvest Stats</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>{tableHeaders[species].males}</TableCell>
                                <TableCell>{tableHeaders[species].females}</TableCell>
                                <TableCell>{tableHeaders[species].young}</TableCell>
                                <TableCell>{tableHeaders.total}</TableCell>
                                <TableCell>{tableHeaders.hunters}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={'harvest-stats'}>
                                <TableCell>{harvestDataMales}</TableCell>
                                <TableCell>{harvestDataFemales}</TableCell>
                                <TableCell>{harvestDataCalves}</TableCell>
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
        <Box sx={{ maxWidth: '600px', marginBottom: '1em', boxShadow: 'none' }}>
            {displayDrawTable()}
        </Box>
    )
}