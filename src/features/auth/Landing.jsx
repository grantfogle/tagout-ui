import React from 'react'
import { Outlet } from 'react-router-dom'
import {
    Box,
    Container,
} from '@mui/material'

import NavBar from '../../components/navBar/NavBar'

const LandingTwo = () => {
    return (
        <Box sx={{
            width: "100%",
            minHeight: "100vh",
            alignItems: "center",
            backgroundColor: "#27ae60"
        }}>
            <NavBar />
            <Container maxWidth="md">
                <Outlet />
            </Container>
        </Box>
    )
}

export default LandingTwo