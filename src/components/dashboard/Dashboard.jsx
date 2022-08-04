import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmail, signInWithGoogle, logout } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { d } from 'firebase/database';
import { useAuthState } from 'react-firebase-hooks/auth';
import { collection, getDocs } from 'firebase/firestore';

import { db, rtDb } from '../../firebase/config';
import { Box, Typography, Container } from '@mui/material';

import Navbar from './navbar/Navbar';
import DashboardSearch from './dashboardSearch/DashboardSearch';
import DrawOdds from './drawOdds/DrawOdds';
import { display } from '@mui/system';

const Dashboard = () => {
    const [searchStr, setSearchStr] = useState('EE001E1R');
    const [displayStats, setDisplayStats] = useState('');
    const [species, setSpecies] = useState('');
    const [method, setMethod] = useState('')
    const [season, seatSeason] = useState('');
    const [unit, setUnit] = useState('');

    useEffect(() => {
        fetchDrawData();
    }, []);

    const fetchDrawData = async () => {
        const snap = await getDoc(doc(db, 'co-elk-stats', searchStr));
        const data = snap.data();
        setDisplayStats(data);
        console.log(displayStats)
    }

    const updateSearchStr = (updatedStr) => {
        setSearchStr(updateSearchStr);
    }
    // check auth state, if !user false then navigate back to home page
    // error handling
    // ghost loading
    // dribbble mock https://dribbble.com/search/table
    return (
        <Box sx={{ height: '100vh' }}>
            <Navbar logout={logout} />
            <Container maxWidth="lg">
                <DashboardSearch />
                <DrawOdds displayStats={displayStats} />
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