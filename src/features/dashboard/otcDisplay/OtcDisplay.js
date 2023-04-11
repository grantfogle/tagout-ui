import React, {useContext} from 'react'
import {Box, Typography} from '@mui/material'
import {coloradoOTC} from '../assets/otcUnits'
import { DashboardContext } from '../components/DashboardContextProvider'



export default function OtcDisplay() {
    const {huntCode} = useContext(DashboardContext)
    
    return (
        <Box sx={{width: '100%'}}>
            <Typography variant="h4" component="h2">{huntCode} is available Over the Counter </Typography>
        </Box>
    )
}