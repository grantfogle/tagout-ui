import React, { useState, useEffect, useContext } from 'react'
import { getDatabase, ref, onValue} from "firebase/database"


import { DashboardContext } from '../components/DashboardContextProvider'

import { Box, Container } from '@mui/material'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import PopulationTable from '../dataTables/populationTable/PopulationTable'
import HarvestStatsTable from '../dataTables/harvestStatsTable/HarvestStatsTable'
import DrawOddsTable from '../dataTables/drawOddsTable/DrawOddsTable'
import OtcDisplay from '../otcDisplay/OtcDisplay'
import Footer from '../footer/Footer'

export const MainDisplay = () => {
    // const fetchDrawStats = async (state, species, huntCode) => {
    //     const dbSnap = getDatabase()
    //     const drawStatsRef = ref(dbSnap, `${state}1/${species}/drawStats/${huntCode}`)
    //     // check if unit is otc

    //     setDrawOdds([])
    
    //     onValue(drawStatsRef, (snapshot) => {
    //         const data = snapshot.val()
    //         if (data) {
    //             setDrawOdds(data)
    //             setDrawOddsLoading(false)
    //         } else {
    //             setDrawOddsLoading(false)
    //             // set there doesn't appear to be data for this unit, please try another unit
    //         }
    //     }, error => {
    //         setDrawOddsLoading(false)
    //         setDrawOddsError(false)
    //     })
    // }

    // const fetchSearchResults = async (searchTerm, selectedUnit, huntSeason, method, genderSeasonMethod) => {
    //     setHuntUnit(selectedUnit)
    //     const isOTC = isUnitOtc(species, genderSeasonMethod, selectedUnit)

    //     if (!isOTC) {
    //         setIsOtcUnit(false)
    //         // const drawStatsSearch = await getDrawStats(null, null, searchTerm)
    //         // fetchDrawStats(searchTerm)
    //     } else {
    //         setIsOtcUnit(true)
    //     }
    //     // fetchUnitStats(selectedUnit)
    //     // fetchHarvestStats(huntSeason, method, selectedUnit)
    // }

    // const fetchUnitStats = async () => {
    //     setPopTableLoading(true)
    //     const dbSnap = getDatabase()
    //     const populationStatsRef = ref(dbSnap, `colorado1/${species}/populationStats/${huntUnit}`)
    //     setPopulationStats([])

    //     onValue(populationStatsRef, (snapshot) => {
    //         const data = snapshot.val()
    //         if (data) {
    //             setPopulationStats(data)
    //             setPopTableLoading(false)
    //         } else {
    //             setPopTableLoading(false)
    //             setPopTableError(true)
    //         }
    //     }, error => {
    //         setPopTableLoading(false)
    //         setPopTableError(true)
    //     })
    // }

    // const fetchHarvestStats = async (unit) => {
    //     setHarvestTableLoading(true)
    //     const harvestUrl = `${state}1/${species}/harvestStats/${seasonMethod}/${unit}`

    //     const dbSnap = getDatabase()
    //     const drawStatsRef = ref(dbSnap, harvestUrl)
        
    //     onValue(drawStatsRef, (snapshot) => {
    //         const data = snapshot.val()
    //         if (data) {
    //             setHarvestStats(data)
    //             setHarvestTableLoading(false)
    //         } else {
    //             setHarvestTableLoading(false)
    //             setHarvestTableError(true)
    //         }
    //     }, error => {
    //         setHarvestTableLoading(false)
    //         setHarvestTableError(true)
    //     })

    // }

    // const unitDrawOddsDisplay = (huntDisplayStats) => {
    //     if (isOtcUnit) {
    //         return (
    //             <OtcDisplay
    //                 isOtcUnit
    //                 unit={huntUnit}/>
    //         )
    //     }
    //     return (
    //     <DrawOddsTable 
    //         displayStats={huntDisplayStats}
    //         showLoading={drawOddsLoading}
    //         showErrorLoading={drawOddsError}
    //         isOtcUnit/>
    //     )

    // }

    // check auth state, if !user false then navigate back to home page
    // error handling
    // ghost loading
    // dribbble mock https://dribbble.com/search/table
    return (
        <Box sx={{ height: '100vh' }}>
            {/* <AppBar contains sign out and settings /> */}
            <Navbar />
            <Container maxWidth="lg" sx={{ marginBottom: '2em', minHeight: '800px'}}>
                {/* link to big game brochure: https://cpw.state.co.us/Documents/RulesRegs/Brochure/BigGame/biggame.pdf */}
                    <Search/>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
                        {/* <PopulationTable sx={{ marginBottom: '1em', width: '480px'}}/> */}
                        {/* <HarvestStatsTable sx={{ marginBottom: '1em'}}/> */}
                        {/* {unitDrawOddsDisplay(drawOdds)} */}
                    </Box>

            </Container>
            <Footer/>
        </Box>
    )
}