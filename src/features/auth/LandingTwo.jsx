import React, {useState, useEffect} from 'react';
import {Link, useNavigate, useHistory} from 'react-router-dom';
import {auth, logInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword} from '../../firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Typography} from '@mui/material'
import Box from '@mui/material/Box'
import {styled} from '@mui/material/styles'
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { FormControl, Button, Tabs, Tab } from '@mui/material';
import Login from './login/Login';
import Register from './register/Register';
import NavBar from '../../components/navBar/NavBar'

// const LandingHeader = styled = styled(Box)<Props>(({theme}) => ({
//     width: 400
// }))

const LandingTwo = () => {
    return (
        <Box sx={{
            width: '100%',
            height: '100vh',
            alignItems: 'center',
            // background: 'linear-gradient(to right bottom, #2c3e50, #27ae60)'
            backgroundColor: "#27ae60"
        }}>
            {/* Add a sub router.../login/signup*/}
            {/* Navigation - probably up, make it universal*/}
            <NavBar/>
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" color="white" sx={{mb: 1, mt: 15}}>Find your next Western Hunt with TAGOUT</Typography>
                <Typography variant="h4" component="h2" color="#2c3e50" sx={{mb: 2}}>Explore draw odds, success rates, and herd numbers</Typography>
                <Button variant="contained" color="warning">
                    Sign up for free
                </Button>
            </Container>
        </Box>
    )
}

export default LandingTwo