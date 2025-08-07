import React, { useState } from "react";
import { 
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from '@mui/material';
import Dropdown from "../../../components/form/Dropdown";

const SearchFormComponent = () => {
    const [form, setForm] = useState({
        state: '',
        residentStatus: '',
        species: '',
        method: '',
        season: '',
        points: 0,
        drawOdds: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        // iterate through form
        // if state value, allow entry of option 2
        // if state and residentStatus, allow option of entry 3
    }

    return (
        <Box sx={{width: '100%'}} component="form" onSubmit={handleSubmit}>
            <Box px={3} py={3} sx={{borderBottom: '3px solid #bdc3c7'}}>
                <Typography sx={{textAlign: 'center'}} fontWeight={500} component='h2' variant='h5'>Search Draw Odds</Typography>
                {/* <Box display="flex" flexDirection="row" alignItems="center" gap={0.5}>
                    <Typography component="span" variant="body1" fontWeight="bold">
                        0
                    </Typography>
                    <Typography component="span" variant="body2" fontWeight={300}>
                        Filters applied
                    </Typography>
                </Box> */}
            </Box>
            <Box sx={{width: '100%'}}>
                <Dropdown
                    label="Select a State"
                    selectedValue={form.state}
                    placeholder="State"
                    options={['Colorado', 'Wyoming']}
                    fullWidth
                    />
            </Box>
        </Box>
    )


    return (
        <>
            <Box px={2} py={2} sx={{borderBottom: '2px solid #2c3e50'}}>
                <Typography fontWeight={600} component='h2' variant='h5'>Search Draw Odds</Typography>
                {/* <Box display="flex" flexDirection="row" gap={1}>
                    <Typography fontWeight={500} component='h3' variant='subtitle1'>0</Typography>
                    <Typography fontWeight={300} component='h3' variant='subtitle1'>Filters Applied</Typography>
                </Box> */}
            </Box>
            <Typography component='p' variant='p'>State</Typography>
            <Typography component='p' variant='p'>Resident Status</Typography>
            <Typography component='p' variant='p'>Species</Typography>
            <Typography component='p' variant='p'>Draw Odds</Typography>
            <Typography component='p' variant='p'>Season</Typography>
            {/* reset button */}
        </>
    );
}

export default SearchFormComponent;