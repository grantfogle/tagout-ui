import React, {useState, useContext, useEffect} from 'react'
import { colorado } from '../assets/searchStats'
import {Box, Typography, Button, FormGroup, FormControl, InputLabel, Select, MenuItem, TextField, Autocomplete} from '@mui/material'
import { DashboardContext } from '../components/DashboardContextProvider'
import { getDatabase, ref, onValue} from 'firebase/database'


export default function Search() {
    const {
        state,
        setState,
        setDrawOddsData,
        setDrawOddsLoading,
        setDrawOddsError,
        setHarvestData,
        setHarvestDataLoading,
        setHarvestDataError,
        setPopulationData,
        setPopulationDataLoading,
        setPopulationDataError,
        species,
        setSpecies
    } = useContext(DashboardContext)

    const [speciesCode, setSpeciesCode] = useState('E')
    const [gender, setGender] = useState('E')
    const [unit, setUnit] = useState('001')
    const [unitLabel, setUnitLabel] = useState('1')
    const [season, setSeason] = useState('O1')
    const [method, setMethod] = useState('A')
    const [huntCode, setHuntCode] = useState('EE001O1A')


    useEffect(() => {
        fetchFirebaseData()
    }, [])

    const handleSubmit = (event) => {
        fetchFirebaseData()
    }

    const fetchFirebaseData = () => {
        const dbSnap = getDatabase()

        const searchHuntCode = `${speciesCode}${gender}${unit}${season}${method}`
        const urlPrefix = `${state}1/${species}`
        const drawOddsUrl = `${urlPrefix}/drawStats/${searchHuntCode}`
        const harvestUrl = `${urlPrefix}/harvestStats/${season}${method}/${unitLabel}`
        const populationUrl = `${urlPrefix}/populationStats/${unitLabel}`

        setHuntCode(searchHuntCode)

        setDrawOddsLoading(true)
        setDrawOddsError(false)
        setDrawOddsData(null)

        setHarvestDataLoading(true)
        setHarvestDataError(false)
        setHarvestData(null)

        setPopulationDataLoading(true)
        setPopulationDataError(false)
        setPopulationData(null)
        
        const drawStatsRef = ref(dbSnap, drawOddsUrl)
        onValue(drawStatsRef, (snapshot) => {
            const data = snapshot.val()
            setDrawOddsLoading(false)
            if (data) {  
                setDrawOddsData(data)
            } else {
                setDrawOddsData(null)
            }
        }, error => {
            setDrawOddsLoading(false)
            setDrawOddsError(true)
        })

        const harvestStatsRef = ref(dbSnap, harvestUrl)
        onValue(harvestStatsRef, (snapshot) => {
            const data = snapshot.val()
            console.log(harvestUrl)
            console.log(data)
            setHarvestDataLoading(false)
            if (data) {
                setHarvestData(data)
            } else {
                setHarvestData(null)
            }
        }, error => {
            setHarvestDataLoading(false)
            setHarvestDataError(true)
        })

        const populationStatsRef = ref(dbSnap, populationUrl)
        onValue(populationStatsRef, (snapshot) => {
            const data = snapshot.val()
            setPopulationDataLoading(false)
            if (data) {
                setPopulationData(data)
            } else {
                setPopulationData(null)
            }
        }, error => {
            setPopulationDataLoading(false)
            setPopulationDataError(true)
        })
    }



    const displayHuntCode = () => {
        return <Typography sx={{marginTop: '.5em', textAlign: 'center'}} variant="h5" component="h5">Selected Code: {huntCode}</Typography>
    }

    const speciesMenuItems = (menuSpecies) => {
        return menuSpecies.map((animal) => {
            return <MenuItem key={animal.label} name={animal.label.toLowerCase()} value={animal.value} disabled={animal.disabled}>{animal.label}</MenuItem>
        })
    }

    const seasonMenuItems = (seasons) => {
        return seasons.map((szn) => {
            return <MenuItem key={szn} value={szn}>{szn}</MenuItem>
        })
    }

    const genderMenuItems = (sexes) => {
        return sexes.map(sex => {
            return <MenuItem key={sex.label} value={sex.value}>{sex.label}</MenuItem>
        })
    }

    const methodMenuItems = (weapons) => {
        return weapons.map(weapon => {
            return <MenuItem key={weapon.label} value={weapon.value}>{weapon.label}</MenuItem>
        })
    }

    const checkFormVerification = () => {
        if (speciesCode && gender && unit && season && method) {
            return false
        }
        return true
    }

    return (
        <Box sx={{ flexGrow: 1, marginTop: '2em', paddingBottom: '1em', marginBottom: '1em', borderBottom: '1px solid #dfdfdf' }}>
            <FormGroup sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                <FormControl sx={{width: '120px', marginBottom: '1em', marginRight: '1em'}}>
                    <InputLabel id="species-label">Species</InputLabel>
                    <Select
                        labelId="species-label"
                        id="species"
                        value={speciesCode}
                        label="species"
                        onChange={(e, value) => {
                            console.log(value.props.value)
                            setSpeciesCode(value.props.value)
                            setSpecies(value.props.name)
                        }}>

                        {speciesMenuItems(colorado.species)}

                    </Select>
                </FormControl>

                <FormControl sx={{width: '120px', marginBottom: '1em', marginRight: '1em'}}>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                        labelId="gender-label"
                        id="gender"
                        value={gender}
                        label="gender"
                        onChange={(e, value) => setGender(value.props.value)}>

                        {genderMenuItems(colorado.gender)}

                    </Select>
                </FormControl>

                <FormControl sx={{width: '120px', marginBottom: '1em', marginRight: '1em'}}>
                  <Autocomplete 
                    disablePortal
                    id="units autocomplete"
                    options={colorado.units}
                    onChange={(event, value) => {
                        setUnit(value.unit)
                        setUnitLabel(value.label)
                    }}
                    renderInput={(params) => <TextField {...params} value={params.unit} label='Unit' />}/>
                </FormControl>

                <FormControl sx={{width: '120px', marginBottom: '1em', marginRight: '1em'}}>
                    <InputLabel id="season-label">Season</InputLabel>
                    <Select
                        labelId="season-label"
                        id="season"
                        value={season}
                        label="season"
                        onChange={(e, value) => setSeason(value.props.value)}>

                        {seasonMenuItems(colorado.seasons)}

                    </Select>
                </FormControl>

                <FormControl sx={{width: '120px', marginBottom: '1em', marginRight: '1em'}}>
                    <InputLabel id="method-label">Method</InputLabel>
                    <Select
                        labelId="method-label"
                        id="method"
                        value={method}
                        label="method"
                        onChange={(e, val) => setMethod(val.props.value)}>

                        {methodMenuItems(colorado.method)}

                    </Select>
                </FormControl>

            <Button onClick={() => handleSubmit()}
                variant="contained"
                sx={{backgroundColor: '#27ae60', width: '120px', height: '56px', marginRight: '1em'}}
                disabled={checkFormVerification()}>Submit</Button>
            </FormGroup>

            {displayHuntCode()}

        </Box>
    )
}