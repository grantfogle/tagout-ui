import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../firebase'
import { getDatabase, ref, onValue} from "firebase/database"
import {coloradoOTC} from './assets/otcUnits'
import {getDrawStats} from './api/getDrawStats'

import { Box, Container } from '@mui/material'
import Navbar from './navbar/Navbar'
import Search from './search/Search'
import PopulationTable from './dataTables/populationTable/PopulationTable'
import HarvestStatsTable from './dataTables/harvestStatsTable/HarvestStatsTable'
import DrawOddsTable from './dataTables/drawOddsTable/DrawOddsTable'
import OtcDisplay from './otcDisplay/OtcDisplay'
import Footer from './footer/Footer'

const Dashboard = () => {
    const [state, setState] = useState('colorado')
    const [species, setSpecies] = useState('elk')
    const [huntUnit, setHuntUnit] = useState('1')
    const [seasonMethod, setSeasonMethod] = useState('O1R')
    const [isOtcUnit, setIsOtcUnit] = useState(false)

    const [searchStr, setSearchStr] = useState('EE001E1R')
    const [populationStats, setPopulationStats] = useState('')
    const [harvestStats, setHarvestStats] = useState('')

    const [drawStatsCode, setDrawStatsCode] = useState('EE001E1R')
    const [drawOdds, setDrawOdds] = useState('')
    const [drawOddsLoading, setDrawOddsLoading] = useState(false)
    const [drawOddsError, setDrawOddsError] = useState(false)

    const [popTableLoading, setPopTableLoading] = useState(false)
    const [popTableError, setPopTableError] = useState(false)

    const [harvestTableLoading, setHarvestTableLoading] = useState(false)
    const [harvestTableError, setHarvestTableError] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        fetchUnitStats()
        fetchDrawStats(state, species, drawStatsCode)
        fetchHarvestStats('11')
    }, [searchStr])

    const fetchDrawStats = async (state, species, huntCode) => {
        const dbSnap = getDatabase()
        const drawStatsRef = ref(dbSnap, `${state}1/${species}/drawStats/${huntCode}`)
        // check if unit is otc

        setDrawOdds([])
    
        onValue(drawStatsRef, (snapshot) => {
            const data = snapshot.val()
            if (data) {
                setDrawOdds(data)
                setDrawOddsLoading(false)
            } else {
                setDrawOddsLoading(false)
                // set there doesn't appear to be data for this unit, please try another unit
            }
        }, error => {
            setDrawOddsLoading(false)
            setDrawOddsError(false)
        })
    }

    const fetchSearchResults = async (searchTerm, selectedUnit, huntSeason, method, genderSeasonMethod) => {
        setHuntUnit(selectedUnit)
        const isOTC = checkIfOtcUnit(genderSeasonMethod, selectedUnit)

        if (!isOTC) {
            setIsOtcUnit(false)
            // const drawStatsSearch = await getDrawStats(null, null, searchTerm)
            // fetchDrawStats(searchTerm)
        } else {
            setIsOtcUnit(true)
        }
        // fetchUnitStats(selectedUnit)
        // fetchHarvestStats(huntSeason, method, selectedUnit)
    }

    const checkIfOtcUnit = (genderSeasonMethod, unit) => {
        const parseIntUnit = parseInt(unit)
        console.log(genderSeasonMethod)
        switch (genderSeasonMethod) {
            case 'EEO1A':
            case 'EMO1A':
                if (coloradoOTC['EEO1A'].includes(parseIntUnit)) {
                    return true
                }
                return false
                break
            case 'EFO1A':
                if (coloradoOTC[genderSeasonMethod].includes(parseIntUnit)) {
                    return true
                }
                return false
                break
            case 'EMO2R':
            case 'EMO3R':
                if (coloradoOTC['EMO2R'].includes(parseIntUnit)) {
                    return true
                }
                return false
                break
            default:
                return false
                break
        }
    } 

    const fetchUnitStats = async () => {
        setPopTableLoading(true)
        const dbSnap = getDatabase()
        const populationStatsRef = ref(dbSnap, `colorado1/${species}/populationStats/${huntUnit}`)
        setPopulationStats([])

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

    // const fetchDrawStats = async (searchTerm) => {
    //     setDrawOddsLoading(true)
    //     const dbSnap = getDatabase()
    //     const drawStatsRef = ref(dbSnap, 'colorado/drawStats/elk/' + searchTerm)
    
    //     onValue(drawStatsRef, (snapshot) => {
    //         const data = snapshot.val()
    //         if (data) {
    //             setDisplayStats(data)
    //             setDrawOddsLoading(false)
    //             setDrawOddsError(false)
    //         } else {
    //             setDrawOddsLoading(false)
    //             setDrawOddsError(true)
    //         }
    //     }, error => {
    //         setDrawOddsLoading(false)
    //         setDrawOddsError(true)
    //     })
    // }

    const fetchHarvestStats = async (unit) => {
        setHarvestTableLoading(true)
        const harvestUrl = `${state}1/${species}/harvestStats/${seasonMethod}/${unit}`

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

    const unitDrawOddsDisplay = (huntDisplayStats) => {
        if (isOtcUnit) {
            return (
                <OtcDisplay
                    isOtcUnit
                    unit={huntUnit}/>
            )
        }
        return (
        <DrawOddsTable 
            displayStats={huntDisplayStats}
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
                <Box sx={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
                    <PopulationTable 
                        sx={{ marginBottom: '1em', width: '480px'}}
                        populationStats={populationStats}
                        showLoading={popTableLoading}
                        showErrorLoading={popTableError}/>
                    <HarvestStatsTable 
                        sx={{ marginBottom: '1em'}}
                        harvestStats={harvestStats}
                        showLoading={harvestTableLoading}
                        showErrorLoading={harvestTableError}/>
                    {unitDrawOddsDisplay(drawOdds)}
                </Box>
            </Container>
            <Footer/>
        </Box>
    )
}

export default Dashboard