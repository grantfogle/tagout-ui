import React, { useState } from 'react'
import {
    Box,
    Typography,
    FormGroup,
    FormControl,
    MenuItem,
    InputLabel,
    Select
} from '@mui/material'

const WySearch = () => {
    const [species, setSpecies] = useState('')
    const [residency, setResidency] = useState('')

    const speciesMenuItems = () => {
        const speciesArr = [
            { label: 'Deer', value: 'D' },
            { label: 'Elk', value: 'E' },
            { label: 'Pronghorn', value: 'P' },
        ]
        return speciesArr.map((animal) => {
            return <MenuItem key={animal.label} name={animal.label.toLowerCase()} value={animal.value}>{animal.label}</MenuItem>
        })
    }

    const residencyMenuItems = () => {
        const residencyArr = [
            { label: 'Resident', value: 'R' },
            { label: 'Non-Resident', value: 'NR' },
        ]
        return residencyArr.map((resStatus) => {
            return <MenuItem key={resStatus.label} name={resStatus.label.toLowerCase()} value={resStatus.value}>{resStatus.label}</MenuItem>
        })
    }

    return (
        <Box>
            <h1>searchhhhhh</h1>
            {/* <Typography>Species</Typography> */}
            {/* <Typography>Resident/Non-Resident</Typography> */}
            <FormGroup sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                <FormControl sx={{ width: '160px' }}>
                    <InputLabel id='residency-label'>Residency</InputLabel>
                    <Select
                        labelId='residency-label'
                        id='residency'
                        value={residency}
                        label='residency'
                        onChange={(e, value) => {
                            setResidency(value.props.value)
                        }}>
                        {residencyMenuItems()}
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '160px' }}>
                    <InputLabel id='species-label'>Species</InputLabel>
                    <Select
                        labelId='species-label'
                        id='species'
                        value={species}
                        label='species'
                        onChange={(e, value) => {
                            setSpecies(value.props.value)
                        }}>

                        {speciesMenuItems()}
                    </Select>
                </FormControl>
                <FormControl sx={{ width: '160px' }}>
                    <InputLabel id='residency-label'>Residency</InputLabel>
                    <Select
                        labelId='residency-label'
                        id='residency'
                        value={residency}
                        label='residency'
                        onChange={(e, value) => {
                            setResidency(value.props.value)
                        }}>
                        {residencyMenuItems()}
                    </Select>
                </FormControl>
            </FormGroup>

            <Typography>Draw Type (Random, Preference Pt, Other)</Typography>
            <Typography>Hunt Type (1-9 species dependent)</Typography>
            <Typography>Unit</Typography>
        </Box>
    )
}

export default WySearch