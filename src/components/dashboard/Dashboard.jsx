import React, {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {auth, signInWithEmail, signInWithGoogle, logout} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth';

import {Box, Typography, Container} from '@mui/material';

import Navbar from './navbar/Navbar';
import DashboardSearch from './dashboardSearch/DashboardSearch';
import DrawOdds from './drawOdds/DrawOdds';

const Dashboard = () => {
    const [species, setSpecies] = useState('');
    const [method, setMethod] = useState('') 
    const [season, seatSeason] = useState('');
    const [unit, setUnit] = useState('');


    // check auth state, if !user false then navigate back to home page
    // error handling
    // ghost loading
    // dribbble mock https://dribbble.com/search/table
    return (
        <Box sx={{height: '100vh'}}>
            <Navbar logout={logout}/>
            <Container maxWidth="lg">
                <DashboardSearch />
                <DrawOdds />
                {/* <AppBar contains sign out and settings /> */}
                {/* <DashboardSearch /> */}
                {/* <Display Graph for draw odds? /> */}
                {/* <Display Graph for draw odds? /> */}
                {/* < PreferencePointsMap /> */}
            </Container>
        </Box>
    )
}

export default Dashboard;