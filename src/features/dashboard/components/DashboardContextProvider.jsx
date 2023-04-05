import React, {createContext, useContext, useState} from 'react'
import { logout } from '../../../firebase'
import { useNavigate } from 'react-router-dom'


export const DashboardContext = createContext(null)

export const DashboardContextProvider = ({children}) => {
    /*
    state
    species
    gender
    unit ie 1
    fullUnitCode ie 001
    season
    method

    huntcode: aggregrate string
    isOtcUnit

    popTableStats
    popTableStatsLoading
    popTableStatsError
    harvestTableStats
    harvestTableStatsLoading
    harvestTableStatsError
    drawOddsTableStats
    drawOddsTableStatsLoading
    drawOddsTableStatsError

    */

    // both these will be updated together...
    
    
    // these will be local to search form
    const [huntState, setHuntState] = useState(null)
    const [species, setSpecies] = useState(null)
    const [gender, setGender] = useState(null)
    const [unit, setUnit] = useState(null)
    const [fullUnitCode, setFullUnitCode] = useState(null)
    const [season, setSeason] = useState(null)
    const [method, setMethod] = useState(null)

    const [huntCode, setHuntCode] = useState(null)
    const [isOtcUnit, setIsOtcUnit] = useState(false)

    const [drawOddsData, setDrawOddsData] = useState(null)
    const [drawOddsLoading, setDrawOddsLoading] = useState(false)
    const [drawOddsError, setDrawOddsError] = useState(false)

    const [populationData, setPopulationData] = useState(null)
    const [populationDataLoading, setPopulationDataLoading] = useState(false)
    const [populationDataError, setPopulationDataError] = useState(false)
    
    const [harvestData, setHarvestData] = useState(null)
    const [harvestDataLoading, setHarvestDataLoading] = useState(false)
    const [harvestDataError, setHarvestDataError] = useState(false)


    const navigate = useNavigate()

    const logoutUser = () => {
        const userAuthenticated = logout()
        if (!userAuthenticated) {
            navigate('/')
        }
    }

    const value = {
        // huntState,
        // setHuntState,
        // species,
        // setSpecies,
        // gender,
        // setGender,
        // unit,
        // setUnit,
        // fullUnitCode,
        // setFullUnitCode,
        // season,
        // setSeason,
        // method,
        // setMethod,
        huntCode,
        setHuntCode,
        isOtcUnit,
        setIsOtcUnit,
        drawOddsData,
        setDrawOddsData,
        drawOddsLoading,
        setDrawOddsLoading,
        setDrawOddsError,
        drawOddsError,
        setDrawOddsError,
        setDrawOddsLoading,
        logoutUser
    }    

    return <DashboardContext.Provider value={value}> {children} </DashboardContext.Provider>
}