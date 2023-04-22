import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Typography, Button } from '@mui/material'

const Welcome = () => {
    const navigate = useNavigate()

    return (
        <>
            <Typography variant="h2" component="h1" color="white" sx={{ mb: 1, mt: 15 }}>Find your next Western Hunt with TAGOUT</Typography>
            <Typography variant="h4" component="h2" color="#2c3e50" sx={{ mb: 2 }}>Research draw odds, success rates, and herd numbers</Typography>
            <Button variant="contained" color="warning" sx={{ mb: 4 }} onClick={() => navigate('/auth')}>Sign up for free</Button>
        </>
    )
}

export default Welcome