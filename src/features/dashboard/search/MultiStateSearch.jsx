import React, { useState } from 'react'
import { 
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from '@mui/material';

export const MultiStateSearch = () => {
    const [state, setState] = useState('');
    const [resident, setResident] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [drawType, setDrawType] = useState('');
    const [season, setSeason] = useState('');
    const [method, setMethod] = useState('');

    const handleSubmit = (event) => {
        const apiUrl = `baseUrl/${state}/${resident}/${species}/${gender}/${drawType}/${season}/${method}`
        console.log(apiUrl)
    }

    const checkFormVerification = () => {
        return !!(state && resident && drawType && species && gender && season && method);
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'state':
                setState(event.target.value)
                break;
            case 'resident':
                setResident(event.target.value)
                break;
            case 'drawType':
                setDrawType(event.target.value);
                break;
            case 'species':
                setSpecies(event.target.value);
                break;
            case 'gender':
                setGender(event.target.value);
                break;
            case 'season':
                setSeason(event.target.value);
                break;
            case 'method':
                setMethod(event.target.value);
                break;
            default:
                break;
        }
    }

    const coloradoSearchForm = () => {
        return (
            <Box sx={{marginTop: '1em'}}>
                <FormControl sx={{width: '160px', marginRight: '1em'}}>
                    <InputLabel id="species-select-label">Species</InputLabel>
                    <Select 
                        labelId="species-select-label"
                        name="species"
                        id="species-select" value={species} 
                        label="Species" 
                        onChange={handleChange} 
                    >
                        <MenuItem value="P">Anteloupe</MenuItem>
                        <MenuItem value="D">Deer</MenuItem>
                        <MenuItem value="E">Elk</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{width: '160px', marginRight: '1em'}}>
                    <InputLabel id="gender-select-label">Gender</InputLabel>
                    <Select 
                        labelId="gender-select-label" 
                        name="gender"
                        id="gender-select" value={gender} 
                        label="Gender" 
                        onChange={handleChange}>
                        <MenuItem value="E">Either</MenuItem>
                        <MenuItem value="F">Female</MenuItem>
                        <MenuItem value="M">Male</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{width: '160px', marginRight: '1em'}}>
                    <InputLabel id="draw-type-select-label">Draw Type</InputLabel>
                    <Select 
                        labelId="draw-type-select-label" 
                        name="drawType"
                        id="draw-type-select" value={drawType} 
                        label="Draw Type" 
                        onChange={handleChange} 
                    >
                        <MenuItem value="pref">Preference Pt</MenuItem>
                        <MenuItem value="otc">OTC</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{width: '160px', marginRight: '1em'}}>
                    <InputLabel id="method-select-label">Method</InputLabel>
                    <Select 
                        labelId="method-select-label" 
                        id="method-select" value={method}
                        name="method"
                        label="Method" 
                        onChange={handleChange} 
                    >
                        <MenuItem value="A">Archery</MenuItem>
                        <MenuItem value="M">Muzzleloader</MenuItem>
                        <MenuItem value="R">Rifle</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{width: '160px', marginRight: '1em'}}>
                    <InputLabel id="season-label">Season</InputLabel>
                    <Select 
                        labelId="season-label" 
                        id="season" value={season}
                        name="season"
                        label="Season" 
                        onChange={handleChange} 
                    >
                        {/* MAKE THESE VALUES DYNAMIC */}
                        <MenuItem value="O1">O1</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        )
    }

    return (
        <Container sx={{marginTop: '1em'}}>
            <Typography variant="h5" sx={{marginBottom: '1em'}}>Select State and Resident Status</Typography>
            <form onSubmit={handleSubmit}>
                <Box>
                    <FormControl sx={{width: '160px', marginRight: '1em'}}>
                        <InputLabel id="state-select-label">State</InputLabel>
                            <Select name="state" labelId="state-select-label" id="state-select" value={state} label="State" onChange={handleChange}>
                                <MenuItem value="CO">Colorado</MenuItem>
                                <MenuItem value="ID" disabled>Idaho</MenuItem>
                                <MenuItem value="MT" disabled>Montana</MenuItem>
                                <MenuItem value="WY" disabled>Wyoming</MenuItem>
                            </Select>
                    </FormControl>

                    <FormControl sx={{width: '200px'}}>
                        <InputLabel id="resident-select-label">Resident Status</InputLabel>
                        <Select name="resident" labelId="resident-select-label" id="resident-select" value={resident} label="Resident" onChange={handleChange}>
                            <MenuItem value="res">Resident</MenuItem>
                            <MenuItem value="nonRes">Non-Resident</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box>
                    {coloradoSearchForm()}
                </Box>

                <Button onClick={() => handleSubmit()}
                    variant="contained"
                    sx={{backgroundColor: '#27ae60', color: '#fff', width: '120px', height: '56px', marginTop: '1em'}}
                    disabled={!checkFormVerification()}
                >Submit</Button>

            </form>
        </Container>
    )
}