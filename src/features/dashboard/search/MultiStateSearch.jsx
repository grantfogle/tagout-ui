import React, { useContext, useState } from 'react'
import { 
    Box,
    Container,
    FormControl,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    Typography,
} from '@mui/material';

export const MultiStateSearch = () => {
    const [state, setState] = useState('');
    const [resident, setResident] = useState('');
    const [drawType, setDrawType] = useState('');
    const [species, setSpecies] = useState('');
    const [gender, setGender] = useState('');
    const [season, setSeason] = useState('');
    const [method, setMethod] = useState('');

    const handleSubmit = (event) => {
        console.log('submit', event)
    }

    const handleChange = event => {
        console.log('change', event)
    }

    const displayDrawType = () => {
        return state && resident;
    }

    const coloradoSearchForm = () => {
        return (
            <Box sx={{marginTop: '1em'}}>
                <FormControl sx={{width: '160px', marginRight: '1em'}}>
                    <InputLabel id="species-select-label">Species</InputLabel>
                    <Select 
                        labelId="species-select-label" 
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
                        id="gender-select" value={gender} 
                        label="Gender" 
                        onChange={handleChange}>
                        <MenuItem value="res">Male</MenuItem>
                        <MenuItem value="nonRes">Female</MenuItem>
                        <MenuItem value="nonRes">Either</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{width: '160px', marginRight: '1em'}}>
                    <InputLabel id="draw-type-select-label">Draw Type</InputLabel>
                    <Select 
                        labelId="draw-type-select-label" 
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
                        label="Season" 
                        onChange={handleChange} 
                    >
                        {/* MAKE THESE VALUES DYNAMIC */}
                        <MenuItem value="A">O1</MenuItem>
                        {/* <MenuItem value="M">Muzzleloader</MenuItem>
                        <MenuItem value="R">Rifle</MenuItem> */}
                    </Select>
                </FormControl>
            </Box>
        )
    }

    const drawTypeFormGroup = () => {
        // get draw types based on state and resident status
        // and species/gender
        return (
            <FormControl sx={{width: '160px', marginRight: '1em'}}>
                <InputLabel id="draw-type-select-label">Draw Type</InputLabel>
                <Select 
                    labelId="draw-type-select-label" 
                    id="state-select" value={drawType} 
                    label="State" 
                    onChange={handleChange} 
                    disabled={displayDrawType}>
                    <MenuItem value="res">Preference Point</MenuItem>
                    <MenuItem value="nonRes">OTC</MenuItem>
                    <MenuItem value="nonRes">Random</MenuItem>
                    <MenuItem value="nonRes">Special</MenuItem>
                </Select>
            </FormControl>
        );
    }

    return (
        <Container sx={{marginTop: '1em'}}>
            <Typography variant="h5" sx={{marginBottom: '1em'}}>Select State and Resident Status</Typography>
            <form onSubmit={handleSubmit}>
                <Box>
                    <FormControl sx={{width: '160px', marginRight: '1em'}}>
                        <InputLabel id="state-select-label">State</InputLabel>
                            <Select labelId="state-select-label" id="state-select" value={state} label="State" onChange={handleChange}>
                                <MenuItem value="CO">Colorado</MenuItem>
                                <MenuItem value="ID" disabled>Idaho</MenuItem>
                                <MenuItem value="MT" disabled>Montana</MenuItem>
                                <MenuItem value="WY" disabled>Wyoming</MenuItem>
                            </Select>
                    </FormControl>

                    <FormControl sx={{width: '200px'}}>
                        <InputLabel id="resident-select-label">Resident Status</InputLabel>
                        <Select labelId="state-select-label" id="state-select" value={state} label="State" onChange={handleChange}>
                            <MenuItem value="res">Resident</MenuItem>
                            <MenuItem value="nonRes">Non-Resident</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box>
                    {coloradoSearchForm()}
                </Box>
            </form>
        </Container>
    )
}