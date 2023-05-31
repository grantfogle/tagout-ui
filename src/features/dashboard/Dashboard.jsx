import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navBar/NavBar'
import Footer from './footer/Footer'
import {
    Box,
    Container,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Typography
} from '@mui/material'
import { DashboardContextProvider } from './components/DashboardContextProvider'

const Dashboard = () => {
    const navigate = useNavigate()
    const [selectedState, setSelectedState] = useState('Colorado')

    const stateMenuItems = () => {
        const states = [
            { label: 'Colorado', value: 'Colorado' },
            { label: 'Wyoming', value: 'Wyoming' }]

        return states.map(state => {
            return <MenuItem key={state.label} value={state.value}>{state.label}</MenuItem>
        })
    }

    useEffect(() => {
        if (selectedState === 'Wyoming') {
            navigate('/dashboard/wyoming')
        } else {
            navigate('/dashboard/colorado')
        }
    }, [selectedState])
    return (
        <DashboardContextProvider>
            <Box sx={{ height: '100vh' }}>
                <Navbar />
                <Container maxWidth="lg" sx={{ marginBottom: '2em', marginTop: '2em', minHeight: '800px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '2em', borderBottom: '1px solid #dfdfdf' }}>
                        <Typography variant="h5" component="h4" sx={{ paddingBottom: 0, paddingRight: '1em', }}>Select a State</Typography>
                        <FormControl sx={{ width: '180px' }}>
                            <Select
                                id="stateSelect"
                                value={selectedState}
                                onChange={(e, value) => setSelectedState(value.props.value)}>
                                {stateMenuItems()}
                            </Select>
                        </FormControl>
                    </Box>
                    <Outlet />
                </Container >
                <Footer />
            </Box >
        </DashboardContextProvider>
    )
}

export default Dashboard