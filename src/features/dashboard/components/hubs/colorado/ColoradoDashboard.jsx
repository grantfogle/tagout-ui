import React, { useContext } from 'react'
import {
    Box
} from '@mui/material'
import { DashboardContext } from '../../DashboardContextProvider'
import DrawOddsTable from './dataTables/drawOddsTable/DrawOddsTable'
import Search from './search/Search'
import PopulationTable from './dataTables/populationTable/PopulationTable'
import HarvestStatsTable from './dataTables/harvestStatsTable/HarvestStatsTable'
import OtcDisplay from './otcDisplay/OtcDisplay'

const ColoradoDashboard = () => {
    const {
        otcUnitStatus,
    } = useContext(DashboardContext)


    const unitDrawOddsDisplay = () => {
        if (otcUnitStatus) {
            return (
                <OtcDisplay />
            )
        }
        return (
            <DrawOddsTable />
        )
    }

    return (
        <Box>
            <Search />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                <PopulationTable sx={{ marginBottom: '1em', width: '480px' }} />
                <HarvestStatsTable sx={{ marginBottom: '1em' }} />
                {unitDrawOddsDisplay()}
            </Box>
        </Box>
    )
}

export default ColoradoDashboard