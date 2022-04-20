import React, {useState} from 'react';
import {AppBar, Box, Toolbar, Typography, Button, FormGroup, FormControl, InputLabel, Select, MenuItem} from '@mui/material';

export default function DashboardSearch() {
    const [species, setSpecies] = useState('elk');

    const handleChange = (e, value) => {
        console.log(e, value)
        setSpecies(value.props.value)
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Typography component="h1" variant="h3">Submit Form</Typography>
        <FormGroup>
            <FormControl sx={{width: '120px'}}>
                <InputLabel id="species-label">Species</InputLabel>
                <Select
                    labelId="species-label"
                    id="species"
                    value={species}
                    label=""
                    onChange={handleChange}
                >
                    <MenuItem value={'anteloupe'} disabled>Anteloupe</MenuItem>
                    <MenuItem value={'bear'} disabled>Bear</MenuItem>
                    <MenuItem value={'deer'} disabled>Deer</MenuItem>
                    <MenuItem value={'elk'}>Elk</MenuItem>
                    <MenuItem value={'moose'} disabled>Moose</MenuItem>
            </Select>
        </FormControl>
        <Button variant="contained">Submit</Button>
        </FormGroup>
    </Box>
  );
}