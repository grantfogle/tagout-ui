import React, { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

// import {Link, useNavigate, useHistory} from 'react-router-dom'
import { auth, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import { FormControl, Button, Tabs, Tab } from '@mui/material'
import NavBar from '../../components/navBar/NavBar'

const LandingTwo = () => {
    return (
        <Box sx={{
            width: '100%',
            minHeight: '100vh',
            alignItems: 'center',
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