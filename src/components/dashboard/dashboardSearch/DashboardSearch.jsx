import React, {useState} from 'react';
import {fetchDrawStats} from '../../../firebase';
import { colorado } from '../../../stats/searchStats'
import {AppBar, Box, Toolbar, Typography, Button, FormGroup, FormControl, InputLabel, Select, MenuItem, TextField, Autocomplete} from '@mui/material';

export default function DashboardSearch({fetchSearchResults, updateSelectedUnit}) {
    const [species, setSpecies] = useState('elk');
    const [gender, setGender] = useState('either');
    const [method, setMethod] = useState('rifle');
    const [unit, setUnit] = useState('001');
    const [season, setSeason] = useState('o1');
    const [huntCode, setHuntCode] = useState('EE001E1R')

    const fetchDetails = async () => {
        const speciesHash = {
            elk: 'e',
        }
        const genderHash = {
            male: 'm',
            either: 'e',
            femaile: 'f'
        }
        const methodHash = {
            muzzleloader: 'm',
            archery: 'a',
            rifle: 'r'
        }
        const searchStr = `${speciesHash[species]}${genderHash[gender]}${unit}${season}${methodHash[method]}`.toUpperCase();
        
        setHuntCode(searchStr)
        fetchSearchResults(searchStr, unit);
    }

    const displayHuntCode = () => {
        return <Typography sx={{marginTop: '.5em', textAlign: 'center'}} variant="h5" component="h5">Selected Code: {huntCode}</Typography>
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
                  <Autocomplete 
                    disablePortal
                    id="combo-box-demo"
                    options={colorado.units}
                    onChange={(event, newInputValue) => {
                        setUnit(newInputValue.unit)
                    }}
                    renderInput={(params) => <TextField {...params} label="Unit" />}/>
                </FormControl>

                <FormControl sx={{width: '120px', marginBottom: '1em', marginRight: '1em'}}>
                    <InputLabel id="season-label">Season</InputLabel>
                    <Select
                        labelId="season-label"
                        id="season"
                        value={season}
                        label="season"
                        onChange={(e, value) => setSeason(value.props.value)}>
                        <MenuItem value={'e1'} disabled>E1</MenuItem>
                        {/* <MenuItem value={'l1'} disabled>L1</MenuItem> */}
                        <MenuItem value={'o1'}>O1</MenuItem>
                        <MenuItem value={'o2'}>O2</MenuItem>
                        <MenuItem value={'o3'}>O3</MenuItem>
                        <MenuItem value={'o4'}>O4</MenuItem>
                        <MenuItem value={'o5'} disabled>O5</MenuItem>
                        {/* <MenuItem value={'p1'}>P1</MenuItem>
                        <MenuItem value={'p2'}>P2</MenuItem>
                        <MenuItem value={'p3'}>P3</MenuItem>
                        <MenuItem value={'p4'}>P4</MenuItem>
                        <MenuItem value={'p5'}>P5</MenuItem>
                        <MenuItem value={'k2'}>K2</MenuItem>
                        <MenuItem value={'k3'}>K3</MenuItem> */}
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

            <Button onClick={() => fetchDetails()} 
                variant="contained"
                sx={{backgroundColor: '#27ae60', width: '120px', height: '56px', marginRight: '1em'}}>Submit</Button>
            </FormGroup>

            {displayHuntCode()}
        </Box>
    );
}