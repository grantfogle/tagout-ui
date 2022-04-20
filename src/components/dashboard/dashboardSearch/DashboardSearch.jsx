import React, {useState} from 'react';
import {AppBar, Box, Toolbar, Typography, Button, FormGroup, FormControl, InputLabel, Select, MenuItem} from '@mui/material';

export default function DashboardSearch() {
    const [species, setSpecies] = useState('elk');
    const [gender, setGender] = useState('either');
    const [method, setMethod] = useState('archery');
    const [season, setSeason] = useState('o1');

    return (
        <Box sx={{ flexGrow: 1, marginTop: '2em' }}>
            <FormGroup sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                <FormControl sx={{width: '120px', marginBottom: '1em', marginRight: '1em'}}>
                    <InputLabel id="species-label">Species</InputLabel>
                    <Select
                        labelId="species-label"
                        id="species"
                        value={species}
                        label="species"
                        onChange={(e, value) => setSpecies(value.props.value)}>
                        <MenuItem value={'anteloupe'} disabled>Anteloupe</MenuItem>
                        <MenuItem value={'bear'} disabled>Bear</MenuItem>
                        <MenuItem value={'deer'} disabled>Deer</MenuItem>
                        <MenuItem value={'elk'}>Elk</MenuItem>
                        <MenuItem value={'moose'} disabled>Moose</MenuItem>
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
                        <MenuItem value={'male'}>Male</MenuItem>
                        <MenuItem value={'female'}>Female</MenuItem>
                        <MenuItem value={'either'}>Either</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{width: '120px', marginBottom: '1em', marginRight: '1em'}}>
                    <InputLabel id="method-label">Method</InputLabel>
                    <Select
                        labelId="method-label"
                        id="method"
                        value={method}
                        label="method"
                        onChange={(e, value) => setMethod(value.props.value)}>
                        <MenuItem value={'archery'}>Archery</MenuItem>
                        <MenuItem value={'muzzleloader'}>Muzzleloader</MenuItem>
                        <MenuItem value={'rifle'}>Rifle</MenuItem>
                        
                    </Select>
                </FormControl>

                <FormControl sx={{width: '120px', marginBottom: '1em', marginRight: '1em'}}>
                    <InputLabel id="season-label">Season</InputLabel>
                    <Select
                        labelId="season-label"
                        id="season"
                        value={season}
                        label="season"
                        onChange={(e, value) => setSeason(value.props.value)}>
                        <MenuItem value={'o1'}>O1</MenuItem>
                        <MenuItem value={'o2'}>O2</MenuItem>
                        <MenuItem value={'o3'}>O3</MenuItem>
                        <MenuItem value={'o4'}>O4</MenuItem>
                    </Select>
                </FormControl>

            <Button variant="contained" sx={{backgroundColor: '#27ae60', width: '120px', height: '56px'}}>Submit</Button>
            </FormGroup>
        </Box>
    );
}