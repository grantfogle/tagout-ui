import React, { useContext } from 'react'
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
import { DashboardContext } from '../../../../DashboardContextProvider'



export default function PopulationTable() {
    const { populationData, populationDataLoading, populationDataError, species } = useContext(DashboardContext)

    const displayMaleFemaleRatio = (ratio) => ratio ? ratio + '%' : 'N/A';

    const displayDauUnits = (allUnits) => {
        if (allUnits) {
            if (allUnits.length > 1) {
                return allUnits.join(', ')
            }
            return allUnits
        }
    }

    const displayDrawTable = () => {
        if (populationDataError) {
            return (
                <Box>
                    <Typography variant='h2' component='h4' align='center' sx={{ color: '#d35400', mt: 4 }}>
                        Error loading data, please try again
                    </Typography>
                </Box>
            )
        } else if (populationDataLoading) {
            return (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '800px' }}>
                    <Skeleton width={400} height={200} />
                    <Skeleton width={400} height={200} />
                    <Skeleton width={400} height={200} />
                </Box>
            )
        } else if (populationData) {
            return (
                <TableContainer>
                    <Typography variant='h5' component='h5' sx={{ marginLeft: '.5em', marginTop: '.5em' }}>Herd Population</Typography>
                    <Table sx={{ maxWidth: 500 }} aria-label='simple table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>DAU</TableCell>
                                <TableCell>DAU Units</TableCell>
                                <TableCell>Pop Estimate</TableCell>
                                <TableCell>{(species == 'elk' ? 'Bull/Cow' : 'Buck/Doe')} Ratio</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key={'population-stats-' + populationData.dau}>
                                <TableCell>{populationData.dau}</TableCell>
                                <TableCell>
                                    {displayDauUnits(populationData.dauUnits)}
                                </TableCell>
                                <TableCell>{populationData.populationEstimate}</TableCell>
                                <TableCell>{displayMaleFemaleRatio(populationData.maleFemaleRatio)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )
        }
    }

    return (
        <Box sx={{ width: '520px', marginBottom: '1em' }}>
            {displayDrawTable()}
        </Box>
    )
}