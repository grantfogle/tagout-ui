import React, {useState} from 'react'
import { colorado } from '../assets/searchStats'
import {Box, Typography, Button, FormGroup, FormControl, InputLabel, Select, MenuItem, TextField, Autocomplete} from '@mui/material'

export default function Search() {
    const [species, setSpecies] = useState('E')
    const [gender, setGender] = useState('E')
    const [unit, setUnit] = useState('')
    const [unitLabel, setUnitLabel] = useState('1')
    const [season, setSeason] = useState('O1')
    const [method, setMethod] = useState('R')
    const [huntCode, setHuntCode] = useState('EE001E1R')

    const fetchDetails = () => {
        const searchStr = `${species}${gender}${unit}${season}${method}`
        const genderSznMethod = `${species}${gender}${season}${method}`
        setHuntCode(searchStr)
        // fetchSearchResults(searchStr, unitLabel, season, method, genderSznMethod)
    }

    const fetchUnitData = () => {
        // one call for population data
        // one call for harvest data
        // one call for draw odds data
    }
    // execute search functions


    const displayHuntCode = () => {
        return <Typography sx={{marginTop: '.5em', textAlign: 'center'}} variant="h5" component="h5">Selected Code: {huntCode}</Typography>
    }

    const speciesMenuItems = (menuSpecies) => {
        return menuSpecies.map((animal) => {
            return <MenuItem key={animal.label} value={animal.value} disabled={animal.disabled}>{animal.label}</MenuItem>
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
        if (species && gender && unit && season && method) {
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
                        value={species}
                        label="species"
                        onChange={(e, value) => setSpecies(value.props.value)}>

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

            <Button onClick={() => fetchDetails()}
                variant="contained"
                sx={{backgroundColor: '#27ae60', width: '120px', height: '56px', marginRight: '1em'}}
                disabled={checkFormVerification()}>Submit</Button>
            </FormGroup>

            {displayHuntCode()}

        </Box>
    )
}