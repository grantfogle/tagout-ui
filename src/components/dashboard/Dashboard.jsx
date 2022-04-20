import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {auth, signInWithEmail, signInWithGoogle, logout} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth';

import {Box, Typography, Container} from '@mui/material';

import Navbar from './navbar/Navbar';
import DashboardSearch from './dashboardSearch/DashboardSearch';

const Dashboard = () => {
    const [season, setSeason] = useState('');
    const [method, setMethod] = useState('') 
    const [species, setSpecies] = useState('');
    const [unit, setUnit] = useState('');

    // error handling
    // ghost loading
    // dribbble mock https://dribbble.com/search/table
    return (
        <Box sx={{height: '100vh'}}>
            <Navbar logout={logout}/>
            <Container maxWidth="lg">
                <DashboardSearch />
                {/* <AppBar contains sign out and settings /> */}
                {/* <DashboardSearch /> */}
                {/* <Display Graph for draw odds? /> */}
                {/* <Display Graph for draw odds? /> */}
            </Container>
        </Box>
    )
}

export default Dashboard;