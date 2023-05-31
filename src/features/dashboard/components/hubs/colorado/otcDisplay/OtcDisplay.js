import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { DashboardContext } from '../../../DashboardContextProvider'



export default function OtcDisplay() {
    const { huntCode } = useContext(DashboardContext)

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h4" component="h2">{huntCode} is available OTC</Typography>
        </Box>
    )
}