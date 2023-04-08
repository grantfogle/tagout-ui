import React from 'react'
import { Box, Container } from '@mui/material'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import PopulationTable from '../dataTables/populationTable/PopulationTable'
import HarvestStatsTable from '../dataTables/harvestStatsTable/HarvestStatsTable'
import DrawOddsTable from '../dataTables/drawOddsTable/DrawOddsTable'
import OtcDisplay from '../otcDisplay/OtcDisplay'
import Footer from '../footer/Footer'

export const MainDisplay = () => {

    const unitDrawOddsDisplay = () => {
        // if (isOtcUnit) {
        //     return (
        //         <OtcDisplay
        //             isOtcUnit
        //             unit={huntUnit}/>
        //     )
        // }
        return (
            <DrawOddsTable />
        )
    }
    // dribbble mock https://dribbble.com/search/table
    return (
        <Box sx={{ height: '100vh' }}>
            {/* <AppBar contains sign out and settings /> */}
            <Navbar />
            <Container maxWidth="lg" sx={{ marginBottom: '2em', minHeight: '800px'}}>
                {/* link to big game brochure: https://cpw.state.co.us/Documents/RulesRegs/Brochure/BigGame/biggame.pdf */}
                    <Search/>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
                        <PopulationTable sx={{ marginBottom: '1em', width: '480px'}}/>
                        <HarvestStatsTable sx={{ marginBottom: '1em'}}/>
                        {unitDrawOddsDisplay()}
                    </Box>

            </Container>
            <Footer/>
        </Box>
    )
}