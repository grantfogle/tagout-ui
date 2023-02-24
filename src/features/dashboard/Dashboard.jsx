import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../firebase'
import { getDatabase, ref, onValue} from "firebase/database"
import {coloradoOTC} from './assets/otcUnits';

import { Box, Container } from '@mui/material'
import Navbar from './navbar/Navbar'
import Search from './search/Search'
import PopulationTable from './dataTables/populationTable/PopulationTable'
import HarvestStatsTable from './dataTables/harvestStatsTable/HarvestStatsTable'
import DrawOddsTable from './dataTables/drawOddsTable/DrawOddsTable'
import OtcDisplay from './otcDisplay/OtcDisplay'
import Footer from './footer/Footer'

const Dashboard = () => {
    const [searchStr, setSearchStr] = useState('EE001E1R')
    const [displayStats, setDisplayStats] = useState('')
    const [populationStats, setPopulationStats] = useState('')
    const [harvestStats, setHarvestStats] = useState('')
    const [drawOddsLoading, setDrawOddsLoading] = useState(false)
    const [drawOddsError, setDrawOddsError] = useState(false)
    const [popTableLoading, setPopTableLoading] = useState(false)
    const [popTableError, setPopTableError] = useState(false)
    const [harvestTableLoading, setHarvestTableLoading] = useState(false)
    const [harvestTableError, setHarvestTableError] = useState(false)
    const [isOtcUnit, setIsOtcUnit] = useState(false)
    const [huntUnit, setHuntUnit] = useState('1')
    const navigate = useNavigate()

    useEffect(() => {
        fetchDrawStats(searchStr)
        fetchUnitStats('1')
        fetchHarvestStats('O1', 'R', '1')
    }, [searchStr])

    const fetchSearchResults = (searchTerm, selectedUnit, huntSeason, method, genderSeasonMethod) => {
        // check for otc units
        // pass otc search string
        // import coloradoOTCunits from otcUnits
        // if is OTC, return draw table is otc
        setHuntUnit(selectedUnit)
        const isOTC = checkIfOtcUnit(genderSeasonMethod, selectedUnit)
        console.log(isOTC)
        if (!isOTC) {
            console.log('HITTTT')
            fetchDrawStats(searchTerm)
        } else {
            console.log('bingooo')
            setIsOtcUnit(true)
        }
        fetchUnitStats(selectedUnit)
        fetchHarvestStats(huntSeason, method, selectedUnit)
    }

    const checkIfOtcUnit = (genderSeasonMethod, unit) => {
        console.log(genderSeasonMethod, unit)
        console.log(coloradoOTC[genderSeasonMethod]);
        switch (genderSeasonMethod) {
            case 'EE01A':
            case 'EM01A':
                console.log('inside switch case')
                console.log(coloradoOTC[genderSeasonMethod]);
                if (coloradoOTC[genderSeasonMethod].contains(unit)) {
                    console.log('hit check')
                    return true
                }
                return false
                break
            default:
                return false
                break
        }
    } 

    const fetchUnitStats = async (unit) => {
        setPopTableLoading(true)
        const dbSnap = getDatabase()
        const populationStatsRef = ref(dbSnap, 'colorado/populationStats/elk/' + unit)

        onValue(populationStatsRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                setPopulationStats(data)
                setPopTableLoading(false)
            } else {
                setPopTableLoading(false)
                setPopTableError(true)
            }
        }, error => {
            setPopTableLoading(false)
            setPopTableError(true)
        })
    }

    const fetchDrawStats = async (searchTerm) => {
        setDrawOddsLoading(true)

        const dbSnap = getDatabase()
        const drawStatsRef = ref(dbSnap, 'colorado/drawStats/elk/' + searchTerm)
    
        onValue(drawStatsRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                setDisplayStats(data)
                setDrawOddsLoading(false)
            } else {
                setDrawOddsLoading(false)
                setDrawOddsError(true)
            }
        }, error => {
            setDrawOddsLoading(false)
            setDrawOddsError(true)
        })
    }

    const fetchHarvestStats = async (huntSeason, method, unit) => {
        setHarvestTableLoading(true)
        const harvestUrl = `colorado/harvestStats/elk/${huntSeason}${method}/${unit}`

        const dbSnap = getDatabase()
        const drawStatsRef = ref(dbSnap, harvestUrl)
        
        onValue(drawStatsRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                setHarvestStats(data)
                setHarvestTableLoading(false)
            } else {
                setHarvestTableLoading(false)
                setHarvestTableError(true)
            }
        }, error => {
            setHarvestTableLoading(false)
            setHarvestTableError(true)
        })

    }

    const logoutUser = () => {
        const userAuthenticated = logout()
        if (!userAuthenticated) {
            navigate('/')
        }
    }

    const unitDrawOddsDisplay = () => {
        if (isOtcUnit) {
            return (
                <OtcDisplay
                    isOtcUnit
                    unit={huntUnit}/>
            )
        }
        return (
        <DrawOddsTable 
            displayStats={displayStats}
            showLoading={drawOddsLoading}
            showErrorLoading={drawOddsError}
            isOtcUnit/>
        )

    }

    // check auth state, if !user false then navigate back to home page
    // error handling
    // ghost loading
    // dribbble mock https://dribbble.com/search/table
    return (
        <Box sx={{ height: '100vh' }}>
            {/* <AppBar contains sign out and settings /> */}
            <Navbar logoutUser={logoutUser} />
            <Container maxWidth="lg" sx={{ marginBottom: '2em', minHeight: '800px'}}>
                {/* link to big game brochure: https://cpw.state.co.us/Documents/RulesRegs/Brochure/BigGame/biggame.pdf */}
                <Search fetchSearchResults={fetchSearchResults}/>
                <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <PopulationTable 
                        sx={{ marginBottom: '1em', width: '50%'}}
                        populationStats={populationStats}
                        showLoading={popTableLoading}
                        showErrorLoading={popTableError}/>
                    <HarvestStatsTable 
                        sx={{ marginBottom: '1em', width: '50%'}}
                        harvestStats={harvestStats}
                        showLoading={harvestTableLoading}
                        showErrorLoading={harvestTableError}/>
                    {unitDrawOddsDisplay()}
                </Box>
            </Container>
            <Footer/>
        </Box>
    )
}

export default Dashboard