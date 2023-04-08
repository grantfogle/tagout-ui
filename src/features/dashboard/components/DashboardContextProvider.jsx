import React, {createContext, useContext, useState} from 'react'
import { logout } from '../../../firebase'
import { useNavigate } from 'react-router-dom'

export const DashboardContext = createContext(null)

export const DashboardContextProvider = ({children}) => {

    const [huntState, setHuntState] = useState(null)
    const [gender, setGender] = useState(null)
    const [unit, setUnit] = useState(null)
    const [fullUnitCode, setFullUnitCode] = useState(null)
    const [season, setSeason] = useState(null)
    const [method, setMethod] = useState(null)
    const [state, setState] = useState('colorado')
    const [species, setSpecies] = useState('elk')

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
        state,
        setState,
        species,
        setSpecies,
        huntCode,
        setHuntCode,
        isOtcUnit,
        setIsOtcUnit,
        drawOddsData,
        drawOddsLoading,
        drawOddsError,
        setDrawOddsData,
        setDrawOddsLoading,
        setDrawOddsError,
        harvestData,
        harvestDataLoading,
        harvestDataError,
        setHarvestData,
        setHarvestDataLoading,
        setHarvestDataError,
        populationData,
        populationDataLoading,
        populationDataError,
        setPopulationData,
        setPopulationDataLoading,
        setPopulationDataError,
        logoutUser
    }    

    return <DashboardContext.Provider value={value}> {children} </DashboardContext.Provider>
}