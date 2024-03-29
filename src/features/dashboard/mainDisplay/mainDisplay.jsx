import React, { useContext } from 'react'
import { Box, Container } from '@mui/material'

import { DashboardContext } from '../components/DashboardContextProvider'
import Navbar from '../../../components/navBar/NavBar'
import Search from '../search/Search'
import PopulationTable from '../dataTables/populationTable/PopulationTable'
import HarvestStatsTable from '../dataTables/harvestStatsTable/HarvestStatsTable'
import DrawOddsTable from '../dataTables/drawOddsTable/DrawOddsTable'
import OtcDisplay from '../otcDisplay/OtcDisplay'
import Footer from '../footer/Footer'

export const MainDisplay = () => {
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
        <Box sx={{ height: '100vh' }}>
            <Navbar />
            <Container maxWidth="lg" sx={{ marginBottom: '2em', minHeight: '800px' }}>
                {/* link to big game brochure: https://cpw.state.co.us/Documents/RulesRegs/Brochure/BigGame/biggame.pdf */}
                <Search />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                    <PopulationTable sx={{ marginBottom: '1em', width: '480px' }} />
                    <HarvestStatsTable sx={{ marginBottom: '1em' }} />
                    {unitDrawOddsDisplay()}
                </Box>

            </Container>
            <Footer />
        </Box>
    )
}